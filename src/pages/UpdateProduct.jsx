import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Authprovider/Authprovider";
import Swal from "sweetalert2";



const UpdateProduct = () => {
    const food = useLoaderData();
    console.log( 'food',food);
    const { user } = useContext(AuthContext);
    // console.log( 'user in order',user.displayName)
  
    const {
      name,
      _id,
      image,
      price,
      made_by,
      food_origin,
      short_details,
      quantity: defaultQuantity,
      category,
      details,
    } = food;
    // console.log( 'food',food);
  
    const handleUpdateItem = (event) => {
      event.preventDefault();
  
      //    const name = form.name.value;
      //    console.log(name)
  
      const Items = new FormData(event.currentTarget);
      const name = Items.get("name");
      const quantity = Items.get("quantity");
      const made_by = Items.get("made_by");
      const short_details = Items.get("short_details");
      const price = Items.get("price");
      const details = Items.get("details");
      const category = Items.get("category");
      const image = Items.get("image");
  
      // product quantity
  
    
  
  
  
  
    //   if (quantity > defaultQuantity) {
    //     // alert('You cannot buy more than the default quantity.');
    //     Swal.fire({
    //       icon: "error",
    //       title: "Oops...",
    //       text: "You can't buy more than default quantity",
    //       // footer: '<a href="#">Why do I have this issue?</a>'
    //     });
    //     return;
    //   }
  
      if (quantity <= 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Quantity must be greater than 0",
          // footer: '<a href="#">Why do I have this issue?</a>'
        });
        return;
      }
  
      const updatedItem = { name, quantity, made_by, short_details, price, image,made_by,details , category};
      console.log( 'updated-item', updatedItem);
      // console.log(name , quantity, buyer_name,email,price,type,description )
      
      // sending to server side 
  
      fetch(`https://12-server-psi.vercel.app/contest/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedItem),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
         if(data.modifiedCount >0){
          Swal.fire({
              title: "Good job!",
              text: "Product Updated sucessfully",
              icon: "success"
            });
         }
        });
  
    }
    return (
        <div>
      <Navbar></Navbar>
      <div>
        <div className=" px-40 py-16 ">
          <h1 className="mx-auto text-5xl font-bold text-center ">
            Update this item!
          </h1>
          <br />
          <form onSubmit={handleUpdateItem}>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 ">
              <div>
                <span className="label-text">Name</span>
                <input
                  defaultValue={name}
                  type="text"
                  placeholder="Type here"
                  name="name"
                  className="input input-bordered  w-full max-w-xs"
                />
              </div>
              <div>
                <span className="label-text">Image-url</span>
                <input
                  defaultValue={image}
                  type="text"
                  placeholder="Type here"
                  name='image'
                  className="input input-bordered  w-full max-w-xs"
                />
              </div>
              <div>
                <span className="label-text">Quantity</span>
                <input
                  defaultValue={defaultQuantity}
                  required
                  type="text"
                  placeholder='type here'
                  name="quantity"
                  className="input input-bordered  w-full max-w-xs"
                />
              </div>
              <div>
                <span className="label-text">Details</span>
                <input
                  defaultValue={details}
                  type="details"
                  placeholder="Type here"
                  name="details"
                  className="input input-bordered  w-full max-w-xs"
                />
              </div>
              <div>
                <span className="label-text">Price</span>
                <input
                  defaultValue={price}
                  type="text"
                  placeholder="Type here"
                  name="price"
                  className="input input-bordered  w-full max-w-xs"
                />
              </div>
              <div>
                <span className="label-text">Made by</span>
                <input
                  defaultValue={made_by}
                  type="text"
                  placeholder="Type here"
                  name="made_by"
                  className="input input-bordered  w-full max-w-xs "
                  
                />
              </div>
              <div>
                <span className="label-text">Recipe</span>
                <input
                  defaultValue={short_details}
                  type="text"
                  placeholder="Type here"
                  name="short_details"
                  className="input input-bordered w-full max-w-xs "
                
                />
              </div>
              <div>
                <span className="label-text">Category</span>
                <input
                  defaultValue={category}
                  type="text"
                  placeholder="Type here"
                  name="category"
                  className="input input-bordered w-full max-w-xs "
                
                />
              </div>
            </div>
            <br />

            <br />
            <button className="btn btn-block">Buy this </button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
    );
};

export default UpdateProduct;