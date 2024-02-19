import React from 'react'
import style from "./home.module.css"
import { Link } from 'react-router-dom'


const Home=()=>{
    return(
      <div id ={style.nav}>
        
           <Link to={"/"}>Create User</Link>

           <Link to={"/user"}>User</Link> 


           {/* <Link to={"/update"}></Link>  */}
          
        

      </div>  
    )
}
export default Home