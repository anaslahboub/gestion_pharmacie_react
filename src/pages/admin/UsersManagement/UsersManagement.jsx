import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';  // Make sure axios is imported
import './UsersManagement.css';  // CSS import at the top level

const UsersManagement = () => {
  const [patients, setPatients] = useState([]);  // State for storing patients

  // Fetch patients on component mount
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('http://localhost:8080/pharmacie__API/api/admin/patients');
        setPatients(response.data);  // Store fetched patients in state
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();  // Call the function to fetch patients
  }, []);
  const deleteuser = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/pharmacie__API/api/admin/deleteuser/${id}`, 
      { method: "DELETE" });
      console.log(`supression du patient avec id : ${id} .`);
    } catch (error) {
      console.error('Erreur lors du supression de patient :', error);
    }
  };
  

  return (
    <div className="users-management">
      <h2>Gestion des Patients</h2>
      
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Adresse</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.nom}</td>
              <td>{patient.prenom}</td>
              <td>{patient.email}</td>
              <td>{patient.telephone}</td>
              <td>{patient.localisation.nomMap}</td>
              <td>
                <Link 
                  to={`/admin/editusers/${patient.id}`} 
                  className="btn edit-user" 
                  aria-label={`Modifier l'utilisateur ${patient.name} ${patient.prénom}`}
                >
                  VISUALISER
                </Link>
                <button 
                  className="btn delete-user" 
                  onClick={() => deleteuser(patient.id)} 
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersManagement;  // Ensure export is here
