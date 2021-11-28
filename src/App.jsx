import React from 'react';
import GlobalStyles from './assets/globalStyles';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Services from './components/services/Services';

const App = () => (
  <React.Fragment>
    <Navbar />
    <Header />
    <Services />
    <GlobalStyles />
  </React.Fragment>
);

export default App;
