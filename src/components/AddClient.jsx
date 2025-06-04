import React, { useState } from "react";
import "../styles/App.css";

const AddClient = () => {
  const [client, setClient] = useState({
    id_personne: "",
    nom: "",
    prenom: "",
    adresse: "",
    telephone: "",
    email: "",
    siret: "",
    type: "",
  });

  const handleChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Client ajouté : " + JSON.stringify(client));
  };

  return (
    <div className="add-production">
      <div className="card">
        <h2>Ajouter un client</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>ID Personne</label>
              <input
                type="text"
                name="id_personne"
                value={client.id_personne}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Nom</label>
              <input
                type="text"
                name="nom"
                value={client.nom}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Prénom</label>
              <input
                type="text"
                name="prenom"
                value={client.prenom}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Adresse</label>
              <input
                type="text"
                name="adresse"
                value={client.adresse}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Téléphone</label>
              <input
                type="text"
                name="telephone"
                value={client.telephone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={client.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>SIRET</label>
              <input
                type="text"
                name="siret"
                value={client.siret}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Type</label>
              <input
                type="text"
                name="type"
                value={client.type}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="button">
              Ajouter Client
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClient;
