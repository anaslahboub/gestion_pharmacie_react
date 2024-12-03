import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/patient/components/Header';
import Navbar from '../pages/patient/components/NavBar';
import './PatientLayout.css';


const PatientLayout = () => (
  <div className="patient-layout">
    <Navbar />
    <Header />
    <main>
      <Outlet />
    </main>
  </div>
);

export default PatientLayout;
