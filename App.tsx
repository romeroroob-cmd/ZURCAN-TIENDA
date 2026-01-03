import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marketplace } from './components/Marketplace';
import { Footer } from './components/Footer';
import { Checkout } from './components/Checkout';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'checkout'>('home');

  return (
    <div className="font-sans antialiased bg-stone-50 selection:bg-zurcan-orange/30 selection:text-zurcan-dark">
      <Navbar 
        onCartClick={() => setCurrentView('checkout')} 
        onHomeClick={() => setCurrentView('home')}
      />
      <main>
        <AnimatePresence mode="wait">
          {currentView === 'home' ? (
            <React.Fragment key="home">
              <Hero />
              <Marketplace onCheckout={() => setCurrentView('checkout')} />
            </React.Fragment>
          ) : (
            <Checkout key="checkout" onBack={() => setCurrentView('home')} />
          )}
        </AnimatePresence>
      </main>
      {currentView === 'home' && <Footer />}
    </div>
  );
}

export default App;