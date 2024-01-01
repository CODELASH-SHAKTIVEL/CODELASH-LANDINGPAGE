import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/3.jpg'
import img2 from '../assets/4.jpg'
const Services = () => {
  return (
    <div>
    <Carousel
    autoPlay
    infiniteLoop
    showArrows={false}
    showStatus={false}
    showThumbs={false}
    >
                <div>
                    <img src={img1} alt='item1'/>
                    <p className="legend">FULL-STACK DEVELOPER</p>
                </div>
                <div>
                    <img src={img2} alt='item2'/>
                    <p className="legend">LINUX BASED SYSTEM DESIGN</p>
                </div>
            </Carousel>
    </div>
  )
}

export default Services
