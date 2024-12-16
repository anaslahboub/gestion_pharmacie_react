import React , { useState, useEffect }from 'react';
import "./styles/dashboard.css";
 import axios from "axios";

// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
const PatientDashboard = () => {
    const [stats, setStats] = useState({
        ordonnancesSoumises: 0,
        commandesEnCours: 0,
        commandesCompletees: 0,
      });
      const patientId = localStorage.getItem("patientId");     
       useEffect(() => {
           axios
            .get(`http://localhost:8080/pharmacie__API/api/patient/dashboard?patientId=${patientId}`) // Remplacez 1 par l'ID du patient connecté
           .then((response) => {
                setStats(response.data);
            })
            .catch((error) => {
              console.error("Erreur lors du chargement des données :", error);
            });
       }, []);
  return (
      <div className="main-content_dashboard">
        {/* <!-- Cards --> */}
        <div className="card_dashboard">
            <h3>Ordonnances Soumises</h3>
            <span className="card-value">{stats.ordonnancesSoumises}</span>
        </div>
        <div className="card_dashboard">
            <h3>Commandes en Cours</h3>
            <span className="card-value">{stats.commandesEnCours}</span>
        </div>
        <div className="card_dashboard">
            <h3>Commandes Completees</h3>
            <span className="card-value">{stats.commandesCompletees}</span>
        </div>

        {/* <!-- Grid Layout --> */}
        <div className="grid">
            <div className="grid-item">
            <a href="/patient/PharmaciesProches" className="clickable-item">
                <h4>Pharmacies Proches</h4>
                <p>Visualisez les pharmacies partenaires disponibles dans votre region.</p>
                </a>
            </div>
            <div className="grid-item">
             <a href="/patient/Ordonnances" className="clickable-item">
                <h4>Ordonnances Recentes</h4>
                <p>Consultez les dernieres ordonnances soumises pour traitement.</p>
                </a>
            </div>
            <div className="grid-item">
            <a href="/patient/Support" className="clickable-item">
                <h4><i className="fas fa-headset" ></i> Support Client</h4>
                <p>Contactez le service client pour toute assistance.</p>
                </a>
            </div>
        </div>
    </div>
  )
};

export default PatientDashboard
