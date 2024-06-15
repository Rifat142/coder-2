import { useContext } from "react";
import { AuthContext } from "../Authprovider/Authprovider";
import { Navigate, useLocation,  } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user , loading} = useContext(AuthContext)
    const location = useLocation();
    
    console.log(  'user path' ,location , location.pathname)
    // console.log(user)

    if(loading){
        return <span className="loading loading-ring loading-lg items-center"></span>
    }

    if (user){
        return children;
    }

    // console.log("User not authenticated, redirecting to login");
    return <Navigate state = {location.pathname} to='/login'></Navigate>
    // return <Navigate to="/login" state={{ from: location }} />;
   
};

export default PrivateRoutes;