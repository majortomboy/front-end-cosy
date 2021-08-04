import './App.min.css';
// import logo from "./COSYlogo.svg";
import React from 'react';
// import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ProjectList from "./components/ProjectList";
import About from "./components/About";
import Dashboard from './components/Dashboard';
import Part from './components/Part';
import ToDoList from './components/ToDoList';
import ToBuyList from './components/ToBuyList';

function App() {
  return (
    <div className="App">
    <Router>
      <Navigation />
        <Switch>
          <Route path="/projects" exact component={() => <ProjectList />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/dashboard/:id" exact component={Dashboard} />
          <Route path="/dashboard/:id/parts" exact component={Part} />
          <Route path="/dashboard/:id/todo" exact component={ToDoList} />
          <Route path="/dashboard/:id/tobuy" exact component={ToBuyList} />
          {/* <Route path="/dashboard/:id/references" exact component={References} /> */}
        </Switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
