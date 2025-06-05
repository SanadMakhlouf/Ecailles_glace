import React from "react";
import "../styles/AccueilProduction.css"; // réutilisation du même style

const AccueilCommande = () => {
  // Données mockées pour le dashboard commandes
  const stats = {
    commandesJour: {
      value: "24 commandes",
      evolution: "+8%",
      isPositive: true,
    },
    revenusTotal: {
      value: "3 200 €",
      evolution: "+12%",
      isPositive: true,
    },
    satisfaction: {
      value: "87%",
      evolution: "-3%",
      isPositive: false,
    },
  };

  // Données mockées pour les commandes récentes
  const commandesRecentes = [
    { id: 1, date: "2024-05-01", client: "Dupond SARL", montant: "250 €", statut: "Livrée" },
    { id: 2, date: "2024-05-02", client: "Martin & Fils", montant: "320 €", statut: "En cours" },
    { id: 3, date: "2024-05-03", client: "Leclerc", montant: "150 €", statut: "Livrée" },
    { id: 4, date: "2024-05-04", client: "Durand SAS", montant: "540 €", statut: "Annulée" },
    { id: 5, date: "2024-05-05", client: "Petit & Co", montant: "410 €", statut: "En cours" },
  ];

  return (
    <div className="accueil-production">
      <h1>Tableau de Bord Commandes</h1>

      <div className="stats-cards">
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-shopping-cart"></i>
          </div>
          <div className="stat-content">
            <h3>Commandes Aujourd'hui</h3>
            <div className="stat-value">{stats.commandesJour.value}</div>
            <div
              className={`stat-evolution ${
                stats.commandesJour.isPositive ? "positive" : "negative"
              }`}
            >
              <i
                className={`fas fa-arrow-${
                  stats.commandesJour.isPositive ? "up" : "down"
                }`}
              ></i>
              {stats.commandesJour.evolution}
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-euro-sign"></i>
          </div>
          <div className="stat-content">
            <h3>Revenus Totaux</h3>
            <div className="stat-value">{stats.revenusTotal.value}</div>
            <div
              className={`stat-evolution ${
                stats.revenusTotal.isPositive ? "positive" : "negative"
              }`}
            >
              <i
                className={`fas fa-arrow-${
                  stats.revenusTotal.isPositive ? "up" : "down"
                }`}
              ></i>
              {stats.revenusTotal.evolution}
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-smile"></i>
          </div>
          <div className="stat-content">
            <h3>Satisfaction</h3>
            <div className="stat-value">{stats.satisfaction.value}</div>
            <div
              className={`stat-evolution ${
                stats.satisfaction.isPositive ? "positive" : "negative"
              }`}
            >
              <i
                className={`fas fa-arrow-${
                  stats.satisfaction.isPositive ? "up" : "down"
                }`}
              ></i>
              {stats.satisfaction.evolution}
            </div>
          </div>
        </div>
      </div>

      <div className="actions-rapides">
        <h3>Actions Rapides</h3>
        <div className="action-cards">
          <a href="/commande">
            <div className="action-card">
              <i className="fas fa-cart-plus"></i>
              <h4>Nouvelle Commande</h4>
            </div>
          </a>
          <a href="/commande/clients">
            <div className="action-card">
              <i className="fas fa-user-plus"></i>
              <h4>Ajouter Client</h4>
            </div>
          </a>
          <a href="/commande/clients/list">
            <div className="action-card">
              <i className="fas fa-users"></i>
              <h4>Liste Clients</h4>
            </div>
          </a>
        </div>
      </div>

      <div className="productions-recentes">
        <h3>Commandes Récentes</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Client</th>
                <th>Montant</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              {commandesRecentes.map((cmd) => (
                <tr key={cmd.id}>
                  <td>{cmd.date}</td>
                  <td>{cmd.client}</td>
                  <td>{cmd.montant}</td>
                  <td>
                    <span
                      className={`statut ${cmd.statut.toLowerCase()}`}
                    >
                      {cmd.statut}
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

export default AccueilCommande;
