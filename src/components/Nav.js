import { Outlet } from 'react-router-dom';

const Nav = () => (
  <>
    <nav>
      <h1>GitHub Forked Repos</h1>
    </nav>
    <Outlet />
  </>
);

export default Nav;
