import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddUser.css';

const AddUser = () => {
  const navigate = useNavigate();

  // État local pour les données de l'utilisateur
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  // Utilisation de useCallback pour éviter la recréation de la fonction à chaque rendu
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }, []); // La fonction ne dépend d'aucune variable externe

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Remplacez cette ligne par une requête API pour ajouter l'utilisateur
    console.log('Nouvel utilisateur ajouté :', newUser);

    // Rediriger vers la page UsersManagement après l'ajout de l'utilisateur
    navigate('/admin/usersManagement');
  };

  // Configuration des champs du formulaire
  const formFields = [
    { label: 'Nom', name: 'name', type: 'text' },
    { label: 'Email', name: 'email', type: 'email' },
    { label: 'Téléphone', name: 'phone', type: 'tel' },
    { label: 'Adresse', name: 'address', type: 'text' },
  ];

  return (
    <div>
      <h2>Ajouter un patient</h2>
      <form onSubmit={handleSubmit}>
        {formFields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name}>{field.label} :</label>
            <input
              type={field.type}
              id={field.name} // Ajout d'un id pour l'accessibilité
              name={field.name}
              value={newUser[field.name]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <div className="buttons-container">
          <button type="submit" className="btn btn-save">Ajouter</button>
          <button
            type="button"
            className="btn btn-cancel"
            onClick={() => navigate('/admin/usersManagement')}
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
