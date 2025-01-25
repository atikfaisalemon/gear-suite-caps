const DeleteProduct = ({ id }) => {
  const deleteProduct = async () => {
    const userToken = localStorage.getItem("token");
    console.log({ userToken });

    console.log("id", id);

    if (id) {
      const response = await fetch(
        `http://localhost:3000/product//delete/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      const data = await response.json();
      console.log("response", data);
      alert(data.message);
      window.location.reload();
    }
  };

  return (
    <button
      onClick={deleteProduct}
      type="button"
      className="relative inline-flex items-center gap-x-1.5 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Delete
    </button>
  );
};

export default DeleteProduct;
