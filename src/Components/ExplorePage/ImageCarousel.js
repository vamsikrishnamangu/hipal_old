import React from 'react';
import riceBowls from '../../pics/Rice_bowls.png';
import flavours from '../../pics/Flavours_moments.png';

const ImageCarousel = () => {
  return (
    <>
    <div className="special-offers">
        <h1 className="special-offers-title">Special offers</h1>
      <div className='carousell'>
        <div className='cardd'>
            <img src={flavours} alt="flavour" className="carousel-tile"/>
        </div>
        <div className='cardd'>
            <img src={riceBowls} alt="rice" className="carousel-tile"/>
        </div>
        <div className='cardd'>
            <img src={flavours} alt="flavour" className="carousel-tile"/>
        </div>
        </div>
    </div>
    </>
  )
}

export default ImageCarousel

/**import React,{Component} from 'react';
import Stories from 'react-insta-stories';
 * const stories=[
  {
    id:1,
    img:flavours
  },
  {
    id:2,
    img:riceBowls
  },
  {
    id:3,
    img:flavours
  }
] 
        <Stories
          stories={stories}
          defaultInterval={1500}
          width={428}
          height={500}
		    />*/