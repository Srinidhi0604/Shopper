import React from 'react'
import  './Hero.css'
import hand from '../Assests/hand_icon.png'
import arrow from '../Assests/arrow.png'
import hero_img from '../Assests/hero_image.png'
import { useNavigate } from 'react-router-dom'

function Hero() {
  const navigate = useNavigate();

  const handleLatestCollection = () => {
    // First navigate to the shop page
    navigate('/');
    
    // Wait for the page to load and then scroll to the new collection section
    setTimeout(() => {
      const newCollectionSection = document.querySelector('.new-collection');
      if (newCollectionSection) {
        // Add a small offset to account for the navbar
        const offset = 100;
        const elementPosition = newCollectionSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <div className='hero'>
        <div className="hero-left">
            <h2> New Arrivals Only</h2>

            <div>
                <div className='hero-hand-icon'>
                    <p>new</p>
                    <img src={hand} alt="hand" />
                </div>
                <p>Collections</p>
                <p>for everyone</p>
            </div>

            <div className="hero-latest-btn" onClick={handleLatestCollection}>
                <div>Latest Collection</div>
                <img src={arrow} alt='arrow'></img>
            </div>
        </div>

        <div className="hero-right">
            <img src={hero_img} alt="hero-img"/>
        </div>
    </div>
  )
}

export default Hero
