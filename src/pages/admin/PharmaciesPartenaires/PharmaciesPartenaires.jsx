import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PharmaciesPartenaires.css'; // Assurez-vous d'inclure le style CSS

const PharmaciesPartenaires = () => {
  // Exemple de données des pharmacies
  const [pharmacies, setPharmacies] = useState([
    { id: 1, name: 'Pharmacie Centrale', address: '123 Rue Principale', active: true },
    { id: 2, name: 'Pharmacie du Parc', address: '456 Avenue de la République', active: false },
    { id: 3, name: 'Pharmacie des Collines', address: '789 Rue des Collines', active: true },
  ]);

  // Fonction pour changer le statut d'une pharmacie
  const togglePharmacyStatus = (id) => {
    const updatedPharmacies = pharmacies.map(pharmacy =>
      pharmacy.id === id ? { ...pharmacy, active: !pharmacy.active } : pharmacy
    );
    setPharmacies(updatedPharmacies);
  };

  // Filtrage des pharmacies actives
  const activePharmacies = pharmacies.filter(pharmacy => pharmacy.active);

  return (
    <div>
      <h2>Pharmacies Partenaires</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Adresse</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pharmacies.map(pharmacy => (
            <tr key={pharmacy.id}>
              <td>{pharmacy.id}</td>
              <td>{pharmacy.name}</td>
              <td>{pharmacy.address}</td>
              <td>{pharmacy.active ? 'Active' : 'Inactive'}</td>
              <td>
                <button 
                  className={`btn ${pharmacy.active ? 'btn-disable' : 'btn-enable'}`} 
                  onClick={() => togglePharmacyStatus(pharmacy.id)}
                >
                  {pharmacy.active ? 'Désactiver' : 'Activer'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/admin/pharmaciesManagement" className="btn">Retour à la liste des pharmacies</Link>
    </div>
  );
};

export default PharmaciesPartenaires;
