import React from 'react';

const Header = ({ onLogout }) => (
  <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <button className="btn btn-danger btn-sm" onClick={onLogout}>
          Logout <i className="fas fa-sign-out-alt"></i>
        </button>
      </li>
    </ul>
  </nav>
);

export default Header;
