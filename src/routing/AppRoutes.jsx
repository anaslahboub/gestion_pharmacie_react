import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PatientLayout from '../layouts/PatientLayout';
import AdminLayout from '../layouts/AdminLayout';
import PharmacieLayout from '../layouts/PharmacieLayout';
import FormsLayout from '../layouts/FormsLayout';

// Pages spécifiques pour chaque utilisateur
import PatientHome from './pages/PatientHome';
import AdminDashboard from './pages/AdminDashboard';
import PharmacieDashboard from './pages/PharmacieDashboard';
import Login from './pages/Login';
import Accueil from './pages/accueil';
import { path } from '../../node_modules/@babel/traverse/lib/cache';

const AppRoutes = () => {
  return (
    <Routes>

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


  
      <Route path="/patient" element={<PatientLayout />}>
        <Route index element={<PatientHome />} />
      </Route>
      
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
       
      </Route>

      <Route path="/pharmacien" element={<PharmacieLayout />}>
        <Route index element={<PharmacieDashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
