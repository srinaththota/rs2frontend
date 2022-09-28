import axios from "axios"
import * as actionTypes from "./ActionTypes"
export const LoginAction=(username,password)=>{
    console.log(username,password)
        return async dispatch=>{
            const hash='Auth'
            const headers = {
                'Content-Type': 'text/pain',
                Accept: 'application/json',
                //"Authorization": "Basic dXNlcjowM2VhN2JhYS1mMTQ0LTQ5YWMtOGFhMy02NDE4YWJiNzdhMTk=",
                Authorization: `Basic ${hash}`,
                method:'POST',
                credentials: 'include',
            };
            
            const config = {
                headers
            };
            const data=JSON.stringify({ username: username,password: password })
            
            try{
             const responseData=axios.post("http://localhost:8080/authenticate",
             data,config).then(()=>{
                    console.log(responseData)
                    dispatch({
                        type:actionTypes.LOGIN,
                        payload:responseData.data.token
                    })
                }).catch((err)=>{
                    dispatch({
                        type:actionTypes.ERROR,
                        payload:"abcdefghijk"
                })
                })
            
            }catch(err){
                console.log(err.message)
                
            }
            
        }
    }