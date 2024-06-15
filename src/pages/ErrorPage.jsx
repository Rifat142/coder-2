import { NavLink } from "react-router-dom";
import img from '../assets/404-error-web-template-flat-style_23-2147781024.jpg'

const ErrorPage = () => {
    return (
        <div>
             <div className="bg-slate-100 mx-auto flex flex-col items-center justify-center min-h-screen">
      <div className="relative">
        <img className="mx-auto" src={img} alt="404 Error" />

      <NavLink to='/'>  <button
          className="btn btn-success absolute left-1/2 transform -translate-x-1/2 bottom-20"
          // Redirects to home page on click
        >
          Go to home page
        </button></NavLink>
      </div>
    </div>
        </div>
    );
};

export default ErrorPage;