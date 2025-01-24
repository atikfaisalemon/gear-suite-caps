import { useEffect, useState } from "react";
import { useParams } from "react-router";
import SigleProducts from "./SigleProducts";

const ProductDetails = () => {
  const [products, setProducts] = useState({});
  console.log("pro", products);
  const params = useParams();

  const getProduct = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:3000/product/getsingle/${params.id}`,
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

        setProducts(data.product);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  if (!products) {
    return null;
  }
  console.log("pro", products);
  return (
    <div>
      <SigleProducts product={products} />
    </div>
  );
};

export default ProductDetails;
