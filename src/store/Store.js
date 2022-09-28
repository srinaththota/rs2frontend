import { combineReducers, createStore, applyMiddleware } from 'redux'
import  LoginReducer  from './reducers/LoginReducer'
import ReduxThunk from 'redux-thunk'
const rootReducers=combineReducers({
  login:LoginReducer
  })

export const store = createStore(rootReducers,applyMiddleware(ReduxThunk))

