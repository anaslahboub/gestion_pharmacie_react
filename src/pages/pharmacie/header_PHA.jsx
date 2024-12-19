import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate pour rediriger après la déconnexion
import "../../styles/pharmacie/header_PHA.css";
import axios from 'axios'; // Importation d'Axios

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); 

  // Gestion du toggle du menu mobile
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Fonction pour gérer la déconnexion
  const handleLogout = async () => {
    try {
      // Récupération de l'ID du pharmacien depuis le localStorage
      const pharmacieId = localStorage.getItem("idPharmacien");
      if (!pharmacieId) {
        console.error("ID du pharmacien introuvable dans le localStorage.");
        return;
      }

      // Appel à l'API pour la déconnexion
      const response = await axios.put(
        `http://localhost:8080/pharmacie__API/api/pharmacien/pharmacie/${pharmacieId}/deconnecter`, 
        {}, 
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log(response.data); // Débogage : afficher la réponse de l'API
      localStorage.removeItem("idPharmacien"); // Suppression des données du pharmacien
      // Rediriger l'utilisateur vers la page d'accueil
      navigate('/');
    } catch (error) {
      console.error('Erreur lors de la déconnexion :', error.message);
      if (error.response) {
        console.error('Réponse du serveur :', error.response.data);
      }
      alert('Une erreur est survenue lors de la déconnexion. Veuillez réessayer.');
    }
  };

  return (
    <div>
      <header className="header-container">
        <div className="header-wrapper">
          {/* Logo */}
          <div className="logo">
            <Link to="/pharmacie/dashboard">PHARMACIEN</Link>
          </div>

          {/* Bouton Menu (mobile) */}
          <div className="menu-toggle" onClick={toggleMenu}>
            <span className="menu-icon">{menuOpen ? "✖" : "☰"}</span>
          </div>

          {/* Navigation */}
          <div className={`header-content ${menuOpen ? "menu-open" : ""}`}>
            <nav className="header-nav">
              <Link className="nav-link" to="/pharmacie/dashboard">Tableau de bord</Link>
              <Link className="nav-link" to="/pharmacie/ordonnonce">Ordonnances</Link>
              <Link className="nav-link" to="/pharmacie/commande">Commandes</Link>
              <Link className="nav-link" to="/pharmacie/profile">Profil</Link>
            </nav>
          </div>

          {/* Bouton de déconnexion */}
          <div className="logout">
            <button onClick={handleLogout}>Déconnexion</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
