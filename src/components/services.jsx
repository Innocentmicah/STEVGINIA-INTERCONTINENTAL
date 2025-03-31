import "./index.css"
import {useState} from 'react'
import HOSSANAMINISTRY from "../assets/febassWedFolder/R02.jpg"
import throwpillow from "../assets/febassWedFolder/R01.jpg"
import tshirt from "../assets/febassWedFolder/R03.jpg"
import dentisecard from "../assets/febassWedFolder/dentisecard.jpg"

// SERVICE lIST
import ServiceList from './serviceList'


const Services = () =>{

    const [displayService, setDisplaySrevice] = useState(false)

    const serviesObj = [
        {
            serviceName: "SUPPLYING",
            serviceImage: tshirt,
            serviceImageName: "SUPPLYING",
            serviceLink: "https://"
        },
        {
            serviceName: "PLUMBING",
            serviceImage: throwpillow,
            serviceImageName: "PLUMBING",
            serviceLink: "https://"

        },
        {
            serviceName: "CONSTRUCTION",
            serviceImage: HOSSANAMINISTRY,
            serviceImageName: "CONSTRUCTION",
            serviceLink: "https://"

        },
        // {
        //     serviceName: "Publishing",
        //     serviceImage: dentisecard,
        //     serviceLink: "https://"
        // }

    ]

    const handelMouseMove = () =>{
        setDisplaySrevice(!displayService)
        // console.log("Mouse moving")
    }
    const handelMouseOut = () =>{
        setDisplaySrevice(!displayService)
        // console.log("Mouse Out")
    }

    return(
        <div className="service-body">
            <h2 className='about-heading2'>
                Services
            </h2>
            <div className="service-container">
                {/* <div className="spbs service-printing">
                    <h2>
                        PRINTING
                    </h2>
                    <div className="ser-prin-body">
                        <img src={serviesObj[1].serviceImage}  alt={`${serviesObj[1].serviceName}`} />
                    </div>
                </div> */}
                <ServiceList 
                    serviceImg={serviesObj[1].serviceImage} 
                    serviceName={serviesObj[1].serviceName}
                    serviceClass={["spbs service-printing", "ser-prin-body"]}
                    serviceRectangel={false}
                />

                <div className="spbs service-brend-sticker extra-color">
                    <ServiceList 
                        serviceImg={serviesObj[0].serviceImage} 
                        serviceName={serviesObj[0].serviceName}
                        serviceClass={["service-custome-style", "srvice-bren-stick", "service-bran-stick"]}
                        serviceRectangel={true}
                    />
                    
                    
                    {/* <div className='srvice-bren-stick'>
                        <h3>
                            STICKER
                        </h3>
                        <div className="service-bran-stick">
                            <img src={serviesObj[2].serviceImage}  alt={`${serviesObj[2].serviceName}`} />
                        </div>
                    </div> */}
                    <ServiceList 
                        serviceImg={serviesObj[2].serviceImage} 
                        serviceName={serviesObj[2].serviceName}
                        serviceClass={["service-custome-style", "srvice-bren-stick", "service-bran-stick"]}
                        serviceRectangel={true}
                    />

                </div>

                {/* {
                    serviesObj.map((v, i)=>{
                        return <ServiceList 
                                    key={`key${i}`}
                                    serviceName={v.serviceName} 
                                    serviceImg={v.serviceImage}
                               />
                    })
                } */}
            </div>
        </div>
    )
}

export default Services