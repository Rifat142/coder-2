
import Swal from "sweetalert2";
import { axiousSecure } from "../../Hooks/useAxiousSecure";

const UserTable = ({ user, users, setUser }) => {
  // console.log("cart item data", user);
  const {  name, email , _id} = user;

 const handleAdmin = user=>{
  axiousSecure.patch(`/user/admin/${_id}`)
  .then(res =>{
    console.log(res.data);
    if(res.data.modifiedCount>0){
      // refetch()
      Swal.fire({
        
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
    }
  })
 }




  //  handle delete
  const handleDelete = (_id) => {
    console.log(_id);
  refetch()
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://12-server-psi.vercel.app/user/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your product has been deleted.",
                icon: "success",
              });
              const remining = users.filter((del) => del._id !== _id);
              setUser(remining);
            }
          });
      }
    });
  };
  return (
    <div>
      
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                name
                <label></label>
              </th>
            
              <th>email</th>
              <th></th>
             
              
              
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td className="w-1/6">
                <div className="flex items-center gap-3 ">
                  <div className="avatar">
                    
                  </div>
                  <div>
                    <div className="font-bold text-xl ">{name}</div>
                    <div className="text-sm opacity-50"></div>
                  </div>
                </div>
              </td>
              
             
              <td className=" w-1/4 text-lg">
                {}
                {/* Added time  */}
                {email}
                <br />
                
              </td>
              <td className=" w-1/3 text-lg">

                {
                user.role ==='admin'?'admin' :<button 
                onClick={()=>handleAdmin(user)}
                className="btn btn-primary  text-lg">make admin</button>}
                
              
              </td>
              
              <th>
                <button
                  onClick={() => handleDelete(_id)}
                  className="btn btn-primary  text-lg"
                >
                  delete
                </button>
              </th>
            </tr>
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default UserTable;
