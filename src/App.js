import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import StartPage from './Components/StartPage';
import Contact from './Components/Contact';
import Projects from './Components/Projects';






export default function App() {



  return (
    <Router>
    <main>
      <nav>
        <div class="headerNav">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/projects">Projects</Link>
        </div>
        </nav>
      <Switch>
      <Route path="/" exact component={StartPage} /> 
      <Route path="/contact"  component={Contact} /> 
      <Route path="/projects"  component={Projects} /> 
      </Switch>  
     </main>
    </Router> 
  );
}


  
 



   
    








