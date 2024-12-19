import React, { useEffect, useState } from 'react';
import '../../styles/pharmacie/profile_PHA.css';
import axios from 'axios';

const Profile = () => {
  // Définir l'état initial avec un objet vide
  const [formData, setFormData] = useState({});
  const [photoProfile,setPhotoProfile] =useState();
  const idPharmacien =localStorage.getItem("idPharmacien");

  // Fonction pour récupérer les données du profil
  const fetchProfile = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/pharmacie__API/api/pharmacien/${idPharmacien}`);
      const data = response.data;

      // Mettre à jour l'état avec les données récupérées
      setFormData({
        nom: data.nom,
        prenom: data.prenom,
        email: data.email,
        telephone: data.telephone,
        nomMap: data.localistion.nomMap,
        longitude: data.localistion.longitude,
        latitude: data.localistion.latitude,
        
      });
    } catch (error) {
      console.error("Erreur lors de la récupération des données du profil", error);
      alert("Erreur lors de la récupération des données du profil");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [idPharmacien]);

  const updateProfile = async () => {
    try {
      const updatedData = {
        nom: formData.nom,
        prenom: formData.prenom,
        email: formData.email,
        telephone: formData.telephone,
        password: formData.password,
        longitude: parseFloat(formData.longitude),
        latitude: parseFloat(formData.latitude),
        nomMap: formData.nomMap,
      };

      // Envoyer la requête PUT/POST
      const response = await axios.put(
        `http://localhost:8080/pharmacie__API/api/pharmacien/${idPharmacien}/modifierPharmacie`,
        updatedData
      );

      if (response.status === 200) {
        alert("Les informations ont été mises à jour avec succès !");
      } else {
        alert("Une erreur est survenue lors de la mise à jour.");
      }
    } catch (error) {
      console.error("Erreur lors de la modification des informations du pharmacien", error);
      alert("Erreur lors de la modification des informations du pharmacien");
    }
  };




  
  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPhotoProfile(file); // Stocke directement le fichier sélectionné
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile();
  };

  return (
    <section className="profile-page">
      <div className="profile-content">
        <h2 className="info-title">Modifier les Informations de la Pharmacie</h2>
        <div className="info-card">
          <form className='form-profile' onSubmit={handleSubmit}>
            <div className="info-group">
              {/* Nom */}
              <div className="form-group">
                <label className="form-label">Nom</label>
                <input
                  className="form-input"
                  name="nom"
                  placeholder="Nom"
                  type="text"
                  value={formData.nom || ''}
                  onChange={handleChange}
                />
              </div>
              {/* Prénom */}
              <div className="form-group">
                <label className="form-label">Prénom</label>
                <input
                  className="form-input"
                  name="prenom"
                  placeholder="Prénom"
                  type="text"
                  value={formData.prenom || ''}
                  onChange={handleChange}
                />
              </div>
              {/* Contact */}
              <div className="form-group">
                <label className="form-label">Contact</label>
                <input
                  className="form-input"
                  name="contact"
                  placeholder="Contact"
                  type="number"
                  value={formData.telephone || ''}
                  onChange={handleChange}
                />
              </div>
              {/* Adresse Email */}
              <div className="form-group">
                <label className="form-label">Adresse Email</label>
                <input
                  className="form-input"
                  name="email"
                  placeholder="Adresse Email"
                  type="email"
                  value={formData.email || ''}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Localisation */}
            <label className="form-label">Localisation</label>
            <div className="localisation-group">      
              <div>
                <label>
                  Longitude:
                  <input
                    className="form-input"
                    name="longitude"
                    placeholder="Longitude"
                    type="text"
                    value={formData.longitude || ''}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Latitude:
                  <input
                    className="form-input"
                    name="latitude"
                    placeholder="Latitude"
                    type="text"
                    value={formData.latitude || ''}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div>
                <label>Adresse</label>
                <input
                  className="form-input"
                  name="adresse"
                  placeholder="Adresse"
                  type="text"
                  value={formData.adresse}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Photo */}
            <div className="form-group">
              <label className="form-label">Photo</label>
              <input
                className="form-input"
                name="photo"
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
              />
            </div>

            {/* Bouton de soumission */}
            <div className="form-group">
              <button className="form-button" type="submit">
                Enregistrer les Modifications
              </button>
            </div>
          </form>

          {/* Affichage de la photo de profil */}
          <div className="photo-container">
            <h3 className="photo-profile">Photo Profile</h3>
            <img src={photoProfile || "/src/assets/pharmacieImage/pharmacie-1024x620.jpg"} alt="Photo de la pharmacie" className="photo-display" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
