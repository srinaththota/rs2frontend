import  Login  from "../../components/Login";
import { Routes, Route } from "react-router-dom"
import Home from "./Home";



const AppRoutes=()=>{

    
    return(
    <>   
        <Routes>
        <Route path="home" element={<Home />}/>
        <Route path="/" element={<Login/>}/>
        </Routes>
    </> 
    )
}

export default AppRoutes;