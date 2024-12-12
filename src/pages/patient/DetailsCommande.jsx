import React , { useState } from 'react'
import "./styles/DetailsCommande.css";

const DetailsCommande = () => {
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
    <div className="main-content_commande-details">
    {/* <!-- Section de détails de l'ordonnance --> */}
    <div className="commande-details">
            <h2>Commande #12345</h2>
            <p><strong>Date :</strong> 20/11/2024</p>
            <p><strong>Ordonnance Numero:</strong> #1</p>
            <p><strong>Statut :</strong> Pret a recuperer</p>
            <p><strong>Pharmacie :</strong> pharmacie AL FARAH</p>
            <p><strong>Montant Total :</strong> 200dh </p>
            <p><strong>Commentaire :</strong> prends en consideration les images a compter hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh </p>
            <div className="ordonnance-photo_commande">
          <p><strong>Image de l'ordonnance :</strong></p>
          <img 
            src="../src/assets/images/Test.png" 
            alt="Ordonnance" 
            id="profileImage"
            onClick={() => handleImageClick("../src/assets/images/Test.png")} // Ouvre l'image en grand au clic
          />
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
  
  )
}

export default DetailsCommande
