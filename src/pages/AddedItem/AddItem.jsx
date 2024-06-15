import React, { useContext } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Authprovider/Authprovider';

const AddItem = () => {
    const {user}= useContext(AuthContext)
    const handleAddItem = (event) => {
        event.preventDefault();
    
        //    const name = form.name.value;
        //    console.log(name)
    
        const addItems = new FormData(event.currentTarget);
        const name = addItems.get("name");
        const image = addItems.get("image");
        const quantity = addItems.get("quantity");
        const category = addItems.get("category");
        const price = addItems.get("price");
        const origin = addItems.get("origin");
        const short_details = addItems.get("short_details");
        const user_name = addItems.get("user_name");
        const email = addItems.get("email");
    
        const addedItem = { name, image,  category, price, short_details,origin,quantity,email,user_name};
        console.log(  'add a item', addedItem);
    
        // send to the client server;
        fetch("https://12-server-psi.vercel.app/contest", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(addedItem),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
           if(data.insertedId){
            Swal.fire({
                title: "Good job!",
                text: "Product added sucessfully",
                icon: "success"
              });
           }
          });
    
       
      };
    
    return (
        <div>
             <div>
      <Navbar></Navbar>
      <div className=" px-40 py-16  ">
        <h1 className="mx-auto text-5xl font-bold text-center ">
          Add a Contest
        </h1>
        <br />
        <form onSubmit={handleAddItem}>
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 ">
            <div>
              <span className="label-text">Name</span>
              <input
              required
                type="text"
                placeholder="Type here"
                name="name"
                className="input input-bordered input-success w-full max-w-xs"
              />
            </div>
            <div>
              <span className="label-text">Email</span>
              <input
              readOnly
               defaultValue={user?.email}
                type="email"
                placeholder="Type here"
                name="email"
                className="input input-bordered input-success w-full max-w-xs"
              />
            </div>
            <div>
              <span className="label-text">user name</span>
              <input
              readOnly
                defaultValue={user?.displayName}
                type="text"
                placeholder="Type here"
                name="user_name"
                className="input input-bordered input-success w-full max-w-xs"
              />
            </div>
            <div>
              <span className="label-text">Image Url</span>
              <input
              required
                type="text"
                placeholder="Type here"
                name="image"
                className="input input-bordered input-success w-full max-w-xs"
              />
            </div>

            <div>
              <span className="label-text">Price</span>
              <input
              required
                type="text"
                placeholder="Type here"
                name="price"
                className="input input-bordered input-success w-full max-w-xs"
              />
            </div>
           
            <div>
              <span className="label-text">Category</span>
              <input
              required
                type="text"
                placeholder="Type here"
                name="category"
                className="input input-bordered input-success w-full max-w-xs"
              />
            </div>
          </div>
          <br />
          <div>
            <span className="label-text">description</span>
            <input

              type="text"
              name="short_details"
              placeholder="Type here"
              className="input input-bordered input-accent w-full max-w-full"
            />
          </div>
          <br />
          <button className="btn btn-block">Add </button>
        </form>
      </div>
      <Footer></Footer>
    </div>


        </div>
    );
};

export default AddItem;