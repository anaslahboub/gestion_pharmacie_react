import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/Profil.css";


const Profil = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    tel: "",
    email: "",
    adresse: "",
  });

  // Charger les données initiales depuis le serveur
  useEffect(() => {
    axios.get("/profil")
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des données :", error);
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
    const formDataToSend = new URLSearchParams(formData);

    axios.post("/profil", formDataToSend)
      .then(() => {
        alert("Profil mis à jour avec succès !");
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour :", error);
      });
  };

  return (
    <div className="main-content_Profil">
      <div className="profil-form-container">
        <h2>Informations Personnelles</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nom">Nom :</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            className="input-profile"
          />

          <label htmlFor="prenom">Prénom :</label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            className="input-profile"
          />

          <label htmlFor="tel">Téléphone :</label>
          <input
            type="text"
            id="tel"
            name="tel"
            value={formData.tel}
            onChange={handleChange}
            className="input-profile"
          />

          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-profile"
          />

          <label htmlFor="adresse">Adresse :</label>
          <input
            type="text"
            id="adresse"
            name="adresse"
            value={formData.adresse}
            onChange={handleChange}
            className="input-profile"
          />

          <button id="button_Profil" type="submit">Modifier</button>
        </form>
      </div>
    </div>
  );
};

export default Profil;
