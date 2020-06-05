import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
