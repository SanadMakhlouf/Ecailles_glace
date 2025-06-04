import React, { useState } from "react";

const AddClient = () => {
  const [clientData, setClientData] = useState({
    nom: "",
    telephone: "",
    adresse: "",
    entreprise: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClientData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Client ajouté :", clientData);
    // TODO: envoyer les données à l'API ou base de données
    alert("Client ajouté avec succès !");
    setClientData({ nom: "", telephone: "", adresse: "", entreprise: "" });
  };

  return (
    <div className="card">
      <h2>Ajouter un nouveau client</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nom du client</label>
          <input
            type="text"
            name="nom"
            value={clientData.nom}
            onChange={handleChange}
            required
            placeholder="Jean Dupont"
          />
        </div>

        <div className="form-group">
          <label>Numéro de téléphone</label>
          <input
            type="tel"
            name="telephone"
            value={clientData.telephone}
            onChange={handleChange}
            required
            placeholder="+225 07 00 00 00"
          />
        </div>

        <div className="form-group">
          <label>Adresse</label>
          <input
            type="text"
            name="adresse"
            value={clientData.adresse}
            onChange={handleChange}
            placeholder="Abidjan, Yopougon"
          />
        </div>

        <div className="form-group">
          <label>Entreprise (optionnel)</label>
          <input
            type="text"
            name="entreprise"
            value={clientData.entreprise}
            onChange={handleChange}
            placeholder="Glace Express SARL"
          />
        </div>

        <button type="submit" className="button">
          Ajouter le client
        </button>
      </form>
    </div>
  );
};

export default AddClient;
