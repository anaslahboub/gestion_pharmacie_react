import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/pharmacie/header_PHA';
import Footer from '../pages/pharmacie/footer_PHA';

const PharmacieLayout = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default PharmacieLayout;
