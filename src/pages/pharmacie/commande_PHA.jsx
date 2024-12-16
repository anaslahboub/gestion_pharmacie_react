import React ,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import "../../styles/pharmacie/commande_PHA.css";
import axios from 'axios';


function CommandePHA() {
  const [commandes, setCommandes] = useState([]);
  const idPharmacien = localStorage.getItem("idPharmacien");

  const fetchCommandes = async () =>{
    const response = await axios.get(`http://localhost:8080/pharmacie__API/api/pharmacien/commandes/${idPharmacien}`);
    setCommandes(response.data);

  }
  useEffect(()=>{
    fetchCommandes();
  },[idPharmacien])


  const handleNotifier = async (id) => {
    try {
        const response = await fetch(
            `http://localhost:8080/pharmacie__API/api/pharmacien/commande/${id}/notifier`,
            { method: "POST" }
        );
        if (!response.ok) throw new Error(`Erreur : ${response.status}`);
        alert("la notification a ete bien envoyer.");
    } catch (error) {
        console.error("Erreur lors du rejet de l'commande :", error);
        alert("Une erreur est survenue lors d'envoie de commande ");
    }
};

  return (
    <div id="commande" className="main-container">
      <div className="commande-list">
        <h2 className="commande-title">Liste des Commandes Passées</h2>
        <div className="commande-grid">
          {commandes.map((commande) => (
            <div key={commande.id} className="commande-cardd">
              <img alt={`Image de l'ordonnance de ${commande.ordonnance.patient.nom}`} className="commande-image"   src={"/src/assets/pharmacieImage/pharmacie-1024x620.jpg" ||commande.ordonnance.patient.nom} />
              <h3 className="commande_name"> <i className="fas fa-user"></i>  {commande.ordonnance.patient.nom} {commande.ordonnance.patient.prenom}  </h3>
              <p className="commande_info"> <i className="fas fa-id-card"></i> ID: {commande.id}</p>
              <p className="commande_info"> <i className="fas fa-calendar-alt"> </i> Date de realisation : {commande.dateRealisation}</p>
              <p className="commande_info"> <i className="fas fa-info-circle"> </i>Statut: {commande.statut}</p>
              <p className="commande_info"> <i className="fas fa-coins"></i> Montant Total: {commande.montant}</p>
              <div className="countainer_btton">
                <Link to={`/pharmacie/detailCommande/${commande.id}`} className="commande-details-link">
                <i className="fas fa-info-circle"></i> Détails
                </Link>
                <button type="button"  name="action"  value="notifier"  className="notifier-button"  onClick={() => handleNotifier(commande.id)}  > 
                <i className="fas fa-bell"></i> notifier</button>
            
            
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommandePHA;
