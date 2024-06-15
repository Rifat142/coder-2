import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Table from './Table';
import { AuthContext } from '../../Authprovider/Authprovider';

const Cart = () => {
    const [carts , setCart] = useState([]);
        const {user} = useContext(AuthContext);
        // console.log( 'user enail', user.email)
    
    useEffect(()=>{
     fetch(`https://12-server-psi.vercel.app/contest-cart?email=${user.email}`)
     .then(res=>res.json())
     .then(data=> setCart(data))

    } ,[])
    return (
        <div className='bg-slate-900'>
            <Navbar></Navbar>
            <p className='text-center text-5xl mb-12 '>This is my cart </p>
            <div className="bg-slate-900  text-white">
            {
              carts.map(cart=> <Table cart={cart}
              carts = {carts}
              setCart = {setCart}
              ></Table>)
            }
          </div>
            <Footer></Footer>
        </div>
    );
};

export default Cart;