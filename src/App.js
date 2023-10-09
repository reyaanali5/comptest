import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Import Routes
import logo from './logo.svg';
import './App.css';

import Mercury from './Components/Mercury';
import Venus from './Components/Venus';
import Earth from './Components/Earth';
import Mars from './Components/Mars';
import Jupiter from './Components/Jupiter';
import Saturn from './Components/Saturn';
import Uranus from './Components/Uranus';
import Neptune from './Components/Neptune';
import JWTImage from './Components/JWTImage';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>The Universe</h1> {/* Added heading */}
          <nav>
            <div className="nav-circle">
            <div className="planet-link-circle">
                <Link to="/Mercury">Mercury</Link>
              </div>
            <div className="planet-link-circle">
                <Link to="/Venus">Venus</Link>
              </div>
              <div className="planet-link-circle">
                <Link to="/Earth">Earth</Link>
              </div>
            <div className="planet-link-circle">
                <Link to="/Mars">Mars</Link>
              </div>
             <div className="planet-link-circle">
                <Link to="/Jupiter">Jupiter</Link>
              </div>
            <div className="planet-link-circle">
                <Link to="/Saturn">Saturn</Link>
              </div>
            <div className="planet-link-circle">
                <Link to="/Uranus">Uranus</Link>
              </div>
            <div className="planet-link-circle">
                <Link to="/Neptune">Neptune</Link>
              </div>
            </div>
          </nav>
        </header>

        <JWTImage />
        
        <Routes> 
          <Route path="/Mercury" element={<Mercury />} />
          <Route path="/Venus" element={<Venus />} /> 
          <Route path="/Earth" element={<Earth />} />
          <Route path="/Mars" element={<Mars />} />
          <Route path="/Jupiter" element={<Jupiter />} /> 
          <Route path="/Saturn" element={<Saturn />} /> 
          <Route path="/Uranus" element={<Uranus />} />
          <Route path="/Neptune" element={<Neptune />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
