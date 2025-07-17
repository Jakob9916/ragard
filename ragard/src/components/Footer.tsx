import React from 'react';
import '../styles/Footer.scss';
import svLogo from '../assets/sakervatten.webp'; // Byt till rätt filnamn om det behövs
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-left'>
          <span>© {new Date().getFullYear()} All rights reserved Rågård AB</span>
          <span>Skattkärrsvägen 85</span>
          <span>656 71 Skattkärr</span>
        </div>
        <div className='footer-center'>
          <a href='mailto:info@ragard.se'>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <Link to='/integrity' className='footer-policy-link'>
            Integritetspolicy
          </Link>
        </div>
        <div className='footer-right'>
          <img src={svLogo} alt='Säker Vatten certifiering' className='footer-cert' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
