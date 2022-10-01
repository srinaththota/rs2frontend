import * as actionTypes from "../actions/ActionTypes"
const initialState={
    productlist:[],
    error:null
}

const ProductReducer = (state=initialState,action)=>{
console.log(action)
    if(action.type===actionTypes.FETCH_PRODUCTS){
        return {
            ...state,
            productlist:[...action.payload]
        }
    }

    if(action.type===actionTypes.ERROR){
        console.log(action)
        return {
            ...state,
            error:action.payload
        }
    }
    return state;
}

export default ProductReducer