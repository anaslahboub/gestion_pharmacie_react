import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PatientLayout from '../layouts/PatientLayout';
import AdminLayout from '../layouts/AdminLayout';
import PharmacieLayout from '../layouts/PharmacieLayout';
import FormsLayout from '../layouts/FormsLayout';

// Pages spécifiques pour chaque utilisateur
import PharmacieDashboard from '../pages/pharmacie/dashbord_PHA';
import Login from '../pages/Login';
import Accueil from '../pages/accueil';
import Commande from '../pages/pharmacie/commande_PHA';
import AddPharmacy from '../pages/pharmacie/addPharmacy';
import DetailOrdonnance from '../pages/pharmacie/detailOrdannace';
import Notification from '../pages/pharmacie/notification_PHA';
import Ordonnonce from '../pages/pharmacie/ordonnonce_PHA';
import Profile from '../pages/pharmacie/profile_PHA';
import Login_PHA from '../pages/pharmacie/login_PHA';
import DetailCommande from '../pages/pharmacie/detailCommande'

const AppRoutes = () => {
  return (
    <Routes>

      {/* Page d'accueil */}
      <Route path="/" element={<Accueil />} />




      {/* Routes pour les formulaires de connexion */}
      <Route path="/patient" element={<FormsLayout />}>
        <Route path="forms" element={<Login />} />
      </Route>
      <Route path="/pharmacien" element={<FormsLayout />}>
        <Route path="forms" element={<Login />} />
      </Route>
      <Route path="/admin" element={<FormsLayout />}>
        <Route path="forms" element={<Login />} />
      </Route>




      {/* Layout Patient */}
      <Route path="/patient" element={<PatientLayout />}>
        {/* Ajoute des routes spécifiques pour Patient ici */}
      </Route>





      {/* Layout Admin */}
      <Route path="/admin" element={<AdminLayout />}>
        {/* Ajoute des routes spécifiques pour Admin ici */}
      </Route>



      {/* Layout Pharmacie */}
      <Route path="/pharmacie" element={<PharmacieLayout />}>
        {/* Dashboard Pharmacie */}
        <Route index element={<PharmacieDashboard />} />
        <Route path="dashboard" element={<PharmacieDashboard />} />
        {/* Routes spécifiques Pharmacie */}
        <Route path="commande" element={<Commande />} />
        <Route path="addPharmacy" element={<AddPharmacy />} />
        <Route path="detailOrdonnance/:id" element={<DetailOrdonnance />} />
        <Route path="notification" element={<Notification />} />
        <Route path="ordonnonce" element={<Ordonnonce />} />
        <Route path="profile" element={<Profile />} />
        <Route path="forms" element={<Login_PHA />} />*
        <Route path="detailCommande/:id" element={<DetailCommande />} />
        
      </Route>
    </Routes>
  );
};

export default AppRoutes;
