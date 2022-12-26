import React from 'react'
import BackIcon from '../../pics/Back_icon.png';
import mood from '../../pics/mood.png';
import Occasion from '../../pics/Occasion.png';
import portion from '../../pics/portion.png';
import spice from '../../pics/spice_level.png';
import meal from '../../pics/meal.png';
import wait from '../../pics/waiting_time.png';
import texture from '../../pics/Texture.png';
import leftarrow from '../../pics/left_arrow_red.png';
import rightarrow from '../../pics/right_arrow_red.png';
import addCart from '../../pics/add_cart.png';
import './SmartSuggestor.css';
import FooterSection from '../FooterSection';

const Suggestor=[
    {
        id:1,
        title:"Type of meal",
        icon:meal,
        color:"#F14638"
    },
    {
        id:2,
        title:"Portion",
        icon:portion,
        color:"#4A5568"
    },
    {
        id:3,
        title:"Spice Level",
        icon:spice,
        color:"#4A5568"
    },
    {
        id:4,
        title:"Occasion",
        icon:Occasion,
        color:"#4A5568"
    },
    {
        id:5,
        title:"Texture",
        icon:texture,
        color:"#4A5568"
    },
    {
        id:6,
        title:"Waiting Time",
        icon:wait,
        color:"#4A5568"
    },
    {
        id:7,
        title:"mood",
        icon:mood,
        color:"#4A5568"
    }
]
const Meal =[
    {
        id:1,
        text:"Snacks",
        color:"#F14638"
    },
    {
        id:2,
        text:"Lunch",
        color:"#4A5568"
    },
    {
        id:3,
        text:"Breakfast",
        color:"#4A5568"
    },
    {
        id:4,
        text:"Dinner",
        color:"#4A5568"
    }
]
const SmartSuggestor = () => {
  return (
    <>
    <div className='menu-page-container'>
        <img src={BackIcon} alt="back-icon" className='back-icon'/>
        <div className='menu-categories-card'>
            <div style={{display: "flex"}}>
                <h1 className='category'>Smart Suggestor</h1>
            </div>
        </div>
        <div className='extra-sub'>
                <h1 style={{color:"#4A5568",fontSize:"12px",paddingLeft:"20px" ,fontFamily:"sans-serif"}}>Please select options below to get a smart suggestion specially made for you.</h1>
                    <div className='category-button-title'>
                        <div className='carousel-button-title'>
                                {
                                   Suggestor.length && Suggestor.map((each)=>{
                                    return (
                                        <button className='category-button' style={{borderColor:`${each.color}`}}>
                                            <img src={each.icon} alt="a1" className='button-element'/>
                                            <p style={{color:`${each.color}`}} className='button-title'>{each.title}</p>
                                        </button>
                                    )
                                   }) 
                                }
                        </div>
                    </div>
        </div>
        <div style={{display:"flex"}}>
            <div style={{paddingTop:"150px", paddingLeft:"10px"}}>
                <img src={leftarrow} alt="left-arrow"/>
            </div>
            <div className='suggestor-box'>
                <div style={{display:"flex"}}>
                    <div>
                        <img src={meal} alt="alt" style={{paddingRight:"5px"}}/>
                    </div>
                    <div style={{textAlign:"center", paddingTop:"5px"}}>
                        <h6 style={{color:"#F14638", margin:"0px", fontSize:"16px"}}>Type of meal</h6>
                    </div>
                </div>
                <br />
                <div>
                    <h6 style={{fontWeight:600, color:"#2D3748"}}>
                        What is the best time to have the dish?
                    </h6>
                    <p style={{fontSize:"14px", color:"#171923"}}>
                        Select the type of meal you want to have?
                    </p>
                    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"flex-start"}}>
                    {
                        Meal.length && Meal.map((each)=>{
                            return(
                                <>
                                    <button className='type-of-meal-button' style={{borderColor:`${each.color}`}}>
                                        <h6 style={{color:`${each.color}`, margin:"0px"}}>{each.text}</h6>
                                    </button>
                                </>
                            )
                        })
                    }
                    </div>
                    <div style={{display:"flex", justifyContent:"center", alignContent:"center"}}>
                        <p style={{color:"#F14638", fontSize:"14px"}}>Skip this question</p>
                    </div>
                </div> 
            </div>
            <div style={{paddingTop:"150px", paddingRight:"10px"}}>
                <img src={rightarrow} alt="right-arrow"/>
            </div>
        </div>
        <div style={{textAlign:"center"}} className='add-cart-button'>
            <img src={addCart} alt="add-cart" />
            <p className='cart-text'>Review</p>
        </div>
        <FooterSection />
    </div>
    </>
  )
}

export default SmartSuggestor