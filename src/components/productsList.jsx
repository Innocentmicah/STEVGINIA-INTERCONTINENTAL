import { useState } from "react";
import "./index.css"

const ProductsList = ({serviceImage, serviceName, serviceImageName, ServiceLink}) =>{

    const [displayProducts, setDisplayProducts] = useState(false)

    return(
        <div 
            className='products-main'
        >
            <div 
                className="prod-main-con"
                onMouseMove={()=>setDisplayProducts(!displayProducts)}

            >
                <div className="prod-main-img">
                    <img src={serviceImage} alt={serviceName} />
                </div>
                <div className="prod-main-info">
                    <h3>
                        {serviceName}
                    </h3>
                    <p>
                        {serviceImageName}
                    </p>
                    <a href={ServiceLink} target="_blank">

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
                            {serviceName}
                        </h2>
                        <p>
                            {serviceImageName}
                        </p>
                        <a href={ServiceLink} target="_blank">

                            Enquires
                        </a>
                    </div>
                    
                </div>
            }
            

        </div>
    )
}

export default ProductsList