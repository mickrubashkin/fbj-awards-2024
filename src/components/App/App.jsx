import React from 'react';
import './App.css';

import Hero from '../Hero';
import Journal from '../Journal';
import Guests from '../Guests';
import Events from '../Events';
import Partners from '../Partners';
import Reviews from '../Reviews';
import Offers from '../Offers';
import Movies from '../Movies';
import Footer from '../Footer';

function App() {
  return (
    <div className="bg-black">
      <div className="container view">
        <Hero />
        <Journal />
        <Guests />
        <Events />
        <Partners />
        <Reviews />
        <Offers />
        <Movies />
        <Footer />
      </div>
    </div>
  );
}

export default App;
