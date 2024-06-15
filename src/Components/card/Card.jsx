import { NavLink } from "react-router-dom";

const Card = ({contest}) => {
            console.log( 'contest ',contest)
        const {name,image,details,prize,_id ,contest_tag} = contest;
    return (
        <div>
     <div className="card card-compact bg-slate-800  sm:w-auto md:w-auto  lg:w-96 h-5/6 shadow-xl backdrop-blur-3xl">
  <figure><img className="h-56 w-full" src={image} alt="Shoes" /></figure>
  <div className="card-body text-white font-nunito ">
    <h2 className="card-title text-2xl font-bold">{name}
    <div className="badge badge-warning">{contest_tag}</div>
    </h2>
    <p className="flex-grow text-lg">{details}</p>
    
    <p className="flex-grow text-2xl font-bold" >${prize}</p>
    <div className="card-actions justify-end">
    <NavLink to = {`/contest-details/${_id}`}><button className="btn btn-warning   text-white">Details</button></NavLink>
    </div>
  </div>
</div>

 <div> 
 
 </div>


        </div>
        
    );
};

export default Card;