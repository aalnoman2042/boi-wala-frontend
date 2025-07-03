// src/components/Layout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "../pages/navbar/Navbar";
import Footer from "../pages/footer/Footer";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
