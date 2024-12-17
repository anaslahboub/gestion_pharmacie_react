import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './PharmaciesManagement.css';

  
function PharmaciesManagement() {
  const [pharmacies , setPharmacies]= useState([]);

  useEffect(() => {
    const fetchPharmacies = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/pharmacie__API/api/admin/pharmacies`);
        setPharmacies(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching pharmacies:', error);
      }
    };

    fetchPharmacies();
  }, []);

  // Désactiver une pharmacie
  const handleDisable = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir désactiver cette pharmacie ?')) {
      console.log(`Désactivation de la pharmacie avec l'ID: ${id}`);
      // Logique de désactivation (par exemple, appel API)
      setPharmacies(pharmacies.map(pharmacy => 
        pharmacy.id === id ? { ...pharmacy, status: 'Désactivée' } : pharmacy
      ));
    }
  };

  return (
    <div>
      <h2>Liste des Pharmacies</h2>
      <Link to={`/admin/ajouterpharmacie`} className="btn">Ajouter une Pharmacie</Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>PréNom</th>

            <th>Adresse</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pharmacies.map((pharmacy) => (
            <tr key={pharmacy.id}>
              <td>{pharmacy.id}</td>
              <td>{pharmacy.nom}</td>
              <td>{pharmacy.nom}</td>

              <td>{pharmacy.localistion.nomMap}</td>
              <td> {pharmacy.isPartner}</td>
              <td>
                <Link to={`/admin/pharmacyInfo/${pharmacy.id}`} className="btn">VISUAISER</Link>
                <a href="#" className="btn" onClick={() => handleDisable(pharmacy.id)}>Désactiver</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PharmaciesManagement;
