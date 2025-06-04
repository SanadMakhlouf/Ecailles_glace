import React, { useState } from "react";
import "../styles/AddStock.css";

const AddStock = () => {
  const [quantiteEntrant, setQuantiteEntrant] = useState(0);
  const [quantiteSortant, setQuantiteSortant] = useState(0);
  const [motifSortant, setMotifSortant] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Données mockées pour les mouvements de stock
  const mouvementsStock = [
    {
      id: 1,
      type: "Entrée",
      quantite: 200,
      date: "2024-03-20",
      motif: "Production du jour",
    },
    {
      id: 2,
      type: "Sortie",
      quantite: 150,
      date: "2024-03-19",
      motif: "Livraison client",
    },
    {
      id: 3,
      type: "Entrée",
      quantite: 180,
      date: "2024-03-18",
      motif: "Production du jour",
    },
    {
      id: 4,
      type: "Sortie",
      quantite: 120,
      date: "2024-03-17",
      motif: "Livraison client",
    },
    {
      id: 5,
      type: "Entrée",
      quantite: 250,
      date: "2024-03-16",
      motif: "Production du jour",
    },
  ];

  // Calcul de la pagination
  Passionné par l’informatique, je souhaite intégrer un
  master pour approfondir mes connaissances et
  développer mes compétences techniques. Motivé et
  rigoureux , mon objectif est d’acquérir une expertise
  solide afin de contribuer à des projets innovants.

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "quantiteEntrant") {
      setQuantiteEntrant(value);
    } else if (name === "quantiteSortant") {
      setQuantiteSortant(value);
    } else if (name === "motifSortant") {
      setMotifSortant(value);
    }

    console.log(quantiteEntrant, quantiteSortant);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //  console.log(quantiteEntrant,quantiteSortant);
    // const data = await RiSupabaseFill.from("stock").update({
    //     quantite: quantiteEntrant
    // }).eq("id",1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="add-stock">
      <div className="card">
        <h2>Gestion du Stock</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="quantiteEntrant">Quantité Entrante</label>
              <input
                type="number"
                id="quantiteEntrant"
                name="quantiteEntrant"
                min="0"
                value={quantiteEntrant}
                onChange={handleChange}
                placeholder="Entrez la quantité entrante"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="quantiteSortant">Quantité Sortante</label>
              <input
                type="number"
                id="quantiteSortant"
                name="quantiteSortant"
                min="0"
                value={quantiteSortant}
                onChange={handleChange}
                placeholder="Entrez la quantité sortante"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="motifSortant">Motif de la sortie</label>
              <input
                type="text"
                id="motifSortant"
                name="motifSortant"
                value={motifSortant}
                onChange={handleChange}
                placeholder="Indiquez le motif de la sortie"
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="button">
              Enregistrer
            </button>
          </div>
        </form>
      </div>
      <div className="card">
        <h2>Mouvements du Stock</h2>
        <div className="movements-list">
          {currentMouvements.map((mouvement) => (
            <div key={mouvement.id} className="movement-item">
              <div className="movement-details">
                <h4>{mouvement.type} stock</h4>
                <span>Date: {mouvement.date}</span>
                <span>Motif: {mouvement.motif}</span>
              </div>
              <div className="movement-actions">
                <span
                  className={`movement-quantity ${mouvement.type.toLowerCase()}`}
                >
                  {mouvement.type === "Entrée" ? "+" : "-"}
                  {mouvement.quantite} kg
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button
            className="pagination-button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              className={`pagination-button ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className="pagination-button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStock;
