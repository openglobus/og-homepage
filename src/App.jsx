import './App.css';
import "./fontello/css/fontello.css";

import React, {useRef, useEffect} from "react";
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contacts from './pages/contacts';
import Home from './pages';

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/contacts' element={<Contacts/>}/>
            </Routes>
        </Router>
    );
}

export default App;
