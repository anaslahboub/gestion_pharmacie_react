import React, { useEffect, useState } from 'react';
import "../../styles/pharmacie/dashbord_PHA.css";
import {Link } from "react-router-dom"
import axios from 'axios';




;

function Dashboard_PHA() {
  const [accepter ,setAccepter]=useState();
  const [total ,setTotale]=useState();
  const [encours ,setEncours]=useState();
  const [orders, setOrdonnances] = useState([]);

  const idPharmacien=2;
  

const stats = [
  { title: "Ordonnances Reçues ", value: total },
  { title: "Ordonnances en Attente", value: encours },
  { title: "Ordonnances Prêtes", value: accepter },
];


  const fetchrecuesRecues = async () =>{
    const response = await axios.get(`http://localhost:8080/pharmacie__API/api/pharmacien/ordonnances/${idPharmacien}/totale`);
    setTotale(response.data);

  }
  const fetchrecuesEncours = async () =>{
    const response = await axios.get(`http://localhost:8080/pharmacie__API/api/pharmacien/ordonnances/${idPharmacien}/encours`);
    setEncours(response.data);
  }
  const fetchrecuesAccepter = async () =>{
    const response = await axios.get(`http://localhost:8080/pharmacie__API/api/pharmacien/ordonnances/${idPharmacien}/acceptees`);
    setAccepter(response.data);
  }

  const fetchOrdonnances = async () => {
   
      const response = await axios.get(`http://localhost:8080/pharmacie__API/api/pharmacien/ordonnances/${idPharmacien}`);
      const recentOrders = response.data.slice(-3);
      setOrdonnances(recentOrders);
  };

  useEffect(()=>{
    fetchrecuesRecues();
    fetchrecuesEncours();
    fetchrecuesAccepter();
    fetchOrdonnances(); 
  },[idPharmacien]);




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
                alt={`Image de l'ordonnance de ${order.nom}`}
                className="order-image"
                src="/src/assets/pharmacieImage/pharmacie-1024x620.jpg"
              />
              <h3 className="order-name"><i className="fas fa-user"></i>{order.patient.nom}</h3>
              <p className="order-id"><i className="fas fa-id-card"></i>ID: {order.id}</p>
              <p className="order-date"><i className="fas fa-calendar-alt"></i>Date: {order.dateEnvoie}</p>
              <p className="order-status"><i className="fas fa-info-circle"></i>Statut: {order.statut}</p>
              <Link to={`/pharmacie/detailOrdonnance/${order.id}`} className="order-details-link">
              <i className="fas fa-info-circle"> </i>Détails
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard_PHA;
