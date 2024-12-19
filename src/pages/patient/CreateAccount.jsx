import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/CreateAccount.css';

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    password: '',
    confirmPassword: '',
    localisation: {
      latitude: null,
      longitude: null,
    },
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Fonction pour récupérer la localisation
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData((prevData) => ({
            ...prevData,
            localisation: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
          }));
        },
        (error) => {
          console.error('Erreur de géolocalisation :', error.message);
        }
      );
    } else {
      console.error('La géolocalisation n’est pas supportée par ce navigateur.');
    }
  };

  // Récupération de la localisation lors du chargement du composant
  useEffect(() => {
    getLocation();
  }, []);

  // Gestion des changements dans les champs de formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation des mots de passe
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Les mots de passe ne correspondent pas.');
      return;
    }

    // Réinitialisation des messages
    setErrorMessage('');
    setSuccessMessage('');

    try {
      // Envoi des données à l'API
      const response = await axios.post(
        'http://localhost:8080/pharmacie__API/api/patient/CreateAccount',
        {
          nom: formData.nom,
          prenom: formData.prenom,
          email: formData.email,
          telephone: formData.telephone,
          password: formData.password,
          localisation: formData.localisation,
        }
      );

      // Affichage du message de succès
      setSuccessMessage(response.data.message || 'Compte créé avec succès !');
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        password: '',
        confirmPassword: '',
        localisation: {
          latitude: null,
          longitude: null,
        },
      });
    } catch (error) {
      // Gestion des erreurs
      if (error.response) {
        setErrorMessage(error.response.data.message || 'Erreur lors de l’inscription.');
      } else {
        setErrorMessage('Erreur réseau ou problème de communication avec le serveur.');
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
          type="tel"
          id="telephone"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          placeholder="Entrez votre numéro de téléphone"
          pattern="[0-9]{10}"
          title="Veuillez entrer un numéro de téléphone valide (10 chiffres)."
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
          placeholder="Confirmez le mot de passe"
          required
        />

        <button type="submit">Créer un Compte</button>
      </form>

      {errorMessage && <p className="error">{errorMessage}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
    </div>
  );
};

export default CreateAccount;
