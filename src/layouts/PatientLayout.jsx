import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/patient/components/Header';
import Navbar from '../pages/patient/components/NavBar';
<<<<<<< HEAD
const PatientLayout = () => (
  <>
    <Navbar />
    <Header />
    <main >
      <Outlet /> 
    </main>
  </>
=======
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
>>>>>>> f1907c9c471c4ec830d862ede9e5ab3ea6023b30
);

export default PatientLayout;

