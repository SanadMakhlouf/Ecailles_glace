import React from "react";
import "../styles/ViewProductions.css";
import { supabase } from "../config/supabase";
import { useState, useEffect } from "react";

const ViewProductions = () => {
  const [productions, setProductions] = useState([]);

  useEffect(() => {
    const fetchProductions = async () => {
      const { data, error } = await supabase.from("production").select(`
          *,
          machines!id_machine (
            nom_machine
          )
        `);

      if (error) {
        console.error("Erreur lors de la récupération des productions:", error);
      } else {
        console.log("Productions récupérées:", data);
        setProductions(data);
      }
    };

    fetchProductions();
  }, []);

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
              <h3>{production.machines?.nom_machine}</h3>
              <span className="date">{production.date}</span>
            </div>

            <div className="production-details">
              <div className="detail-item">
                <span className="label">Heure de début:</span>
                <span className="value">{production.heure_debut}</span>
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
                <span className="value">{production.incident || "Aucun"}</span>
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
