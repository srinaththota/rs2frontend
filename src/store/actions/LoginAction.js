import axios from "axios"
import * as actionTypes from "./ActionTypes"

export const LoginAction=(username,password)=>{
    
    
    console.log(username,password)
        return async dispatch=>{
            const headers = {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                //"Authorization": "Basic dXNlcjowM2VhN2JhYS1mMTQ0LTQ5YWMtOGFhMy02NDE4YWJiNzdhMTk=",
                method:'POST',
                credentials: 'include',
            };
            
            const config = {
                headers
            };
            const data=JSON.stringify({ username: username,password: password })
            
            try{
             const responseData=axios.post("http://localhost:8080/authenticate",
             data,config).then(response=>response).then((responseData)=>{
                    console.log(responseData)
                    dispatch({
                        type:actionTypes.LOGIN,
                        payload:responseData.data.jwt
                    })
                    
                }).catch((err)=>{
                    dispatch({
                        type:actionTypes.ERROR,
                        payload:err.message
                })
                })
            
            }catch(err){
                console.log(err.message)
                
            }
            
        }
    }