import { useEffect, useState } from "react";
import Products from "./Products";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:3000/product/getall", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("data", data.product);
        setProducts(data.product);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  //     // const products = [
  //     // {
  //     //   id: 1,
  //     //   name: "Basic Tee",
  //     //   href: "#",
  //     //   imageSrc:
  //     //     "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
  //     //   imageAlt: "Front of men's Basic Tee in black.",
  //     //   price: "$35",
  //     //   color: "Black",
  //     // },
  //     // // More products...
  //   ];
  return (
    <>
      <Products products={products} />
    </>
  );
};

export default ProductsList;
