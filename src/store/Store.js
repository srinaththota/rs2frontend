import { combineReducers, createStore, applyMiddleware } from 'redux'
import  LoginReducer  from './reducers/LoginReducer'
import ReduxThunk from 'redux-thunk'
import ProductReducer from './reducers/ProductReducer'
const rootReducers=combineReducers({
  login:LoginReducer,
  products:ProductReducer
  })

export const store = createStore(rootReducers,applyMiddleware(ReduxThunk))

