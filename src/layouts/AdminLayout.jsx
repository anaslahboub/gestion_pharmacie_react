import React from 'react';
import { Outlet } from 'react-router-dom';
 import Header from '../pages/admin/components/Header';

 import Navbar from '../pages/admin/components/NavBar';

const AdminLayout = () => (
  // <>
  //   <Header />
  //   <main>
  //     <Outlet />
  //   </main>
  //   <Footer />
  // </>
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

export default AdminLayout;
