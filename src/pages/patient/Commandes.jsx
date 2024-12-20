import React, { useState,useEffect } from "react";
import "./styles/Commande.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Commandes = () => {
  const navigate = useNavigate();
  const [commandes, setCommandes] = useState([]);
  const id_patient = 1;

  const fetchCommandes = async () =>{
    const response = await axios.get(`http://localhost:8080/pharmacie__API/api/patient/commandes/${id_patient}`);
    setCommandes(response.data);

  }
  useEffect(()=>{
    fetchCommandes();
  },[id_patient])



  return (
    
    <div  className="patient-main-container">
        <div className="patient-commande-list">
        <h2 className="patient-title">Liste des Commandes</h2>
      <div className="patient-commande-grid">
        {commandes.map((commande) => (
          <div key={commande.id} className="patient-commande-card">
            <img
              alt={`Image de l'ordonnance de ${commande.ordonnance.patient.nom}`}
              className="patient-commande-image"
              src={
                commande.ordonnance.photo ? `data:image/png;base64,${commande.ordonnance.photo}` : "/src/assets/pharmacieImage/pharmacie-1024x620.jpg"
              }
            />
            <h3 className="patient-commande-name">
              <i className="fas fa-user"></i> {commande.ordonnance.patient.nom}{" "}
              {commande.ordonnance.patient.prenom}
            </h3>
            <p className="patient-commande-info">
              <i className="fas fa-id-card"></i> ID: {commande.id}
            </p>
            <p className="patient-commande-info">
              <i className="fas fa-calendar-alt"></i> Date de réalisation :{" "}
              {commande.dateRealisation}
            </p>
            <p className="patient-commande-info">
              <i className="fas fa-info-circle"></i> Statut : {commande.statut}
            </p>
            <p className="patient-commande-info">
              <i className="fas fa-coins"></i> Montant Total :{" "}
              {commande.montant} DH
            </p>
            <div className="patient-commande-buttons">
              <Link
                to={`/patient/DetailsCommande/${commande.id}`}
                className="patient-details-link"
              >
                <i className="fas fa-info-circle"></i> Détails
              </Link>
              
            </div>
          </div>
        ))}
      </div>
        </div>
    </div>
  );
};

export default Commandes;
