import "./index.css"

const ResponsivNav = ({handleclcik}) =>{
    return(

        <div className="respNavCon">
            <nav className='mobileRespons' onClick={handleclcik} >
                <div className='mobileBurggerContainer'>
                   <span className="mobileBugger"></span>
                   <span className="mobileBugger"></span> 
                   <span className="mobileBugger"></span> 

                </div>

            </nav>
            <ul>
            <li>
                        <a href=''>
                            Home
                        </a> 
                    </li>
                    <li>
                        <a href="http://" target="_blank">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="http://" target="_blank">
                            Contact
                        </a> 
                    </li>
                    
                    <li>
                        <a href="http://" target="_blank">
                            Constuction
                        </a> 
                    </li>
                    <li>
                        <a href="http://" target="_blank">
                            Managent
                        </a> 
                    </li>
                    <li>
                        <a href="http://" target="_blank">
                            Enquires
                        </a> 
                    </li>
                    <li>
                        <a href="http://" target="_blank">
                            Supply
                        </a> 
                    </li>
                    <li>
                        <a href="http://" target="_blank">
                            Plumbing
                        </a> 
                    </li>
                    <li>
                        <a href="http://" target="_blank">
                            CLeaning
                        </a> 
                    </li>
                    <li>
                        <a href="http://" target="_blank">
                            Rentales
                        </a> 
                    </li>
                
            </ul>
        </div>
    )

}

export default ResponsivNav