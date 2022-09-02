import { Outlet, Link } from 'react-router-dom';

import { ToolHeader } from './ToolHeader';

import './Layout.css';

export const Layout = () => {
  return (
  <div className="container">
      <ToolHeader headerText="The Tools!"></ToolHeader>
      <nav>
        <ul className="menu-bar">
          <li className="menu-item"><Link to="/">Home</Link></li>
          <li className="menu-item"><Link to="/calc-tool">Calc Tool</Link></li>
          <li className="menu-item"><Link to="/color-tool">Color Tool</Link></li>
          <li className="menu-item"><Link to="/car-tool">Car Tool</Link></li>
        </ul>
      </nav>
      <main>
        <Outlet />      
      </main>
      <aside>
        Sidebar
      </aside>
      <footer>
        <small>&copy; {new Date().getFullYear()} A Cool Company, Inc.</small>
      </footer>
    </div>
  );
}