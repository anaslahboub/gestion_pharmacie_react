import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../styles/pharmacie/header_PHA.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className="header-container">
        <div className="header-wrapper">
          {/* Logo */}
          <div className="logo">
            <Link to="/dashboard">Pharmacie</Link>
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
              <Link className="nav-link" to="/pharmacie/notification">Notifications</Link>
              <Link className="nav-link" to="/pharmacie/profile">Profil</Link>
            </nav>
           
          </div>
          <div className="logout">
              <Link to="/pharmacie/forms">Déconnexion</Link>
            </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
