  import React, { useState } from 'react';
  import '../../styles/pharmacie/profile_PHA.css';

  const Profile = () => {
    // Définir l'état initial avec une URL par défaut pour la photo
    const [formData, setFormData] = useState({
      nom: 'Pharmacie Exemple',
      contact: '0123456789',
      email: 'pharmacie@example.com',
      adresse: '123 Rue Principale, Ville, Pays',
      longitude: '12.345678',
      latitude: '98.765432',
      photo: '/src/assets/pharmacieImage/pharmacie-1024x620.jpg', // URL par défaut
    });

    // Gestion des changements dans les champs du formulaire
    const handleChange = (e) => {
      const { name, value, files } = e.target;
      if (name === 'photo') {
        // Créer une URL temporaire pour afficher l'aperçu de la photo téléchargée
        const photoURL = URL.createObjectURL(files[0]);
        setFormData({ ...formData, photo: photoURL });
      } else {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    };

    // Fonction de soumission (placeholder pour une future intégration API)
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Données soumises :', formData);
      // Ajouter une requête API ici pour sauvegarder les informations
    };

    return (
      <section className="profile-page">
        <div className="profile-content">
          <div className="info-card">
            <h2 className="info-title">Modifier les Informations de la Pharmacie</h2>
            <div className="photo-container">
              <h3 className="photo-profile">Photo Profile</h3>
              <img src={formData.photo} alt="Photo de la pharmacie" className="photo-display" />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="info-group">
                {/* Nom */}
                <div className="form-group">
                  <label className="form-label">Nom</label>
                  <input
                    className="form-input"
                    name="nom"
                    placeholder="Nom"
                    type="text"
                    value={formData.nom}
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
                    type="text"
                    value={formData.contact}
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
                    value={formData.email}
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
                      value={formData.longitude}
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
                      value={formData.latitude}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div>
                  <label className="">Adresse</label>
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
                  onChange={handleChange}
                />
              </div>
              {/* Bouton de soumission */}
              <div className="form-group">
                <button className="form-button" type="submit">
                  Enregistrer les Modifications
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  };

  export default Profile;
