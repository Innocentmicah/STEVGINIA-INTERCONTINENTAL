import { useState } from 'react'
import './index.css'
import modanmicLogo from "../assets/modanmicLog.png"

const Footer = () =>{
    return(
        <footer>
            <div className='footer-container'>

                <img className='footerLogo' src={modanmicLogo} alt="Company Logo" />
                <div className='footerInfo'>
                    <nav className='footer-body'>
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
                    </nav>

                </div>
            </div>
            <p> &copy; 2024 MODANMIC | Secure & Reliable Financial Platform</p>

        </footer>
    )
}


export default Footer