import React from 'react'
import Carousel1 from '../../pics/Carousel_a1.png';
import './MenuPage.css';
import './CategoryCarousel.css';
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
        title:"Bevareges"
    }
]
const CategoryCarousel = () => {
  return (
    <>
    <div className='menu-category-button-title'>
            <div className='menu-carousel-button-title'>
                {
                   carouselData.length && carouselData.map((each)=>{
                    return (
                        <article className='menu-category-button'>
                            <div>
                                <img style={{paddingLeft:"10px", paddingTop:"8px", paddingBottom:"8px", paddingRight:"4px"}} src={each.image} alt="a1"/>
                            </div>
                            <div>
                                <p style={{margin:"0px",paddingRight:"5px"}} className='button-title'>{each.title}</p> 
                            </div>
                        </article>
                    )
                   }) 
                }
            </div>
        </div>
    </>
  )
}
export default CategoryCarousel
