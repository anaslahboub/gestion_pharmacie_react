import React from 'react'
import "./styles/Commande.css";
import {useNavigate} from "react-router-dom"

const Commandes = () => {
    const navigate= useNavigate()
  return (
    <div className="main-content_Commandes">
    <h1>Mes Commandes</h1>
    <div className="commande-card">
        <h3>Commande #12345</h3>
        <p>Date : 20/11/2024</p>
        <p>Statut : En cours de preparation</p>
        
        <button onClick={() => navigate(`/patient/DetailsCommande`)}>Voir détails</button>
    </div>
    <div className="commande-card">
        <h3>Commande #12345</h3>
        <p>Date : 20/11/2024</p>
        <p>Statut : Pret a recuperer</p>
        
        <button>Voir détails</button>
    </div>
    <div className="commande-card">
        <h3>Commande #12345</h3>
        <p>Date : 20/11/2024</p>
        <p>Statut : En cours de preparation</p>
        
        <button>Voir détails</button>
    </div>
    <div className="commande-card">
        <h3>Commande #12345</h3>
        <p>Date : 20/11/2024</p>
        <p>Statut : Pret a recuperer</p>
        
        <button>Voir détails</button>
    </div>
    <div className="commande-card">
        <h3>Commande #12345</h3>
        <p>Date : 20/11/2024</p>
        <p>Statut : En cours de preparation</p>
        
        <button>Voir détails</button>
    </div>
    <div className="commande-card">
        <h3>Commande #12345</h3>
        <p>Date : 20/11/2024</p>
        <p>Statut : Pret a recuperer</p>
        
        <button>Voir détails</button>
    </div>
    
</div>
  )
}

export default Commandes
