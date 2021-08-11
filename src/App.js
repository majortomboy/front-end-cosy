import './App.scss';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ProjectList from "./components/ProjectList";
// import About from "./components/About";
import Dashboard from './components/Dashboard';
import Part from './components/Part';
import ToDoList from './components/ToDoList';
import ToBuyList from './components/ToBuyList';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  return (
    <div className="App">
    <Router>
      <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Register />} />
          <Route path="/register" exact component={() => <Register />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/logout" exact component={() => <Logout />} />
          <Route path="/projects" exact component={() => <ProjectList />} />
          {/* <Route path="/about" exact component={() => <About />} /> */}
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
