import React, { useState   ,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import "../../styles/pharmacie/detailCommande.css";
import axios from 'axios';

// const commandes = [
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
//     status: "En cours",
//     total: "75€"
//   },
//   {
//     image: "https://storage.googleapis.com/a1aa/image/JNMERwhnxZpjGZlfPYwu0ACrzJ7e9mvgzZMki1yblVfm76nnA.jpg",
//     name: "Albert Einstein",
//     id: "003",
//     date: "2023-09-28",
//     status: "Annulée",
//     total: "60€"
//   }
// ];

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


  // const handleNotifier =async()=>{
  //   const rep = await fetch(`http://localhost:8080/pharmacie__API/api/pharmacien/commande/${id}/changer?commStatus=${encodeURIComponent(statutCommande)}`,
  //     {  method: "PUT"}
  //   );
  // }
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


  

  return (
    <div className="detail-commande-container">
      <h2>Détails de la Commande</h2>
      <div className="commande-details">
        <img
          alt={`Image de l'ordonnance de ${commande?.ordonnance?.patient?.nom}`}
          src={"/src/assets/pharmacieImage/pharmacie-1024x620.jpg" || commande.statut}
          className="commande-detail-image"
        />
        <h3>Nom : {commande?.ordonnance?.patient?.nom} {commande?.ordonnance?.patient?.prenom}</h3>
        <p>Date : {commande.dateRealisation}</p>
        <p>Montant Total : {commande.montant}</p>
        <p>
          Statut : 
          <select value={statutCommande} onChange={(e) => setStatutCommande(e.target.value)}>
            <option value="Terminée">Terminée</option>
            <option value="En cours">En cours</option>
            <option value="Annulée">Annulée</option>
          </select>
        </p>
        <button type="submit"  name="action"  value="changer" onClick={handleChanger} className=""> changer</button>
        <button type="submit"  name="action"  value="notifier"  className=""> notifier</button>

      </div>
    </div>
  );
}

export default DetailCommande;
