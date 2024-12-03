import React, { useState } from "react";
import "./styles/NouvelleOrdonnance.css";

const NouvelleOrdonnance = () => {
  const [file, setFile] = useState(null); // État pour stocker le fichier sélectionné

  // Gestion du changement de fichier
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      console.log("Fichier sélectionné :", selectedFile);
    }
  };

  // Gestion de la soumission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      console.log("Fichier prêt à être envoyé :", file);
      // Ajoutez la logique d'envoi de fichier ici
    } else {
      console.log("Aucun fichier sélectionné.");
    }
  };

  return (
    <div className="main-content_NouvelleOrdonnance">
      <div className="ordonnance-form-container">
        <h2>Ajouter une Ordonnance</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Choix de la pharmacie */}
          <label htmlFor="pharmacie">Choisir une pharmacie :</label>
          <select id="pharmacie" name="pharmacie" required>
            <option value="" disabled selected>
              -- Sélectionner une pharmacie --
            </option>
            <option value="pharmacie1">Pharmacie 1</option>
            <option value="pharmacie2">Pharmacie 2</option>
            <option value="pharmacie3">Pharmacie 3</option>
          </select>

          {/* Téléchargement de l'image de l'ordonnance */}
          <label htmlFor="ordonnanceImage">Télécharger l'image de l'ordonnance :</label>
          <input
            type="file"
            id="ordonnanceImage"
            name="ordonnanceImage"
            accept="image/*"
            required
            onChange={handleFileChange}
            className="input-new-ordonance"
          />
          {/* Informations supplémentaires */}
          <label htmlFor="commentaire">Commentaire (facultatif) :</label>
          <textarea
            id="commentaire"
            name="commentaire"
            rows="4"
            placeholder="Ajoutez des commentaires (si nécessaire)..."
          ></textarea>

          {/* Bouton de soumission */}
          <button type="submit">Soumettre l'ordonnance</button>
        </form>
      </div>
    </div>
  );
};

export default NouvelleOrdonnance;
