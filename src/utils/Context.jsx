import axios from "./Axios.jsx";
import React, { createContext, useEffect, useState } from "react";

export const productsContext = createContext();

const context = (props) => {
  const [products, setProducts] = useState(null);
  const getProducts = async () => {
    try {
      const { data } = await axios("/products");
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <productsContext.Provider value={[products, setProducts]}>
      {props.children}
    </productsContext.Provider>
  );
};

export default context;
