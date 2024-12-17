import React from 'react';
import "../../styles/pharmacie/login_PHA.css"

const Login_PHA = () => {
    return (
        <div className="bg-page flex-center">
            <div className="login-card">
                <h2 className="login-title">Connexion Pharmacien</h2>
                <form action="/login" method="POST">
                    {/* Email ou Nom d'utilisateur */}
                    <div className="form-group">
                        <label htmlFor="username" className="form-label">
                            Email ou Nom d'utilisateur
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Email ou Nom d'utilisateur"
                            className="form-input"
                        />
                    </div>

                    {/* Mot de passe */}
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">
                            Mot de passe
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Mot de passe"
                            className="form-input"
                        />
                    </div>

                    {/* Options supplémentaires */}
                    <div className="form-options">
                        <a href="#" className="link-forgot">
                            Mot de passe oublié?
                        </a>
                    </div>

                    {/* Bouton Connexion */}
                    <button type="submit" className="btn-login btn-primary">
                        Connexion
                    </button>
                </form>

                {/* Lien pour créer un compte */}
                <div className="register-link">
                    <p className="text-center">
                        Vous êtes un nouveau pharmacien ?{' '}
                        <a href="/signin" className="link-register">
                            Créer un compte
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login_PHA;
