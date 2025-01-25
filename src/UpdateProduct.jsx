import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import DeleteProduct from "./DeleteProduct";

const UpdateProduct = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
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

  if (!products) {
    return null;
  }

  return (
    <ul role="list" className="divide-y divide-gray-100 mx-28 p-6">
      {products.map((products) => (
        <li key={products.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img className="size-12 flex-none rounded-full bg-gray-50" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm/6 font-semibold text-gray-900">
                {products.name}
              </p>
              <p className="mt-1 truncate text-xs/5 text-gray-500">
                {products.tag}
              </p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-row sm:gap-6 sm:items-end ">
            <button
              onClick={() => {
                navigate(`/${products.id}`);
              }}
              type="button"
              className="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Update
            </button>
            <DeleteProduct id={products.id} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UpdateProduct;
