import React ,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import "../../styles/pharmacie/commande_PHA.css";
import axios from 'axios';

// const commandess = [
//   {
//     image: "https://storage.googleapis.com/a1aa/image/faYSa23U4fomJU5XS8PqJPdeCVHqoNHpv5R8sTYnNQOp76nnA.jpg",
//     name: "Jean Dupont",
//     id: "001",
//     date: "2023-09-30",
//     status: "Terminée",
//     total: "50€"
//   },
//   {
//     image: "https://storage.googleapis.com/a1aa/image/3ttPcr1p07J2GtqdzytxAfPKWKjjSe8htcCVE45Q3c22d9zTA.jpg",
//     name: "Marie Curie",
//     id: "002",
//     date: "2023-09-29",
//     status: "Terminée",
//     total: "75€"
//   },
//   {
//     image: "https://storage.googleapis.com/a1aa/image/JNMERwhnxZpjGZlfPYwu0ACrzJ7e9mvgzZMki1yblVfm76nnA.jpg",
//     name: "Albert Einstein",
//     id: "003",
//     date: "2023-09-28",
//     status: "Terminée",
//     total: "60€"
//   },
//   {
//     image: "https://storage.googleapis.com/a1aa/image/JNMERwhnxZpjGZlfPYwu0ACrzJ7e9mvgzZMki1yblVfm76nnA.jpg",
//     name: "Albert Einstein",
//     id: "004",
//     date: "2023-09-28",
//     status: "Terminée",
//     total: "60€"
//   },
//   {
//     image: "https://storage.googleapis.com/a1aa/image/JNMERwhnxZpjGZlfPYwu0ACrzJ7e9mvgzZMki1yblVfm76nnA.jpg",
//     name: "Albert Einstein",
//     id: "005",
//     date: "2023-09-28",
//     status: "Terminée",
//     total: "60€"
//   },
//   {
//     image: "https://storage.googleapis.com/a1aa/image/JNMERwhnxZpjGZlfPYwu0ACrzJ7e9mvgzZMki1yblVfm76nnA.jpg",
//     name: "Albert Einstein",
//     id: "006",
//     date: "2023-09-28",
//     status: "Terminée",
//     total: "60€"
//   }
// ];

function CommandePHA() {
  const [commandes, setCommandes] = useState([]);
  const idPharmacien = 2;

  const fetchCommandes = async () =>{
    const response = await axios.get(`http://localhost:8080/pharmacie__API/api/pharmacien/commandes/${idPharmacien}`);
    setCommandes(response.data);

  }
  useEffect(()=>{
    fetchCommandes();
  },[idPharmacien])

  return (
    <div id="commande" className="main-container">
      <div className="commande-list">
        <h2 className="commande-title">Liste des Commandes Passées</h2>
        <div className="commande-grid">
          {commandes.map((commande) => (
            <div key={commande.id} className="commande-cardd">
              <img alt={`Image de l'ordonnance de ${commande.ordonnance.patient.nom}`} className="commande-image"   src={"/src/assets/pharmacieImage/pharmacie-1024x620.jpg" ||commande.ordonnance.patient.nom} />
              <h3 className="commande-name">{commande.ordonnance.patient.nom} {commande.ordonnance.patient.prenom}  </h3>
              <p className="commande-info">ID: {commande.id}</p>
              <p className="commande-info">Date de realisation : {commande.dateRealisation}</p>
              <p className="commande-info">Statut: {commande.statut}</p>
              <p className="commande-info">Montant Total: {commande.montant}</p>
              <Link to={`/pharmacie/detailCommande/${commande.id}`} className="commande-details-link">
                Détails
              </Link>
              <button type="submit"  name="action"  value="notifier"  className=""> notifier</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommandePHA;
