import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './ajouterpharmacie.css';

const AjouterPharmacie = () => {
  const navigate = useNavigate(); // Pour naviguer après la soumission

  const [pharmacy, setPharmacy] = useState({
    name: '',
    address: '',
    status: 'partenaire', // Statut par défaut
  });

  // Utilisation de useCallback pour éviter la recréation de handleChange à chaque re-rendu
  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setPharmacy((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []); // La fonction ne dépend d'aucune variable externe

  // Soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`/api/pharmacies`, {
      method: 'POST', // Méthode POST pour ajouter
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pharmacy),
    })
      .then((response) => response.json())
      .then(() => {
        alert('Pharmacie ajoutée avec succès');
        navigate('/admin/pharmaciesManagement'); // Redirection après ajout
      })
      .catch((error) => console.error('Erreur lors de l\'ajout de la pharmacie:', error));
  };

  // Gestion du retour à la liste des pharmacies
  const handleGoBack = () => {
    navigate('/admin/pharmaciesManagement'); // Redirection vers la liste des pharmacies
  };

  return (
    <div>
      <h2>Ajouter une nouvelle pharmacie</h2>
      <form onSubmit={handleSubmit}>
        {/* Génération des champs de formulaire avec map */}
        {['name', 'address'].map((field) => (
          <div key={field}>
            <label htmlFor={field}>{field === 'name' ? 'Nom de la pharmacie' : 'Adresse'} :</label>
            <input
              type="text"
              id={field}
              name={field}
              value={pharmacy[field]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        {/* Champ select pour le statut */}
        <div>
          <label htmlFor="status">Statut :</label>
          <select
            id="status"
            name="status"
            value={pharmacy.status}
            onChange={handleChange}
            required
          >
            {['partenaire', 'non-partenaire'].map((option) => (
              <option key={option} value={option}>
                {option.charAt(0).toUpperCase() + option.slice(1).replace('-', ' ')}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button type="submit">Ajouter la pharmacie</button>
          <button
            type="button"
            onClick={handleGoBack}
            className="btn-back" // Classe CSS pour les styles du bouton retour
          >
            Retour à la liste des pharmacies
          </button>
        </div>
      </form>
    </div>
  );
};

export default AjouterPharmacie;
