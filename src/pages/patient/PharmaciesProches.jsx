import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./styles/PharmaciesProches.css";
import axios from "axios";

const PharmaciesProches = () => {
  const [pharmacies, setPharmacies] = useState([]); // Stockage des données des pharmacies
  const [searchTerm, setSearchTerm] = useState(""); // Recherche par nom
  const [statusFilter, setStatusFilter] = useState(""); // Filtrer par statut
  const [distanceFilter, setDistanceFilter] = useState(""); // Filtrer par distance
  const mapRef = useRef(null); // Référence pour la carte
  const leafletMapRef = useRef(null); // Référence pour l'instance de la carte Leaflet
  const markersRef = useRef([]); // Référence pour stocker les marqueurs sur la carte
  const [localisation, setLocalisation] = useState({
    latitude: 30.1,
    longitude: -9.0,
  });
  const [error, setError] = useState(null);
  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Rayon de la Terre en km
    const toRadians = (deg) => (deg * Math.PI) / 180; // Convertir les degrés en radians
  
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance en kilomètres
  
    return distance;
  }
  const getLocalisation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocalisation({
            latitude: parseFloat(position.coords.latitude),
            longitude: parseFloat(position.coords.longitude),
          });
        },
        (error) => {
          console.error("Erreur de géolocalisation :", error);
          setError("Impossible de récupérer votre localisation.");
        }
      );
    } else {
      console.error("La géolocalisation n'est pas supportée par ce navigateur.");
      setError("La géolocalisation n'est pas supportée par ce navigateur.");
    }
  };

  useEffect(() => {
    getLocalisation();
  }, []);

  useEffect(() => {
    const fetchPharmacies = async () => {
      try {
        const response = await axios.get("http://localhost:8080/pharmacie__API/api/patient/pharmacies");
        console.log("Données des pharmacies :", response.data);
        setPharmacies(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des pharmacies :", error);
      }
    };

    fetchPharmacies();
  }, []);

  useEffect(() => {
    if (!leafletMapRef.current) {
      const map = L.map(mapRef.current).setView([localisation.latitude, localisation.longitude], 7);
      leafletMapRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);
    }

    if (pharmacies.length > 0) {
      markersRef.current.forEach(({ marker }) => marker.remove());
      markersRef.current = [];

      pharmacies.forEach((pharmacy) => {

        const marker = L.marker([pharmacy.localistion.latitude, pharmacy.localistion.longitude]).addTo(leafletMapRef.current);
        marker.bindPopup(
          `<h3>${pharmacy.localistion.nomMap}</h3><p>Status: ${pharmacy.isActive}</p><p>Distance: ${calculateDistance(pharmacy.localistion.latitude, pharmacy.localistion.longitude, localisation.latitude, localisation.longitude).toFixed(2)} km</p>`
        );
        markersRef.current.push({ marker, pharmacy });
      });
    }

    return () => {
      markersRef.current.forEach(({ marker }) => marker.remove());
      markersRef.current = [];
    };
  }, [pharmacies, localisation]);

  const filterPharmacies = () => {
    markersRef.current.forEach(({ marker, pharmacy }) => {
      const matchesName = pharmacy.localistion.nomMap.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        !statusFilter || (statusFilter === "active" && pharmacy.isActive) || (statusFilter === "inactive" && !pharmacy.isActive);
      const matchesDistance = !distanceFilter ||  calculateDistance(pharmacy.localistion.latitude, pharmacy.longitude, localisation.latitude, localisation.longitude).toFixed(2) <= parseInt(distanceFilter, 10);

      if (matchesName && matchesStatus && matchesDistance) {
        marker.addTo(leafletMapRef.current);
      } else {
        marker.remove();
      }
    });
  };

  useEffect(() => {
    filterPharmacies();
  }, [searchTerm, statusFilter, distanceFilter]);

  return (
    <div className="main-content_Pharmacies">
      <div className="grid-container_Pharmacies">
        <div className="grid-item_Pharmacies">
          <h4>Pharmacies Proches</h4>
          <p>Visualisez les pharmacies partenaires disponibles dans votre région.</p>

          {/* Filtres */}
          <div className="filters">
            <input
              type="text"
              placeholder="Rechercher une pharmacie..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="">Filtrer par statut</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <select value={distanceFilter} onChange={(e) => setDistanceFilter(e.target.value)}>
              <option value="">Filtrer par distance</option>
              <option value="5">Moins de 5 km</option>
              <option value="10">Moins de 10 km</option>
              <option value="20">Moins de 20 km</option>
            </select>
          </div>

          {/* Carte Leaflet */}
          <div ref={mapRef} id="map" style={{ width: "100%", height: "500px" }}></div>
        </div>
      </div>
    </div>
  );
};

export default PharmaciesProches;
