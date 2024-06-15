import React from 'react';
import { useLoaderData } from 'react-router-dom';

import AllProductsCard from './AllProductsCard';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const AllProducts = () => {
    const contest = useLoaderData();
    console.log(contest);
    
    
    return (
        <div className=''
        
        style={{
            // backgroundImage:`url(${bg2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>
            <Navbar></Navbar>
           <div className='text-center p-3  w-2/3 mx-auto text-white font-nunito mb-5'>
           <h1 className='text-4xl font-bold mb-4' >Discover Our Contests</h1>
           <p className='text-xl  '>Explore all coding contests below and choose your challenge! Participate, compete, and win exciting prizes.
           </p>
           </div>
           <div className='grid  sm:grid-cols-1   md:grid-cols-2  lg:grid-cols-3 gap-3  md:pl-2 lg:pl-8 ' >
           {
                contest.map(contest=> <AllProductsCard contest={contest}></AllProductsCard>)
            }

           </div>
           <Footer></Footer>
        </div>
    );
};

export default AllProducts;