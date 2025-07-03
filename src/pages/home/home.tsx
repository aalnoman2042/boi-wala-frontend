// import { Outlet } from "react-router-dom"
// import Navbar from "../navbar/Navbar"
// import Footer from "../footer/Footer"
import { AllBooks } from "../allbooks/AllBooks"


export const Home = () => {
  return (
    <div>
            {/* <Navbar></Navbar> */}
        <h1 className="text-8xl">welcome to boi wala</h1>
        <AllBooks></AllBooks>
        {/* <Footer></Footer> */}
            {/* <Outlet></Outlet> */}
    </div>
  )
}
