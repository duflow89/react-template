import { Link, NavLink } from 'react-router-dom';
import { SAMPLE_ROUTES } from '~/constants/path';

const Header = () => (
  <header className='header'>
    <div className='header-inner'>
      <h1 className='header-logo'>
        <Link to='/'>REACT TEMPLATE 🎆</Link>
      </h1>
      <nav className='nav'>
        <div className='nav-item'>
          <NavLink to={SAMPLE_ROUTES.ROOT} activeClassName='active'>
            ACCOUNT
          </NavLink>
          <div className='nav-sub-item'>
            <Link to={SAMPLE_ROUTES.TODO_LIST}>TODO LIST</Link>
          </div>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
