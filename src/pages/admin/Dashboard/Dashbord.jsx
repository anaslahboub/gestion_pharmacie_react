import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import nécessaire pour Link
import './Dashbord.css';

const AdminDashboard = () => {
  const [userCount, setUserCount] = useState(0);
  const [pharmacyCount, setPharmacyCount] = useState(0);
  const [activePharmacies, setActivePharmacies] = useState(0);
  const [inactivePharmacies, setInactivePharmacies] = useState(0);
  const [partnerPharmacies, setPartnerPharmacies] = useState(0);
  const [nonPartnerPharmacies, setNonPartnerPharmacies] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fonction pour récupérer les statistiques
  const fetchStatistics = async () => {
    try {
      setLoading(true);
      const [
        userResponse,
        pharmacyResponse,
        partnerResponse,
        nonPartnerResponse,
      ] = await Promise.all([
        fetch('http://localhost:8080/pharmacie__API/api/admin/nbrpatients'),
        fetch('http://localhost:8080/pharmacie__API/api/admin/nbrpharmacies'),
        fetch('http://localhost:8080/pharmacie__API/api/admin/nbrpharmacie/partenaire'),
        fetch('http://localhost:8080/pharmacie__API/api/admin/nbrpharmacie/nonpartenaire'),
      ]);

      const userData = await userResponse.json();
      const pharmacyData = await pharmacyResponse.json();
      const partnerData = await partnerResponse.json();
      const nonPartnerData = await nonPartnerResponse.json();
      
      setUserCount(userData); // Nombre d'utilisateurs
      setPharmacyCount(pharmacyData); // Nombre total de pharmacies
      setPartnerPharmacies(partnerData); // Nombre de pharmacies partenaires
      setNonPartnerPharmacies(nonPartnerData); // Nombre de pharmacies non partenaires

      // Calculer pharmacies actives et inactives
      const active = pharmacyData.filter((pharmacy) => pharmacy.status === 'active').length;
      setActivePharmacies(active);
      setInactivePharmacies(pharmacyData.length - active);
    } catch (error) {
      console.error('Erreur lors de la récupération des statistiques :', error);
    } finally {
      setLoading(false);
    }
  };

  // Charger les données au montage du composant
  useEffect(() => {
    fetchStatistics();
  }, []);

  // Afficher un message de chargement si les données ne sont pas encore disponibles
  if (loading) {
    return <div>Chargement des statistiques...</div>;
  }

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      {/* Statistiques globales */}
      <div className="dashboard-summary">
        <div className="summary-card">
          <h2>Total Utilisateurs</h2>
          <p>{userCount}</p>
        </div>
        <div className="summary-card">
          <h2>Total Pharmacies</h2>
          <p>{pharmacyCount}</p>
        </div>
      </div>

      {/* Pharmacies partenaires et non partenaires */}
      <div className="dashboard-cards">
        <div className="card">
          <Link to="/admin/pharmaciespartenaires">
            <h3>Pharmacies Partenaires</h3>
            <p>{partnerPharmacies}</p>
          </Link>
        </div>
        <div className="card">
          <Link to="/admin/pharmaciesnonpartenaires">
            <h3>Pharmacies Non Partenaires</h3>
            <p>{nonPartnerPharmacies}</p>
          </Link>
        </div>
      </div>

      {/* Vue globale de l'application */}
      <div className="global-view">
        <h2>Vue Globale de l'Application</h2>
        <p>
          L'application compte actuellement <strong>{userCount}</strong> utilisateurs enregistrés et{' '}
          <strong>{pharmacyCount}</strong> pharmacies. De plus, il y a <strong>{partnerPharmacies}</strong>{' '}
          pharmacies partenaires et <strong>{nonPartnerPharmacies}</strong> pharmacies non partenaires.
        </p>
      </div>
    </div>
  );
};

export default AdminDashboard;
