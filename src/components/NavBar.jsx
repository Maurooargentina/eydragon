import React from 'react';
import CartWidget from './CartWidget';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">EyDragon</a>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">Ofertas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Ingresar</a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
