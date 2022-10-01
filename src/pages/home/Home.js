import { Route, Link, Routes } from 'react-router-dom'
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Home = ()=>{
  const token = useSelector(state=>state.login.token)
return (
    <div className='App'>
      {!token && <Navigate to="/" replace={true}/>}
      <h1>Home Page</h1>
     
    </div>
  );
}
export default Home;