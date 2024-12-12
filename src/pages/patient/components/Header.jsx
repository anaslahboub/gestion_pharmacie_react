import React from "react";
import { useRef, useState, useEffect } from "react";
import { useNavigate,useLocation} from "react-router-dom";
import "../styles/style.css";
const Header = () => {
  const [isLogoutVisible, setIsLogoutVisible] = useState(false);
  const profileImageRef = useRef(null);
  const logoutRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

    // Déterminer le rôle en fonction de l'URL
    const role = location.pathname.split("/")[1]; // Exemple : '/patient/signin'
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        logoutRef.current &&
        !logoutRef.current.contains(event.target) &&
        profileImageRef.current &&
        !profileImageRef.current.contains(event.target)
      ) {
        setIsLogoutVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="header">
      <h1>Bon Rétablissement !</h1>
      <div className="user-info">
        <img
          src="../src/assets/images/patient.png"
          alt="Profil"
          id="profileImage"
          ref={profileImageRef}
          onClick={() => setIsLogoutVisible(!isLogoutVisible)}
        />
        {isLogoutVisible && (
          <div id="logoutSection" ref={logoutRef}>
            <p>Voulez-vous vraiment vous déconnecter ?</p>
            <button id="logoutButton" onClick={() => navigate(`/${role}/Login`)}>Se Déconnecter</button>
          </div>
        )}
        <span>Bonjour, Marouane</span>
      </div>
    </div>
  );
};

export default Header;
