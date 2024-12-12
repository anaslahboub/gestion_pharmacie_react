import React, { useState, useEffect } from 'react';
import './Dashbord.css';

const AdminDashboard = () => {
  const [userCount, setUserCount] = useState(0);
  const [pharmacyCount, setPharmacyCount] = useState(0);
  const [activePharmacies, setActivePharmacies] = useState(0);
  const [inactivePharmacies, setInactivePharmacies] = useState(0);

  // Fetch data on component mount
  useEffect(() => {
    fetchStatistics();
  }, []);

  const fetchStatistics = async () => {
    try {
      const userResponse = await fetch('/api/users/count');
      const userData = await userResponse.json();
      setUserCount(userData.count);

      const pharmacyResponse = await fetch('/api/pharmacies');
      const pharmacyData = await pharmacyResponse.json();
      setPharmacyCount(pharmacyData.length);

      const active = pharmacyData.filter((pharmacy) => pharmacy.status === 'active').length;
      setActivePharmacies(active);
      setInactivePharmacies(pharmacyData.length - active);
    } catch (error) {
      console.error('Error fetching statistics:', error);
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      {/* Global Statistics */}
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

      {/* Partner and Non-Partner Pharmacies */}
      <div className="dashboard-cards">
        <div className="card">
          <h3>Pharmacies Partenaires</h3>
          <p>{activePharmacies}</p>
        </div>
        <div className="card">
          <h3>Pharmacies Non Partenaires</h3>
          <p>{inactivePharmacies}</p>
        </div>
      </div>

      {/* Global Application Overview */}
      <div className="global-view">
        <h2>Vue Globale de l'Application</h2>
        <p>
          L'application compte actuellement <strong>{userCount}</strong> utilisateurs
          enregistrés et <strong>{pharmacyCount}</strong> pharmacies, dont{' '}
          <strong>{activePharmacies}</strong> sont actives et{' '}
          <strong>{inactivePharmacies}</strong> sont inactives.
        </p>
      </div>
    </div>
  );
};

export default AdminDashboard;
