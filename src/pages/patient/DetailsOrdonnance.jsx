import React, { useState, useEffect } from "react";
import "./styles/DetailsOrdonnance.css";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const DetailsOrdonnance = () => {
  const [searchParams] = useSearchParams();
  const [ordonnance, setOrdonnance] = useState(null); // Détails de l'ordonnance
  const [isImageOpen, setIsImageOpen] = useState(false); // Pour la modale d'image
  const ordonnanceId = searchParams.get("id"); // Récupérer l'ID depuis la query string
  const [imageBase64, setImageBase64] = useState("");

  // Fonction pour récupérer les détails de l'ordonnance
  const fetchOrdonnanceDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/pharmacie__API/api/patient/detailOrdonnance?ordonnanceId=${ordonnanceId}`
      );
      console.log(response.data);
      setOrdonnance(response.data);

      // Si la photo est disponible, ajouter le préfixe Base64
      if (response.data && response.data.photo) {
        setImageBase64(`data:image/png;base64,${response.data.photo}`);
      }
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des détails de l'ordonnance :",
        error
      );
    }
  };

  // Charger les données au montage du composant
  useEffect(() => {
    fetchOrdonnanceDetails();
  }, [ordonnanceId]); // Effect se déclenche à chaque changement de ordonnanceId

  // Gestion de l'ouverture/fermeture de la modale
  const handleImageClick = () => setIsImageOpen(true);
  const handleCloseModal = () => setIsImageOpen(false);

  if (!ordonnance) {
    return <div>Chargement des détails de l'ordonnance...</div>;
  }

  const formatDate = (timestamp) => {
    const date = new Date(timestamp); // Conversion du timestamp en objet Date
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="main-content_ordonnance-details">
      {/* Section des détails */}
      <div className="ordonnance-details">
        <div className="ordonnance-header">
          <h2>Ordonnance {ordonnance.id} :</h2>
          <p>
            <strong>Date :</strong> {formatDate(ordonnance.date)}
          </p>
          <p>
            <strong>Pharmacien :</strong> {ordonnance.pharmacienNom}
          </p>
          <p>
            <strong>Statut :</strong> {ordonnance.statut}
          </p>
          <p>
            <strong>Commentaire :</strong> {ordonnance.commentaire}
          </p>
        </div>

        {/* Section de l'image */}
        <div className="ordonnance-photo">
          <p>
            <strong>Image :</strong>
          </p>
          {imageBase64 ? (
            <img
              src={imageBase64} // Utilisation directe de l'image encodée en Base64
              alt="Ordonnance"
              className="ordonnance-image"
              onClick={handleImageClick} // Ouvre la modale
            />
          ) : (
            <p>Aucune image disponible</p>
          )}
        </div>
      </div>

      {/* Modale pour l'image */}
      {isImageOpen && (
        <div className="image-modal" onClick={handleCloseModal}>
          <div className="image-modal-content">
            <img src={imageBase64} alt="Ordonnance en grand" />
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsOrdonnance;
