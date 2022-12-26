import React from 'react'
import BackIcon from '../../pics/Back_icon.png';
import mimosa from '../../pics/mimosa_pic.png';
import EditIcon from '../../pics/edit_icon.png';
import arrowUp from '../../pics/arrow_up.png';
import arrowDown from '../../pics/arrow_down.png';
import addCart from '../../pics/add_cart.png';
import FooterSection from '../FooterSection';
import './FinalCartPage.css';

const sliderPortion = [
    {
        id:1,
        title:"Garlic bread",
        multiple:"x2",
        rupees:"900",
        hr:true
    },
    {
        id:2,
        title:"Garlic bread",
        multiple:"x2",
        rupees:"900",
        hr:true
    },
    {
        id:3,
        title:"Garlic bread",
        multiple:"x2",
        rupees:"900",
        hr:false
    }
]

const FinalCartPage = () => {
  return (
    <>
    <div className='menu-page-container'>
        <img src={BackIcon} alt="back-icon" className='back-icon'/>
        <div className='menu-categories-card'>
            <div style={{display: "flex"}}>
                <h1 className='category'>Final cart</h1>
            </div>
        </div>
        <div className='mini-portion'>
            <div className='title-pic-rupees'>
                <img src={mimosa} alt="mimosa"/>
                <div style={{paddingLeft:"26px"}}>
                    <p style={{color:"#023047", fontSize:"18px", margin:"0px"}}>Mimosa</p>
                    <span className='rupee-price'>&#8377;</span> <span className='rupee-price price'>232</span><span className='rupee-price'> 232</span>
                </div>
                
            </div>
            <div>
                <img src={EditIcon} alt="edit-icon" style={{paddingRight: "22px"}}/>
            </div>
        </div>
        <div className='portion-drop-down' style={{display:"flex", justifyContent:"space-between", paddingRight:"25px"}}>
            <h6 style={{margin:"0px",color:"#4A5568" }}>Portions</h6>
            <img src={arrowDown} alt="down" className='arrow'/>
        </div>
        <div className='mini-portion'>
            <div className='title-pic-rupees'>
                <img src={mimosa} alt="mimosa"/>
                <div style={{paddingLeft:"26px"}}>
                    <p style={{color:"#023047", fontSize:"18px", margin:"0px"}}>Mimosa</p>
                    <span className='rupee-price'>&#8377;</span> <span className='rupee-price'>232</span>
                    <h6 className='rupee-price' style={{paddingLeft:"2px"}}>x2</h6>
                </div>
            </div>
            <div>
                <img src={EditIcon} alt="edit-icon" style={{paddingRight: "22px"}}/>
            </div>
        </div>
        <hr style={{margin:"0px"}}/>
        <div className='mini-portion'>
            <div className='title-pic-rupees'>
                <img src={mimosa} alt="mimosa"/>
                <div style={{paddingLeft:"26px"}}>
                    <p style={{color:"#023047", fontSize:"18px", margin:"0px"}}>Mimosa</p>
                    <span className='rupee-price'>&#8377;</span> <span className='rupee-price'>232</span>
                    <h6 className='rupee-price' style={{paddingLeft:"2px"}}>x3</h6>
                </div>
            </div>
            <div>
                <img src={EditIcon} alt="edit-icon" style={{paddingRight: "22px"}}/>
            </div>
        </div>
        <div style={{display:"flex", justifyContent:"space-between", paddingRight:"25px"}}>
            <h6 style={{margin:"0px",color:"#4A5568" ,paddingLeft:"25px"}}>Portions</h6>
            <img src={arrowUp} alt="up" className='arrow'/>
        </div>
        <br />
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <h5 style={{color:"#E53E3E",fontSize:"18px", paddingLeft:"35px"}}>Slider Portion</h5>
            <h5 style={{paddingLeft:"2px",fontSize:"15px", color:"#E53E3E", paddingRight:"25px"}}>x3</h5>
        </div>
        <br style={{margin:"0px"}}/>
            <div className='slider-portion'>
            {
                sliderPortion.length && sliderPortion.map((each)=>{
                    return(
                        <>
                        <div className='sub-slider-portion'>
                            <h6>{each.title}</h6>
                            <h6>{each.multiple}</h6>
                            <div>
                                <span>&#8377;</span> <span>{each.rupees}</span>
                            </div>
                        </div>
                        <hr style={{margin:"6px"}}/>
                        </>
                    )
                })
            }
        </div>
        <br />
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <h5 style={{color:"#E53E3E",fontSize:"18px", paddingLeft:"35px"}}>Slider Portion</h5>
            
        </div>
        <br style={{margin:"0px"}}/>
        <div className='slider-portion'>
            {
                sliderPortion.length && sliderPortion.map((each)=>{
                    return(
                        <>
                        <div className='sub-slider-portion'>
                            <h6>{each.title}</h6>
                            <h6>{each.multiple}</h6>
                            <div>
                                <span>&#8377;</span> <span>{each.rupees}</span>
                            </div>
                        </div>
                        <hr style={{margin:"6px"}}/>
                        </>
                    )
                })
            }
        </div>
        <br />
        <div style={{display:"flex",justifyContent:"flex-end", paddingBottom:"10px"}} className='break-state-shadow'>
            <button className='order-now-button'>
                Order More
            </button>
        </div >
        <br />
        <div style={{textAlign:"center"}} className='add-cart-button'>
            <img src={addCart} alt="add-cart" />
            <p className='cart-text'>Review</p>
        </div>
        <br />
        <FooterSection />
    </div>
    </>
  )
}

export default FinalCartPage
/**<h5 style={{paddingLeft:"2px",fontSize:"15px", color:"#E53E3E", paddingRight:"25px"}}>x3</h5> */