import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../config/supabase";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [section, setSection] = useState("production");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.startsWith("/commande")) {
      setSection("commande");
      localStorage.setItem("activeSection", "commande");
    } else if (location.pathname.startsWith("/production")) {
      setSection("production");
      localStorage.setItem("activeSection", "production");
    }
  }, [location.pathname]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.clear();
    navigate("/login");
  };

  const renderLinks = () => {
    if (section === "commande") {
      return (
        <>
          <NavLink to="/commande/Accueil" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            <i className="fas fa-home"></i> Accueil
          </NavLink>
          <NavLink to="/commande" className={({ isActive }) => isActive && location.pathname === "/commande" ? "nav-link active" : "nav-link"}>
            <i className="fas fa-shopping-cart"></i> Nouvelle Commande
          </NavLink>
          <NavLink to="/commande/clients" className={({ isActive }) => isActive && location.pathname === "/commande/clients" ? "nav-link active" : "nav-link"}>
            <i className="fas fa-user"></i> Ajouter Client
          </NavLink>
          <NavLink to="/commande/clients/list" className={({ isActive }) => isActive && location.pathname === "/commande/clients/list" ? "nav-link active" : "nav-link"}>
            <i className="fas fa-users"></i> Liste Clients
          </NavLink>
        </>
      );
    }
    return (
      <>
        <NavLink to="/production/Accueil" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          <i className="fas fa-home"></i> Accueil
        </NavLink>
        <NavLink to="/production/add-production" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          <i className="fas fa-plus-circle"></i> Ajouter Production
        </NavLink>
        <NavLink to="/production/view-productions" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          <i className="fas fa-list"></i> Voir Productions
        </NavLink>
        <NavLink to="/production/add-stock" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          <i className="fas fa-box"></i> Gérer Stock
        </NavLink>
      </>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="logo">
          <h2>{section === "commande" ? "Commandes" : "Production"}</h2>
        </div>
        <div className="nav-menu">{renderLinks()}</div>
        <div className="logout-section">
          <div className="nav-link" style={{ cursor: 'pointer' }} onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i> Déconnexion
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;