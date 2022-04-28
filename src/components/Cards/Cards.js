import React from 'react';
import CardItem from '../Card-item/Card-Item';
import './Cards.css'

function Cards() {
  
  return (
    <div className='cards'>
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
              code='https://github.com/Ash-D23/student-performance-react-app'
              demo='https://ash-d23.github.io/student-performance-react-app/'
            />
            <CardItem
              src='images/exam.jpg'
              text='VidBook: Video Library for Cinematic Videos'
              label='React'
              path='/'
              large='true'
              code='https://github.com/Ash-D23/Exam-Assistant-App'
              demo='https://ash-d23.github.io/Exam-Assistant-App/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/book.jpg'
              text='Stylish Book UI: Component Library'
              label='HTML, CSS & JS'
              path='/'
              code='https://github.com/Ash-D23/ECommerce-Book-Store'
              demo='https://ash-d23.github.io/ECommerce-Book-Store/'
            />
            <CardItem
              src='images/job.jpg'
              text='Quizz Show: Quiz App for Students'
              label='React & Firebase
              path='/'
              code='https://github.com/Ash-D23/job-search-app'
              demo='https://ash-d23.github.io/job-search-app/'
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
