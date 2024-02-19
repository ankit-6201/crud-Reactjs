import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Update=()=>{

let userId = useParams("")

let[name,setName]=useState("")
let[company,setCompany]=useState("")
let [salary,setSalary]=useState("")

let navigate=useNavigate()


useEffect(()=>{
  axios.get(`http://localhost:5000/employees/${userId.abc}`)
  // .then((response)=>{console.log(response.data);})
  // .catch(()=>{console.log("errrrrrrr")})

  .then((response)=>{
    setName(response.data.empName)
    setCompany(response.data.empCompany)
    setSalary(response.data.empSalary)
  })
},[])
let getName=(e)=>{
  
  setName(e.target.value)
}
let getCompany=(e)=>{
  setCompany(e.target.value)
}
let getSalary=(e)=>{
  setSalary(e.target.value)
}

let updateHandle=(e)=>{
   e.preventDefault()
   let payload={
    empName:name,
    empCompany:company,
    empSalary:salary
   }

  axios.put(`http://localhost:5000/employees/${userId.abc}`,payload)
  .then(()=>{console.log("data update");})
  .catch(()=>{console.log("errrrr")})


  navigate("/user")

 }

   return (
    <section id={style.form}>
    <div id={style.for}>
    <h1 id={style.U} >UPDATE</h1>
   <table>
    <tr>
      <td><label >Name</label></td>
     <td> <input type="text"  value={name} onChange={getName}  placeholder='Name'/></td>
    </tr>
    <tr>
      <td>
      <label>Company</label></td>
      <td> <input type="text"   value={company} onChange={getCompany} placeholder='Company'  /> </td>     
    </tr>
    <tr>
      <td> <label >Salary</label></td>
      <td><input type="Number"  value={salary} onChange={getSalary} placeholder='salary'/></td>
    </tr>
   </table>
   <button onClick={updateHandle} >Submit</button>

  </div>
  </section>
   )
}
export default Update