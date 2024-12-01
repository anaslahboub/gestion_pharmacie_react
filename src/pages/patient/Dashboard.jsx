import React from 'react';
import "./styles/dashboard.css";

// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
const PatientDashboard = () => {
  return (
    
      <div className="main-content_dashboard">
        {/* <!-- Cards --> */}
        <div className="card_dashboard">
            <h3>Ordonnances Soumises</h3>
            <span className="card-value">12</span>
        </div>
        <div className="card_dashboard">
            <h3>Commandes en Cours</h3>
            <span className="card-value">3</span>
        </div>
        <div className="card_dashboard">
            <h3>Commandes Completees</h3>
            <span className="card-value">9</span>
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
