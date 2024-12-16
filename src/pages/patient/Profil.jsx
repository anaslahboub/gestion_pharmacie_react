import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/Profil.css";

const Profil = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(""); // Gestion des erreurs
  const patientId = localStorage.getItem("patientId");
  // Charger les données initiales depuis le serveur
  useEffect(() => {
    axios
      .get(`http://localhost:8080/pharmacie__API/api/patient/profil?patientId=${patientId}`) // Remplacez 1 par l'ID du patient connecté
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des données :", error);
        setError("Impossible de charger les données du profil.");
      });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const confirmation = window.confirm("Voulez-vous vraiment mettre à jour le profil ?");
  
  if (!confirmation) {
    // Si l'utilisateur annule, ne pas envoyer la requête
    return;
  }
    if (!formData.nom || !formData.prenom || !formData.telephone || !formData.email) {
      setError("Tous les champs doivent être remplis !");
      return;
    }

    axios
      .post(`http://localhost:8080/pharmacie__API/api/patient/profilUpdate?patientId=${patientId}`, formData)
      .then(() => {
        alert("Profil mis à jour avec succès !");
        setError(""); // Réinitialiser les erreurs
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour :", error);
        setError("Une erreur s'est produite lors de la mise à jour du profil.");
      });
  };

  return (
    <div className="main-content_Profil">
      <div className="profil-form-container">
        <h2>Informations Personnelles</h2>
        {error && <p className="error">{error}</p>} {/* Afficher les erreurs */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="nom">Nom :</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
          />

          <label htmlFor="prenom">Prénom :</label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
          />

          <label htmlFor="telephone">Téléphone :</label>
          <input
            type="text"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
          />

          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <button id="button_Profil" type="submit">Modifier</button>
        </form>
      </div>
    </div>
  );
};

export default Profil;
