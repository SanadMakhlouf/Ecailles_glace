import React, { useState } from "react";
import "../styles/AddProduction.css";

const AddProduction = () => {
  const [production, setProduction] = useState({
    date: "",
    duree: "",
    heureDebut: "",
    quantite: "",
    unite: "kg",
    energie: "",
    incident: "",
    machine: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduction((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique pour sauvegarder la production
    console.log("Production à sauvegarder:", production);
  };

  return (
    <div className="add-production">
      <div className="card">
        <h2>Ajouter une nouvelle production</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={production.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="heureDebut">Heure de début</label>
              <input
                type="time"
                id="heureDebut"
                name="heureDebut"
                value={production.heureDebut}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="duree">Durée (heures)</label>
              <input
                type="number"
                id="duree"
                name="duree"
                min="0"
                step="0.5"
                value={production.duree}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="machine">Machine utilisée</label>
              <input
                type="text"
                id="machine"
                name="machine"
                value={production.machine}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="quantite">Quantité</label>
              <input
                type="number"
                id="quantite"
                name="quantite"
                min="0"
                value={production.quantite}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="unite">Unité</label>
              <select
                id="unite"
                name="unite"
                value={production.unite}
                onChange={handleChange}
                required
              >
                <option value="kg">Kilogrammes (kg)</option>
                <option value="tonne">Tonnes</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="energie">Énergie consommée</label>
              <input
                type="number"
                id="energie"
                name="energie"
                min="0"
                value={production.energie}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="incident">Incident</label>
              <input
                type="text"
                id="incident"
                name="incident"
                value={production.incident}
                onChange={handleChange}
                placeholder="Description de l'incident (si applicable)"
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="button">
              Enregistrer la production
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduction;
