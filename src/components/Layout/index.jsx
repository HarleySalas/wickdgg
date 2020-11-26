import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout">
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
