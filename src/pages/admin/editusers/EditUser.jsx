import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './editusers.css';

const EditUser = () => {
  const { id } = useParams(); // Récupère l'ID de l'utilisateur à partir de l'URL
  const navigate = useNavigate();

  // État local pour les données de l'utilisateur
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  // Charger les données utilisateur
  useEffect(() => {
    const fetchUser = async () => {
      // Exemple : Données simulées (Remplacer avec un appel API)
      const userData = {
        1: { name: 'Karim', email: 'karim@example.com', phone: '1234567890', address: '123 Rue Principale' },
        2: { name: 'Youssef', email: 'youssef@example.com', phone: '0987654321', address: '456 Avenue de la République' },
        3: { name: 'Marouane', email: 'marouane@example.com', phone: '1122334455', address: '789 Rue des Collines' },
      };

      // Vérifie si l'utilisateur existe, puis charge les données
      const userInfo = userData[id];
      if (userInfo) {
        setUser(userInfo);
      } else {
        // Si l'utilisateur n'est pas trouvé, rediriger ou afficher un message d'erreur
        navigate('/admin/usersManagement');
      }
    };

    fetchUser();
  }, [id, navigate]);

  // Gestion des modifications du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Remplacez cette ligne par une requête API pour sauvegarder les modifications
    console.log('Données mises à jour :', user);

    // Rediriger vers la page UsersManagement après la mise à jour de l'utilisateur
    navigate('/admin/usersManagement');
  };

  return (
    <div>
      <h2>Modifier l'Utilisateur</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom :</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email :</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Téléphone :</label>
          <input
            type="tel"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Adresse :</label>
          <input
            type="text"
            name="address"
            value={user.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-save">Sauvegarder</button>
        <button type="button" className="btn btn-cancel" onClick={() => navigate('/admin/usersManagement')}>
          Annuler
        </button>
      </form>
    </div>
  );
};

export default EditUser;
