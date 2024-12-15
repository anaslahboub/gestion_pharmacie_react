import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import "./styles/PharmaciesProches.css";

const PharmaciesProches = () => {
  const [userPosition, setUserPosition] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [filteredMarkers, setFilteredMarkers] = useState([]);
  const mapRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [distanceFilter, setDistanceFilter] = useState('');

  useEffect(() => {
    // Load Google Maps script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&v=weekly`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting user location:", error);
          alert("Unable to fetch your location. Please allow location access.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Initialize map and markers when Google Maps API is loaded
    window.initMap = () => {
      const center = userPosition || { lat: 48.8566, lng: 2.3522 }; // Default: Paris
      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 12,
        center: center,
      });

      // Fetch pharmacies dynamically
      if (userPosition) {
        axios
          .get(
            `https://overpass-api.de/api/interpreter?data=[out:json];node(around:1500,${userPosition.lat},${userPosition.lng})[amenity=pharmacy];out;`
          )
          .then((response) => {
            const pharmacies = response.data.elements.map((pharmacy) => ({
              name: pharmacy.tags.name || "Pharmacie",
              lat: pharmacy.lat,
              lng: pharmacy.lon,
              status: pharmacy.tags["healthcare:status"] || "unknown",
              distance: 1, // Static for now, calculate if needed
            }));

            const newMarkers = pharmacies.map((pharmacy) => {
              const marker = new window.google.maps.Marker({
                position: { lat: pharmacy.lat, lng: pharmacy.lng },
                map: map,
                title: pharmacy.name,
              });

              const infoWindow = new window.google.maps.InfoWindow({
                content: `<h3>${pharmacy.name}</h3><p>Status: ${pharmacy.status}</p>`,
              });

              marker.addListener("click", () => {
                infoWindow.open(map, marker);
              });

              return { marker, pharmacy };
            });

            setMarkers(newMarkers);
            setFilteredMarkers(newMarkers);
          })
          .catch((error) => console.error("Error fetching pharmacies:", error));
      }
    };
  }, [userPosition]);

  useEffect(() => {
    // Filter markers based on search term, status, and distance
    filterPharmacies();
  }, [searchTerm, statusFilter, distanceFilter]);

  const filterPharmacies = () => {
    const filtered = markers.filter((markerObj) => {
      const pharmacy = markerObj.pharmacy;
      const matchesName = pharmacy.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = !statusFilter || pharmacy.status === statusFilter;
      const matchesDistance = !distanceFilter || pharmacy.distance <= parseInt(distanceFilter);

      if (matchesName && matchesStatus && matchesDistance) {
        markerObj.marker.setMap(mapRef.current); // Show matching marker
        return true;
      } else {
        markerObj.marker.setMap(null); // Hide non-matching marker
        return false;
      }
    });

    setFilteredMarkers(filtered);
  };

  return (
    <div className="main-content_Pharmacies">
      <div className="grid-container_Pharmacies">
        <div className="grid-item_Pharmacies">
          <h4>Pharmacies Proches</h4>
          <p>Visualisez les pharmacies disponibles dans votre région.</p>

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

          <div ref={mapRef} id="map" style={{ height: "500px", width: "100%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default PharmaciesProches;
