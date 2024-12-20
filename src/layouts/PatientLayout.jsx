import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/patient/components/Header';
import Navbar from '../pages/patient/components/NavBar';
import './PatientLayout.css';


const PatientLayout = () => (
  <div className="patient-layout">
    <Navbar />
    <section className='gl'>
      <Header />
      <main>
        <Outlet />
      </main>
    </section>
  </div>
);

export default PatientLayout;

