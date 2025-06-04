import React, { useState } from "react";

const OrderPage = () => {
  const [commande, setCommande] = useState({
    clientNom: "",
    telephone: "",
    quantite: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommande((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'enregistrement
    console.log("Commande enregistrée :", commande);
    alert("Commande enregistrée !");
    setCommande({
      clientNom: "",
      telephone: "",
      quantite: "",
      date: "",
    });
  };

  return (
    <div className="add-production">
      <div className="card">
        <h2>Nouvelle Commande</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="clientNom">Nom du client</label>
              <input
                type="text"
                id="clientNom"
                name="clientNom"
                value={commande.clientNom}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="telephone">Téléphone</label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={commande.telephone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="quantite">Quantité (kg)</label>
              <input
                type="number"
                id="quantite"
                name="quantite"
                min="0"
                value={commande.quantite}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={commande.date}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="button">
              Enregistrer la commande
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderPage;
