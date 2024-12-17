import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts
import PatientLayout from '../layouts/PatientLayout';
//import AdminLayout from '../layouts/AdminLayout';
import PharmacieLayout from '../layouts/PharmacieLayout';
//import admin routes;
//import AdminDashboard from '../pages/admin/Dashboard';
import AdminLayout from'../layouts/AdminLayout';
import AdminDashboard from '../pages/admin/Dashboard/Dashbord';
import Pharmaciemanagement from '../pages/admin/PharmaciesManagement/PharmaciesManagement';
import PharmacyInfo from '../pages/admin/PharmacyInfo/PharmacyInfo';
import PharmaciesPartenaires from '../pages/admin/PharmaciesPartenaires/PharmaciesPartenaires';
import  UsersManagement from '../pages/admin/UsersManagement/UsersManagement';
import EditUsers from '../pages/admin/editusers/EditUser';
import AjouterPharmacie from '../pages/admin/ajouterpharmacie/Ajouterpharmacie';



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
import DetailCommande from '../pages/pharmacie/detailCommande'

//marwan import :

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

const AppRoutes = () => {
   

    return (
        <Routes>
            {/* Route principale */}
            <Route path="/" element={<Accueil />} />
            

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
            <Route path="/patient/DetailsCommande/:id" element={<PatientLayout />}>
                <Route index element={<DetailsCommande />} />
            </Route>
            
            {/* Espace Admin */}
            <Route path="/admin" element={<AdminLayout />}>
  <Route index element={<AdminDashboard />} />
  <Route path="dashboard" element={<AdminDashboard />} /> {/* Route spécifique */}
  <Route path="pharmaciesManagement" element={<Pharmaciemanagement />} />
  <Route path="pharmacyInfo/:id" element={<PharmacyInfo />} />
  <Route path="PharmaciesPartenaires" element={<PharmaciesPartenaires />} />
  <Route path="UsersManagement" element={<UsersManagement />} />
  <Route path="editusers/:id" element={<EditUsers />} />
  <Route path="ajouterpharmacie" element={<AjouterPharmacie />} />


</Route>
            {/* <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
            </Route> */}

            {/* Espace Pharmacien */}
           {/* Layout Pharmacie */}
          <Route path="/pharmacie" element={<PharmacieLayout />}>
              {/* Dashboard Pharmacie */}
              <Route index element={<PharmacieDashboard />} />
              <Route path="dashboard" element={<PharmacieDashboard />} />
              <Route path="commande" element={<Commande />} />
              <Route path="addPharmacy" element={<AddPharmacy />} />
              <Route path="detailOrdonnance/:id" element={<DetailOrdonnance />} />
              <Route path="notification" element={<Notification />} />
              <Route path="ordonnonce" element={<Ordonnonce />} />
              <Route path="profile" element={<Profile />} />
              <Route path="forms" element={<Login />} />*
              <Route path="detailCommande/:id" element={<DetailCommande />} />
            
          </Route>
        </Routes>
    );
};

export default AppRoutes;
