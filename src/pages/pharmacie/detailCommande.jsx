import React, { useState   ,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import "../../styles/pharmacie/detailCommande.css";
import axios from 'axios';


function DetailCommande() {
  const { id } = useParams(); 
  const [commande ,setCommande] =useState([]);
  
  const [statutCommande,setStatutCommande] = useState();

  useEffect(() => {
    const fetchCommande = async () => {
        try {
            const resp = await axios.get(`http://localhost:8080/pharmacie__API/api/pharmacien/commande/${id}`);
            setCommande(resp.data);
        } catch (error) {
            console.error("Erreur lors de la récupération de la commande :", error);
        }
    };
    fetchCommande();
}, [id]);

  const handleChanger = async () => {
    try {
        const response = await fetch(
            `http://localhost:8080/pharmacie__API/api/pharmacien/commande/${id}/changer?commStatus=${encodeURIComponent(statutCommande)}`,
            { method: "PUT" }
        );
        if (!response.ok) throw new Error(`Erreur : ${response.status}`);
        alert("Le statut de la commande a été mis à jour.");
    } catch (error) {
        console.error("Erreur lors de la notification :", error);
        alert("Une erreur est survenue lors de la mise à jour.");
    }
};



const handleNotifier = async () => {
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
    <div className="detail-commande-container">
    <h2><i className="fas fa-info-circle"></i> Détails de la Commande</h2>
    <div className="commande_details">
      <div className="commande-info">
        <h3>
          <i className="fas fa-user"></i> Nom : {commande?.ordonnance?.patient?.nom} {commande?.ordonnance?.patient?.prenom}
        </h3>
        <p>
          <i className="fas fa-calendar-alt"></i> Date : {commande.dateRealisation}
        </p>
        <p>
          <i className="fas fa-coins"></i> Montant Total : {commande.montant}
        </p>
        <p>
          <i className="fas fa-info-circle"></i> Statut :
          <select value={statutCommande} onChange={(e) => setStatutCommande(e.target.value)}>
            <option value="Terminée">Terminée</option>
            <option value="En cours">En cours</option>
            <option value="Annulée">Annulée</option>
          </select>
        </p>
        <div className="countainer_btton">
          <button type="submit" name="action" value="changer" onClick={handleChanger} className="btn-changer">
            <i className="fas fa-sync-alt"></i> Changer
          </button>
          <button type="submit" name="action" value="notifier" className="btn-notifier "  onClick={() => handleNotifier(commande.id)} >
            <i className="fas fa-bell"> </i> Notifier
          </button>
        </div>
      </div>
      <div className="commande_image">
        <img
          alt={`Image de l'ordonnance de ${commande?.ordonnance?.patient?.nom}`}
          src={"/src/assets/pharmacieImage/pharmacie-1024x620.jpg" || commande.statut}
          className="commande-detail-image"
        />
      </div>
    </div>
  </div>
  

  );
}

export default DetailCommande;
