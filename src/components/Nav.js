import { Link, Outlet } from 'react-router-dom';

const Nav = () => (
  <>
    <nav className="nav">
      <Link to="/" className="back-btn">{'<'}</Link>
      <h1>GitHub Forked Repos</h1>
    </nav>
    <Outlet />
  </>
);

export default Nav;
