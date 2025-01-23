import { Outlet } from "react-router";
import Navbar from "../../Navbar";

export const PrivateLayout = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
    </div>
  );
};
