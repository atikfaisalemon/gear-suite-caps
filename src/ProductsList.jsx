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

  return (
    <>
      <Products products={products} />
    </>
  );
};

export default ProductsList;
