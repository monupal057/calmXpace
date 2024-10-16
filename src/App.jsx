import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Objectives from './components/objectives';
import Benefits from './components/Benefits';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Objectives />
      <Benefits />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
