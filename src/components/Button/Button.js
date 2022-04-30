import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Button.css'
export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  path
}) => {

  return (
    <Link to={path || '/'} className='btn-mobile'>
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
