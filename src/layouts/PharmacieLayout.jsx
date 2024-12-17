import React from 'react';
import { Outlet } from 'react-router-dom';
<<<<<<< HEAD
// import Header from '../components/Header';
// import Footer from '../components/Footer';
=======
import Header from '../pages/pharmacie/header_PHA';
import Footer from '../pages/pharmacie/footer_PHA';
>>>>>>> f1907c9c471c4ec830d862ede9e5ab3ea6023b30

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
