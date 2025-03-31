import {useState} from 'react'
import "./index.css"

// IMPORT IMAGES
import HOSSANAMINISTRY from "../assets/febassWedFolder/R01.jpg"
import throwpillow from "../assets/febassWedFolder/R02.jpg"
import tshirt from "../assets/febassWedFolder/R03.jpg"
import dentisecard from "../assets/febassWedFolder/R04.jpg"

import ProductsList from './productsList'

const Products = ()=>{

    const [displayProducts, setDisplayProducts] = useState(false)

    const productsObj = [
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
            {
                serviceName: "DERDGING",
                serviceImage: dentisecard,
                serviceImageName: "DERDGING",
                serviceLink: "https://"
            }
    
        ]
    return(
        <div className='products-body'>
            <h2>
                Products
            </h2>
            <div className='products-container'>
                {/* <div 
                    className='products-main'
                >
                    <div 
                        className="prod-main-con"
                        onMouseMove={()=>setDisplayProducts(!displayProducts)}

                    >
                        <div className="prod-main-img">
                            <img src={productsObj[1].serviceImage} alt={productsObj[1].serviceName} />
                        </div>
                        <div className="prod-main-info">
                            <h3>
                                {productsObj[1].serviceName}
                            </h3>
                            <p>
                                {productsObj[1].serviceImageName}
                            </p>
                            <a href="http://" target="_blank">

                                Enquires
                            </a>
                        </div>
                    </div>
                    {
                        displayProducts &&
                        <div 
                            className='prod-hover'
                            onMouseLeave={()=>setDisplayProducts(!displayProducts)}

                        >
                            <div className="prod-hover-con">
                                <h2>
                                    {productsObj[1].serviceName}
                                </h2>
                                <p>
                                    {productsObj[1].serviceImageName}
                                </p>
                                <a href="http://" target="_blank">

                                    Enquires
                                </a>
                            </div>
                            
                        </div>
                    }
                    

                </div> */}
                {
                    productsObj.map((v, i)=>{
                        return <ProductsList
                                    key={`key${i}`}
                                    serviceImage={v.serviceImage}
                                    serviceName={v.serviceName}
                                    serviceImageName={v.serviceImageName}
                                    ServiceLink={v.serviceLink}

                                />
                    })
                }

            </div>

        </div>
    )
}

export default Products  