import React  from 'react';
import './ExplorePage.css';
// importing images from local system
import imageAlarm from '../../pics/Explore_Page_alarm.png';
import locationLogo from '../../pics/Explore_Page_location.png';
import callIcon from '../../pics/Explore_Page_call_icon.png';
import cardLogo from '../../pics/Restaurant_logo.png';

import StoriesSection from './StoriesSection';
import ImageCarousel from './ImageCarousel';
import PopularInRestaurant from '../PopularInRestaurant';
import FooterSection from '../FooterSection';

//import Stories from 'react-insta-stories';

const Explore = ()=>{
    //const story = ["../pics/Ambience_story.png",'../pics/Chttigarelu.png','../pics/Family_friends.png']
    return(
        <div className="explore-page">
            <div className="top-section">
                <div>
                    <img src={imageAlarm} alt="alarm" className='alarm-clock'/>
                </div>
                <div className="top-logo-section">
                    <img src= {locationLogo} alt="location" className='location-logo'/>
                    <img src={callIcon} alt="call" className='call-icon' />
                </div>
            </div>
            <div className="cardss">
                <div className="card-top">
                    <div>
                        <img src={cardLogo} alt="logo" className="card-logo"/>
                    </div>
                    <div>
                        <h1 className="title">Telangana spice Kitchen and bar with everything</h1>
                        <h2 className="title sub-title">Tags name 1 | Tags name 2 | Tags name 3</h2>
                    </div>   
                </div>
                <div>
                    <p className="title card-description">Description of the restaurant and Loren ipsum is placeholder text commonly used
                        in the graphic, print and publishing industries for previewing layouts and visual mockups <span className='span-ele'>Read more...</span></p>  
                </div>
                <br />
                <div style={{display:"flex",justifyContent:"center"}}>
                    <div className="quick-menu-button">
                        Quick Menu
                    </div>
                </div>
                <StoriesSection />
                <ImageCarousel />
                <PopularInRestaurant />
                <FooterSection />
            </div>
        </div>
    )
}
export default Explore 