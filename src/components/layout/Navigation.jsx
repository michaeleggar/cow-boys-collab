import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/">Shop</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/blog">Blog</NavLink>
    </nav>
  );
}
