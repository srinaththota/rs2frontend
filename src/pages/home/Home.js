import { Navigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useSelector,useDispatch } from "react-redux";
import { FetchProductsAction } from '../../store/actions/products/FetchProductsAction'
import * as React from 'react';
import { TableContainer, Table, TableCell, TableBody, TableHead, TableRow, Paper } from '@mui/material'

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

const handleClick=(id)=>{
  console.log(id)
}

const ProductItems = productsList.map((item,index) =>
    <h1 key={index}>{item.name}</h1>);
return (
    <div className='App'>
      {!token && <Navigate to="/" replace={true}/>}
      <h1>Home Page</h1>
      <TableContainer component={Paper} sx={{margin:20,width:'80%'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Type</TableCell>
            <TableCell align="right">Product Name</TableCell>
            <TableCell align="right">Product Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow onClick={()=>handleClick(row.id)}
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor:'pointer' }}
            >
              <TableCell component="th" scope="row"  >
                {row.ptype}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
export default Home;