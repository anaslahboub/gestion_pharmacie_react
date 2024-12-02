import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "../../styles/pharmacie/detailCommande.css";

const commandes = [
  {
    image: "https://storage.googleapis.com/a1aa/image/faYSa23U4fomJU5XS8PqJPdeCVHqoNHpv5R8sTYnNQOp76nnA.jpg",
    name: "Jean Dupont",
    id: "001",
    date: "2023-09-30",
    status: "Terminée",
    total: "50€"
  },
  {
    image: "https://storage.googleapis.com/a1aa/image/3ttPcr1p07J2GtqdzytxAfPKWKjjSe8htcCVE45Q3c22d9zTA.jpg",
    name: "Marie Curie",
    id: "002",
    date: "2023-09-29",
    status: "En cours",
    total: "75€"
  },
  {
    image: "https://storage.googleapis.com/a1aa/image/JNMERwhnxZpjGZlfPYwu0ACrzJ7e9mvgzZMki1yblVfm76nnA.jpg",
    name: "Albert Einstein",
    id: "003",
    date: "2023-09-28",
    status: "Annulée",
    total: "60€"
  }
];

function DetailCommande() {
  const { id } = useParams(); // Récupérer l'ID depuis l'URL
  const commande = commandes.find((cmd) => cmd.id === id); // Trouver la commande correspondante
  const [status, setStatus] = useState(commande?.status || '');

  // Fonction pour changer le statut
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
    console.log(`Le statut de la commande ${id} a été changé en ${event.target.value}`);
  };

  if (!commande) {
    return <div><h2>Commande non trouvée !</h2></div>;
  }

  return (
    <div className="detail-commande-container">
      <h2>Détails de la Commande</h2>
      <div className="commande-details">
        <img
          alt={`Image de l'ordonnance de ${commande.name}`}
          src={commande.image}
          className="commande-detail-image"
        />
        <h3>Nom : {commande.name}</h3>
        <p>Date : {commande.date}</p>
        <p>Montant Total : {commande.total}</p>
        <p>
          Statut : 
          <select value={status} onChange={handleStatusChange}>
            <option value="Terminée">Terminée</option>
            <option value="En cours">En cours</option>
            <option value="Annulée">Annulée</option>
          </select>
        </p>
      </div>
    </div>
  );
}

export default DetailCommande;
