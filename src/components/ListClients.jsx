import React from "react";
import "../styles/App.css";

const mockClients = [
  {
    id_personne: "C001",
    nom: "Dupont",
    prenom: "Jean",
    adresse: "12 rue Lafayette, Paris",
    telephone: "0601020304",
    email: "jean.dupont@mail.com",
    siret: "12345678900011",
    type: "Entreprise",
  },
  {
    id_personne: "C002",
    nom: "Martin",
    prenom: "Claire",
    adresse: "7 avenue des Lilas, Lyon",
    telephone: "0611223344",
    email: "claire.martin@mail.com",
    siret: "98765432100022",
    type: "Particulier",
  },
  {
    id_personne: "C003",
    nom: "Durand",
    prenom: "Luc",
    adresse: "34 boulevard Haussmann, Paris",
    telephone: "0633445566",
    email: "luc.durand@mail.com",
    siret: "19283746500033",
    type: "Entreprise",
  },
  {
    id_personne: "C004",
    nom: "Petit",
    prenom: "Marie",
    adresse: "55 rue Victor Hugo, Marseille",
    telephone: "0677889900",
    email: "marie.petit@mail.com",
    siret: "56473829100044",
    type: "Particulier",
  },
  {
    id_personne: "C005",
    nom: "Moreau",
    prenom: "Paul",
    adresse: "101 chemin des Écoliers, Toulouse",
    telephone: "0699001122",
    email: "paul.moreau@mail.com",
    siret: "83746519200055",
    type: "Entreprise",
  },
  {
    id_personne: "C006",
    nom: "Garcia",
    prenom: "Sophie",
    adresse: "4 allée des Rosiers, Nantes",
    telephone: "0654321098",
    email: "sophie.garcia@mail.com",
    siret: "32145698700066",
    type: "Particulier",
  },
  {
    id_personne: "C007",
    nom: "Lemoine",
    prenom: "Antoine",
    adresse: "66 rue de la Liberté, Bordeaux",
    telephone: "0612987654",
    email: "antoine.lemoine@mail.com",
    siret: "65498732100077",
    type: "Entreprise",
  },
  {
    id_personne: "C008",
    nom: "Roux",
    prenom: "Emma",
    adresse: "19 place Bellecour, Lyon",
    telephone: "0632109876",
    email: "emma.roux@mail.com",
    siret: "74125896300088",
    type: "Particulier",
  },
  {
    id_personne: "C009",
    nom: "Fontaine",
    prenom: "Julien",
    adresse: "88 cours Mirabeau, Aix-en-Provence",
    telephone: "0600112233",
    email: "julien.fontaine@mail.com",
    siret: "96385274100099",
    type: "Entreprise",
  },
  {
    id_personne: "C010",
    nom: "Bernard",
    prenom: "Isabelle",
    adresse: "3 avenue de l'Europe, Lille",
    telephone: "0622334455",
    email: "isabelle.bernard@mail.com",
    siret: "11223344556677",
    type: "Particulier",
  },
];

const ListClients = () => {
  const handleEdit = (id) => {
    alert(`Modifier client ${id} (fonctionnalité à venir)`);
  };

  const handleDelete = (id) => {
    alert(`Supprimer client ${id} (fonctionnalité à venir)`);
  };

  return (
    <div className="add-production">
      <div className="card">
        <h2>Liste des clients</h2>
        <div className="clients-grid">
          {mockClients.map((client) => (
            <div key={client.id_personne} className="client-card">
              <div className="client-header">
                <h3>{client.prenom} {client.nom}</h3>
                <span className="client-type">{client.type}</span>
              </div>
              <div className="client-body">
                <p><strong>Email:</strong> {client.email}</p>
                <p><strong>Téléphone:</strong> {client.telephone}</p>
                <p><strong>Adresse:</strong> {client.adresse}</p>
                <p><strong>SIRET:</strong> {client.siret}</p>
              </div>
              <div className="client-actions">
                <button className="btn edit" onClick={() => handleEdit(client.id_personne)}>✏️ Modifier</button>
                <button className="btn delete" onClick={() => handleDelete(client.id_personne)}>🗑️ Supprimer</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListClients;
