import  { useEffect, useState } from 'react'
import style from "./home.module.css"
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Createuser = () => {

  let[name,setName]=useState("")
  let[company,setCompany]=useState("")
  let[salary,setSalary]=useState("")
  // useEffect(()=>{
  //   axios.get("http://localhost:5000/employees")
  //   .then((resp)=>{console.log(resp)})
  //   .catch(()=>{console.log("errrrrrrr")})

  // },[])
  let navigate =useNavigate()
  let getName =(e)=>{
    setName(e.target.value)
    // console.log(e.target.value)
  }
   let getCompany=(e)=>{
    setCompany(e.target.value)
   }
   let getSalary=(e)=>{
    setSalary(e.target.value)
   }
   let formHandle=(e)=>{
    e.preventDefault()
    // console.log(name,company,salary)

    let payload ={
      empName:name,
      empCompany:company,
      empSalary:salary
      
    }
    axios.post("http://localhost:5000/employees",payload)
    .then(()=>{console.log("data has been stored");})
    .catch(()=>{console.log("errrr")})

          navigate("/user")

   }
  return (
    <section id={style.form}>
      <div id={style.for}>
      <h1 id={style.h}>CREATE USER</h1>
     <table>
      <tr>
        <td><label >Name</label></td>
       <td> <input type="text"  value={name} onChange={getName}  placeholder='Name'/></td>
      </tr>
      <tr>
        <td>
        <label>Company</label></td>
        <td> <input type="text" value={company} onChange={getCompany} placeholder='Company'  /> </td>     
      </tr>
      <tr>
        <td> <label >Salary</label></td>
        <td><input type="Number" value={salary} onChange={getSalary}  placeholder='salary'/></td>
      </tr>
     </table>
     <button onClick={formHandle}>Submit</button>

    </div>
    </section>
  )
}

export default Createuser
