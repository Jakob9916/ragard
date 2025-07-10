import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  to?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  to,
  ...props
}) => {
  const classes = `btn ${variant}-btn${className ? ' ' + className : ''}`;
  if (to) {
    return (
      <Link to={to} className={classes} tabIndex={0} {...(props as any)}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
