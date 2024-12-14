import React from 'react';
import { Header } from './components/Header/Header';
import { Services } from './components/Services/Services';
import { Features } from './components/Features/Features';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Services />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;