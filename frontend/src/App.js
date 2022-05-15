import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../src/App.css"

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';
import ResortPage from './pages/ResortPage';
import HabitacionesPage from './pages/HabitacionesPage';

import React, { useEffect} from "react";




function App() {

  useEffect(() => {
    document.title = "Hotel Las Olas";
  }, []);

  return (
    
    <Router>
      <Header/>
      <Nav/>
      <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/resort" exact component={ResortPage} />
      <Route path="/habitaciones" exact component={HabitacionesPage} />
      <Route path="/nosotros" exact component={NosotrosPage} />
      <Route path="/novedades" exact component={NovedadesPage} />
      <Route path="/contacto" exact component={ContactoPage} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
