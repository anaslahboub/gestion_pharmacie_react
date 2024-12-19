import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/Profil.css"; // Assurez-vous que le fichier CSS existe

const Profil = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(""); // Gestion des erreurs
  const [successMessage, setSuccessMessage] = useState(""); // Gestion des messages de succès
  const [showPassword, setShowPassword] = useState(false); // Toggle pour afficher le mot de passe
  const patientId = localStorage.getItem("patientId");

  // Charger les données initiales depuis le serveur
  useEffect(() => {
    const fetchProfilData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/pharmacie__API/api/patient/profil?patientId=${patientId}`
        );
        setFormData(response.data);
        setError(""); // Réinitialiser les erreurs en cas de succès
      } catch (err) {
        console.error("Erreur lors du chargement des données :", err);
        setError("Impossible de charger les données du profil.");
      }
    };
    fetchProfilData();
  }, [patientId]);

  // Gestion des changements dans les champs du formulaire
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Soumission des modifications au serveur
  const handleSubmit = async (event) => {
    event.preventDefault();

    const confirmation = window.confirm(
      "Voulez-vous vraiment mettre à jour le profil ?"
    );
    if (!confirmation) return; // Si l'utilisateur annule

    if (!formData.nom || !formData.prenom || !formData.telephone || !formData.email) {
      setError("Tous les champs doivent être remplis !");
      setSuccessMessage("");
      return;
    }

    try {
      await axios.put(
        `http://localhost:8080/pharmacie__API/api/patient/profilUpdate?patientId=${patientId}`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setSuccessMessage("Profil mis à jour avec succès !");
      setError(""); // Réinitialiser les erreurs
    } catch (err) {
      console.error("Erreur lors de la mise à jour :", err);
      setError("Une erreur s'est produite lors de la mise à jour du profil.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="main-content_Profil">
      <div className="profil-form-container">
        <h2>Informations Personnelles</h2>

        {/* Affichage des messages d'erreur et de succès */}
        

        <form onSubmit={handleSubmit}>
          <label htmlFor="nom">Nom :</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            placeholder="Entrez votre nom"
          />

          <label htmlFor="prenom">Prénom :</label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            placeholder="Entrez votre prénom"
          />

          <label htmlFor="telephone">Téléphone :</label>
          <input
            type="text"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            placeholder="Entrez votre numéro de téléphone"
          />

          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Entrez votre email"
          />

          <label htmlFor="password">Mot de passe :</label>
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Entrez un nouveau mot de passe"
            />
            <span
              className="password-toggle-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <button id="button_Profil" type="submit">
            Modifier
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profil;
