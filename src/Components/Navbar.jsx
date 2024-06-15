import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Authprovider/Authprovider";

const Navbar = () => {

const {user,logOut , setLoading} =useContext(AuthContext);
console.log( 'user in navbar ',user);
// console.log('user photo ', user.photoURL)
const handleSignOut = () => {
  setLoading(true);
  logOut()
    .then(() => {
      setLoading(false);
    })
    .catch((error) => {
      console.error("Sign-out error: ", error);
      setLoading(false);
    });
};




  const navbarTittles = (
    <div className="text-white flex gap-5 text-xl font-semibold">
      <NavLink
        className={({ isActive }) => (isActive ? "text-blue-700" : "")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? "text-blue-700" : "")}
      >
        Login
      </NavLink>
      <NavLink
        to="/all-products"
        className={({ isActive }) => (isActive ? "text-blue-700" : "")}
      >
        All Contests
      </NavLink>
      <NavLink
        to="/reg"
        className={({ isActive }) => (isActive ? "text-blue-700" : "")}
      >
       reg
      </NavLink>
     
    </div>
  );
  return (
    <div>
      <div className="navbar backdrop-blur-sm p-10 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  mt-3 z-[10] p-2 shadow   w-full"
            >
              {navbarTittles}
            </ul>
          </div>
          <div className="flex">
          <a className="btn btn-ghost sm:text-lg lg:text-2xl text-white">Coders</a>
          {/* <img className="w-12" src={logo} alt="" /> */}
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navbarTittles}</ul>
        </div>

        <div className="navbar-end ">
          <div className=" sm:grid  lg:flex">
          <p className="  sm:m-auto  lg:mr-4 text-white">{user?user.displayName : 'my name'} </p>
          <div className="w-10 dropdown dropdown-hover dropdown-bottom dropdown-end  ">
          
            <img tabIndex={0}
              className="rounded-full "
              alt="Tailwind CSS Navbar component"
            src={user && user.photoURL ? user.photoURL :"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}
            />
            <ul tabIndex={0} className="dropdown-content z-50 menu p-2   shadow bg-base-100 rounded-box w-52  "
            
            >
              <li><Link to='/cart'>My cart</Link></li>
              <li><Link to='/added-items'>My added products </Link></li>
              <li><Link to='/dashboard'>My Dashboard </Link></li>
              {/* <li><Link to='/add-item'>Add a Product</Link></li> */}
              <li> <Link><button
              onClick={handleSignOut}
              className="ml-2 btn btn-outline "
            >
              log-out
            </button></Link></li>
           </ul>  
          </div>
          </div>

          {user ? (
           
           <> <button
           onClick={handleSignOut}
           className="ml-2 btn btn-outline "
         >
           log-out
         </button></>
          ) : (
            <Link to="/login">
              <button className="ml-2 btn btn-outline btn-primary">Log-in</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
