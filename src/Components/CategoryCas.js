import React from 'react'
import B1 from '../pics/Category_b1.png';
import B2 from '../pics/Category_b2.png';
import B3 from '../pics/Category_b3.png';
import Line from '../pics/Line.png'
const CategoryCas = () => {
  return (
    <>
    <div className='carrousel box--shadow'>
        <div className='card-container'>
            <img src={B1} alt="c1" className='b1 b2'/>
            <h6 className='sub-title pad-prop'>Shakes</h6>
        </div>
        <div className='card-container'>
            <img src={B2} alt="c2" className='b2'/>
            <h6 className='sub-title'>Mocktails</h6>
        </div>
        <div className='card-container line-distance'>
            <img src={B3} alt="c3" className='b2' />
            <h6 className='color-props'>Cocktails</h6>
            <div className='hr-line'>
                <img src={Line} alt="line"/>
            </div>
        </div>
        <div className='card-container'>
            <img src={B3} alt="c4" className='b2'/>
            <h6 className='sub-title'>Alcohol</h6>
        </div>
        <div className='card-container'>
            <img src={B3} alt="c4" className='b2'/>
            <h6 className='sub-title'>Alcohol</h6>
        </div>
        <div className='card-container'>
            <img src={B3} alt="c4" className='b2'/>
            <h6 className='sub-title'>Alcohol</h6>
        </div>
        <div className='card-container'>
            <img src={B3} alt="c4" className='b2'/>
            <h6 className='sub-title'>Alcohol</h6>
        </div>
    </div>
    </>
  )
}

export default CategoryCas