import './App.css';
// import logo from "./COSYlogo.svg";
import React from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ProjectList from "./components/ProjectList";
import About from "./components/About";
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
    <Router>
      <Navigation />
        <Switch>
          <Route path="/" exact component={() => <ProjectList />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/dashboard" exact component={() => <Dashboard />} />
        </Switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
