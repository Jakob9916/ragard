import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Menu.scss'; // Import the styles for the menu
import logo from '../assets/logo.png'; // Ändra till rätt filnamn om det är svg eller png

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className='menu'>
      <div className='menu-logo'>
        <Link to='/'>
          <img src={logo} alt='Rågård logotyp' />
        </Link>
      </div>
      <button
        className={`menu-burger${open ? ' open' : ''}`}
        aria-label='Öppna meny'
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>
      <ul className={`menu-list${open ? ' open' : ''}`}>
        <li className='menu-item'>
          <Link to='/' onClick={() => setOpen(false)}>
            Hem
          </Link>
        </li>
        <li className='menu-item'>
          <Link to='/about' onClick={() => setOpen(false)}>
            Om oss
          </Link>
        </li>
        <li className='menu-item'>
          <Link to='/jobs' onClick={() => setOpen(false)}>
            Jobb
          </Link>
        </li>
        <li className='menu-item'>
          <Link to='/partners' onClick={() => setOpen(false)}>
            Partners
          </Link>
        </li>
        <li className='menu-item'>
          <Link to='/troubleshooting' onClick={() => setOpen(false)}>
            Felsökning
          </Link>
        </li>
        <li className='menu-item'>
          <Link to='/video' onClick={() => setOpen(false)}>
            Video
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
