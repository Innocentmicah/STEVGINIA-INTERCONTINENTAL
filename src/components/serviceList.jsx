import { useState } from 'react'
import "./index.css"

const ServiceList = ({serviceImg, serviceName, serviceClass, serviceRectangel}) =>{

    const [displayService, setDisplaySrevice] = useState(false)

    const handelMouseMove = () =>{
        setDisplaySrevice(!displayService)
        // console.log("Mouse moving")
    }
    const handelMouseOut = () =>{
        setDisplaySrevice(!displayService)
        // console.log("Mouse Out")
    }

    return(
        <>
            {
                !serviceRectangel &&
                <a href='./' className="services-list-body">
                    <div onMouseMove={handelMouseMove} className={serviceClass[0]}>
                        <h3>
                            {serviceName}
                        </h3>
                        <div className={serviceClass[1]}>
                            <img src={serviceImg} alt={serviceName} />
                        </div>
                        {/* <div className="service-info-container"> */}
                            
                        {/* </div> */}
                    </div>
                    {
                        displayService
                        &&
                        <div onMouseOut={handelMouseOut} className='service-hover-background'>
                            <h3>
                                {serviceName}
                            </h3>
                        </div>
                    }
                </a>
            }
            {
                serviceRectangel &&
                <a href='./' className={`services-list-body ${serviceClass[0]}`}>
                    <div onMouseMove={handelMouseMove} className={serviceClass[1]}>
                        {/* <div className={serviceClass[1]}> */}
                            <h3>
                                {serviceName}
                            </h3>
                            <div className={serviceClass[2]}>
                                <img src={serviceImg} alt={serviceName} />
                            </div>
                        {/* </div> */}
                        
                    </div>
                    {
                        displayService
                        &&
                        <div onMouseOut={handelMouseOut} className='service-hover-background'>
                            <h3>
                                {serviceName}
                            </h3>
                        </div>
                    }
                </a>
            }
        </>
        
    )

}

export default ServiceList