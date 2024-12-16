import React, { useEffect, useState } from 'react';
import "./styles/DetailsCommande.css";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetailsCommande = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [commande, setCommande] = useState(null); // Stocker l'objet commande
  const [loading, setLoading] = useState(true); // Indiquer si les données sont en cours de chargement
  const [error, setError] = useState(null); // Gestion des erreurs

  const { id } = useParams();

  // Fonction pour récupérer les commandes
  const fetchCommandes = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/pharmacie__API/api/patient/commande/${id}`);
      setCommande(response.data);
    } catch (err) {
      setError("Une erreur est survenue lors de la récupération des données.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCommandes();
  }, [id]);

  // Fonction pour ouvrir l'image dans une modale
  const handleImageClick = (src) => {
    setImageSrc(src);
    setIsImageOpen(true);
  };

  // Fonction pour fermer la modale
  const handleCloseModal = () => {
    setIsImageOpen(false);
    setImageSrc("");
  };

  if (loading) {
    return <p>Chargement des détails de la commande...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!commande) {
    return <p>Aucune commande trouvée pour ce patient.</p>;
  }

  // Formatage des dates en lisible
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("fr-FR");
  };

  return (
    <div className="main-content_commande-details">
  {/* <!-- Section de détails de l'ordonnance --> */}
  <div className="commande-details">
    <h2><i className="fas fa-receipt"></i> Commande #{commande.id}</h2>
    <p>
      <i className="fas fa-calendar-alt"></i> <strong>Date :</strong> {formatDate(commande.dateRealisation)}
    </p>
    <p>
      <i className="fas fa-file-prescription"></i> <strong>Ordonnance Numéro :</strong> #{commande.ordonnance.id}
    </p>
    <p>
      <i className="fas fa-info-circle"></i> <strong>Statut :</strong> {commande.statut}
    </p>
    <p>
      <i className="fas fa-user-md"></i> <strong>Pharmacie :</strong> {commande.ordonnance.pharmacien.nom} {commande.ordonnance.pharmacien.prenom}
    </p>
    <p>
      <i className="fas fa-coins"></i> <strong>Montant Total :</strong> {commande.montant} DH
    </p>
    <p>
      <i className="fas fa-comment-alt"></i> <strong>Commentaire :</strong> {commande.commentaire || "Aucun commentaire"}
    </p>
    <div className="ordonnance-photo_commande">
      <p>
        <i className="fas fa-image"></i> <strong>Image de l'ordonnance :</strong>
      </p>
      {commande.ordonnance.photo ? (
        <img
          src={"/src/assets/pharmacieImage/pharmacie-1024x620.jpg" || commande.ordonnance.photo}
          alt="Ordonnance"
          id="profileImage"
          onClick={() => handleImageClick(commande.ordonnance.photo)} // Ouvre l'image en grand au clic
        />
      ) : (
        <p>Aucune image disponible.</p>
      )}
    </div>
  </div>

  {/* Modale pour afficher l'image en grand */}
  {isImageOpen && (
    <div className="image-modal_commande" onClick={handleCloseModal}>
      <div className="image-modal-content_commande">
        <img src={imageSrc} alt="Ordonnance en grand" />
      </div>
    </div>
  )}
</div>

  );
};

export default DetailsCommande;
