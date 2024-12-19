import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate pour rediriger après la déconnexion
import "../../styles/pharmacie/header_PHA.css";
import axios from 'axios'; // Importation d'Axios

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = async () => {
    try {
      // Supposons que l'ID de la pharmacie soit stocké dans le state, sessionStorage, ou ailleurs.
      const pharmacieId = localStorage.getItem("idPharmacien");  // Remplace par la méthode de récupération dynamique de l'ID si nécessaire
      const response = await axios.post(`http://localhost:8080/pharmacie__API/api/pharmacien/pharmacie/${pharmacieId}/deconnecter`, {}, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      console.log(response.data); // Afficher la réponse pour debugger si nécessaire
      // Rediriger l'utilisateur vers la page d'accueil après déconnexion
      navigate('/');  // Utilisation de navigate() pour la redirection
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
      // Tu peux afficher un message d'erreur si nécessaire
    }
  };

  return (
    <div>
      <header className="header-container">
        <div className="header-wrapper">
          <div className="logo">
            <Link to="/pharmacie/dashboard">
              PHARMACIEN
            </Link>
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

          <div className="logout">
            <button onClick={handleLogout}>Déconnexion</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
