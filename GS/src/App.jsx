// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import SideContent from '../components/SideContent';
import Footer from '../components/Footer';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content-wrapper">
          <Switch>
            <Route exact path="/">
              <MainContent />
              <SideContent />
            </Route>
            {/* Defina outras rotas conforme necessário */}
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
