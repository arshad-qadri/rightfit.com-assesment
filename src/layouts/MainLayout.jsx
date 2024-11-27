import React, { useEffect } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Drawer from "../components/drawer/Drawer";
import axios from "axios";
import { useData } from "../context/data";
import { baseUrl, token } from "../variable";

const MainLayout = ({ children }) => {
  const { data, setData } = useData();
  const fetchData = async () => {
    try {
      const endPoints = [
        `${baseUrl}/products`,
        `${baseUrl}/colors`,
        `${baseUrl}/material`,
        `${baseUrl}/featured`,
      ];
      const [products, colors, material, featured] = await Promise.all(
        endPoints.map((endPoint) =>
          axios.get(endPoint, {
            headers: {
              Authorization: token,
            },
          })
        )
      );
      if (products.data?.products?.length > 0) {
        const combinedData = products.data?.products.map((product) => {
          const productColor =
            colors.data?.colors.find((c) => c.id === product.colorId)?.name ||
            null;
          const productMaterial =
            material.data?.material.find((m) => m.id === product.materialId)
              ?.name || null;
          // const featuredProducts = featuredProducts

          return {
            ...product,
            color: productColor,
            material: productMaterial,
          };
        });
        let featuredProducts = []
         products.data?.products.map((product) => {
          const fProduct = featured.data?.featured.find(
            (c) => c.productId === product.id
          );

          if (fProduct) {
           featuredProducts.push(product);
          }
        });
        setData({
          ...data,
          products: combinedData,
          colors: colors.data?.colors,
          material: material.data?.material,
          featuredProducts
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="relative overflow-hidden">
      <Drawer />
      <div className="overflow-y-auto h-screen">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
