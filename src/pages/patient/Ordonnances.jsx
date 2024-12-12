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
