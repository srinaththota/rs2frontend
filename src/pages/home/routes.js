import  Login  from "../../components/Login";
import { Routes, Route } from "react-router-dom"
import Home from "./Home";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";

const AppRoutes=()=>{
    const dispatch = useDispatch();
    useEffect
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