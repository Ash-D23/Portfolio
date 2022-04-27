import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';

function CardItem(props) {
  
  const showlink = (link) => {
    window.location.assign(link);
  }

  return (
    
    <>
      <li className='cards__item'>
        <Link onClick={props.onclick} className='cards__item__link' to={props.path}>

          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
            <div class="image_overlay">
              <Button
                className='btns'
                buttonStyle='btn--outline image_button'
                buttonSize='btn--large'
                onClick={()=>showlink(props.code)}
              >
                View
              </Button>
              <Button
                className='btns'
                buttonStyle='btn--primary image_button'
                buttonSize='btn--large'
                onClick={()=>showlink(props.demo)}
              >
                Demo
              </Button>
            </div>
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>

        </Link>
      </li>
    </>
  );
}

export default CardItem;
