import React from 'react';
import './star.css';
import hand_icon from '../assets/hand_icon.png';
import arrow_icon from'../assets/arrow.png';
import hero_image from '../assets/hero_image.png';
const Star= () =>{
return (
    <div className='star'>
       <div className="star-left">
            <h2>NEW ARRIVALS</h2>
    <div>
         <div className='star-hand-icon'>
            <p>new </p>
            <img src={hand_icon} alt ="" />
            </div>
        
        <p>Collections</p>
        <p>For Everyone</p>
        </div>
        <div className="star-latest-btn">
            <div className="">Latest Collection</div>
            <img src={arrow_icon} alt=""></img>
        </div>
        </div>
        <div className="star-right">
            <img src={hero_image} alt="" />
        </div>
    </div>
)
}
export default Star;