import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        ABC E-Commerce
      </div>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/products">
          Products
        </NavLink>

        <NavLink to="/cart">
          Cart
        </NavLink>

        <NavLink to="/profile">
          User Profile
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;