import React from 'react';
import '../styles/Card.scss';

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`card ${className}`}>
      <h2 className='card-title'>{title}</h2>
      <div className='card-content'>{children}</div>
    </div>
  );
};

export default Card;
