import React from 'react'
import  './Hero.css'
import hand from '../Assests/hand_icon.png'
import arrow from '../Assests/arrow.png'
import hero_img from '../Assests/hero_image.png'

function Hero() {
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

            <div className="hero-latest-btn">
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
