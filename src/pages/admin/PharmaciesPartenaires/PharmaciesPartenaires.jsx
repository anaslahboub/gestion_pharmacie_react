import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PharmaciesPartenaires.css'; // Assurez-vous d'inclure le style CSS

const PharmaciesPartenaires = () => {
  // État pour gérer les pharmacies
  const [pharmacies, setPharmacies] = useState([]);
  const [loading, setLoading] = useState(true); // Indicateur de chargement
  const [error, setError] = useState(null); // État pour gérer les erreurs

  // Fonction pour récupérer les pharmacies partenaires depuis l'API
  const fetchPartnerPharmacies = async () => {
    try {
      const response = await fetch('http://localhost:8080/pharmacie__API/api/admin/pharmaciees/partners');
      if (!response.ok) {
        throw new Error(`Erreur: ${response.status}`); // Gérer les erreurs HTTP
      }
      const data = await response.json(); // Parse les données JSON
      setPharmacies(data); // Met à jour l'état
    } catch (err) {
      setError(err.message); // Gère les erreurs
    } finally {
      setLoading(false); // Désactive le chargement
    }
  };

  // Utilisez useEffect pour appeler fetchPartnerPharmacies au chargement
  useEffect(() => {
    fetchPartnerPharmacies();
  }, []);

  // Fonction pour changer le statut d'une pharmacie (activer/désactiver)
  const togglePharmacyStatus = async (id, currentStatus) => {
    try {
      const newStatus = currentStatus === 'partenaire' ? 'non-partenaire' : 'partenaire';
      const url = `http://localhost:8080/pharmacie__API/api/admin/pharmacie/${id}/changer`;

      const response = await fetch(url, {
        method: 'PUT', // Assurez-vous que votre API accepte la méthode PUT
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }), // Envoyer le nouveau statut
      });

      if (!response.ok) {
        throw new Error(`Erreur: ${response.status}`);
      }

      // Mettre à jour l'état local après avoir changé le statut
      setPharmacies((prevPharmacies) =>
        prevPharmacies.map((pharmacy) =>
          pharmacy.id === id ? { ...pharmacy, status: newStatus } : pharmacy
        )
      );
    } catch (err) {
      setError(`Erreur lors de la mise à jour: ${err.message}`);
    }
  };

  // Génération du tableau de pharmacies
  const renderPharmaciesTable = () => {
    return pharmacies.map((pharmacy) => (
      <tr key={pharmacy.id}>
        <td>{pharmacy.id}</td>
        <td>{pharmacy.nom}</td>
        <td>{pharmacy.localistion?.nomMap || 'Adresse non disponible'}</td>
        <td>{pharmacy.isPartner ? 'Partenaire' : 'Non Partenaire'}</td>
        <td>
          <button
            className="btn btn-disable"
            onClick={() => togglePharmacyStatus(pharmacy.id, pharmacy.status)}
          >
            Désactiver
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div>
      <h2>Pharmacies Partenaires</h2>
      {loading ? (
        <p>Chargement des données...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
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
          <tbody>{renderPharmaciesTable()}</tbody>
        </table>
      )}
      <Link to="/admin/pharmaciesManagement" className="btn">
        Retour à la liste des pharmacies
      </Link>
    </div>
  );
};

export default PharmaciesPartenaires;
