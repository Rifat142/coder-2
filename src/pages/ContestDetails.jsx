import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import { AuthContext } from "../Authprovider/Authprovider";
import Swal from "sweetalert2";
// import Swal from 'sweetalert2'




const ContestDetails = () => {
  const {user} = useContext(AuthContext);
  const contest = useLoaderData();
  const { name, _id , image ,prize, contest_tag, short_details,details ,email , attempted_count} = contest;
  console.log( 'contest-details',contest);
  console.log(email)
  console.log(user.email)


  const handleClick = (event)=>{

    if(email === user.email){
      event.preventDefault()
      Swal.fire({
        title: "You can't buy your own product",
        text: "Thank you",
        icon: "error"
      });
      
    }
    
  }

  return (
    
    <div className=""
    style={{
        // backgroundImage:`url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }}>
        <Navbar></Navbar>
      <br /><br />
      <br />
  
      <div className="card lg:card-side bg-transparent backdrop-blur-lg shadow-xl ">
        <figure>
          <img
          className="w-[600px] h-[600px]"
            src={image}
            alt="Album"
          />
        </figure>
        <div className="card-body w-2/3">
          <h2 className="card-title text-6xl text-white">{name}
            
          
          </h2>
          <div className=" text-2xl space-y-2 text-white font-nunito font-bold ">
          <div className="text-3xl">Details:{short_details}</div>
          <div> Prica: ${prize}</div>
          <div>Tag:{contest_tag}</div>
          <div>Participants: {attempted_count}</div>
          <div></div>
          <div>Recipe : {details}</div>
          
          </div>
          <div className="card-actions justify-end">
            <Link to= {`/order-page/${_id}`}><button 
            onClick={handleClick}
            className="btn btn-warning">Place Order</button></Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ContestDetails;
