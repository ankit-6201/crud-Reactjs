import Findcoder from "./Component/Findcoder"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Explore from "./Component/Explore"
import Hire from "./Component/Hire"
 import Dev from "./Component/Dev"
 import Challenge from "./Component/Challenge"
import Home from "./Crud/Home"
import User from "./Crud/User"
import Createuser from "./Crud/Createuser"
import Update from "./Crud/Update"

const App=()=>{
    return(
        <div>
            {/* <h1> hello</h1> */}

           {/* <BrowserRouter>
             <Findcoder></Findcoder>
           
           <Routes>
            <Route element={<Explore/>} path="explore"/>
            <Route element={<Hire/>} path="hire"/>
            <Route element={<Dev/>} path="dev"/>
            <Route element={<Challenge/>} path="challenge"/>
           </Routes>
           </BrowserRouter> */}
          <BrowserRouter>
          <Home/>
          <Routes>
            <Route element={<Createuser/>} path="/"></Route>

            <Route element={<User/>}   path="/user"></Route>

            {/* <Route element={<button/>}   path="/update"></Route> */}

           <Route element={<Update/>}   path="/update/:abc"></Route>
           </Routes>
          </BrowserRouter> 
        </div>
    )
}
export default App