import React from "react";
import { NavLink, useLocation } from "react-router-dom"; // Import NavLink pour une gestion plus simple
import "../styles/style1.css";

const Navbar = () => {
  const location = useLocation(); // Récupère l'URL actuelle

  return (
    <div className="navbar1">
      <h2>Administration </h2>
      <NavLink
        to="/admin/Dashboard"
        className={location.pathname === "/admin/Dashbord"  ? "active" : ""}
      >
         Dashboard
      </NavLink>
      <NavLink
        to="/admin/pharmaciesManagement"
        className={location.pathname === "/admin/pharmaciesManagement"  ? "active" : ""}
      >

           Pharmacies Management 
       </NavLink>
       <NavLink
        to="/admin/UsersManagement"
        className={location.pathname === "/admin/UsersManagement"  ? "active" : ""}
      >

            patients  Management 
       </NavLink>
       
       <NavLink
        to="/admin/PharmaciesPartenaires"
        className={location.pathname === "/admin/PharmaciesPartenaires"  ? "active" : ""}
      >

           pharmacies PARTENAIRE
       </NavLink>
       
    </div>
  );
};

export default Navbar;
