<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useState, useEffect } from "react";
import axios from "axios";
>>>>>>> f1907c9c471c4ec830d862ede9e5ab3ea6023b30
import "./styles/NouvelleOrdonnance.css";

const NouvelleOrdonnance = () => {
  const [file, setFile] = useState(null); // État pour stocker le fichier sélectionné
<<<<<<< HEAD
=======
  const [pharmacies, setPharmacies] = useState([]); // Liste des pharmacies
  const [selectedPharmacie, setSelectedPharmacie] = useState(""); // Pharmacie sélectionnée
  const [commentaire, setCommentaire] = useState(""); // État pour le commentaire
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Récupérer la liste des pharmacies depuis le backend
  useEffect(() => {
    const fetchPharmacies = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/pharmacie__API/api/patient/pharmacies"
        );
        setPharmacies(response.data); // Stocker les pharmacies dans l'état
        console.log(response.data);
      } catch (error) {
        if (error.response) {
          setErrorMessage(error.response.data); // Affiche l'erreur du back-end
        } else {
          setErrorMessage("Erreur lors de la récupération des pharmacies");        }
        
      }
    };

    fetchPharmacies();
  }, []);
>>>>>>> f1907c9c471c4ec830d862ede9e5ab3ea6023b30

  // Gestion du changement de fichier
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
<<<<<<< HEAD
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
=======
    }
  };

  // Gestion de la saisie du commentaire
  const handleCommentChange = (event) => {
    setCommentaire(event.target.value);
  };

  // Gestion de la sélection de la pharmacie
  const handlePharmacieChange = (event) => {
    setSelectedPharmacie(event.target.value); // ID de la pharmacie sélectionnée
  };

  // Gestion de la soumission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const patientId = localStorage.getItem("patientId");
    if (!patientId || !selectedPharmacie) {
      setErrorMessage("Veuillez sélectionner une pharmacie .");
      return;
    }
    if (file && selectedPharmacie) {
      const formData = new FormData();
      formData.append("pharmacienId", selectedPharmacie); // Envoie l'ID de la pharmacie
      formData.append("commentaire", commentaire);
      formData.append("ordonnanceImage", file); // L'image est envoyée en tant que Blob
      formData.append("patientId", patientId);
      // Envoi de la requête POST au serveur
      try {
        const response = await axios.post(
          "http://localhost:8080/pharmacie__API/api/patient/NouvelleOrdonnance", // URL de l'API backend
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data", // Type pour l'upload de fichiers
            },
          }
        );
        setSuccessMessage("Ordonnance soumise avec succès !");
        setErrorMessage(""); // Réinitialiser le message d'erreur
      } catch (error) {
        if (error.response) {
          setErrorMessage(error.response.data); // Affiche l'erreur du back-end
        } else {
          setErrorMessage("Erreur lors de l'ajout de l'ordonnance");
        }
        setSuccessMessage(""); // Réinitialiser le message de succès
      }
>>>>>>> f1907c9c471c4ec830d862ede9e5ab3ea6023b30
    }
  };

  return (
    <div className="main-content_NouvelleOrdonnance">
      <div className="ordonnance-form-container">
        <h2>Ajouter une Ordonnance</h2>
<<<<<<< HEAD
        
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
=======

        <form onSubmit={handleSubmit}>
          {/* Choix de la pharmacie */}
          <label htmlFor="pharmacie">Choisir une pharmacie :</label>
          <select
            id="pharmacie"
            name="pharmacie"
            value={selectedPharmacie}
            onChange={handlePharmacieChange}
          >
            <option value="" disabled>-- Sélectionner une pharmacie --</option>
            {pharmacies.length > 0 ? (
              pharmacies.map((pharmacie) => (
                <option key={pharmacie.id} value={pharmacie.id}>
                  {pharmacie.nomMap} {/* Afficher le nom de la pharmacie */}
                </option>
              ))
            ) : (
              <option disabled>Aucune pharmacie disponible</option>
            )}
>>>>>>> f1907c9c471c4ec830d862ede9e5ab3ea6023b30
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
          />
<<<<<<< HEAD
=======

>>>>>>> f1907c9c471c4ec830d862ede9e5ab3ea6023b30
          {/* Informations supplémentaires */}
          <label htmlFor="commentaire">Commentaire (facultatif) :</label>
          <textarea
            id="commentaire"
            name="commentaire"
            rows="4"
            placeholder="Ajoutez des commentaires (si nécessaire)..."
<<<<<<< HEAD
=======
            value={commentaire}
            onChange={handleCommentChange}
>>>>>>> f1907c9c471c4ec830d862ede9e5ab3ea6023b30
          ></textarea>

          {/* Bouton de soumission */}
          <button type="submit">Soumettre l'ordonnance</button>
        </form>
<<<<<<< HEAD
=======

        {/* Affichage du message de succès ou d'erreur */}
        {errorMessage && <p className="error">{errorMessage}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
>>>>>>> f1907c9c471c4ec830d862ede9e5ab3ea6023b30
      </div>
    </div>
  );
};

export default NouvelleOrdonnance;
