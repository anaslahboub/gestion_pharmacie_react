import React from 'react';
import { Outlet } from 'react-router-dom';
 import Header from '../pages/admin/components/Header';

 import Footer from '../pages/admin/components/NavBar';

const AdminLayout = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default AdminLayout;
