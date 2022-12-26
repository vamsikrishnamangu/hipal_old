import React from 'react'
import ExploreBottom from '../pics/Explore_page_bottom_section.png';
import insta from '../pics/insta.png';
import youtube from '../pics/youtube.png';
import fb from '../pics/fb.png';
import fssai from '../pics/fssai.png';
import copyright from '../pics/copyright.png';

import './PopularInRestaurant.css';

const FooterSection = () => {
  return (
    <>
    <img src={ExploreBottom} alt="bottom-section" className='image-bottom'/>
    <div className="bottom-card">
        <div className="icons">
            <img src={insta} alt="insta" style={{paddingRight:"25px"}}/>
            <img src={fb} alt="fb" style={{paddingRight:"25px"}}/>
            <img src={youtube} alt="youtube" style={{paddingRight:"25px",paddingTop:"5px",width:"50px", height:"25px"}}/>
        </div>
        <p className='bottom-para'>In publishing and graphic design, Lorum ipsum is a placeholder edagsk oegjp</p>
        <div className='fssai-license'>
            <img src={fssai} alt="fssai" className='fssai'/>
            <p className='spanEle'>License No: 12312321654987654</p>
        </div>
    </div>
    <img src={copyright} alt="copyright" className='copyright'/>
    </>
  )
}

export default FooterSection