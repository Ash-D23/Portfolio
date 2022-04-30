import React from 'react';
import CardItem from '../Card-item/Card-Item';
import './Cards.css'

function Cards() {
  
  return (
    <div id="projects" className='cards'>
      <h1>Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/analysis.jpg'
              text='StyliBook Store: E-Commerce Book Store App'
              label='React'
              path='/'
              large='true'
              code='https://github.com/Ash-D23/stylibook-store-app'
              demo='https://stylibookstoreapp.netlify.app/'
            />
            <CardItem
              src='images/exam.jpg'
              text='VidBook: Video Library for Cinematic Videos'
              label='React'
              path='/'
              large='true'
              code='https://github.com/Ash-D23/video-library-app'
              demo='https://vidbookapp.netlify.app/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/book.jpg'
              text='Stylish Book UI: Component Library'
              label='HTML, CSS & JS'
              path='/'
              code='https://github.com/Ash-D23/Stylish-Book-UI-Component-Library'
              demo='https://stylishbookui.netlify.app/'
            />
            <CardItem
              src='images/job.jpg'
              text='Quizz Show: Quiz App for Students'
              label='React & Firebase'
              path='/'
              code='https://github.com/Ash-D23/quizz-show-app'
              demo='https://quizzshoww.netlify.app/'
            />
            <CardItem
              src='images/map.jpg'
              text='Travel Advisor: Plan your itinerary'
              label='React & Google Maps'
              path='/'
              code='https://github.com/Ash-D23/travel-advisor'
              demo='https://travel-advisor-planner.netlify.app/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
