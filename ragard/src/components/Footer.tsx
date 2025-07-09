import React from 'react';
import '../styles/Footer.scss';
import svLogo from '../assets/sakervatten.webp'; // Byt till rätt filnamn om det behövs

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-left'>
          <span>© {new Date().getFullYear()} Rågård AB</span>
        </div>
        <div className='footer-center'>
          <span>Org.nr: 556123-4567</span>
          <span> | </span>
          <a href='mailto:info@ragard.se'>info@ragard.se</a>
        </div>
        <div className='footer-right'>
          <img src={svLogo} alt='Säker Vatten certifiering' className='footer-cert' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
