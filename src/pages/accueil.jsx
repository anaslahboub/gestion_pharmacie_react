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
<<<<<<< HEAD
                <div className="card" onClick={() => handleChoice("admin")}>
=======
                <div className="card-accueil" onClick={() => handleChoice("admin")}>
>>>>>>> f1907c9c471c4ec830d862ede9e5ab3ea6023b30
                    <img src="./src/assets/images/admin.png" alt="Admin" />
                    <h2>Admin</h2>
                    <p>Gérez les utilisateurs et les configurations.</p>
                </div>
<<<<<<< HEAD
                <div className="card" onClick={() => handleChoice("patient")}>
=======
                <div className="card-accueil" onClick={() => handleChoice("patient")}>
>>>>>>> f1907c9c471c4ec830d862ede9e5ab3ea6023b30
                    <img src="./src/assets/images/patient.png" alt="Patient" />
                    <h2>Patient</h2>
                    <p>Consultez vos prescriptions et vos ordonnances.</p>
                </div>
<<<<<<< HEAD
                <div className="card" onClick={() => handleChoice("pharmacien")}>
=======
                <div className="card-accueil" onClick={() => handleChoice("pharmacien")}>
>>>>>>> f1907c9c471c4ec830d862ede9e5ab3ea6023b30
                    <img src="./src/assets/images/pharmacist.png" alt="Pharmacien" />
                    <h2>Pharmacien</h2>
                    <p>Gérez les ordonnances et créer les commandes.</p>
                </div>
            </div>
        </div>
    );  
};
export default Acceuil;
