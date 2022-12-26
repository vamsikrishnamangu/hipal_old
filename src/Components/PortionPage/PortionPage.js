import React from 'react'
import CrossWhite from '../../pics/cross_bg_white.png';
import './PortionPage.css';
import portionSymbol from '../../pics/portion_symbol.png';
import extraSymbol from '../../pics/extra_symbol.png';
import Report from '../../pics/report.png';
import AddCart from '../../pics/add_cart.png';
const PortionPage = () => {
  const Portion = [
    {
        id:1,
        portionType:"Single",
        price:900,
        checked:true
    },
    {   
        id:2,
        portionType:"Half",
        price:500,
        checked:false
    },
    {   
        id:3,
        portionType:"Full and more",
        price:500,
        checked:false
    }
  ]
  const extra = [
    {
        id:1,
        img:portionSymbol,
        text:"Breads ad",
        color:"#F14638"
    },
    {
        id:2,
        img:extraSymbol,
        text:"Drinks ad",
        color:"#4A5568"
    },
    {
        id:3,
        img:extraSymbol,
        text:"Drinks ad",
        color:"#4A5568"
    },
    {
        id:4,
        img:extraSymbol,
        text:"Something very big",
        color:"#4A5568"
    },
    {
        id:5,
        img:extraSymbol,
        text:"Drinks ad",
        color:"#4A5568"
    },
    {
        id:6,
        img:extraSymbol,
        text:"Drinks",
        color:"#4A5568"
    },
    
  ]
  const Breads=[
    {
        id:1,
        portionType:"Garlic Bread",
        price:900,
    },
    {   
        id:2,
        portionType:"Garlic Bread",
        price:500,
    },
    {   
        id:3,
        portionType:"Garlic Bread ad Sin with somethin",
        price:500,
    }
  ]
  return (
    <>
    <div className='portion-page'>
        <div className='portion-card'>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <h1 style={{color:"#4A5568",fontSize:"20px" ,fontWeight:400}}>Choose a Portion</h1>
                <img className='cross-button' src={CrossWhite} alt="cross"/>
            </div>
            <div className='portion'>
                <h1 style={{color:"#4A5568",fontSize:"20px", fontFamily:"sans-serif",fontWeight:600}}>Portion </h1>
                <p style={{color:"#4A5568",fontSize:"12px", marginBottom:"0px", fontWeight:400}}>Please select at least 1 option</p>
                {
                    Portion.map((eachPortion)=>{
                        return(
                            <>
                            <hr style={{color:"#4A5568"}}/>
                            <div className='portions-sub'>
                            <h6 style={{color:"#4A5568", fontWeight:400,paddingTop:"2px"}}>{eachPortion.portionType}</h6>
                                <section>
                                <span style={{color:"#4A5568", fontWeight:400}}>&#8377;</span> <span style={{color:"#4A5568", fontSize:"16px",fontWeight:400}} className='price'>{eachPortion.price}</span>
                                    <input  checked={eachPortion.checked} key={eachPortion.id} value={eachPortion.portionType} name="radio" type="radio" className='radio'/>
                                </section> 
                            </div>   
                            </>         
                        )
                    })
                }
            </div>
            <div className='extra-sub'>
                <h1 style={{color:"#4A5568",fontSize:"20px", fontFamily:"sans-serif"}}>Extra</h1>
                    <div className='category-button-title'>
                        <div className='carousel-button-title'>
                                {
                                   extra.length && extra.map((each)=>{
                                    return (
                                        <button className='category-button' style={{borderColor:`${each.color}`}}>
                                            <img src={each.img} alt="a1" className='button-element'/>
                                            <p style={{color:`${each.color}`}} className='button-title'>{each.text}</p>
                                        </button>
                                    )
                                   }) 
                                }
                        </div>
                    </div>
            </div>
            <div className='portion'>
                <div style={{display:'flex', justifyContent:"space-between"}}>
                    <h1 style={{color:"#4A5568",fontSize:"20px", fontFamily:"sans-serif", fontWeight:600}}>Breads<span style={{color:"#F14638"}}>*</span></h1>
                    <h6 style={{color:"#F14638",fontSize:"12px", fontFamily:"sans-serif"}}>Remove Selection</h6>
                </div>
                <p style={{color:"#4A5568",fontSize:"12px",marginBottom:"0px" ,fontWeight:400}}>Please select at least 3 option</p>
                {
                    Breads.map((eachPortion)=>{
                        return(
                            <>
                            <hr style={{color:"#4A5568"}}/>
                            <div className='portions-sub'>
                                <h6 className='sub-titles'>{eachPortion.portionType}</h6>
                                <section>
                                <span style={{color:"#4A5568", fontWeight:400}}>&#8377;</span> <span style={{color:"#4A5568", fontSize:"16px",fontWeight:400}} className='price'>{eachPortion.price}</span>
                                </section> 
                                <div>
                                    <button className='buttons'>-</button>
                                    <span style={{color:"#4A5568"}}>1</span>
                                    <button className='buttons'>+</button>
                                </div>
                            </div>   
                            </>         
                        )
                    })
                }
            </div>
            <div className='report'>
                <img src={Report} alt="report" />
                <span style={{paddingLeft:"8px"}}>Make Required Choices</span>
            </div>
            <br />
            <div className='add-cart-button'>
                <img src={AddCart} alt="cart"/>
                <p className='cart-text'>Add to Cart</p>
            </div>
        </div>
    </div>
    </>  
  )
}

export default PortionPage