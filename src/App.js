import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';



function App() {
  return (
   <>
   <Router>
     <Navbar />
      <Switch>
      <Route path='/'exact component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
      </Switch>
    </Router>
     </>
    
  );
}

export default App;
