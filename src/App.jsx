import { Route, Routes } from "react-router";
import "./App.css";
import Register from "./Register.jsx";
import Login from "./Login";
import DashBoard from "./DashBoard.jsx";
import Create from "./Create.jsx";
import { PrivateLayout } from "./components/layout/PrivateLayout.jsx";
import ProductDetails from "./ProductDetails.jsx";

function App() {
  return (
    <Routes>
      <Route index element={<Register />} />
      <Route path="login" element={<Login />} />

      <Route element={<PrivateLayout />}>
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="dashboard/product/:id" element={<ProductDetails />} />
        <Route path="create" element={<Create />} />
      </Route>

      {/* <Route path="concerts">
        <Route index element={<ConcertsHome />} />
        <Route path=":city" element={<City />} />
        <Route path="trending" element={<Trending />} />
      </Route> */}
    </Routes>
  );
}

export default App;
