import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    <a href="/" className="brand-link">
      <span className="brand-text font-weight-light">MAHA PARFUME</span>
    </a>
    <div className="sidebar">
      <nav>
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
          <li className="nav-item">
            <Link to="/admin" className="nav-link">
              <i className="nav-icon fas fa-tachometer-alt"></i>
              <p>Dashboard</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
);

export default Sidebar;
