
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../store/actions/LoginAction";
import { TextField, Typography, Button, Box } from '@mui/material';
import { Navigate } from "react-router-dom";


const Login = () =>{

    const token = useSelector(state=>state.login.token)

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const loginDispatch = useDispatch();
    const handleUsername=(e)=>{
        if(e.target.value === ''){
            return
        }
        setUsername(e.target.value)
    }
    const handlePassword=(e)=>{
        if(e.target.value === ''){
            return
        }
        setPassword(e.target.value)
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log("reached here")
        if(username !== '' && password !== ''){
        loginDispatch(LoginAction(username,password))
        }
    }
    
    return(
        <> 
        {token && <Navigate to="/home" replace={true}/>}
        <Box display="flex" sx={{flexDirection:'column', justifyContent:'space-around',alignItems:'center', marginTop:20, m:22}}>
        <TextField id="standard-basic" label="Username" variant="standard" value={username} onChange={handleUsername}/>
        <Typography display="block"></Typography>
        <TextField id="standard-basic" label="Password" variant="standard" value={password} onChange={handlePassword}/>
        <Typography display="block"></Typography>
        <Button sx={{marginTop:3,marginRight:15}} variant="contained" onClick={submitHandler}>Login</Button>
        </Box>
        </>
        
    )
}

export default Login;