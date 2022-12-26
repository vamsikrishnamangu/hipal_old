import React from 'react'
import './PopularInRestaurant.css';
import PopularInRes from '../pics/Popular_in_restaurant.png';
import StarDish from '../pics/Star_dish.png';
const PopularInRestaurant = () => {
  return (
    <>
    <div className='popular-in-restaurant'>
        <h1 className="sub-heading">Popular in our restaurant</h1>
        <div className='populars'>
            <div className='sub-populars'>
                <img src={PopularInRes} alt="popularss" className='each-pops'/>
                <p className='populars-para'>Loaded Burger and Sour Sans Pro...</p>
                <img src={StarDish} alt="star-dish" className='star-dish'/>
            </div>
            <div>
                <img src={PopularInRes} alt="popularss" className='each-pops'/>
                <p className='populars-para'>Loaded Burger and Sour Sans Pro...</p>
                <img src={StarDish} alt="star-dish" className='star-dish'/>
            </div>
            <div>
                <img src={PopularInRes} alt="popularss" className='each-pops'/>
                <p className='populars-para'>Loaded Burger and Sour Sans Pro...</p>
                <img src={StarDish} alt="star-dish" className='star-dish'/>
            </div>
        </div>
    </div>
    <br />
    </>
  )
}

export default PopularInRestaurant