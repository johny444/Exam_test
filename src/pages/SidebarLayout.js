import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
const SidebarLayout = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default SidebarLayout;
