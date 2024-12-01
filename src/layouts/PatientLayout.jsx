import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/patient/components/Header';
import Navbar from '../pages/patient/components/NavBar';
const PatientLayout = () => (
  <>
    <Navbar />
    <Header />
    <main >
      <Outlet /> 
    </main>
  </>
);

export default PatientLayout;

