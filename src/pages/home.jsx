import { useState } from "react"

import "./index.css"
import Navigation from '../sections/navigation'
import ResponsivNav from '../sections/responsivNav'
import SlideShow from '../components/slideShow'
import About from "../components/aboutSection"
import Services from "../components/services"
import Products from "../components/products"
import Subscribe from "../components/subscribe"
import Footer from "../components/footer"

const Home = () =>{

    const [displayNav, setDisplayNav] = useState(false)
    const [displayBackground, setDisplayBackground] = useState(false)

    const displayMobileNav = ()=>{
        console.log("background")
        console.log("displayNav", !displayNav)
        console.log("displayBackground", !displayBackground)

        setDisplayNav(!displayNav)
        setDisplayBackground(!displayBackground)
    }

    return (
        <div className='rootContainer'>
        <div className="rootBody">
            <Navigation handleclcik={displayMobileNav} />
            {/* <br /> */}
            <SlideShow />
            <About />
            <Services />
            <Products />
            <Subscribe />
            <Footer />
        </div>
        {
            displayBackground 
            && 
            <div className="backgroundCover">
            {displayNav && <ResponsivNav handleclcik={displayMobileNav} />}
            </div>
        }

        </div>
    )
}

export default Home 