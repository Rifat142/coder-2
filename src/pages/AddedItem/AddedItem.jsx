import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
// import { NavLink } from 'react-router-dom';
import AddItemCard from './AddItemCard';
import { AuthContext } from '../../Authprovider/Authprovider';

const AddedItem = () => {
    const {user} = useContext(AuthContext);

    const [foods ,setFoods]= useState([]);
    useEffect(()=>{
     fetch(`https://12-server-psi.vercel.app/foods?email=${user.email}`)
   
     .then(res=>res.json())
     .then(data=> setFoods(data))

    } ,[])
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="font-bold text-5xl  text-white font-nunito text-center mb-5 p-4">
                My added item
            </h1>
        <div className="grid  sm:grid-cols-1   md:grid-cols-2  lg:grid-cols-3 gap-3  md:pl-2 lg:pl-8   ">
            {
                foods.map(food =><AddItemCard food={food}></AddItemCard> )
            },
          
        </div>
       {/* <NavLink ><div className="flex justify-center"> <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-amber-400 text-white ">Show all </button>
       </div>
      
       
       </NavLink> */}
            <Footer></Footer>
        </div>
    );
};

export default AddedItem;