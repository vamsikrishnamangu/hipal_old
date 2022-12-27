import React from 'react'
import './ReviewPage.css';
import BackIcon from '../../pics/Back_icon.png';
import Malnadu from '../../pics/Malnadu_logo.png';
import sad from '../../pics/sad_logo.png';
import happy from '../../pics/happy_logo.png';
import satisfied from '../../pics/satisfied_logo.png';

import FooterSection from '../FooterSection';
const Review =[
    {
        id:1,
        text:"Food",
        color:"#4A5568"
    },
    {
        id:2,
        text:"Ambience",
        color:"#F14638"
    },
    {
        id:3,
        text:"Service",
        color:"#4A5568"
    },
    {
        id:4,
        text:"Hygiene",
        color:"#4A5568"
    }
]
const ReviewPage = () => {
  return (
    <>
    <div className='menu-page-container'>
        <img src={BackIcon} alt="back-icon" className='back-icon'/>
        <div className='menu-categories-card'>
            <div style={{display: "flex"}}>
                <h1 className='category'>Review</h1>
            </div>
            <div>
                <h6 className='category' style={{color:"#F14638",paddingTop:"25px",paddingRight:"26px",fontSize:"12px", fontFamily:"sans-serif"}}>Skip the review</h6>
            </div>
        </div>
        <div className='malnadu-logo'>
            <div>
                <img src={Malnadu} alt="company-logo"/>
            </div>
            <div>
                <p style={{color:"#1A202C",fontSize:"14px", paddingTop:"15px"}}>Malnadu Kitchen and bar</p>
            </div>
        </div>
        <div className='emoji-container'>
            <img src={sad} alt="sad" className='emoji'/>
            <img src={happy} alt="happy" className='emoji'/>
            <img src={satisfied} alt="satisfied" className='emoji'/>
        </div>
        <div className='emoji-container'>
            <h6 style={{color:"#023047",fontSize:"12px",fontWeight:100 ,paddingTop:"15px"}}>Pretty satisfied</h6>
        </div>
        <p style={{color:"#171923",fontWeight:600, paddingLeft:"25px",fontSize:"14px",paddingTop:"40px"}}>Tell us what you liked the most?</p>
        <div className='category-button-title'>
            <div className='carousel-button-title'>
                {
                    Review.length && Review.map((each)=>{
                        return (
                            <button className='category-button' style={{borderColor:`${each.color}`}}>
                                <p style={{color:`${each.color}`}} className='button-title'>{each.text}</p>
                            </button>
                        )
                    }) 
                }
                </div>
        </div>
        <p style={{color:"#171923",fontWeight:600, paddingLeft:"25px",fontSize:"14px",paddingTop:"25px"}}>Please leave a comment</p>
        <div style={{paddingLeft:"25px"}}>
            <textarea placeholder='Please share your experience' type="text" className='review-text-box'></textarea>
        </div>
        <div style={{textAlign:"center"}}>
            <h6 className='category' style={{color:"#F14638",paddingTop:"25px",paddingRight:"26px",fontSize:"12px", fontFamily:"sans-serif"}}>Skip the review</h6>
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
                    <div className="review-page-button">
                        Post Review
                    </div>
                </div>
        <br/>
        <FooterSection />
    </div>
    </>
  )
}

export default ReviewPage