import './App.css';
import "./fontello/css/fontello.css";

import React, {useRef, useEffect} from "react";
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './pages/about';
import Home from './pages';

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
            </Routes>
        </Router>
    );
}

export default App;
