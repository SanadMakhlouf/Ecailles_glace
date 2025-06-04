import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/App.css";

const Home = () => {
  const navigate = useNavigate();

  const handleSectionClick = (section) => {
    localStorage.setItem("activeSection", section);
    navigate(section === "production" ? "/production" : "/commande");
  };

  return (
    <div className="main-content">
      <div className="card" style={{ textAlign: "center" }}>
        <h1>Bienvenue dans l'application de gestion</h1>
        <p>Choisissez une section :</p>
        <button className="button" onClick={() => handleSectionClick("production")}>
          Accéder à la Production
        </button>
        <span style={{ margin: "0 1rem" }}></span>
        <button className="button" onClick={() => handleSectionClick("commande")}>
          Accéder aux Commandes
        </button>
      </div>
    </div>
  );
};

export default Home;
