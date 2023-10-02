import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Import Routes
import logo from './logo.svg';
import './App.css';

import Earth from './Components/Earth';
import Jupiter from './Components/Jupiter';
import Mercury from './Components/Mercury';
import Neptune from './Components/Neptune';
import Saturn from './Components/Saturn';
import Venus from './Components/Venus';
import Uranus from './Components/Uranus';
import Mars from './Components/Mars';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to our Space thing
          </p>
          <nav>
            <ul>
              <li>
                <Link to="/Earth">Earth</Link>
                <Link to="/Jupiter"> Jupiter</Link>
                <Link to="/Mercury"> Mercury</Link>
                <Link to="/Neptune"> Neptune</Link>
                <Link to="/Saturn"> Saturn</Link>
                <Link to="/Uranus"> Uranus</Link>
                <Link to="/Venus"> Venus</Link>
                <Link to="/Mars"> Mars</Link>
                
              </li>
            </ul>
          </nav>
        </header>

        <Routes> 
          <Route path="/Earth" element={<Earth />} /> 
          <Route path="/Jupiter" element={<Jupiter />} /> 
          <Route path="/Mercury" element={<Mercury />} /> 
          <Route path="/Neptune" element={<Neptune />} /> 
          <Route path="/Saturn" element={<Saturn />} /> 
          <Route path="/Uranus" element={<Uranus />} /> 
          <Route path="/Venus" element={<Venus />} /> 
          <Route path="/Mars" element={<Mars />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;