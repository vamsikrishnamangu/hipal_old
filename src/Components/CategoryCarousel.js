import React from 'react'
import Carousel1 from '../pics/Carousel_a1.png';
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
    <div className='category-button-title'>
            <div className='carousel-button-title'>
                {
                   carouselData.length && carouselData.map((each)=>{
                    return (
                        <article className='category-button'>
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

/**    <div className='cont'>
        <div className='carrousel'>
            <article className='card'>
                <img src={C1} alt="b1" className='c1 c2'/>
            </article>
            <article className='card'>
                <img src={C2} alt="b2" className='c2'/>
            </article>
            <article className='card'>
                <img src={C3} alt="b3" className='c2'/>
            </article>
        </div>     
    </div> */