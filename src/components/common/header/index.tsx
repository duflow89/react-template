import { Link, NavLink } from 'react-router-dom';
import { ROOT, SAMPLE_ROUTES } from '~/constants/path';

const Header = () => (
  <header className='header'>
    <h1 className='header-logo'>
      <Link to='/'>REACT TEMPLATE 🎆</Link>
    </h1>
    <nav className='nav'>
      <Link to={ROOT.ROOT} className='nav-item'>
        HOME
      </Link>
      <NavLink to={SAMPLE_ROUTES.TODO_LIST} className='nav-item' activeClassName='active'>
        TODO LIST
      </NavLink>
    </nav>
  </header>
);

export default Header;
