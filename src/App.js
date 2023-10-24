import React, { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './App.css';

// import { animateScroll as scroll } from 'react-scroll';
import { Link as ScrollLink, Element, scroller } from 'react-scroll';
// NEW NEW NEW

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
import PlanetImg from './Components/PlanetImages';

import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import useAuth from './hooks/useAuth';

import { collection, addDoc } from "firebase/firestore";
import { db } from './firebase';

import Forum from './Components/Forum';

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

    const [favourites, setFavourites] = useState([]);



    const handleDelete = (index) => {
        const removeFavourite = favourites.filter((item => item.id !== index))
        setFavourites(removeFavourite);
    };


    return (

        <div className="content-container">
            {isContentActive && <button onClick={handleCloseContent} className="close-button">✖</button>}

            <div className="content-wrapper">
                <Routes>
                    <Route path="/" element={<APODImage />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/SignUp" element={<SignUp />} />
                    {user && <Route path="/PlanetImg" element={<PlanetImg favourites={favourites} setFavourites={setFavourites} />} />}
                    {user && <Route path="/Favourites" element={<Favourites favourites={favourites} removeFavourites={handleDelete} />} />}
                    {user && <Route path="/forum" element={<Forum />} />}
                    
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
        </div>
    );
}


function App() {

    // const scrollToNavCircle = () => {
    //     scroller.scrollTo("nav-circle", {
    //         duration: 800,
    //         delay: 0,
    //         smooth: "easeInOutQuart", // You can adjust the smoothness and other options
    //     });
    // };
    // new new new NEW NEW NEW NEW

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

                    <div className="pageHeading"><Link to="/"> <h1>The Universe</h1></Link></div>

                    <div className="fav">
                        {user ? (
                            <div className="fav-row">
                                <div className="planet-link-circle">
                                    <Link to="/PlanetImg">
                                        <div class="favImg"></div>
                                        <div class="text-container">Images</div>
                                    </Link>
                                </div>
                                <div className="planet-link-circle">
                                    <Link to="/Favourites">
                                        <div className="favImg"></div>
                                        <div className="text-container">Favourites</div>
                                    </Link>
                                </div>
                                <div className="planet-link-circle"> 
                                    <Link to="/forum">
                                        <div className="forumImg"></div>
                                        <div className="text-container">Forum</div>
                                    </Link>
                                </div>
                            </div>
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
                        <div className="login">
                            <Link to="/Login"> <button className="loginButton">Login</button></Link>
                            <Link to="/SignUp"><button className="signUpButton">Sign Up</button></Link>
                        </div>
                    )}
                </header>

                <div className="bk-img">
                </div>

                <div className="scroll"></div>

                <h2 className="planet">
                    <ScrollLink
                        to="scroll"
                        spy={true}
                        smooth={true}
                        duration={1000}
                    >
                        <span class="planet-text">THE 8 PLANETS</span>

                    </ScrollLink>
                </h2>

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


                <MainContent />

                <footer>
                    <div className="footer-content">The Universe <div className='copyright'>2023 </div> </div>
                </footer>
            </div>
        </Router >
    );
}

export default App;
