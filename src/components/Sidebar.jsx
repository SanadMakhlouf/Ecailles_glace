import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [section, setSection] = useState("production");
  const location = useLocation();

  useEffect(() => {
    const stored = localStorage.getItem("activeSection");
    if (stored) {
      setSection(stored);
    } else {
      // Déduire à partir de l'URL si non défini
      if (location.pathname.startsWith("/commande")) {
        setSection("commande");
      } else {
        setSection("production");
      }
    }
  }, [location]);

  const renderLinks = () => {
    if (section === "commande") {
      return (
        <>
          <NavLink to="/commande" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            <i className="fas fa-shopping-cart"></i>
            Nouvelle Commande
          </NavLink>
          <NavLink to="/commande/clients" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            <i className="fas fa-user"></i>
            Ajouter Client
          </NavLink>
        </>
      );
    }

    // Par défaut : production
    return (
      <>
        <NavLink to="/production/add-production" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          <i className="fas fa-plus-circle"></i>
          Ajouter Production
        </NavLink>
        <NavLink to="/production/view-productions" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          <i className="fas fa-list"></i>
          Voir Productions
        </NavLink>
        <NavLink to="/production/add-stock" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          <i className="fas fa-box"></i>
          Gérer Stock
        </NavLink>
      </>
    );
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <h2>{section === "commande" ? "Commandes" : "Production"}</h2>
      </div>
      <nav className="nav-menu">{renderLinks()}</nav>
    </div>
  );
};

export default Sidebar;
