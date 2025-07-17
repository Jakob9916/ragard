import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Menu.scss';
import logo from '../assets/logo.png';

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className='menu'>
      <div className='menu-logo'>
        <NavLink to='/'>
          <img src={logo} alt='Rågård logotyp' />
        </NavLink>
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
          <NavLink to='/' onClick={() => setOpen(false)} end>
            Hem
          </NavLink>
        </li>
        <li className='menu-item'>
          <NavLink to='/troubleshooting' onClick={() => setOpen(false)}>
            Felsökning
          </NavLink>
        </li>
        <li className='menu-item'>
          <NavLink to='/jobs' onClick={() => setOpen(false)}>
            Jobb
          </NavLink>
        </li>
        <li className='menu-item'>
          <NavLink to='/partners' onClick={() => setOpen(false)}>
            Partners
          </NavLink>
        </li>
        <li className='menu-item'>
          <NavLink to='/about' onClick={() => setOpen(false)}>
            Om oss
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
