import React from 'react';
import MainLayout from './layouts/MainLayout';

import Home from './pages/Home';
import Projects from './pages/Projects';
import WhatIDo from './pages/WhatIDo';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

import './App.css';

const App = () => {
  return (
    <MainLayout>
      <Home />
      <Projects />
      <WhatIDo />
      <Gallery />
      <Contact />
    </MainLayout>
  );
};

export default App;