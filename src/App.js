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
import JWTImage from './Components/APODImage';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="pageHeading"><Link to="/"> <h1>The Universe</h1></Link></div> {/* Added heading */}
          <nav>
            <div className="nav-circle">
              <div className="planet-link-circle">
                <div className='merImg'>
                  <Link to="/Mercury"><div className="planet-link-circle">Mercury</div></Link>
                </div>
              </div>
              <div className="planet-link-circle">
                <div className='venImg'>
                  <Link to="/Venus"><div className="planet-link-circle">Venus</div></Link>
                </div>
              </div>
              <div className="planet-link-circle">
                <div className='earImg'>
                  <Link to="/Earth"><div className="planet-link-circle">Earth</div></Link>
                </div>
              </div>
              <div className="planet-link-circle">
                <div className='marImg'>
                  <Link to="/Mars"><div className="planet-link-circle">Mars</div></Link>
                </div>
              </div>
              <div className="planet-link-circle">
                <div className='jupImg'>
                  <Link to="/Jupiter"><div className="planet-link-circle">Jupiter</div></Link>
                </div>
              </div>
              <div className="planet-link-circle">
                <div className='satImg'>
                  <Link to="/Saturn"><div className="planet-link-circle">Saturn</div></Link>
                </div>
              </div>
              <div className="planet-link-circle">
                <div className='uraImg'>
                  <Link to="/Uranus"><div className="planet-link-circle">Uranus</div></Link>
                </div>
              </div>
              <div className="planet-link-circle">
                <div className='nepImg'>
                  <Link to="/Neptune"><div className="planet-link-circle">Neptune</div></Link>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<JWTImage />} />
          <Route path="/Mercury" element={<Mercury />} />
          <Route path="/Venus" element={<Venus />} />
          <Route path="/Earth" element={<Earth />} />
          <Route path="/Mars" element={<Mars />} />
          <Route path="/Jupiter" element={<Jupiter />} />
          <Route path="/Saturn" element={<Saturn />} />
          <Route path="/Uranus" element={<Uranus />} />
          <Route path="/Neptune" element={<Neptune />} />
        </Routes>
        <footer>
          <div className="footer-content">The Universe <div className='copyright'>2023 </div> </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
