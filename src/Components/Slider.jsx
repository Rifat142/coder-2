import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className="">
      <div className="carousel w-full h-[600px] relative">
        <div id="slide1" className="carousel-item relative w-full  ">
          <img
            src="https://i.ibb.co/Px09s4m/download.jpg"
            className="w-full "
          />
          <div className="absolute bg-gradient-to-r from-black to-black-200 h-full pt-12 p-6  ">
            <p className="text-8xl mt-8 text-white">Macher Paturi </p>
            <div className=" w-2/3 gap- pt-6  ">
              <p className="text-white text-4xl font-nunito mb-6 ">
                Fish marinated in mustard paste and steamed in banana leaves.
              </p>
              <p className="text-2xl text-white font-nunito">
                Grind mustard seeds with green chilies to make a paste.
                Marinate fish fillets with mustard paste. Wrap in banana leaves
                and steam until cooked.
              </p>
              <br />
              <Link to={'/all-products'}><button className="btn btn-warning">Show All items</button></Link>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
            <a href="#slide3" className="btn btn-circle btn-outline btn-accent">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle btn-outline btn-accent">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full  ">
          <img
            src="https://i.ibb.co/R0tLpSd/download.jpg"
            className="w-full "
          />
          <div className="absolute bg-gradient-to-r from-black to-black-200 h-full pt-12 p-6">
            <p className="text-8xl mt-8 text-white">Luchi Alur Dom</p>
            <div className=" w-2/3 gap- pt-6 ">
              <p className="text-white text-4xl font-nunito mb-6">
                Fish marinated in mustard paste and steamed in banana leaves.
              </p>
              <p className="text-2xl text-white font-nunito">
              Prepare dough for luchi and deep fry. Cook potatoes with tomatoes, ginger, garlic, and spices for alur dom.
              </p>
              <br />
              <Link to={'/all-products'}><button className="btn btn-warning">Show All items</button></Link>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
            <a href="#slide1" className="btn btn-circle btn-outline btn-accent">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle btn-outline btn-accent">
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full  ">
          <img
            src="https://i.ibb.co/x13jcck/download.jpg"
            className="w-full "
          />
          <div className="absolute bg-gradient-to-r from-black to-black-200 h-full pt-12 p-6">
            <p className="text-8xl mt-8 text-white">Kosha Mangsho</p>
            <div className=" w-2/3 gap- pt-6 ">
              <p className="text-white text-4xl font-nunito mb-6">
              "A slow-cooked mutton curry with a thick and spicy gravy.
              </p>
              <p className="text-2xl text-white font-nunito">
              Marinate mutton with yogurt and spices. Sauté onions, garlic, and ginger, then add marinated mutton and cook until tender
              </p>
              <br />
              <Link to={'/all-products'}><button className="btn btn-warning">Show All items</button></Link>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
            <a href="#slide2" className="btn btn-circle btn-outline btn-accent">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle btn-outline btn-accent">
              ❯
            </a>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Slider;
