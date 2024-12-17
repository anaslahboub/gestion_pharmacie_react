<<<<<<< HEAD
import React from 'react'
import "./styles/CreateAccount.css";

const CreateAccount = () => {
  return (
    <div className="container_CreateAccount">
        <h1>Créer un Compte</h1>
        
        <form >
            <label htmlFor="fullName">Nom  :</label>
            <input type="text" id="fullName" name="fullName" placeholder="Entrez votre nom " required />
            <label htmlFor="fullName">Prenom :</label>
            <input type="text" id="fullName" name="fullName" placeholder="Entrez votre prenom" required />
            <label htmlFor="email">Adresse Email :</label>
            <input type="email" id="email" name="email" placeholder="Entrez votre email" required/>

            <label htmlFor="password">Mot de Passe :</label>
            <input type="password" id="password" name="password" placeholder="Choisissez un mot de passe" required/>

            <label htmlFor="confirmPassword">Confirmer le Mot de Passe :</label>
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirmez votre mot de passe" required/>

            <label htmlFor="phone">Numéro de Téléphone :</label>
            <input type="text" id="phone" name="phone" placeholder="Entrez votre numéro de téléphone"/>

            <label htmlFor="adresse">Adresse :</label>
            <input type="text" id="adresse" name="adresse" placeholder="Entrez votre adresse" required/>

            <button type="submit">Créer un Compte</button>
        </form>
    </div>
  )
}

export default CreateAccount
=======
import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./styles/CreateAccount.css";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",  // Ajout de prénom
    email: "",
    telephone: "",
    password: "",
    confirmPassword: "",
    localisation: {
      latitude: 0.0,
      longitude: 0.0,
    },
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Fonction pour récupérer la localisation
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData((prevData) => ({
            ...prevData,
            localisation: {
              latitude: parseFloat(position.coords.latitude), // Assurez-vous que c'est un nombre (double)
            longitude: parseFloat(position.coords.longitude), // Assurez-vous que c'est un nombre (double)
            },
          }));
        },
        (error) => {
          console.error("Erreur de géolocalisation :", error);
        }
      );
    } else {
      console.error("La géolocalisation n'est pas supportée par ce navigateur.");
    }
  };

  // Utilisation de useEffect pour obtenir la localisation dès le chargement du composant
  useEffect(() => {
    getLocation();
  }, []);

  // Fonction appelée lors du changement d'un champ
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fonction pour soumettre les données au back-end
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/pharmacie__API/api/patient/CreateAccount",  // Assurez-vous que l'URL correspond à votre API
        {
          nom: formData.nom,
          prenom: formData.prenom,  // Envoi de prénom au backend
          email: formData.email,
          telephone: formData.telephone,
          password: formData.password,
          localisation: formData.localisation,
          
        }
      );

      setSuccessMessage(response.data);
      setErrorMessage("");
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data);
      } else {
        setErrorMessage("Erreur lors de l'inscription. Veuillez réessayer.");
        setSuccessMessage("");
      }
    }
  };

  return (
    <div className="container_CreateAccount">
      <h1>Créer un Compte</h1>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="nom">Nom :</label>
        <input 
          type="text" 
          id="nom" 
          name="nom" 
          value={formData.nom} 
          onChange={handleChange} 
          placeholder="Entrez votre nom" 
          required 
        />
        
        <label htmlFor="prenom">Prénom :</label>
        <input 
          type="text" 
          id="prenom" 
          name="prenom" 
          value={formData.prenom} 
          onChange={handleChange} 
          placeholder="Entrez votre prénom" 
          required 
        />
        
        <label htmlFor="email">Adresse Email :</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="Entrez votre email" 
          required
        />
        
        <label htmlFor="telephone">Numéro de Téléphone :</label>
        <input 
          type="text" 
          id="telephone" 
          name="telephone" 
          value={formData.telephone} 
          onChange={handleChange} 
          placeholder="Entrez votre numéro de téléphone"
        />
        
        <label htmlFor="password">Mot de Passe :</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          placeholder="Choisissez un mot de passe" 
          required
        />
        
        <label htmlFor="confirmPassword">Confirmer Mot de Passe :</label>
        <input 
          type="password" 
          id="confirmPassword" 
          name="confirmPassword" 
          value={formData.confirmPassword} 
          onChange={handleChange} 
          placeholder="Confirmer le mot de passe" 
          required
        />

        <button type="submit">Créer un Compte</button>
      </form>

      {errorMessage && <p className="error" >{errorMessage}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
    </div>
  );
};

export default CreateAccount;
>>>>>>> f1907c9c471c4ec830d862ede9e5ab3ea6023b30
