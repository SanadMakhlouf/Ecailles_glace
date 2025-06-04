import React, { useState } from "react";
import "../styles/App.css";

const OrderPage = () => {
  const [commande, setCommande] = useState({
    id_commande: "",
    quantite: "",
    id_personne: "", // lien vers un client existant
  });

  const handleChange = (e) => {
    setCommande({ ...commande, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Commande enregistrée : " + JSON.stringify(commande));
  };

  return (
    <div className="add-production">
      <div className="card">
        <h2>Nouvelle Commande</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>ID Commande</label>
              <input
                type="text"
                name="id_commande"
                value={commande.id_commande}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Quantité (kg ou tonne)</label>
              <input
                type="number"
                name="quantite"
                value={commande.quantite}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>ID Client (personne)</label>
              <input
                type="text"
                name="id_personne"
                value={commande.id_personne}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-actions">
            <button type="submit" className="button">
              Enregistrer Commande
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderPage;
