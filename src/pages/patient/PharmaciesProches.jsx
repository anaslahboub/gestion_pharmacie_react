import React, { useEffect, useState, useRef } from 'react';
import "./styles/PharmaciesProches.css";

const PharmaciesProches = () => {
  const [markers, setMarkers] = useState([]);
  const [filteredMarkers, setFilteredMarkers] = useState([]);
  const mapRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [distanceFilter, setDistanceFilter] = useState('');
  
  const pharmacies = [
    { name: "Pharmacie A", lat: 48.8584, lng: 2.2945, status: "active", distance: 3 },
    { name: "Pharmacie B", lat: 48.8606, lng: 2.3376, status: "inactive", distance: 8 },
    { name: "Pharmacie C", lat: 48.8530, lng: 2.3499, status: "active", distance: 12 },
  ];

  useEffect(() => {
    // Load Google Maps script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&v=weekly`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Initialize the map when Google Maps API is loaded
    window.initMap = () => {
      const center = { lat: 48.8566, lng: 2.3522 }; // Paris, France
      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 12,
        center: center,
      });

      // Create markers for pharmacies
      const newMarkers = pharmacies.map(pharmacy => {
        const marker = new window.google.maps.Marker({
          position: { lat: pharmacy.lat, lng: pharmacy.lng },
          map: map,
          title: pharmacy.name,
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: `<h3>${pharmacy.name}</h3><p>Status: ${pharmacy.status}</p><p>Distance: ${pharmacy.distance} km</p>`,
        });

        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });

        return { marker, pharmacy };
      });

      setMarkers(newMarkers);
      setFilteredMarkers(newMarkers); // Set filtered markers initially to all markers
    };
  }, []);

  useEffect(() => {
    // Filter markers based on search term, status, and distance
    filterPharmacies();
  }, [searchTerm, statusFilter, distanceFilter]);

  // Filter function to update the markers based on the input
  const filterPharmacies = () => {
    const filtered = markers.filter(markerObj => {
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
          <p>Visualisez les pharmacies partenaires disponibles dans votre région.</p>

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

          <div
            ref={mapRef}
            id='map'
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PharmaciesProches;
