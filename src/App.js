import React, { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
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
import APODImage from './Components/APODImage';
import Login from './Components/Auth/Login';
import SignUp from './Components/Auth/Signup';
import Favourites from './Components/Favourites';
import MarsWeather from './Components/MarsWeather';

import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import useAuth from './hooks/useAuth';

function MainContent() {
    const location = useLocation();
    const navigate = useNavigate();
    const [showDefault, setShowDefault] = useState(true);

    const isContentActive = location.pathname !== "/";

    const handleCloseContent = () => {
        setShowDefault(false);
        navigate("/");
    };

    const { user } = useAuth();


    return (

        <div className="content-container">
            {isContentActive && <button onClick={handleCloseContent} className="close-button">✖</button>}

            <div className="content-wrapper">
                <Routes>
                    <Route path="/" element={<APODImage />} />
                    <Route path="/" element={<MarsWeather />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/SignUp" element={<SignUp />} />
                    {user ? (
                        <Route path="/Favourites" element={<Favourites />} />
                    ) : (
                        null
                    )}
                    <Route path="/Mercury" element={<Mercury />} />
                    <Route path="/Venus" element={<Venus />} />
                    <Route path="/Earth" element={<Earth />} />
                    <Route path="/Mars" element={<Mars />} />
                    <Route path="/Jupiter" element={<Jupiter />} />
                    <Route path="/Saturn" element={<Saturn />} />
                    <Route path="/Uranus" element={<Uranus />} />
                    <Route path="/Neptune" element={<Neptune />} />
                    <Route path="/MarsWeather" element={<MarsWeather />} />
                </Routes>
            </div>
        </div>
    );
}

function App() {

    const { user } = useAuth();

    const handleSignOut = async () => {
        try {
            await signOut(auth); //signout method from firebase and use the auth service
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <div className="Auth">

                        <div className="fav">
                            {user ? (
                                <div className="planet-link-circle"> <Link to="/Favourites">
                                    <div class="favImg"></div>
                                    <div class="text-container">Favourites</div>
                                </Link></div>
                            ) : (
                                null
                            )}
                        </div>

                        {user ? (
                            <div className="welcome">
                                Welcome {auth.currentUser?.displayName} !
                                <button className="signOutButton" onClick={handleSignOut}>Sign Out</button>
                            </div>
                        ) : (
                            <div>
                                <Link to="/Login"> <button className="loginButton">Login</button></Link>
                                <Link to="/SignUp"><button className="signUpButton">Sign Up</button></Link>
                            </div>
                        )}


                    </div>


                    <div className="pageHeading"><Link to="/"> <h1>The Universe</h1></Link></div>
                    <nav>
                        <div className="nav-circle">
                            <div className="planet-link-circle">
                                <Link to="/Mercury">
                                    <div class="merImg"></div>
                                    <div class="text-container">Mercury</div>
                                </Link>
                            </div>
                            <div className="planet-link-circle">
                                <Link to="/Venus">
                                    <div class="venImg"></div>
                                    <div class="text-container">Venus</div>
                                </Link>
                            </div>
                            <div className="planet-link-circle">
                                <Link to="/Earth">
                                    <div class="earImg"></div>
                                    <div class="text-container">Earth</div>
                                </Link>
                            </div>
                            <div className="planet-link-circle">
                                <Link to="/Mars">
                                    <div class="marImg"></div>
                                    <div class="text-container">Mars</div>
                                </Link>
                            </div>
                            <div className="planet-link-circle">
                                <Link to="/Jupiter">
                                    <div class="jupImg"></div>
                                    <div class="text-container">Jupiter</div>
                                </Link>
                            </div>
                            <div className="planet-link-circle">
                                <Link to="/Saturn">
                                    <div class="satImg"></div>
                                    <div class="text-container">Saturn</div>
                                </Link>
                            </div>
                            <div className="planet-link-circle">
                                <Link to="/Uranus">
                                    <div class="uraImg"></div>
                                    <div class="text-container">Uranus</div>
                                </Link>
                            </div>
                            <div className="planet-link-circle">
                                <Link to="/Neptune">
                                    <div class="nepImg"></div>
                                    <div class="text-container">Neptune</div>
                                </Link>
                            </div>

                        </div>

                    </nav>
                    {/* </div> */}
                </header>

                <MainContent />

                <footer>
                    <div className="footer-content">The Universe <div className='copyright'>2023 </div> </div>
                </footer>
            </div>
        </Router >
    );
}

export default App;
