// Layout.js
import React from "react";
import Metro from "./Metro";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Metro />
      <Outlet /> {/* This is where nested routes will render */}
    </div>
  );
}

export default Layout;
