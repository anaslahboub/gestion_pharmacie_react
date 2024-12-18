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

    const changerPharmacieStatus = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/pharmacie__API/api/admin/pharmacie/${id}/changer`, 
    { method: "PUT" });
    console.log(`Statut de la pharmacie avec ID ${id} modifié.`);
  } catch (error) {
    console.error('Erreur lors du changement du statut de la pharmacie:', error);
  }
};


    // Désactiver une pharmacie
   const handleDisable = (id) => {
    changerPharmacieStatus(id);
};


    return (
      <div className='manager-countainer'>
        <h2>Liste des Pharmacies</h2>
        
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
                 <button type='button' className="btn btn-status" onClick={() => handleDisable(pharmacy.id)}>Changer</button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  export default PharmaciesManagement;
