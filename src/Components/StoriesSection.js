import React from 'react'
import ambience from '../pics/Ambience_story.png';
import chittigarelu from '../pics/Chittigarelu.png';
import familyFriends from '../pics/Family_friends.png';

const StoriesSection = () => {
  return (
    <>
    <h1 className="story">Stories</h1>
    <div className="stories">
        <img src={ambience} alt="ambience" className="stories-tiles"/>
        <img src={chittigarelu} alt="chittigarelu" className="stories-tiles"/>
        <img src={familyFriends} alt="familyFriends" className="stories-tiles"/>
    </div>
    </>
  )
}

export default StoriesSection