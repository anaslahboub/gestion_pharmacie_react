import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts
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
            
            {/* Espace Admin */}
            {/* <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
            </Route> */}

            {/* Espace Pharmacien */}
            {/* <Route path="/pharmacien" element={<PharmacieLayout />}>
                <Route index element={<PharmacieDashboard />} />
            </Route> */}
        </Routes>
    );
};

export default AppRoutes;
