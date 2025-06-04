import React from "react";
import "../styles/AccueilProduction.css";

const AccueilProduction = () => {
  // Ces données seront à remplacer par des données réelles plus tard
  const stats = {
    productionJour: {
      value: "150 kg",
      evolution: "+15%",
      isPositive: true,
    },
    stockTotal: {
      value: "1,250 kg",
      evolution: "-5%",
      isPositive: false,
    },
    efficacite: {
      value: "92%",
      evolution: "+2%",
      isPositive: true,
    },
  };

  // Données mockées pour les productions récentes
  const productionsRecentes = [
    {
      id: 1,
      date: "2024-03-20",
      quantite: "45 kg",
      type: "Écailles Standard",
      statut: "Terminée",
    },
    {
      id: 2,
      date: "2024-03-19",
      quantite: "38 kg",
      type: "Écailles Premium",
      statut: "Terminée",
    },
    {
      id: 3,
      date: "2024-03-19",
      quantite: "42 kg",
      type: "Écailles Standard",
      statut: "Terminée",
    },
    {
      id: 4,
      date: "2024-03-18",
      quantite: "35 kg",
      type: "Écailles Premium",
      statut: "Terminée",
    },
    {
      id: 5,
      date: "2024-03-18",
      quantite: "40 kg",
      type: "Écailles Standard",
      statut: "Terminée",
    },
  ];

  return (
    <div className="accueil-production">
      <h1>Tableau de Bord Production</h1>

      <div className="stats-cards">
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-industry"></i>
          </div>
          <div className="stat-content">
            <h3>Production Aujourd'hui</h3>
            <div className="stat-value">{stats.productionJour.value}</div>
            <div
              className={`stat-evolution ${
                stats.productionJour.isPositive ? "positive" : "negative"
              }`}
            >
              <i
                className={`fas fa-arrow-${
                  stats.productionJour.isPositive ? "up" : "down"
                }`}
              ></i>
              {stats.productionJour.evolution}
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-box"></i>
          </div>
          <div className="stat-content">
            <h3>Stock Total</h3>
            <div className="stat-value">{stats.stockTotal.value}</div>
            <div
              className={`stat-evolution ${
                stats.stockTotal.isPositive ? "positive" : "negative"
              }`}
            >
              <i
                className={`fas fa-arrow-${
                  stats.stockTotal.isPositive ? "up" : "down"
                }`}
              ></i>
              {stats.stockTotal.evolution}
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-chart-line"></i>
          </div>
          <div className="stat-content">
            <h3>Efficacité</h3>
            <div className="stat-value">{stats.efficacite.value}</div>
            <div
              className={`stat-evolution ${
                stats.efficacite.isPositive ? "positive" : "negative"
              }`}
            >
              <i
                className={`fas fa-arrow-${
                  stats.efficacite.isPositive ? "up" : "down"
                }`}
              ></i>
              {stats.efficacite.evolution}
            </div>
          </div>
        </div>
      </div>

      <div className="actions-rapides">
        <h3> Actions Rapides </h3>
        <div className="action-cards">
          <a href="/">
            <div className="action-card">
              <i className="fas fa-plus"></i>
              <h4>Nouvelle Production</h4>
            </div>
          </a>
          <a href="/">
            <div className="action-card">
              <i className="fas fa-box"></i>
              <h4>Gerer Stock</h4>
            </div>
          </a>
          <a href="/">
            <div className="action-card">
              <i className="fas fa-list"></i>
              <h4>Voir Productions</h4>
            </div>
          </a>
        </div>
      </div>

      <div className="productions-recentes">
        <h3>Productions Récentes</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Quantité</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              {productionsRecentes.map((production) => (
                <tr key={production.id}>
                  <td>{production.date}</td>
                  <td>{production.type}</td>
                  <td>{production.quantite}</td>
                  <td>
                    <span
                      className={`statut ${production.statut.toLowerCase()}`}
                    >
                      {production.statut}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AccueilProduction;
