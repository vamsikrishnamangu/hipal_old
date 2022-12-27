import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CategoryImage from '../../pics/Category_image.png'; 
import cross from '../../pics/cross.png';
import veg from '../../pics/veg.png';
import seasonal from '../../pics/seasonal.png';
import portionSymbol from '../../pics/portion_symbol.png';
import verticalLine from '../../pics/verticalLine.png';
//import PopularInRestaurant from '../PopularInRestaurant';
import PopularInRes from '../../pics/Popular_in_restaurant.png';
import StarDish from '../../pics/Star_dish.png';
//import AddCart from '../../pics/add_cart.png';
import FooterSection from '../FooterSection';
import '../PopularInRestaurant.css';
import './ProductPage.css';
function ProductPage() {
    const imagesCarousel= [
            {
                image:CategoryImage,
                alt:"First slide"
            },         
            {
                image:CategoryImage,
                alt:"Second slide"
            },
            {
                image:CategoryImage,
                alt:"Third slide"
            }

    ]

    const portionCard = [
        {
            portions:"Half",
            price:"223",
            line:verticalLine
        },
        {
            portions:"Full",
            price:"223",
            line:verticalLine
        },
        {
            portions:"Slider",
            price:"223",
            line:verticalLine
        },
        {
            portions:"Slider",
            price:"223",
            line:verticalLine
        },
    ]

  return (
    <div style={{backgroundImage:`url(${CategoryImage})`}}>
    <Carousel >
        {
            imagesCarousel.map((each)=>{
                return(
                    <Carousel.Item>
                        <img src={cross} alt="cross" className="cross-symbol"/>
                        <div style={{backgroundImage:`url(${each.image})`}} className="carousel-images"></div>
                    </Carousel.Item>
                )
            })
        }
    </Carousel>
    <div className='product-card' >
        <div className='heading-card'>
            <h1 className='heading'>Mimosa</h1>
            <div>
                <span>&#8377;</span> <span className='price'>232</span>
            </div>
        </div>
        <div>
            <img src={veg} alt="veg"/>
            <span style={{color:"green", paddingLeft:"5px", fontSize:"12px"}}>Veg</span>
            <img src={seasonal} alt="seasonal" style={{paddingLeft:"10px"}} />
        </div>
        <div>
            <p style={{color:"#4A5568", fontSize:"12px", paddingTop:"5px"}}>Average time 24 minutes(running on delay)</p>
            <p style={{color:"#4A5568", fontSize:"15px",fontWeight:400, paddingTop:"5px", paddingRight:"11px"}}>In publishing and graphic design, Lorem ipsum is a placeholder In publishing and graphic design, Lorem ipsum is a placeholder <span style={{fontWeight:'bolder'}}>Read more</span></p>
        </div>
        <div>
            <img src={portionSymbol} alt="portion"/>
            <span style={{color:"#E53E3E",fontSize:"14px",fontWeight:400, paddingLeft:"6px"}}>4 Portions available</span>
        </div>
        <div className='product-portion-card' style={{paddingTop:"10px"}}>
            {
                portionCard.map((each)=>{
                    return(
                        <>
                        <div>
                            <span style={{color:"#4A5568", width:"35px", height:"40px", paddingLeft:"10px"}}>{each.portions}</span>
                            <br />
                            <span style={{color:"#4A5568", fontSize:"12px", paddingTop:"0px", paddingLeft:"10px"}}>&#8377;</span><span style={{color:"#4A5568", fontSize:"12px"}}>{each.price}</span>
                        </div>
                        <div>
                            <img src={each.line} alt="vertical-line"/>
                        </div>
                        </>
                    )
                })
            }
        </div>
        <br />
        <div style={{paddingBottom:"10px",position:"relative"}}>
            <img src={portionSymbol} alt="portion"/>
            <span style={{color:"#E53E3E",fontSize:"14px",fontWeight:400, paddingLeft:"6px"}}>7 Extras available</span>
            <div style={{display:"flex",justifyContent:"center", top:"500px"}}>
                <div className="product-menu-button">
                    Add to Cart
                </div>
            </div>
        </div>
        <ul className='extras-list'>
            <li className='extras-items'>Bevarages</li>
            <li className='extras-items'>Bevarages</li>
            <li className='extras-items'>Bevarages</li>
            <li className='extras-items'>Bevarages</li>
            <li className='extras-items'>Bevarages</li>
            <li className='extras-items'>Bevarages</li>
            <li className='extras-items'>Bevarages</li>
        </ul>
        <br />
        <div>
            <h5 style={{paddingTop:"10px", fontWeight:400, fontSize:"20px"}}>Best Pairs with</h5>
        </div>
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
    <FooterSection />

    </div>
  );
}

export default ProductPage;

/*<Carousel>
      <Carousel.Item>    
        <img src={cross} alt="cross" className='cross-symbol'/>
        <img
          className="d-block w-100"
          src={CategoryImage}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CategoryImage}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CategoryImage}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    
    
            <div>
                <p style={{color:"#4A5568"}}>Half</p>
                <span style={{color:"#4A5568", fontSize:"12px"}}>&#8377;</span><span style={{color:"#4A5568", fontSize:"12px"}}>232</span>
            </div>
            <div>
                <p style={{color:"#4A5568"}}>Half</p>
                <span style={{color:"#4A5568", fontSize:"12px"}}>&#8377;</span><span style={{color:"#4A5568", fontSize:"12px"}}>232</span>
            </div>
            <div>
                <p style={{color:"#4A5568"}}>Half</p>
                <span style={{color:"#4A5568", fontSize:"12px"}}>&#8377;</span><span style={{color:"#4A5568", fontSize:"12px"}}>232</span>
            </div>
    <div style={{backgroundImage:`url(${CategoryImage})`}} className="bg-cont">    </div>
            */