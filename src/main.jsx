import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import Aurora from "./components/Aurora/aurora";
import Navbar from "./components/Navbar/Navbar";
import Hi from "./components/hi/hi";
import Footer from "./components/footer/footer.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Navbar />
      <Aurora />
      <Hi />
      <Footer />
    </BrowserRouter>
  </>
);
