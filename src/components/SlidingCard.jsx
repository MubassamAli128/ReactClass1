import React from "react";
import HomeSlideCard from './HomeSlideCard/HomeSlideCard';
// import './slidingcard.css';
// import exp from "constants";

const SlidingCards=()=>{
    const slideCardsData=[
        {
            image:'./images/personl.webp',
            imgAltText:'Person 1',
            personName:'Mubassam',
            designation:'CTO',
            badges:['Product','Illustrator']
        }
    ];
    
    return(
        <div style={{display:'flex', gap:'10px', margin:'10px'}}>
            {
                slideCardsData.map((cardData, index)=>{
                    <HomeSlideCard key={index} image={cardData.image} imgAltText={cardData.imgAltText} personName={cardData.personName} designation={cardData.designation} badges={cardData.badges}/>
                })
            }
        </div>
    )
}

export default SlidingCards;