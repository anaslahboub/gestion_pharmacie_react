import React, { useState } from 'react';
import "../../styles/pharmacie/AddPharmacyPage.css"
const AddPharmacyPage = () => {
  // États pour les champs du formulaire
  const [formData, setFormData] = useState({
    nom: '',
    proprietaire: '',
    adresse: '',
    ville: '',
    telephone: '',
    email: '',
    latitude: '',
    longitude: '',
    partenaire: 'non',
    statut: 'active',
    nomUtilisateur: '',
    motDePasse: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simule l'envoi des données
    if (Object.values(formData).some(value => value === '')) {
      setErrorMessage('Tous les champs doivent être remplis.');
      return;
    }

    // Logique pour ajouter la pharmacie (exemple avec un appel API)
    console.log('Pharmacie ajoutée:', formData);

    // Affichage d'un message de confirmation
    alert('La pharmacie a été ajoutée avec succès !');
  };

  return (
    <div className="add-pharmacy-page">
      <div className="add-pharmacy-card">
        <h2 className="add-pharmacy-title">Ajouter une Nouvelle Pharmacie</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nom" className="form-label">Nom de la Pharmacie</label>
            <input
              id="nom"
              name="nom"
              type="text"
              className="form-input"
              placeholder="Nom de la pharmacie"
              value={formData.nom}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="proprietaire" className="form-label">Propriétaire</label>
            <input
              id="proprietaire"
              name="proprietaire"
              type="text"
              className="form-input"
              placeholder="Nom du propriétaire"
              value={formData.proprietaire}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="adresse" className="form-label">Adresse</label>
            <input
              id="adresse"
              name="adresse"
              type="text"
              className="form-input"
              placeholder="Adresse"
              value={formData.adresse}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="ville" className="form-label">Ville</label>
            <input
              id="ville"
              name="ville"
              type="text"
              className="form-input"
              placeholder="Ville"
              value={formData.ville}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="telephone" className="form-label">Numéro de téléphone</label>
            <input
              id="telephone"
              name="telephone"
              type="text"
              className="form-input"
              placeholder="Numéro de téléphone"
              value={formData.telephone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-input"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="latitude" className="form-label">Latitude</label>
            <input
              id="latitude"
              name="latitude"
              type="text"
              className="form-input"
              placeholder="Latitude"
              value={formData.latitude}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="longitude" className="form-label">Longitude</label>
            <input
              id="longitude"
              name="longitude"
              type="text"
              className="form-input"
              placeholder="Longitude"
              value={formData.longitude}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="partenaire" className="form-label">Partenaire</label>
            <select
              id="partenaire"
              name="partenaire"
              className="form-select"
              value={formData.partenaire}
              onChange={handleChange}
            >
              <option value="non">Non</option>
              <option value="yes">Oui</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="statut" className="form-label">Statut</label>
            <select
              id="statut"
              name="statut"
              className="form-select"
              value={formData.statut}
              onChange={handleChange}
            >
              <option value="active">Active</option>
              <option value="non active">Non active</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="nomUtilisateur" className="form-label">Nom d'utilisateur</label>
            <input
              id="nomUtilisateur"
              name="nomUtilisateur"
              type="text"
              className="form-input"
              placeholder="Nom d'utilisateur"
              value={formData.nomUtilisateur}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="motDePasse" className="form-label">Mot de passe</label>
            <input
              id="motDePasse"
              name="motDePasse"
              type="password"
              className="form-input"
              placeholder="Mot de passe"
              value={formData.motDePasse}
              onChange={handleChange}
            />
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button type="submit" className="submit-button">Ajouter Pharmacie</button>
        </form>
      </div>
    </div>
  );
};

export default AddPharmacyPage;
