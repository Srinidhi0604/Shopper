import React from 'react'
import './Footer.css'
import logo from '../Assests/logo_big.png'
import insta from '../Assests/instagram_icon.png'
import whatsapp from '../Assests/whatsapp_icon.png'
import pinterest from '../Assests/pintester_icon.png'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt="logo" />
            <p>SHOPPER</p>
        </div>

        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <div className='footer-social-icon'>
            <div className="footer-icons-container">
                <img src={insta} alt="instagram" />
                <img src={pinterest} alt="pinterest" />
                <img src={whatsapp} alt="whatsapp" />
            </div>

            <div className="footer-copyright">
                <hr/>
                <p>Copyright @ 2023 - All Right Reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
