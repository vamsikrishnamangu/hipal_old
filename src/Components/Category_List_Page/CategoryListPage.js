import React from 'react'

import BackIcon from '../../pics/Back_icon.png';

import Bulb from '../../pics/bulb.png';
import Search from '../../pics/Search_icon.png';
import './CategoryListPage.css';

import HugeCategoryName from '../../pics/Huge_category_name.png';
import Carousel1 from '../../pics/Carousel_a1.png';
import FooterSection from '../FooterSection';
import { Link } from 'react-router-dom';
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
        title:"Bevareges with add"
    },
    {
        image:Carousel1,
        title:"Bevareges"
    },
    {
        image:Carousel1,
        title:"Drinks"
    }
]
const HugeCategoryData = [
    {
        image:HugeCategoryName,
        title:"A huge category name"
    },
    {
        image:HugeCategoryName,
        title:"A huge category name and something"
    },
    {
        image:HugeCategoryName,
        title:"A huge category name"
    },
    {
        image:HugeCategoryName,
        title:"A huge category name"
    },
    {
        image:HugeCategoryName,
        title:"A huge category name and something"
    },
    {
        image:HugeCategoryName,
        title:"A huge category name"
    },
    {
        image:HugeCategoryName,
        title:"A huge category name"
    },
    {
        image:HugeCategoryName,
        title:"A huge category name and something"
    },
    {
        image:HugeCategoryName,
        title:"A huge category name"
    }
]
const CategoryListPage = () => {
  return (
    <>
    <div className='menu-page-container'>
        <Link to='../hipal/menu/'>
            <img src={BackIcon} alt="back-icon" className='back-icon'/>
        </Link>
        <div className='menu-categories-card'>
            <div style={{display: "flex"}}>
                <h1 className='category'>Categories</h1>
             </div>
            <div>
                <img src={Search} alt="search" className='search-box'/>
                <img src={Bulb} alt="bulb" className='drop-down'/>
            </div>
        </div>
        <div className='category-button-title'>
            <div className='carousel-button-title'>
                {
                   carouselData.length && carouselData.map((each)=>{
                    return (
                        <button className='category-list-button'>
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
                HugeCategoryData.map((each)=>{
                    return(
                        <>
                        <div className='category-list'>
                            <img src={each.image} alt="category" className='category-list-image'/>
                            <h4 className='category-list-title'>{each.title}</h4>
                        </div>
                        </>
                    )
                })
            }
        </div>
        <FooterSection />
    </div>
    </>
  )
}

export default CategoryListPage