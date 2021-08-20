import React from "react";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

export default function Layout(props) {
  return (
    <div className="layout-div">
      <Nav />
      {props.children}
      <Footer />
    </div>
  );
}
