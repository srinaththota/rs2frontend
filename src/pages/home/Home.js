import { Navigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useSelector,useDispatch } from "react-redux";
import { FetchProductsAction } from '../../store/actions/products/FetchProductsAction'

const Home = ()=>{
  const dispatch=useDispatch();
  const token = useSelector(state=>state.login.token)
  const products=useSelector(state=>state.products.productlist);
  console.log(token,products)
  const [productsList,setProductsList]=useState(products)
  useEffect(()=>{
    if(token !== null){
    dispatch(FetchProductsAction())
    }
},[])

const ProductItems = productsList.map((item,index) =>
    <h1 key={index}>{item.name}</h1>);
return (
    <div className='App'>
      {!token && <Navigate to="/" replace={true}/>}
      <h1>Home Page</h1>
      {ProductItems}
    </div>
  );
}
export default Home;