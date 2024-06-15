
import Swal from "sweetalert2";

const Table = ({ cart, carts, setCart }) => {
  console.log("cart item data", cart);
  const { details, date ,buyer_name, name, image, prize, _id,quantity } = cart;

  //  handle delete
  const handleDelete = (_id) => {
    console.log(_id);

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
        fetch(`https://12-server-psi.vercel.app/contest-cart/${_id}`, {
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
              const remining = carts.filter((del) => del._id !== _id);
              setCart(remining);
            }
          });
      }
    });
  };
  return (
    <div>
      
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                name
                <label></label>
              </th>
              <th>description</th>
              <th>Quantity</th>
              <th>Added-time</th>
              <th>Your name</th>
              <th>Price</th>
              
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td className="w-1/6">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-24 h-24 ">
                      <img
                        className=""
                        src={image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-xl ">{name}</div>
                    <div className="text-sm opacity-50"></div>
                  </div>
                </div>
              </td>
              <td className=" w-1/2 text-lg">
                
                {/* desvription */}
                {details}
                <br />
                
              </td>
              <td className="  text-lg">
                
                {/* desvription */}
                {quantity}
               
                
              </td>
              <td className=" w-1/4 text-lg">
                {}
                {/* Added time  */}
                {date}
                <br />
                
              </td>
              <td className=" w-1/3 text-lg">
                {}
                {/* owner */}
                {buyer_name}
                <br />
                
              </td>
              <td className="font-bold texl-xl">${prize}</td>
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

export default Table;
