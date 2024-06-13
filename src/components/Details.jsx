import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productsContext } from "../utils/Context";
import axios from "../utils/Axios";
import Loading from "./Loading.jsx";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const getSingleProduct = async () => {
    const { data } = await axios.get(`/products/${id}`);
    console.log(data);

    setProduct(data);
  };
  useEffect(() => {
    getSingleProduct();
  }, []);

  return product ? (
    <div className="md:w-[70%] min-h-screen space-y-3 m-auto bg-[#fefefe] p-12 md:flex items-center gap-8 overflow-hidden">
      <div className="max-w-80 m-auto md:h-[90%] ">
        <img
          className="object-cover object-center h-full  "
          src={product.image}
          alt=""
        />
      </div>
      <div className="content  md:w-[70%] text-center flex flex-col gap-4 p-8 overflow-hidden">
        <h1 className="text-4xl mb-4 ">{product.title}</h1>
        <h3 className="text-xl text-zinc-600/60">{product.category}</h3>
        <h2 className="text-xl tracking-wider font-bold text-red-500">
          ${product.price}
        </h2>
        <p className="text-xs tracking-wider font-semibold text-zinc-600">
          {product.description}
        </p>
        <div className="flex gap-8">
          {" "}
          <Link className="px-5 py-2 text-black/60 tracking-wider border border-black bg-[#fefefe] capitalize w-[40%] hover:text-black">
            edit{" "}
          </Link>
          <Link className="px-5 py-2 text-red-400/80 tracking-wider border border-red-600 bg-[#fefefe] capitalize w-[40%] hover:text-red-700">
            remove{" "}
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
