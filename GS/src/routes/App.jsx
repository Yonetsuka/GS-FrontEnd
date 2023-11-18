import React from 'react';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import SideContent from '../components/SideContent';
import Footer from '../components/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content-wrapper">
        <MainContent />
        <SideContent />
      </div>
      <Footer />
    </div>
  );
};

export default App;