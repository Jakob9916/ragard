import React from 'react';
import '../styles/Button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  return (
    <button className={`btn ${variant}-btn${className ? ' ' + className : ''}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
