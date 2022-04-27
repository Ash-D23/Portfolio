import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css'
export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {

  return (
    <Link to='/' className='btn-mobile'>
      <button
        className={`btn ${buttonStyle} ${buttonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
