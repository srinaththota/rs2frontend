import * as actionTypes from "../ActionTypes"
import axios from "axios"
export const FetchProductsAction=()=>{
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
        
        
        try{
         const responseData=axios.get("http://localhost:8080/getproducts",config).then(response=>response).then((responseData)=>{
                console.log(responseData)
                dispatch({
                    type:actionTypes.FETCH_PRODUCTS,
                    payload:responseData.data
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