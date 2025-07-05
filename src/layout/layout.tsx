import { Outlet } from "react-router-dom";
import Navbar from "../pages/navbar/Navbar";
import Footer from "../pages/footer/Footer";
// import Navbar from "../navbar/Navbar";
// import Footer from "../footer/Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}
