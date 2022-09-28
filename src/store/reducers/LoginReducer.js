import * as actionTypes from "../actions/ActionTypes"
const initialState={
    token:null
}

const LoginReducer = (state=initialState,action)=>{
console.log(action)
    if(action.type===actionTypes.LOGIN){
        return {
            ...state,
            token:action.payload
        }
    }

    if(action.type===actionTypes.ERROR){
        console.log(action)
        return {
            ...state,
            token:action.payload
        }
    }
    return state;
}

export default LoginReducer