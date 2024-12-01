import React from "react";
import { NavLink, useLocation } from "react-router-dom"; // Import NavLink pour une gestion plus simple
import "../styles/style.css";

const Navbar = () => {
  const location = useLocation(); // Récupère l'URL actuelle

  return (
    <div className="navbar">
      <h2>Pharmacie</h2>
      <NavLink
        to="/patient/Dashboard"
        className={location.pathname === "/patient/Dashboard"  ? "active" : ""}
      >
        Tableau de bord
      </NavLink>
      <NavLink
        to="/patient/PharmaciesProches"
        className={location.pathname === "/patient/PharmaciesProches" ? "active" : ""}
      >
        Pharmacies Proches
      </NavLink>
      <NavLink
        to="/patient/NouvelleOrdonnance"
        className={location.pathname === "/patient/NouvelleOrdonnance" ? "active" : ""}
      >
        Nouvelle Ordonnance
      </NavLink>
      <NavLink
        to="/patient/Ordonnances"
        className={location.pathname === "/patient/Ordonnances" || location.pathname === "/patient/DetailsOrdonnance" ? "active" : ""}
      >
        Ordonnances
      </NavLink>
      <NavLink
        to="/patient/Commandes"
        className={location.pathname === "/patient/Commandes" || location.pathname === "/patient/DetailsCommande"  ? "active" : ""}
      >
        Commandes
      </NavLink>
      <NavLink
        to="/patient/Profil"
        className={location.pathname === "/patient/Profil" ? "active" : ""}
      >
        Mon Profil
      </NavLink>
      <NavLink
        to="/patient/Support"
        className={location.pathname === "/patient/Support" ? "active" : ""}
      >
        Support
      </NavLink>
    </div>
  );
};

export default Navbar;
