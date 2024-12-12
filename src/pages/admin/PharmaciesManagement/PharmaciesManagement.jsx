import React from 'react';
import { Link } from 'react-router-dom';  // Assurez-vous d'importer Link
import './PharmaciesManagement.css';

function PharmaciesManagement() {
  return (
    <div>
      <h2>Liste des Pharmacies</h2>
      {/* Correction de la balise Link */}
      <Link to={`/admin/pharmacyInfo`} className="btn">Ajouter une Pharmacie</Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Adresse</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Pharmacie Centrale</td>
            <td>123 Rue Principale</td>
            <td className="status-active">Active</td>
            <td>
              {/* Le lien de modification doit être redirigé vers la page de détails de la pharmacie */}
              <Link to={`/admin/pharmacyInfo`} className="btn">Modifier</Link>
              <a href="#" className="btn">Désactiver</a>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>1</td>
            <td>Pharmacie Centrale</td>
            <td>123 Rue Principale</td>
            <td className="status-active">Active</td>
            <td>
              {/* Le lien de modification doit être redirigé vers la page de détails de la pharmacie */}
              <Link to={`/admin/pharmacyInfo`} className="btn">Modifier</Link>
              <a href="#" className="btn">Désactiver</a>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>1</td>
            <td>Pharmacie Centrale</td>
            <td>123 Rue Principale</td>
            <td className="status-active">Active</td>
            <td>
              {/* Le lien de modification doit être redirigé vers la page de détails de la pharmacie */}
              <Link to={`/admin/pharmacyInfo`} className="btn">Modifier</Link>
              <a href="#" className="btn">Désactiver</a>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>1</td>
            <td>Pharmacie Centrale</td>
            <td>123 Rue Principale</td>
            <td className="status-active">Active</td>
            <td>
              {/* Le lien de modification doit être redirigé vers la page de détails de la pharmacie */}
              <Link to={`/admin/pharmacyInfo`} className="btn">Modifier</Link>
              <a href="#" className="btn">Désactiver</a>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>1</td>
            <td>Pharmacie Centrale</td>
            <td>123 Rue Principale</td>
            <td className="status-active">Active</td>
            <td>
              {/* Le lien de modification doit être redirigé vers la page de détails de la pharmacie */}
              <Link to={`/admin/pharmacyInfo`} className="btn">Modifier</Link>
              <a href="#" className="btn">Désactiver</a>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>1</td>
            <td>Pharmacie Centrale</td>
            <td>123 Rue Principale</td>
            <td className="status-active">Active</td>
            <td>
              {/* Le lien de modification doit être redirigé vers la page de détails de la pharmacie */}
              <Link to={`/admin/pharmacyInfo`} className="btn">Modifier</Link>
              <a href="#" className="btn">Désactiver</a>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>1</td>
            <td>Pharmacie Centrale</td>
            <td>123 Rue Principale</td>
            <td className="status-active">Active</td>
            <td>
              {/* Le lien de modification doit être redirigé vers la page de détails de la pharmacie */}
              <Link to={`/admin/pharmacyInfo`} className="btn">Modifier</Link>
              <a href="#" className="btn">Désactiver</a>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>1</td>
            <td>Pharmacie Centrale</td>
            <td>123 Rue Principale</td>
            <td className="status-active">Active</td>
            <td>
              {/* Le lien de modification doit être redirigé vers la page de détails de la pharmacie */}
              <Link to={`/admin/pharmacyInfo`} className="btn">Modifier</Link>
              <a href="#" className="btn">Désactiver</a>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>1</td>
            <td>Pharmacie Centrale</td>
            <td>123 Rue Principale</td>
            <td className="status-active">Active</td>
            <td>
              {/* Le lien de modification doit être redirigé vers la page de détails de la pharmacie */}
              <Link to={`/admin/pharmacyInfo`} className="btn">Modifier</Link>
              <a href="#" className="btn">Désactiver</a>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>1</td>
            <td>Pharmacie Centrale</td>
            <td>123 Rue Principale</td>
            <td className="status-active">Active</td>
            <td>
              {/* Le lien de modification doit être redirigé vers la page de détails de la pharmacie */}
              <Link to={`/admin/pharmacyInfo`} className="btn">Modifier</Link>
              <a href="#" className="btn">Désactiver</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PharmaciesManagement;
