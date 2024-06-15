import axios from 'axios';



export const axiousSecure = axios.create({
    baseURL: `https://12-server-psi.vercel.app`
})

const useAxiousSecure = () => {
   return axiousSecure
};

export default useAxiousSecure;