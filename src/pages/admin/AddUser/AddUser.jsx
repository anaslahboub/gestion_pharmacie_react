import React, { useState } from 'react';
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

  // Gestion des modifications du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Remplacez cette ligne par une requête API pour ajouter l'utilisateur
    console.log('Nouvel utilisateur ajouté :', newUser);

    // Rediriger vers la page UsersManagement après l'ajout de l'utilisateur
    navigate('/admin/usersManagement');
  };

  return (
    <div>
      <h2>Ajouter un Utilisateur</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom :</label>
          <input
            type="text"
            name="name"
            value={newUser.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email :</label>
          <input
            type="email"
            name="email"
            value={newUser.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Téléphone :</label>
          <input
            type="tel"
            name="phone"
            value={newUser.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Adresse :</label>
          <input
            type="text"
            name="address"
            value={newUser.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-save">Ajouter</button>
        <button type="button" className="btn btn-cancel" onClick={() => navigate('/admin/usersManagement')}>
          Annuler
        </button>
      </form>
    </div>
  );
};

export default AddUser;
