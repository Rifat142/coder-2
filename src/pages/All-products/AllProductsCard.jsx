import React from 'react';
import { NavLink } from 'react-router-dom';

const AllProductsCard = ({contest}) => {
    const {name,image,short_details,prize,_id ,contest_tag,attempted_count} = contest;
    return (
        <div>
        <div className="card card-compact bg-slate-800 sm:w-auto md:w-auto  lg:w-96 h-5/6 shadow-xl backdrop-blur-3xl">
     <figure><img className="h-56 w-full" src={image} alt="Shoes" /></figure>
     <div className="card-body text-white font-nunito ">
       <h2 className="card-title text-2xl font-bold">{name}
       <div className="badge badge-warning">{contest_tag}</div>
       </h2>
       <p className="flex-grow text-xl font-semibold">{short_details}</p>
       
       <p className="flex-grow text-2xl font-bold" >prize:${prize}</p>
       <p className="flex-grow text-2xl font-bold" >Participents:{attempted_count}</p>
       <div className="card-actions justify-end">
        
       <NavLink to = {`/contest-details/${_id}`}><button className="btn btn-primary   text-white">Show details</button></NavLink>
       </div>
     </div>
   </div>
   
    <div> 
    
    </div>
   
   
           </div>
    );
};

export default AllProductsCard;