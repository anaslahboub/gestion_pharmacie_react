import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts
import PatientLayout from '../layouts/PatientLayout';
import AdminLayout from '../layouts/AdminLayout';
// import PharmacieLayout from '../layouts/PharmacieLayout';

// Pages spécifiques

import NouvelleOrdonnance from '../pages/patient/NouvelleOrdonnance';
import PatientDashboard from '../pages/patient/Dashboard';
import Ordonnances from '../pages/patient/Ordonnances';
import Commandes from '../pages/patient/Commandes';
import Profil from '../pages/patient/Profil'
import Support from '../pages/patient/Support'
import PharmaciesProches from '../pages/patient/PharmaciesProches'
import DetailsOrdonnance from '../pages/patient/DetailsOrdonnance'
import DetailsCommande from '../pages/patient/DetailsCommande'
import CreateAccount from '../pages/patient/CreateAccount'
//import AdminDashboard from '../pages/admin/Dashboard';
import AdminDashboard from '../pages/admin/Dashboard/Dashbord';
import Pharmaciemanagement from '../pages/admin/PharmaciesManagement/PharmaciesManagement';
import PharmacyInfo from '../pages/admin/PharmacyInfo/PharmacyInfo';
import PharmaciesPartenaires from '../pages/admin/PharmaciesPartenaires/PharmaciesPartenaires';
import  UsersManagement from '../pages/admin/UsersManagement/UsersManagement';
import EditUsers from '../pages/admin/editusers/EditUser';
import AddUser from '../pages/admin/AddUser/AddUser';


// import PharmacieDashboard from '../pages/pharmacien/Dashboard';
import Login from '../pages/Login';
import Acceuil from '../pages/accueil';
import ProtectedRoute from "./ProtectedRoute";



const AppRoutes = () => {
    const isAuthenticated = !!localStorage.getItem("userToken"); // Exemple : vérifier si un token existe

    return (
        <Routes>
            {/* Route principale */}
            <Route path="/" element={<Acceuil />} />

            {/* Routes de connexion */}
            <Route path="/:role/login" element={<Login />} />
             {/* Routes Pour creer un compte */}
            <Route path="/patient/CreateAccount" element={<CreateAccount />} />
            
            {/* Espace Patient */}
            <Route path="/patient/Dashboard" element={<PatientLayout />}>
                <Route index element={ <PatientDashboard /> 
        } />
            </Route>
            <Route path="/patient/NouvelleOrdonnance" element={<PatientLayout />}>
                <Route index element={<NouvelleOrdonnance />} />
            </Route>
            <Route path="/patient/Ordonnances" element={<PatientLayout />}>
                <Route index element={<Ordonnances />} />
            </Route>
            <Route path="/patient/Commandes" element={<PatientLayout />}>
                <Route index element={<Commandes />} />
            </Route>
            <Route path="/patient/Profil" element={<PatientLayout />}>
                <Route index element={<Profil />} />
            </Route>
            <Route path="/patient/Support" element={<PatientLayout />}>
                <Route index element={<Support />} />
            </Route>
            <Route path="/patient/PharmaciesProches" element={<PatientLayout />}>
                <Route index element={<PharmaciesProches />} />
            </Route>
            <Route path="/patient/DetailsOrdonnance" element={<PatientLayout />}>
                <Route index element={<DetailsOrdonnance />} />
            </Route>
            <Route path="/patient/DetailsCommande" element={<PatientLayout />}>
                <Route index element={<DetailsCommande />} />
            </Route>
            

            <Route path="/admin" element={<AdminLayout />}>
  <Route index element={<AdminDashboard />} />
  <Route path="dashboard" element={<AdminDashboard />} /> {/* Route spécifique */}
  <Route path="pharmaciesManagement" element={<Pharmaciemanagement />} />
  <Route path="pharmacyInfo" element={<PharmacyInfo />} />
  <Route path="PharmaciesPartenaires" element={<PharmaciesPartenaires />} />
  <Route path="UsersManagement" element={<UsersManagement />} />
  <Route path="editusers" element={<EditUsers />} />
  <Route path="AddUser" element={<AddUser />} />

  
</Route>

            

            {/* Espace Pharmacien */}
            {/* <Route path="/pharmacien" element={<PharmacieLayout />}>
                <Route index element={<PharmacieDashboard />} />
            </Route> */}
        </Routes>
    );
};

export default AppRoutes;
