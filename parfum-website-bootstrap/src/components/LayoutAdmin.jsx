import React from 'react';
import { Link } from 'react-router-dom';

const LayoutAdmin = ({ children }) => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div className="wrapper">
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav w-100 justify-content-between align-items-center">
          <div className="d-flex">
            <li className="nav-item">
              <a className="nav-link" data-widget="pushmenu" href="#" role="button">
                <i className="fas fa-bars" />
              </a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <Link to="/" className="nav-link">Kembali ke Toko</Link>
            </li>
          </div>

          <li className="nav-item">
            <button className="btn btn-danger btn-sm" onClick={handleLogout}>
              <i className="fas fa-sign-out-alt"></i> Logout
            </button>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="content-wrapper p-3">
        {children}
      </div>
    </div>
  );
};

export default LayoutAdmin;
