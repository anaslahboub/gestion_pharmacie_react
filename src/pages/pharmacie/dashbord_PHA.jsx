import React from 'react';
import "../../styles/pharmacie/dashbord_PHA.css";
import {Link } from "react-router-dom"

const stats = [
  { title: "Ordonnances Reçues Aujourd'hui", value: 15 },
  { title: "Ordonnances en Attente", value: 8 },
  { title: "Ordonnances Prêtes", value: 7 },
];

const orders = [
  {
    image: "https://storage.googleapis.com/a1aa/image/faYSa23U4fomJU5XS8PqJPdeCVHqoNHpv5R8sTYnNQOp76nnA.jpg",
    name: "Jean Dupont",
    id: "001",
    date: "2023-10-01",
    status: "En attente",
    
  },
  {
    image: "https://storage.googleapis.com/a1aa/image/3ttPcr1p07J2GtqdzytxAfPKWKjjSe8htcCVE45Q3c22d9zTA.jpg",
    name: "Marie Curie",
    id: "002",
    date: "2023-10-01",
    status: "En préparation",
  
  },
  {
    image: "https://storage.googleapis.com/a1aa/image/JNMERwhnxZpjGZlfPYwu0ACrzJ7e9mvgzZMki1yblVfm76nnA.jpg",
    name: "Albert Einstein",
    id: "003",
    date: "2023-10-01",
    status: "Prête",
    
  },
];

function Dashboard_PHA() {
  return (
    <div id="dashboard" className="main-content">
      {/* Section des statistiques */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <h2 className="stat-title">{stat.title}</h2>
            <p className="stat-value">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Section des ordonnances récentes */}
      <div className="recent-orders-card">
        <h2 className="recent-orders-title">Ordonnances Récentes</h2>
        <div className="orders-grid">
          {orders.map((order, index) => (
            <div className="order-card" key={index}>
              <img
                alt={`Image de l'ordonnance de ${order.name}`}
                className="order-image"
                src={order.image}
              />
              <h3 className="order-name">{order.name}</h3>
              <p className="order-id">ID: {order.id}</p>
              <p className="order-date">Date: {order.date}</p>
              <p className="order-status">Statut: {order.status}</p>
              <Link to={`/pharmacie/detailOrdonnance/${order.id}`} className="order-details-link">
                Détails
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard_PHA;
