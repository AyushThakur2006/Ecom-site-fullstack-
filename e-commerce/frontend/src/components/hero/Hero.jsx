import React from 'react'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'
import './Hero.css'
const Hero = () => {
  return (
<div className="hero">
    <div className="hero-left">
        <h2>New Arivals Only</h2>
        <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>collections</p>
            <p>For Everyone</p>
        </div>
        <div className="hero-latest-button">
            <div>Latest Collection</div>
            <img src={arrow_icon}  />
        </div>
    </div>

    <div className="hero-right">
<img src={hero_image} alt="" />
    </div>
</div>
)
}

export default Hero