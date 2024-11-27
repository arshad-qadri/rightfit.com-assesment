import React, { useEffect, useState } from "react";
import Product from "./Product";
import { useData } from "../../context/data";
import { useSearchParams } from "react-router-dom";
import Pagination from "../pagination/Pagination";

const Products = () => {
  const [searchParams] = useSearchParams();
  const [products, setProduct] = useState([]);
  const { data } = useData();
  useEffect(() => {
    if (data?.products) {
      if (searchParams.get("product") === "featured") {
        setProduct(data?.featuredProducts);
      } else {
        setProduct(data?.products);
      }
    }
  }, [data?.products, searchParams]);
  useEffect(() => {
    console.log("params===", searchParams.get("product"));
  }, [searchParams]);

  return (
    <div className="bg-white">
      <div className="p-5 grid grid-cols-[200px,auto]  mt-3">
        <div className="">
          <h3 className="font-semibold text-xl">Filter</h3>
          <div className="mt-6">
            <h4>Material</h4>
            <ul>
              <li className="capitalize text-sm cursor-pointer mt-1">All</li>
              {data?.material &&
                data.material.length > 0 &&
                data.material.map((material) => (
                  <li
                    key={material.id}
                    className="capitalize text-sm cursor-pointer mt-1"
                  >
                    {material.name}
                  </li>
                ))}
            </ul>
          </div>
          <div className="mt-6">
            <h4>Color</h4>
            <ul>
              <li className="capitalize text-sm cursor-pointer mt-1">All</li>
              {data?.colors &&
                data?.colors?.length > 0 &&
                data.colors.map((color) => (
                  <li
                    key={color.id}
                    className="capitalize text-sm cursor-pointer mt-1"
                  >
                    {color.name}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-2 gap-y-4">
          {products &&
            products?.length > 0 &&
            products.map((product, index) => (
              <Product key={index} product={product} />
            ))}
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default Products;
