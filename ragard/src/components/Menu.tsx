import { Link } from 'react-router-dom';
import '../styles/Menu.scss'; // Import the styles for the menu

const Menu = () => {
  return (
    <nav className='menu'>
      <ul className='menu-list'>
        <li className='menu-item'>
          <Link to='/'>Home</Link>
        </li>
        <li className='menu-item'>
          <Link to='/about'>About</Link>
        </li>
        <li className='menu-item'>
          <Link to='/jobs'>Jobs</Link>
        </li>
        <li className='menu-item'>
          <Link to='/partners'>Partners</Link>
        </li>
        <li className='menu-item'>
          <Link to='/troubleshooting'>Troubleshooting</Link>
        </li>
        <li className='menu-item'>
          <Link to='/video'>Video</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
