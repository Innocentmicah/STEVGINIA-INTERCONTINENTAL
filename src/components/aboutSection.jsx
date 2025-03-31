import './index.css'
import logo from "../assets/modanmicLog.png"

const About = () =>{
    return(
        <div className="about-body">
            <h2 className='about-heading2'>
                About
            </h2>
            <div className="about-conitainer">
                <div className="About-info">
                    <img
                        src={logo}
                        alt='Company Logo'
                        className="aboutImg"
                    />
                </div>
                <div className="About-info ">
                    <div className="about-over">
                        <h2 className='about-heading2'>
                            STEVGINIA INTERCONTINENTAL
                        </h2>
                        <p>
                            STEVGINIA INTERCONTINENTAL Mission is to deliver exceptional uilding constructioin and supply services, exceeding our clients expectations through quality, reliability, and through quality, reliablitiy, and innovation.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default About