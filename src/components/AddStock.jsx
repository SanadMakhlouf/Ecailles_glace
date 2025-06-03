import React, { useState } from "react";
import "../styles/AddStock.css";

const AddStock = () => {

    const [quantiteEntrant, setQuantiteEntrant] = useState(0);
    const [quantiteSortant, setQuantiteSortant] = useState(0);


    const handleChange = (e) => {

        const {name,value} = e.target;  

        if(name === "quantiteEntrant"){
            setQuantiteEntrant(value);
        }else if(name === "quantiteSortant"){
            setQuantiteSortant(value);
        }

        console.log(quantiteEntrant,quantiteSortant);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
      //  console.log(quantiteEntrant,quantiteSortant);
const data = await RiSupabaseFill.from("stock").update({
    quantite: quantiteEntrant
}).eq("id",1);

    }

  return (
    <div className="add-stock">
      <div className="card">
        <h2>Gestion du Stock</h2>
        <form >
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

          <div className="form-actions">
            <button type="submit" className="button">
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStock;