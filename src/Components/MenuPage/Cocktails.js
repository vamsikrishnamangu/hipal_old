import React from 'react';
import './Cocktails.css';
import Veg from '../../pics/veg.png';
import NonVeg from '../../pics/non_veg.png';

import BestSeller from '../../pics/Best_seller.png';
import VegCocktails from '../../pics/veg_cocktail.png';
import AddButton from '../../pics/add_button.png';
import NonVegCocktails from '../../pics/non_veg_cocktail.png';
//import { Link } from 'react-router-dom';

/*const CocktailsData = [
    {
        diet:Veg,
        bestSeller:BestSeller,
        price:232,
        cocktails:VegCocktails,
        add:AddButton,
        title:"Loaded Burger and Sour Sans Pro and",

    },
]*/

const Cocktails = () => {
  return (
    <>
    <div className='cocktail-heading'>
        <div className='cocktail-sub-heading-align'>
            <h1 className='cocktail-title'>Cocktails</h1>
            <p>19</p>
        </div>
        <hr style={{margin:"0px"}} />
    </div>
    <div className='cocktail-card'>
        <div className='cocktails-sub-container'>
            <div>
                <img src={Veg} alt="veg" className='veg'/>
            </div>
            <div>
            <img src={BestSeller} alt="best-seller" className='best-seller'/>
            </div>
        </div>
        <div className='cocktails-sub-card'>
            <div className='cocktails-cont'>
                <h4 className="subb-heading">Loaded Burger and Sour Sans Pro and</h4>
                <span>&#8377;</span> <span className='pricee'>232</span>
                <p className='descriptionn'>In publishing and graphical design, Lorem ipsum is a placeholder edasgk oegjp ipsum is a placeholder edasgk oegjp.</p>
            </div>
            <div className='image-add-container'>
                <div className='overlay-cont'>
                    <img src={VegCocktails} alt="veg-cocktail" className='cocktail-image'/>
                    <div className='overlay-img'>
                        <img src={AddButton} alt="Add" className='add-button'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br />
    <hr style={{marginLeft:"20px", marginRight:"20px", marginBottom:"0px"}}/>
    <div className='cocktail-card'>
        <div className='cocktails-sub-container'>
            <div>
                <img src={NonVeg} alt="veg" className='veg'/>
            </div>
            <div>
                <img src={BestSeller} alt="best-seller" className='best-seller'/>
            </div>

        </div>
        <div className='cocktails-sub-card'>
            <div className='cocktails-cont'>
            <h4 className="subb-heading">Loaded Burger and Sour Sans Pro and</h4>
                <span>&#8377;</span> <span className='pricee'>232</span>
                <p className='descriptionn'>In publishing and graphical design, Lorem ipsum is a placeholder edasgk oegjp ipsum is a placeholder edasgk oegjp.</p>
            </div>
            <div className='image-add-container'>
                <div className='overlay-cont'>
                    <img src={NonVegCocktails} alt="veg-cocktail" className='cocktail-image'/>
                    <div className='overlay-img'>
                    <img src={AddButton} alt="Add" className='add-button'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br />
    <hr style={{marginLeft:"20px", marginRight:"20px", marginBottom:"0px"}}/>
    <div className='cocktail-heading'>
    <div className='cocktail-sub-heading-align'>
            <h1 className='cocktail-title'>Cocktails</h1>
            <p>19</p>
        </div>
    </div>
    <hr style={{marginLeft:"20px", marginRight:"20px", marginBottom:"0px"}}/>
    <div className='cocktail-card'>
        <div className='cocktails-sub-container'>
            <div>
                <img src={NonVeg} alt="veg" className='veg'/>
            </div>
            <div>
                <img src={BestSeller} alt="best-seller" className='best-seller'/>
            </div>
        </div>
        <div className='cocktails-sub-card'>
            <div className='cocktails-cont'>
            <h4 className="subb-heading">Loaded Burger and Sour Sans Pro and</h4>
                <span>&#8377;</span> <span className='pricee'>232</span>
                <p className='descriptionn'>In publishing and graphical design, Lorem ipsum is a placeholder edasgk oegjp ipsum is a placeholder edasgk oegjp.</p>
            </div>
            <div className='image-add-container'>
                <div className='overlay-cont'>
                    <img src={NonVegCocktails} alt="veg-cocktail" className='cocktail-image'/>
                    <div className='overlay-img'>
                    <img src={AddButton} alt="Add" className='add-button'/>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="final-menu-button">
                <div className='inside-button'>
                  <div >
                    <h6 className='final-button-title'>Final Items</h6>
                </div>
                <div>
                    <span style={{fontSize:"14px"}}>2 Items</span>
                    <br />
                    <span>&#8377;</span><span>89</span>  
                </div>  
                </div>
            </div>
        </div>
        <br />
        <br />
    </div>
    </>
  )
}

export default Cocktails

/*<span>2 items</span>
<div style={{position:"relative"}}>
                <img src={addCart} alt="add-cart" style={{position:"fixed", bottom:"10px"}}/>
                <div style={{color:"#ffffff", position:"absolute", top:"21%",display:"flex"}}>
                    <div style={{paddingRight:"50px", paddingLeft:"50px"}}>
                        <p style={{margin:"0px"}}>Final Cart</p>
                    </div>
                    <div style={{paddingLeft:"100px"}}>
                        <span>2 Items</span>
                        <br />
                        <span>&#8377;</span><span>89</span>
                    </div>
                </div>
            </div>
*/