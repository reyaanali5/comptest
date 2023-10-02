import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Import Routes
import logo from './logo.svg';
import './App.css';

import Earth from './Components/Earth';
import Jupiter from './Components/Jupiter';
import Mercury from './Components/Mercury';
import Neptune from './Components/Neptune';
import Saturn from './Components/Saturn';
import Venus from './Components/Earth';

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
              </li>
            </ul>
          </nav>
        </header>

        <Routes> 
          <Route path="/Earth" element={<Earth />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;