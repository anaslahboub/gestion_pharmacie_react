import React, { useState, useEffect } from 'react';
import "../../styles/pharmacie/register_PHA.css";
import { Link } from 'react-router-dom';
import axios from 'axios'; // Importation d'Axios

const Register_PHA = () => {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        password: '',
        longitude: 0,
        latitude: 0,
        nomMap: '',
    });

    const [message, setMessage] = useState(''); // Pour afficher les messages
    const [locationError, setLocationError] = useState(''); // En cas d'erreur de géolocalisation

    // Fonction pour obtenir la géolocalisation
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setFormData((prevData) => ({
                        ...prevData,
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    }));
                },
                (error) => {
                    console.error("Erreur de géolocalisation :", error);
                    setLocationError("Impossible de récupérer la position. Vérifiez les permissions.");
                }
            );
        } else {
            setLocationError("La géolocalisation n'est pas supportée par ce navigateur.");
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Empêche le rechargement de la page
    
        try {
            const response = await axios.post('http://localhost:8080/pharmacie__API/api/pharmacien/signIn', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Si la réponse est correcte
            setMessage('Le pharmacien a été créé avec succès !');
            console.log(response.data); // Affiche la réponse de l'API
        } catch (error) {
            // Gestion des erreurs
            if (error.response) {
                // Si la réponse est erronée (status !== 2xx)
                setMessage(`Erreur : ${error.response.data.message || 'Une erreur est survenue.'}`);
                console.error('Erreur serveur :', error.response.data);
            } else if (error.request) {
                // Si aucune réponse n'a été reçue
                setMessage('Erreur réseau. Veuillez réessayer.');
                console.error('Erreur de réseau :', error.request);
            } else {
                // Si une autre erreur se produit
                setMessage('Une erreur est survenue.');
                console.error('Erreur:', error.message);
            }
        }
    };

    return (
        <div className="register-page flex-center">
            <div className="register-card">
                <h2 className="register-title">Inscription Pharmacien</h2>
                <form onSubmit={handleSubmit} className="form-registre">
                    {/* Nom */}
                    <div className="form-group">
                        <label htmlFor="nom" className="form-label">Nom</label>
                        <input
                            type="text"
                            id="nom"
                            name="nom"
                            placeholder="Votre nom"
                            className="form-input-registre"
                            value={formData.nom}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Prénom */}
                    <div className="form-group">
                        <label htmlFor="prenom" className="form-label">Prénom</label>
                        <input
                            type="text"
                            id="prenom"
                            name="prenom"
                            placeholder="Votre prénom"
                            className="form-input-registre"
                            value={formData.prenom}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Votre email"
                            className="form-input-registre"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Téléphone */}
                    <div className="form-group">
                        <label htmlFor="telephone" className="form-label">Téléphone</label>
                        <input
                            type="tel"
                            id="telephone"
                            name="telephone"
                            placeholder="Votre numéro de téléphone"
                            className="form-input-registre"
                            value={formData.telephone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Mot de passe */}
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Mot de passe</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Mot de passe"
                            className="form-input-registre"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Nom pour la carte */}
                    <div className="form-group">
                        <label htmlFor="nomMap" className="form-label">Nom pour la Carte</label>
                        <input
                            type="text"
                            id="nomMap"
                            name="nomMap"
                            placeholder="Nom de votre pharmacie"
                            className="form-input-registre"
                            value={formData.nomMap}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Coordonnées récupérées */}
                    <div className="form-group">
                        <p>Latitude : {formData.latitude}</p>
                        <p>Longitude : {formData.longitude}</p>
                    </div>

                    {/* Bouton Inscription */}
                    <button type="submit" className="btn-register btn-primary">
                        S'inscrire
                    </button>
                </form>

                {/* Message de retour */}
                {message && <p className="message">{message}</p>}
                {locationError && <p className="error">{locationError}</p>}

                {/* Lien pour se connecter */}
                <div className="login-link">
                    <p className="text-center">
                        Vous avez déjà un compte ?{' '}
                        <Link to="/pharmacien/login" className="link-login">Se connecter</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register_PHA;
