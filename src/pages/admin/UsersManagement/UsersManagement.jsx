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

  // Function to delete a patient
  const handleDeletePatient = (id) => {
    setPatients(patients.filter(patient => patient.id !== id));  // Remove the patient from the list
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
                  onClick={() => handleDeletePatient(patient.id)} 
                  aria-label={`Supprimer l'utilisateur ${patient.name} ${patient.prénom}`}
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
