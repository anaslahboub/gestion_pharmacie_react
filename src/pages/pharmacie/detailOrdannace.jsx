import React, { useState, useEffect  } from "react";
import { useParams ,useNavigate } from "react-router-dom";
import "../../styles/pharmacie/detailordonnance_PHA.css";
import axios from "axios";

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
  const navigate =useNavigate();
  const { id } = useParams();  // Récupérer l'ID depuis l'URL
  const [order, setOrder] = useState(null);  // Stocker les détails de l'ordonnance
  const [loading, setLoading] = useState(true); // Gérer l'état de chargement
  const [error, setError] = useState(null); // Gérer les erreurs
  const [medicaments, setMedicaments] = useState([{ name: "", price: "" }]);  // Liste des médicaments
  const [montantTotal , setMontantTotal] = useState(0); // État pour le montant total
  const [commStatus,setCommStatus] =useState();
  useEffect(() => {
    const fetchOrdonnance = async () => {
      try {
        // Correction de la syntaxe : const et ajout de la fin de la parenthèse
        const response = await axios.get(`http://localhost:8080/pharmacie__API/api/pharmacien/ordonnance/${id}`);
        setOrder(response.data);  // Mettre à jour les détails de l'ordonnance
        setLoading(false);
      } catch (err) {
        console.error("Erreur lors de la récupération de l'ordonnance :", err);
        setError("Impossible de récupérer les détails de l'ordonnance.");
        setLoading(false);
      }
    };

    fetchOrdonnance();
  }, [id]);  // Déclenche l'effet lorsque l'ID change

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;
  if (!order) return <p>Aucune ordonnance trouvée.</p>;

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


  const handleAccept = async () => {
    try {
        const response = await fetch(
            `http://localhost:8080/pharmacie__API/api/pharmacien/ordonnance/${id}/accepter?commStatus=${encodeURIComponent(commStatus)}&montantTotal=${encodeURIComponent(montantTotal)}`,
            { method: "POST" }
        );

        alert("Ordonnance acceptée avec succès !");
    } catch (error) {
        console.error("Erreur lors de l'acceptation de l'ordonnance :", error);
        alert("Une erreur s'est produite lors de l'acceptation de l'ordonnance.");
    }
};

   
   const handleReject = async () => {
    try {
        const response = await fetch(
            `http://localhost:8080/pharmacie__API/api/pharmacien/ordonnance/${id}/rejeter`,
            { method: "PUT" }
        );
        if (!response.ok) throw new Error(`Erreur : ${response.status}`);
        alert("L'ordonnance a été rejetée avec succès.");
    } catch (error) {
        console.error("Erreur lors du rejet de l'ordonnance :", error);
        alert("Une erreur est survenue lors du rejet de l'ordonnance.");
    }
};

  

  

  return (
    <div className="cardd">
      <h2 className="card-title">Détails de l'Ordonnance</h2>
      <div className="order-details">
        <img  src={ "/src/assets/pharmacieImage/pharmacie-1024x620.jpg" || order.imagePath}  alt={`Ordonnance de ${order.patient?.nom || "Inconnu"}`}  className="order-img"/>
        <label htmlFor="order-title">Nom de Patient :
          <h3 className="order-title">{order.patient?.nom} {order.patient?.prenom}</h3>
        </label>
        <label htmlFor="order-info">Date d'ordonnance : 
          <p className="order-info">{order.dateEnvoie}</p>
        </label>  
      </div>


      <form action="" method="POST">
        <h3>Médicaments</h3>
        {medicaments.map((medicament, index) => (
          <div className="form-group" key={index}>
            <label htmlFor={`medicament-${index}`} className="form-label">  Médicament {index + 1}</label>
            <div className="form-input-group">
              <input  type="text"  id={`medicament-${index}`}  name={`medicament[${index}]`}  placeholder="Nom du Médicament"  value={medicament.name}  onChange={(e) =>    handleInputChange(index, "name", e.target.value)  }  className="form-input"/>
              <input  type="number"  id={`prix-${index}`}  name={`prix[${index}]`}  placeholder="Prix (en €)"  value={medicament.price}  onChange={(e) =>    handleInputChange(index, "price", e.target.value)  }  className="form-input form-input-small"/>
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
        <button  type="button"  onClick={addMedicament}  className="btn btn-add">  Ajouter un Médicament</button>

        <div className="form-group">
          <label htmlFor="montantTotal" className="form-label">  Montant Total (€)</label>
          <input  type="number"  id="montantTotal"  name="montantTotal"  value={montantTotal}  readOnly  className="form-input form-input-readonly"/>

          <p  className="form-label">  Statut : 
            <select value={commStatus} onChange={(e) => setCommStatus(e.target.value)}>
              <option value="Terminée">Terminée</option>
              <option value="En cours">En cours</option>
              <option value="Annulée">Annulée</option>
            </select>
        </p>
        </div>

        <div className="btn-group">
          <button type="button" name="action" value="accepter" className="btn btn-green" onClick={handleAccept}> Accepter</button>
          <button type="button"  name="action"  value="refuser"  className="btn btn-red" onClick={handleReject}>  Refuser </button>
        </div>
      </form>
    </div>
  );
}

export default DetailOrdonnance;
