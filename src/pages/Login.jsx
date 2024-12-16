import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "../pages/Login.css";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    // Déterminer le rôle en fonction de l'URL
    const role = location.pathname.split("/")[1]; // Exemple : '/patient/signin'

    const titles = {
        patient: "Connexion - Patient",
        pharmacien: "Connexion - Pharmacien",
        admin: "Connexion - Admin",
    };

    // Gestion des champs de saisie
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Gestion de la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                `http://localhost:8080/pharmacie__API/api/${role}/login`, // URL dynamique basée sur le rôle
                {
                    email: formData.email,
                    password: formData.password,
                }
            );
        if(role=="patient"){
            if ( response.data) {
                localStorage.setItem("patientId", response.data);

            }   
            setSuccessMessage("Connexion réussie !");
            setErrorMessage("");
            setTimeout(() => {
                navigate(`/${role}/Dashboard`);
            }, 1000); 
           
        }    
          
        if(role=="pharmacien"){
           
            if ( response.data) {
                localStorage.setItem("idPharmacien", response.data);

            } 
            setSuccessMessage("Connexion réussie !");
            setErrorMessage("");
            setTimeout(() => {
                navigate(`/pharmacie/dashboard`);
            }, 1000);
            
        }
               
            
        } catch (error) {
            if (error.response) {
                setErrorMessage(error.response.data); // Affiche l'erreur du back-end
            } else {
                setErrorMessage("Erreur lors de la connexion. Veuillez réessayer.");
            }
            setSuccessMessage("");
        }
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-box">
                <div className="auth-form">
                    <h1 className="auth-title">{titles[role] || "Connexion"}</h1>
                    <form className="form-1" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Adresse email"
                            value={formData.email}
                            onChange={handleChange}
                            className="auth-input"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Mot de passe"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="auth-input"
                            
                        />
                        <button type="submit" className="auth-button">
                            Se connecter
                        </button>
                    </form>
                    {/* Afficher le lien uniquement si le rôle n'est pas admin */}
                    {role !== "admin" && (
                        <div className="auth-links">
                            <p>
                                Pas encore inscrit ?{" "}
                                <a
                                    className="auth-link"
                                    onClick={() => navigate(`/${role}/CreateAccount`)}
                                >
                                    Créer un compte
                                </a>
                            </p>
                        </div>
                    )}
                </div>
                {errorMessage && <p className="error">{errorMessage}</p>}
            {successMessage && <p className="success">{successMessage}</p>}
            </div>
            
        </div>
    );
};

export default Login;
