import React, { useState } from 'react';
import "./styles/DetailsOrdonnance.css";

const DetailsOrdonnance = () => {
  const [isImageOpen, setIsImageOpen] = useState(false); // État pour contrôler l'ouverture de la modale
  const [imageSrc, setImageSrc] = useState(""); // Pour stocker l'URL de l'image cliquée

  // Fonction pour ouvrir l'image en grand
  const handleImageClick = (src) => {
    setImageSrc(src);
    setIsImageOpen(true); // Ouvre la modale
  };

  // Fonction pour fermer la modale
  const handleCloseModal = () => {
    setIsImageOpen(false);
    setImageSrc(""); // Réinitialiser l'image
  };

  return (
    <div className="main-content_ordonnance-details">
      {/* Section de détails de l'ordonnance */}
      <div className="ordonnance-details">
        <div className="ordonnance-header">
          <h2>Ordonnance #12345</h2>
          <p><strong>Date :</strong> 20/11/2024</p>
          <p><strong>Statut :</strong> En cours de traitement</p>
          <p><strong>Pharmacie :</strong> Pharmacie AL FARAH</p>
          <p><strong>Commentaire :</strong> merci de prendre en consideration cette commande</p>
        </div>

        {/* Photo de l'ordonnance */}
        <div className="ordonnance-photo">
          <p><strong>Image :</strong> </p>
          <img 
            src="../src/assets/images/Test.png" 
            alt="Ordonnance" 
            id="profileImage"
            onClick={() => handleImageClick("../src/assets/images/Test.png")} // Ouvre l'image en grand au clic
          />
        </div>

        {/* Boutons d'action */}
        
      </div>
      
      {/* Modale pour afficher l'image en grand */}
      {isImageOpen && (
        <div className="image-modal" onClick={handleCloseModal}>
          <div className="image-modal-content">
            <img src={imageSrc} alt="Ordonnance en grand" />
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsOrdonnance;
