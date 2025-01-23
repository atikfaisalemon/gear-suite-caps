import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
  const [products, setProducts] = useState({});
  const [status, setStatus] = useState("");
  const params = useParams();

  console.log("params", params);

  const getProduct = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:3000/dashboard/product/${params.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("data", data);
        setProducts(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  return <div>ProductDetails{params.id}</div>;
};

export default ProductDetails;
