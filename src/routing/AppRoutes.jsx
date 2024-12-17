import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts
import PatientLayout from '../layouts/PatientLayout';
<<<<<<< HEAD
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
import AjouterPharmacie from '../pages/admin/ajouterpharmacie/Ajouterpharmacie';


// import PharmacieDashboard from '../pages/pharmacien/Dashboard';
import Login from '../pages/Login';
import Acceuil from '../pages/accueil';
import ProtectedRoute from "./ProtectedRoute";



const AppRoutes = () => {
    const isAuthenticated = !!localStorage.getItem("userToken"); // Exemple : vérifier si un token existe
=======
//import AdminLayout from '../layouts/AdminLayout';
import PharmacieLayout from '../layouts/PharmacieLayout';
//import FormsLayout from '../layouts/FormsLayout';

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
   
>>>>>>> f1907c9c471c4ec830d862ede9e5ab3ea6023b30

    return (
        <Routes>
            {/* Route principale */}
<<<<<<< HEAD
            <Route path="/" element={<Acceuil />} />
=======
            <Route path="/" element={<Accueil />} />
            
>>>>>>> f1907c9c471c4ec830d862ede9e5ab3ea6023b30

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
<<<<<<< HEAD
            <Route path="/patient/DetailsCommande" element={<PatientLayout />}>
                <Route index element={<DetailsCommande />} />
            </Route>
            

            <Route path="/admin" element={<AdminLayout />}>
  <Route index element={<AdminDashboard />} />
  <Route path="dashboard" element={<AdminDashboard />} /> {/* Route spécifique */}
  <Route path="pharmaciesManagement" element={<Pharmaciemanagement />} />
  <Route path="pharmacyInfo/:id" element={<PharmacyInfo />} />
  <Route path="PharmaciesPartenaires" element={<PharmaciesPartenaires />} />
  <Route path="UsersManagement" element={<UsersManagement />} />
  <Route path="editusers/:id" element={<EditUsers />} />
  <Route path="AddUser" element={<AddUser />} />
  <Route path="ajouterpharmacie" element={<AjouterPharmacie />} />

  
</Route>

            

            {/* Espace Pharmacien */}
            {/* <Route path="/pharmacien" element={<PharmacieLayout />}>
                <Route index element={<PharmacieDashboard />} />
            </Route> */}
=======
            <Route path="/patient/DetailsCommande/:id" element={<PatientLayout />}>
                <Route index element={<DetailsCommande />} />
            </Route>
            
            {/* Espace Admin */}
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
              <Route path="forms" element={<Login_PHA />} />*
              <Route path="detailCommande/:id" element={<DetailCommande />} />
            
          </Route>
>>>>>>> f1907c9c471c4ec830d862ede9e5ab3ea6023b30
        </Routes>
    );
};

export default AppRoutes;
