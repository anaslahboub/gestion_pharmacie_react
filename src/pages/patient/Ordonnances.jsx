<<<<<<< HEAD
import React from 'react'
import {useNavigate} from "react-router-dom"
import "./styles/Ordonnances.css";

const Ordonnances = () => {
    
    const navigate=useNavigate();
  return (
    <div className="main-content_Ordonnance">
        <h1>Mes Ordonnances</h1>
        <div className="ordonnance-card">
            <h3>Ordonnance #12345</h3>
            <p>Date : 20/11/2024</p>
            <p>Statut : Accepte</p>
            <button onClick={() => navigate(`/patient/DetailsOrdonnance`)}>Voir détails</button>
        </div>
        <div className="ordonnance-card">
            <h3>Ordonnance #12345</h3>
            <p>Date : 20/11/2024</p>
            <p>Statut : Rejetee</p>
            
            <button>Voir détails</button>
        </div>
        <div className="ordonnance-card">
            <h3>Ordonnance #12345</h3>
            <p>Date : 20/11/2024</p>
            <p>Statut : Rejetee</p>
            
            <button>Voir détails</button>
        </div>
        <div className="ordonnance-card">
            <h3>Ordonnance #12345</h3>
            <p>Date : 20/11/2024</p>
            <p>Statut : Rejetee</p>
            
            <button>Voir détails</button>
        </div>
        <div className="ordonnance-card">
            <h3>Ordonnance #12345</h3>
            <p>Date : 20/11/2024</p>
            <p>Statut : Rejetee</p>
            
            <button>Voir détails</button>
        </div>
        
    </div>
  )
}

export default Ordonnances
=======
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles/Ordonnances.css";

const Ordonnances = () => {
  const [ordonnances, setOrdonnances] = useState([]); // Liste des ordonnances
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const patientId = localStorage.getItem("patientId");

  const navigate = useNavigate();
  // Récupérer la liste des ordonnances depuis le backend
  useEffect(() => {
    const fetchOrdonnances = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/pharmacie__API/api/patient/Ordonnances?patientId=${patientId}`
        );
        setOrdonnances(response.data); // Stocker les ordonnances dans l'état
        console.log(response.data);
        setSuccessMessage("Mes Ordonnances");
      } catch (error) {
        if (error.response) {
          setErrorMessage(error.response.data); // Affiche l'erreur du backend
        } else {
          setErrorMessage("Erreur lors de la récupération des Ordonnances");
        }
      }
    };

    fetchOrdonnances();
  }, []);
 // Fonction pour convertir le timestamp en une date lisible
 const formatDate = (timestamp) => {
  const date = new Date(timestamp); // Conversion du timestamp en objet Date
  return date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
  return (
    <div className="main-content_Ordonnance">
      {/* Affichage du message de succès ou d'erreur */}
      {errorMessage && <h1 className="error-message">{errorMessage}</h1>}
      {successMessage && <h1 className="success-message">{successMessage}</h1>}

      {/* Liste des ordonnances */}
      {ordonnances.length > 0 ? (
        ordonnances.map((ordonnance) => (
          <div className="ordonnance-card" key={ordonnance.id}>
            <h3>Ordonnance {ordonnance.id}</h3>
            <p>Date : {formatDate(ordonnance.date)}</p>
            <p>Statut : {ordonnance.statut}</p>
            <button onClick={() => navigate(`/patient/DetailsOrdonnance?id=${ordonnance.id}`)}>
              Voir détails
            </button>
          </div>
        ))
      ) : (
        <p>Aucune ordonnance trouvée.</p>
      )}
    </div>
  );
};

export default Ordonnances;
>>>>>>> f1907c9c471c4ec830d862ede9e5ab3ea6023b30
