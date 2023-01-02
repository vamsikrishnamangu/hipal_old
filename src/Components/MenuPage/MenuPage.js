import React from 'react'

import BackIcon from '../../pics/Back_icon.png';
import SeeAll from '../../pics/See_all_icon.png';
import FilterList from '../../pics/filter_list.png';
import Search from '../../pics/Search_icon.png';

import CategoryCarousel from './CategoryCarousel';
import Cocktails from './Cocktails';
import './MenuPage.css';
import CategoryCas from './CategoryCas';
import FooterSection from '../FooterSection';
import { Link } from 'react-router-dom';
const MenuPage = () => {
  return (
    <>
    <div className='menu-page-container'>
        <Link to='../hipal/'>
            <img src={BackIcon} alt="back-icon" className='back-icon'/>
        </Link>
        <div className='menu-categories-card'>
            <div style={{display: "flex"}}>
                <h1 className='category'>Categories</h1>
                <Link to='../hipal/category_list/'>
                    <img src={SeeAll} alt="see-all" className='see-all'/>
                </Link> 
            </div>
            <div>
                <img src={Search} alt="search" className='search-box'/>
                <img src={FilterList} alt="filter" className='drop-down'/>
            </div>
        </div>
            <CategoryCarousel />
            <CategoryCas/>
            <Cocktails />
            <FooterSection />
        </div>
        
    </>
  )
}

export default MenuPage

