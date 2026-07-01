import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollRotateButton from '../components/ScrollRotateButton';

const MainLayout = ({ children }) => {
  return (
    <div className="App">
      <Header />

      <main>
        {children}
      </main>

      <ScrollRotateButton />

      <Footer />
    </div>
  );
};

export default MainLayout;