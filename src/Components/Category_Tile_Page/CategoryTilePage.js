import React from 'react'

import BackIcon from '../../pics/Back_icon.png';

import FilterList from '../../pics/filter_list.png';
import Search from '../../pics/Search_icon.png';
import './CategoryTilePage.css';

import Carousel1 from '../../pics/Carousel_a1.png';
import bev from '../../pics/bev.png';
import Cat1 from '../../pics/Cat1.png';
import FooterSection from '../FooterSection';
const carouselData =[
    {
        image:Carousel1,
        title:"Bevareges"
    },
    {   
        image:Carousel1,
        title:"Drinks and"
    },
    {   
        image:Carousel1,
        title:"Drinks"
    },
    {
        image:Carousel1,
        title:"Bevareges and with"
    },
    {
        image:Carousel1,
        title:"Bevareges"
    }
]

const categoryTile = [
    {
        id:1,
        url:Cat1,
        para:"Categories"
    },
    {   
        id:2,
        url:bev,
        para:"Bevarages"
    },
    {   
        id:3,
        url:Cat1,
        para:"Master Lord Logged in"
    }
]

const CategoryTilePage = () => {
  return (
    <>
    <div className='menu-page-container'>
        <img src={BackIcon} alt="back-icon" className='back-icon'/>
        <div className='menu-categories-card'>
            <div style={{display: "flex"}}>
                <h1 className='category'>Categories</h1>
            </div>
            <div>
                <img src={Search} alt="search" className='search-box'/>
                <img src={FilterList} alt="filter" className='drop-down'/>
            </div>
        </div>
        <div className='category-button-title'>
            <div className='carousel-button-title'>
                {
                   carouselData.length && carouselData.map((each)=>{
                    return (
                        <button className='category-button'>
                            <img src={each.image} alt="a1" className='button-element'/>
                            <p className='button-title'>{each.title}</p>
                        </button>
                    )
                   }) 
                }
            </div>
        </div>
        <div className='categories-thumbnails'>
            {
                categoryTile.map((each)=>{
                    return(
                        <div key={each.id} style={{position:"relative"}}>
                            <img src={each.url} alt="cat" className='cat-icon' />
                            <div key={each.id} className='category-tags' style={{position:"absolute"}}>
                                <p className='text-on-image' style={{color:"#ffffff",fontSize:"18px"}}>{each.para}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <FooterSection />
    </div>
    </>
  )
}

export default CategoryTilePage

/*        <div className='categories-thumbnails'>
            <img src={Cat1} alt="cat" className='cat-icon' style={{position:"relative"}}/>
            <div className='category-tags'>
                <p style={{color:"#ffffff", fontSize:"18px"}}>Categories</p>
            </div>
            <img src={bev} alt="bev" className='cat-icon' style={{position:"relative"}}/>
            <div className='category-tags'>
                <p style={{color:"#ffffff", fontSize:"18px"}}>Bevarages</p>
            </div>
            <img src={Cat1} alt="cat" className='cat-icon' style={{position:"relative"}}/>
            <div className='category-tags'>
                <p style={{color:"#ffffff", fontSize:"18px"}}>Master Lord Logged in</p>
            </div>
        </div> */