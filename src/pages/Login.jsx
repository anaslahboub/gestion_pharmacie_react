import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../pages/Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    // Déterminer le rôle en fonction de l'URL
    const role = location.pathname.split("/")[1]; // Exemple : '/patient/signin'

    const titles = {
        patient: "Connexion - Patient",
        pharmacien: "Connexion - Pharmacien",
        admin: "Connexion - Admin",
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Connexion pour ${role} avec email : ${email}`);
        // Appeler une API pour valider les informations
        navigate(`/${role}/dashboard`); // Rediriger vers le tableau de bord correspondant
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-box">
                <div className="auth-form">
                    <h1 className="auth-title">{titles[role] || "Connexion"}</h1>
                    <form className="form-1" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Adresse email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="auth-input"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Mot de passe"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="auth-input"
                            required
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
            </div>
        </div>
    );
};

export default Login;
