import React from "react";
import "../styles/ViewProductions.css";

const ViewProductions = () => {
  // Exemple de données (à remplacer par vos vraies données)
  const productions = [
    {
      id: 1,
      date: "2024-03-15",
      heureDebut: "08:00",
      duree: 4,
      quantite: 1500,
      unite: "kg",
      energie: 2000,
      incident: "Aucun",
      machine: "Machine A",
    },
    // Ajoutez d'autres productions ici
  ];

  return (
    <div className="view-productions">
      <div className="header-actions">
        <h2>Liste des productions</h2>
        <div className="filters">
          <input
            type="date"
            className="filter-input"
            placeholder="Filtrer par date"
          />
          <input
            type="text"
            className="filter-input"
            placeholder="Rechercher une machine"
          />
        </div>
      </div>

      <div className="productions-grid">
        {productions.map((production) => (
          <div key={production.id} className="production-card card">
            <div className="production-header">
              <h3>{production.machine}</h3>
              <span className="date">{production.date}</span>
            </div>

            <div className="production-details">
              <div className="detail-item">
                <span className="label">Heure de début:</span>
                <span className="value">{production.heureDebut}</span>
              </div>
              <div className="detail-item">
                <span className="label">Durée:</span>
                <span className="value">{production.duree}h</span>
              </div>
              <div className="detail-item">
                <span className="label">Quantité:</span>
                <span className="value">
                  {production.quantite} {production.unite}
                </span>
              </div>
              <div className="detail-item">
                <span className="label">Énergie:</span>
                <span className="value">{production.energie} kWh</span>
              </div>
              <div className="detail-item">
                <span className="label">Incident:</span>
                <span className="value">{production.incident}</span>
              </div>
            </div>

            <div className="production-actions">
              <button className="button-secondary">
                <i className="fas fa-edit"></i>
                Modifier
              </button>
              <button className="button-danger">
                <i className="fas fa-trash"></i>
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewProductions;
