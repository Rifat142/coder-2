import { NavLink } from "react-router-dom";

const AddItemCard = ({food}) => {
    const {name,image,details,price,_id ,category} = food;
    return (
        <div>
            <div>
     <div className="card card-compact  sm:w-auto md:w-auto  lg:w-96 h-5/6 shadow-xl backdrop-blur-3xl">
  <figure><img className="h-56 w-full" src={image} alt="Shoes" /></figure>
  <div className="card-body text-white font-nunito ">
    <h2 className="card-title text-2xl font-bold">{name}
    <div className="badge badge-warning">{category}</div>
    </h2>
    <p className="flex-grow text-lg">{details}</p>
    
    <p className="flex-grow text-2xl font-bold" >${price}</p>
    <div className="card-actions justify-end">
    <NavLink to = {`/update/${_id}`}><button className="btn btn-warning   text-white">Update</button></NavLink>
    <NavLink to = {`/food-details/${_id}`}><button className="btn btn-warning   text-white">Details</button></NavLink>
    </div>
  </div>
</div>

 <div> 
 
 </div>


        </div>
        </div>
    );
};

export default AddItemCard;