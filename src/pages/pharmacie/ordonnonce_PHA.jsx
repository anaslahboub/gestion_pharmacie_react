import React from 'react'
import { Link } from 'react-router-dom';
import "../../styles/pharmacie/ordonnonce_PHA.css"
const ordonnances = [
  {
    id: '001',
    name: 'Jean Dupont',
    date: '2023-10-01',
    status: 'En attente',
    imgSrc: 'https://storage.googleapis.com/a1aa/image/faYSa23U4fomJU5XS8PqJPdeCVHqoNHpv5R8sTYnNQOp76nnA.jpg',
  },
  {
    id: '002',
    name: 'Marie Curie',
    date: '2023-10-01',
    status: 'En préparation',
    imgSrc: 'https://storage.googleapis.com/a1aa/image/3ttPcr1p07J2GtqdzytxAfPKWKjjSe8htcCVE45Q3c22d9zTA.jpg',
  },
  {
    id: '003',
    name: 'Albert Einstein',
    date: '2023-10-01',
    status: 'Prête',
    imgSrc: 'https://storage.googleapis.com/a1aa/image/JNMERwhnxZpjGZlfPYwu0ACrzJ7e9mvgzZMki1yblVfm76nnA.jpg',
  },
  {
    id: '004',
    name: 'Anas Lahboub',
    date: '2023-10-01',
    status: 'Prête',
    imgSrc: 'https://storage.googleapis.com/a1aa/image/JNMERwhnxZpjGZlfPYwu0ACrzJ7e9mvgzZMki1yblVfm76nnA.jpg',
  },
  {
    id: '005',
    name: 'Anas Lahboub',
    date: '2023-10-01',
    status: 'Prête',
    imgSrc: 'https://storage.googleapis.com/a1aa/image/JNMERwhnxZpjGZlfPYwu0ACrzJ7e9mvgzZMki1yblVfm76nnA.jpg',
  },
];

function Ordonnances_PHA() {
  return (
    <div id="ordonnances" className="">
      <div className="card-wrapper">
        <h2 className="section-title">Liste des Ordonnances</h2>
        <div className="card-grid">
          {ordonnances.map((ordonnance) => (
            <div className="card-item" key={ordonnance.id}>
              <img className="card-img" src={ordonnance.imgSrc} alt={`Image de l'ordonnance de ${ordonnance.name}`} />
              <h3 className="card-name">{ordonnance.name}</h3>
              <p className="card-text">ID: {ordonnance.id}</p>
              <p className="card-text">Date: {ordonnance.date}</p>
              <p className="card-text">Statut: {ordonnance.status}</p>
              <Link to={`/pharmacie/detailOrdonnance/${ordonnance.id}`} className="order-details-link">
                Détails
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ordonnances_PHA;
