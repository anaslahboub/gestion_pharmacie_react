import React, { useState, useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import axios from 'axios';
import './editusers.css';

const UsersManagement = () => {
  const [patients, setPatients] = useState();
const {id } = useParams() ;

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/pharmacie__API/api/admin/patient/${id}`);
        setPatients(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des patients :', error);
      }
    };

    fetchPatients();
  }, [id]);

  const handleDeletePatient = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/pharmacie__API/api/admin/patient/${id}`);
      setPatients((prevPatients) => prevPatients.filter(patient => patient.id !== id));
    } catch (error) {
      console.error('Erreur lors de la suppression du patient :', error);
    }
  };

  return (
    <div className="users-management">
      <h2>Gestion des Patients</h2>
      <Link to="/admin/addUser" className="add-user">Ajouter un patient</Link>
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
  {patients ? (
    <tr>
      <td>{patients.id}</td>
      <td>{patients.nom}</td>
      <td>{patients.prenom}</td>
      <td>{patients.email}</td>
      <td>{patients.telephone}</td>
      <td>{patients.localisation ? patients.localisation.nomMap : 'Adresse inconnue'}</td>
      <td>
        
        <button 
          className="btn delete-user" 
          onClick={() => handleDeletePatient(patients.id)} 
          aria-label={`Supprimer l'utilisateur ${patients.nom} ${patients.prenom}`}
        >
          Supprimer
        </button>
      </td>
    </tr>
  ) : (
    <tr>
      <td colSpan="7">Aucun patient trouvé.</td>
    </tr>
  )}
</tbody>


      </table>
      <Link to="/admin/usersManagement" className="btn">
        Retour à la liste des Patients
      </Link>
    </div>
  );
};

export default UsersManagement;
