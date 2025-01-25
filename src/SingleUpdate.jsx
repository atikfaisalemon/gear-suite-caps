import { useState } from "react";
import { useParams } from "react-router";

const SingleUpdate = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: productName,
      price: parseInt(price),
      description,
    };

    try {
      const token = localStorage.getItem("token"); // Retrieve token from localStorage
      if (!token) {
        setError("Authentication token not found. Please log in.");
        setSuccess("");
        return;
      }

      const response = await fetch(
        `http://localhost:3000/product/update/${params.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include token for authentication
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        alert("update..?");
        setSuccess("Product created successfully!");
        setError("");
        setProductName("");
        setPrice("");
        setDescription("");
      } else {
        const errorResponse = await response.json();
        setError(errorResponse.message || "Failed to create product.");
        setSuccess("");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
      setSuccess("");
      console.error("Error:", err);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 rounded-md bg-green-300 p-3">
        Update This Product
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className=" text-sm font-medium text-gray-700 mb-3 flex justify-start items-center">
            Product Name
          </label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div>
          <label className=" text-sm font-medium text-gray-700 mb-3 flex justify-start items-center">
            Price
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div>
          <label className=" text-sm font-medium text-gray-700 mb-3 flex justify-start items-center">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
            rows="4"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition duration-200"
        >
          Update
        </button>
      </form>
      {success && (
        <p className="mt-4 text-green-600 text-center font-medium">{success}</p>
      )}
      {error && (
        <p className="mt-4 text-red-600 text-center font-medium">{error}</p>
      )}
    </div>
  );
};

export default SingleUpdate;
