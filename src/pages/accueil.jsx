import React from "react";
import "../pages/acceuil.css";
import { useNavigate } from "react-router-dom";

const Acceuil = () => {
    const navigate = useNavigate();

    const handleChoice = (role) => {
        navigate(`/${role}/login`); // Redirection vers la page de connexion du rôle choisi
    };
    return (
        <div className="wrapper">
            <h1>Vous êtes</h1>
            <div className="container">
                <div className="card-accueil" onClick={() => handleChoice("admin")}>
                    <img src="./src/assets/images/admin.png" alt="Admin" />
                    <h2>Admin</h2>
                    <p>Gérez les utilisateurs et les configurations.</p>
                </div>
                <div className="card-accueil" onClick={() => handleChoice("patient")}>
                    <img src="./src/assets/images/patient.png" alt="Patient" />
                    <h2>Patient</h2>
                    <p>Consultez vos prescriptions et vos ordonnances.</p>
                </div>
                <div className="card-accueil" onClick={() => handleChoice("pharmacien")}>
                    <img src="./src/assets/images/pharmacist.png" alt="Pharmacien" />
                    <h2>Pharmacien</h2>
                    <p>Gérez les ordonnances et créer les commandes.</p>
                </div>
            </div>
        </div>
    );  
};
export default Acceuil;
