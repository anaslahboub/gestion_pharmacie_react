import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Pharmacyinfo.css/';
const PharmacyInfo = () => {
  const { id } = useParams();  // Récupère l'ID de la pharmacie à partir de l'URL
  const navigate = useNavigate();  // Pour la navigation après modification
  const [pharmacy, setPharmacy] = useState({
    name: '',
    address: '',
    status: '',
  });

  // Fonction pour charger les données de la pharmacie depuis l'API
  useEffect(() => {
    // Remplacer par l'appel réel à votre API pour récupérer les informations de la pharmacie
    fetch(`/api/pharmacies/${id}`)
      .then((response) => response.json())
      .then((data) => setPharmacy(data))
      .catch((error) => console.error('Erreur lors du chargement des données:', error));
  }, [id]);

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();

    // Mettre à jour les données de la pharmacie via une API
    fetch(`/api/pharmacies/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pharmacy),
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Pharmacie modifiée avec succès');
        navigate('/admin/pharmaciesManagement');  // Redirige vers la gestion des pharmacies après modification
      })
      .catch((error) => console.error('Erreur lors de la modification de la pharmacie:', error));
  };

  // Fonction pour gérer les changements dans les champs du formulaire
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPharmacy({
      ...pharmacy,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Modifier les informations de la pharmacie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nom de la pharmacie :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={pharmacy.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="address">Adresse :</label>
          <input
            type="text"
            id="address"
            name="address"
            value={pharmacy.address}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="status">Statut :</label>
          <select
            id="status"
            name="status"
            value={pharmacy.status}
            onChange={handleChange}
            required
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <div>
          <button type="submit">Enregistrer les modifications</button>
        </div>
      </form>
    </div>
  );
};

export default PharmacyInfo;
