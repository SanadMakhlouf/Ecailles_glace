import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>Production App</h2>
      </div>
      <nav className="nav-menu">
        <NavLink
          to="/addStock"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          end
        >
          <i className="fas fa-plus-circle"></i>
          Ajouter une production
        </NavLink>
        <NavLink
          to="/view-productions"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          end
        >
          <i className="fas fa-list"></i>
          Voir les productions
        </NavLink>
        <NavLink
          to="/add-stock"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          end
        >
          <i className="fas fa-box"></i>
          Gerer Stock
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
