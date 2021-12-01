import React from 'react';
import GlobalStyles from './assets/globalStyles';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

const App = () => (
  <>
    <Navbar />
    <Header />
    <Services />
    <Portfolio />
    <AboutUs />
    <Footer />
    <GlobalStyles />
  </>
);

export default App;
