import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, isAuthenticated }) => {
  // Vérifiez si l'utilisateur est authentifié
  if (!isAuthenticated) {
    // Redirigez vers la page de connexion
    return <Navigate to="/patient/login" replace />;
  }

  // Si authentifié, afficher les enfants
  return children;
};

export default ProtectedRoute;
