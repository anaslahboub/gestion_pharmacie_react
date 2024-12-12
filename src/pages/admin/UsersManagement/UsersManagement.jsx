import React from 'react';
import { Link } from 'react-router-dom';
import './UsersManagement.css';

const UsersManagement = () => {
  // Exemple de données des utilisateurs
  const users = [
    { id: 1, name: 'Karim Tadout', email: 'karim.tadout@example.com', phone: '123456789', address: '123 Rue Principale' },
    { id: 2, name: 'Amina Laamiri', email: 'amina.laamiri@example.com', phone: '987654321', address: '456 Avenue Centrale' },
    { id: 3, name: 'Youssef Haddad', email: 'youssef.haddad@example.com', phone: '1122334455', address: '789 Boulevard Sud' },
  ];

  return (
    <div className="users-management">
      <h2>Gestion des Utilisateurs</h2>
      <Link to="/admin/addUser" className="add-user">Ajouter un Utilisateur</Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Adresse</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td>
                {/* Lien dynamique vers la page de modification d'utilisateur avec l'ID de l'utilisateur */}
                <Link to={`/admin/editusers`} className="btn">Modifier</Link>
                <button className="btn btn-danger">Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersManagement;
