import React, { useContext, useEffect, useState } from "react";
import { productsContext } from "../utils/Context";
import { set } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";

import axios from "../utils/Axios";

const Navigation = () => {
  const [active, setActive] = useState(false);
  const [products] = useContext(productsContext);

  let distinctCategory =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);

  distinctCategory = [...new Set(distinctCategory)];
  // console.log(distinctCategory);
  const colors = () =>
    `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()},1)`;
  return (
    <nav className=" h- screen w-fit min-w-52  bg-[#f6f6f6] shadow shadow-[#f0f0f0]  flex flex-col items-center pt-3 ">
      <a
        className="py-2 px-4 border bg-[#ffcb74] rounded-md text-[#11111]"
        href="/create"
      >
        Add new Product
      </a>
      <hr className="my-3 w-[80%]" />
      <h1 className="text-2xl mb-3 w-[80%]"> category</h1>
      <div className=" w-[80%]">
        {distinctCategory.map((c, i) => (
          <Link
            onClick={() => setActive}
            to={`/?category=${c}`}
            key={i}
            className=" mb-3 flex items-center gap-1  "
          >
            <span
              style={{ backgroundColor: colors() }}
              className=" inline-block  w-2 h-2 rounded-full"
            ></span>
            {c}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
