import React, { useContext, useEffect, useState } from "react";
import Navigation from "./Navigation";
import { Link, useLocation } from "react-router-dom";
import { productsContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/Axios";

export const Home = () => {
  const [products] = useContext(productsContext);

  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);

  const [filteredProducts, setFilteredProducts] = useState(null);

  const getProductsByCategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      // console.log(data);

      setFilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!filteredProducts || category == "undefined")
      setFilteredProducts(products);
    if (category != "undefined") getProductsByCategory();
  }, [category, products]);
  // console.log(filteredProducts);

  return filteredProducts ? (
    <>
      <Navigation />

      <div className=" w-[80%] pl-10 md:pl-2 pt-12 bg-zinc-200/50 space-y-3 md:gap-3  md:flex md:flex-wrap overflow-x-hidden overflow-y-auto ">
        {filteredProducts &&
          filteredProducts.map((p, idx) => {
            const { price, description, image, category, title, id } = p;
            return (
              <Link
                to={`/details/${id}`}
                key={idx}
                className="card  max-w-60 p md:max-h-60  py-8  bg-[#fefefe] shadow-md  shadow-zinc-300 transition-all ease-linear flex gap-4 flex-col items-center "
              >
                <div className=" h-40 md:h-[55%] rounded-md mb-3">
                  <img
                    className=" h-full object-cover object-center  hover:scale-105"
                    src={image}
                    alt=""
                  />
                </div>
                <h1 className="text-xs font-semibold md:h-[20%] text-center">
                  {title}
                </h1>
              </Link>
            );
          })}
      </div>
    </>
  ) : (
    <Loading />
  );
};
