import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Pharmacyinfo.css';

const PharmacyInfo = () => {
  const { id } = useParams(); // Récupère l'ID de la pharmacie
  const navigate = useNavigate(); // Pour naviguer après la soumission

  const [pharmacy, setPharmacy] = useState({
    localisation: {}, // Initialisation de localisation pour éviter undefined
  });

  // Liste des options de statut pour la pharmacie
  const statusOptions = ['partenaire', 'non-partenaire'];
  const fetchPharmacy = async () => {
    try {
      
      const response = await fetch(`http://localhost:8080/pharmacie__API/api/admin/pharmacie/${id}`);
      if (!response.ok) throw new Error('Erreur lors du chargement des données');
      const data = await response.json();
      setPharmacy(data);
      console.log(response.data);

    } catch (error) {
      console.error(error.message);
    }
  };
  // Charger les données de la pharmacie depuis l'API
  useEffect(() => {
    fetchPharmacy();
  }, [id]);

  // Retourner à la liste des pharmacies
  const handleGoBack = () => {
    navigate('/admin/pharmaciesManagement');
  };

  return (
    <div className='info-countainer'>
      <h2>Modifier les informations de la pharmacie</h2>
      <form className='form-info'>
        {/* Champ pour le nom de la pharmacie */}
        <div className='form-group-info'>
          <label htmlFor="nom">Nom :</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={pharmacy.nom || ''}  // Sécuriser l'accès avec une valeur par défaut
            readOnly
          />
        </div>

        {/* Champ pour le prénom */}
        <div className='form-group-info'>
          <label htmlFor="prenom">Prénom :</label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={pharmacy.prenom || ''}  // Sécuriser l'accès avec une valeur par défaut
            readOnly
          />
        </div>

        {/* Champ pour l'email */}
        <div className='form-group-info'>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={pharmacy.email || ''}  // Sécuriser l'accès avec une valeur par défaut
            readOnly
          />
        </div>

        {/* Champ pour le téléphone */}
        <div className='form-group-info'>
          <label htmlFor="telephone">Téléphone :</label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            value={pharmacy.telephone || ''}  // Sécuriser l'accès avec une valeur par défaut
            readOnly
          />
        </div>

        {/* Champ select pour le statut */}
        <div className='form-group-info'>
          <label htmlFor="role">Statut :</label>
          <input
            type="text"
            id="Statut"
            name="Statut"
            value={pharmacy.role || ''}  // Sécuriser l'accès avec une valeur par défaut
            readOnly
          />
        </div>

        {/* Champs pour la localisation */}
        <div>
  <label htmlFor="nomMap">Nom de la localisation :</label>
  <input
    type="text"
    id="nomMap"
    name="localisation.nomMap"
    value={pharmacy.localistion ? pharmacy.localistion.nomMap : ''} // Vérification de l'existence de localisation
    readOnly
  />
</div>

<div className='form-group-info'>
  <label htmlFor="latitude">Latitude :</label>
  <input
    type="text"
    id="latitude"
    name="localisation.latitude"
    value={pharmacy.localistion ? pharmacy.localistion.latitude : ''} // Vérification de l'existence de localisation
    readOnly
  />
</div>


        <div>
          <label htmlFor="longitude">Longitude :</label>
          <input
            type="text"
            id="longitude"
            name="localisation.longitude"
            value={pharmacy.localistion ? pharmacy.localistion.longitude : ''} // Sécuriser l'accès avec une valeur par défaut
            readOnly
          />
        </div>

        <div>
          <button type="button" onClick={handleGoBack} style={{ marginLeft: '10px' }}>
            Retour à la liste des pharmacies
          </button>
        </div>
      </form>
    </div>
  );
};

export default PharmacyInfo;
