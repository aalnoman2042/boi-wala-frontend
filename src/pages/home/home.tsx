// import { Outlet } from "react-router-dom"
// import Navbar from "../navbar/Navbar"
// import Footer from "../footer/Footer"
// import { Outlet } from "react-router-dom"
import { AllBooks } from "../allbooks/AllBooks"
import { Slider } from "../slider/slider"


export const Home = () => {
  return (
    <div>
            {/* <Navbar></Navbar> */}
        {/* <h1 className="text-8xl text-center text-[#53877A] uppercase">welcome to boi-wala</h1> */}
            <Slider></Slider>
      
        <AllBooks></AllBooks>
        {/* <Footer></Footer> */}
            
    </div>
  )
}
