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
          <h1>The Universe</h1> {/* Added heading */}
          <nav>
            <div className="nav-circle">
              <div className="planet-link-circle">
                <Link to="/Earth">Earth</Link>
              </div>
              <div className="planet-link-circle">
                <Link to="/Jupiter">Jupiter</Link>
              </div>
              <div className="planet-link-circle">
                <Link to="/Mercury">Mercury</Link>
              </div>
              <div className="planet-link-circle">
                <Link to="/Neptune">Neptune</Link>
              </div>
              <div className="planet-link-circle">
                <Link to="/Saturn">Saturn</Link>
              </div>
              <div className="planet-link-circle">
                <Link to="/Uranus">Uranus</Link>
              </div>
              <div className="planet-link-circle">
                <Link to="/Venus">Venus</Link>
              </div>
              <div className="planet-link-circle">
                <Link to="/Mars">Mars</Link>
              </div>
            </div>
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
