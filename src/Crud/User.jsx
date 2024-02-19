import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import style from "./home.module.css"

const User = () => {

  let [users,setUsers]=useState([])
  let[reload,setReload]=useState(false)


  useEffect(()=>{
    axios.get("http://localhost:5000/employees")
    // .then((response)=>{console.log(response);})
    .then((response)=>{setUsers(response.data);})
    .catch(()=>{console.log("errrr")})
    setReload(false)
  },[reload])


let deleteUser=(id)=>{
  axios.delete(`http://localhost:5000/employees/${id}`)
  // window.location.reload("/user")
  setReload(true)
}

  return (
    <div id={style.card}>
     {
      users.map((user)=>{
        return(
          <div> 
            {/* <h1>
              {user.empName}
            </h1> */}
            <table>
              <tr>
                <td>name</td>
                <td>:{user.empName}</td>
              </tr>

              <tr>
                <td>company</td>
                <td>:{user.empCompany}</td>
              </tr>
              <tr>
                <td>salary</td>
                <td></td>
              </tr>
             <tr>
              <td><Link to={`/update/${user.id}`} ><button>edit</button></Link></td>
              <td><button onClick={()=>{deleteUser(user.id)}}>delete</button></td>
             </tr>
            </table>
          </div>
        )

      })
     }
    </div>
  )
}

export default User
