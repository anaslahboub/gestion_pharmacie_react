import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/Profil.css";

<<<<<<< HEAD

=======
>>>>>>> f1907c9c471c4ec830d862ede9e5ab3ea6023b30
const Profil = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
<<<<<<< HEAD
    tel: "",
    email: "",
    adresse: "",
  });

  // Charger les données initiales depuis le serveur
  useEffect(() => {
    axios.get("/profil")
=======
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
>>>>>>> f1907c9c471c4ec830d862ede9e5ab3ea6023b30
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des données :", error);
<<<<<<< HEAD
=======
        setError("Impossible de charger les données du profil.");
>>>>>>> f1907c9c471c4ec830d862ede9e5ab3ea6023b30
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
<<<<<<< HEAD
    const formDataToSend = new URLSearchParams(formData);

    axios.post("/profil", formDataToSend)
      .then(() => {
        alert("Profil mis à jour avec succès !");
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour :", error);
=======
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
>>>>>>> f1907c9c471c4ec830d862ede9e5ab3ea6023b30
      });
  };

  return (
    <div className="main-content_Profil">
      <div className="profil-form-container">
        <h2>Informations Personnelles</h2>
<<<<<<< HEAD
=======
        {error && <p className="error">{error}</p>} {/* Afficher les erreurs */}
>>>>>>> f1907c9c471c4ec830d862ede9e5ab3ea6023b30
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

<<<<<<< HEAD
          <label htmlFor="tel">Téléphone :</label>
          <input
            type="text"
            id="tel"
            name="tel"
            value={formData.tel}
=======
          <label htmlFor="telephone">Téléphone :</label>
          <input
            type="text"
            id="telephone"
            name="telephone"
            value={formData.telephone}
>>>>>>> f1907c9c471c4ec830d862ede9e5ab3ea6023b30
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

<<<<<<< HEAD
          <label htmlFor="adresse">Adresse :</label>
          <input
            type="text"
            id="adresse"
            name="adresse"
            value={formData.adresse}
=======
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
>>>>>>> f1907c9c471c4ec830d862ede9e5ab3ea6023b30
            onChange={handleChange}
          />

          <button id="button_Profil" type="submit">Modifier</button>
        </form>
      </div>
    </div>
  );
};

export default Profil;
