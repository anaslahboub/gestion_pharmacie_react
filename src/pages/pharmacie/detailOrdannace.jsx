import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/pharmacie/detailordonnance_PHA.css";

const orders = [
  {
    image: "https://storage.googleapis.com/a1aa/image/faYSa23U4fomJU5XS8PqJPdeCVHqoNHpv5R8sTYnNQOp76nnA.jpg",
    name: "Jean Dupont",
    id: "001",
    date: "2023-10-01",
    status: "En attente",
  },
  {
    image: "https://storage.googleapis.com/a1aa/image/3ttPcr1p07J2GtqdzytxAfPKWKjjSe8htcCVE45Q3c22d9zTA.jpg",
    name: "Marie Curie",
    id: "002",
    date: "2023-10-01",
    status: "En préparation",
  },
  {
    image: "https://storage.googleapis.com/a1aa/image/JNMERwhnxZpjGZlfPYwu0ACrzJ7e9mvgzZMki1yblVfm76nnA.jpg",
    name: "Albert Einstein",
    id: "003",
    date: "2023-10-01",
    status: "Prête",
  },
];

function DetailOrdonnance() {
  const { id } = useParams();
  const order = orders.find((o) => o.id === id);

  // État pour gérer les médicaments dynamiques
  const [medicaments, setMedicaments] = useState([{ name: "", price: "" }]);
  const [montantTotal, setMontantTotal] = useState(0); // État pour le montant total

  // Ajouter un nouveau médicament
  const addMedicament = () => {
    setMedicaments([...medicaments, { name: "", price: "" }]);
  };

  // Supprimer un médicament
  const removeMedicament = (index) => {
    const updatedMedicaments = medicaments.filter((_, i) => i !== index);
    setMedicaments(updatedMedicaments);
    calculateTotal(updatedMedicaments); // Recalculer le total après suppression
  };

  // Mettre à jour les valeurs des médicaments
  const handleInputChange = (index, field, value) => {

    //cette syntaxe ..medaments est creer une copy de medicament son modifier la orginale 
    const updatedMedicaments = [...medicaments];
    updatedMedicaments[index][field] = value;
    setMedicaments(updatedMedicaments);

    if (field === "price") {
      calculateTotal(updatedMedicaments); // Recalculer le total si le prix change
    }
  };

  // Calculer le montant total
  const calculateTotal = (medicaments) => {
    const total = medicaments.reduce((sum, medicament) => {
      const price = parseFloat(medicament.price) || 0; // Convertir en nombre, ignorer si vide
      return sum + price;
    }, 0);
    setMontantTotal(total); // Mettre à jour le total
  };

  if (!order) {
    return <p>Aucune ordonnance trouvée.</p>;
  }

  return (
    <div className="cardd">
      <h2 className="card-title">Détails de l'Ordonnance</h2>
      <div className="order-details">
        <img
          src={order.image}
          alt={`Ordonnance de ${order.name}`}
          className="order-img"
        />
        <label htmlFor="order-title">Nom de Patient :
        <h3 className="order-title">{order.name}</h3></label>
        <label htmlFor="order-info">Date d'ordonnance : 
        <p className="order-info">{order.date}</p></label>  
      </div>

      <form action="" method="POST">
        <h3>Médicaments</h3>
        {medicaments.map((medicament, index) => (
          <div className="form-group" key={index}>
            <label htmlFor={`medicament-${index}`} className="form-label">
              Médicament {index + 1}
            </label>
            <div className="form-input-group">
              <input
                type="text"
                id={`medicament-${index}`}
                name={`medicament[${index}]`}
                placeholder="Nom du Médicament"
                value={medicament.name}
                onChange={(e) =>
                  handleInputChange(index, "name", e.target.value)
                }
                className="form-input"
              />
              <input
                type="number"
                id={`prix-${index}`}
                name={`prix[${index}]`}
                placeholder="Prix (en €)"
                value={medicament.price}
                onChange={(e) =>
                  handleInputChange(index, "price", e.target.value)
                }
                className="form-input form-input-small"
              />
              <button
                type="button"
                onClick={() => removeMedicament(index)}
                className="btn btn-remove"
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addMedicament}
          className="btn btn-add"
        >
          Ajouter un Médicament
        </button>

        <div className="form-group">
          <label htmlFor="montantTotal" className="form-label">
            Montant Total (€)
          </label>
          <input
            type="number"
            id="montantTotal"
            name="montantTotal"
            value={montantTotal} // Afficher le total calculé
            readOnly
            className="form-input form-input-readonly"
          />
        </div>

        <div className="btn-group">
          <button
            type="submit"
            name="action"
            value="accepter"
            className="btn btn-green"
          >
            Accepter
          </button>
          <button
            type="submit"
            name="action"
            value="refuser"
            className="btn btn-red"
          >
            Refuser
          </button>
        </div>
      </form>
    </div>
  );
}

export default DetailOrdonnance;
