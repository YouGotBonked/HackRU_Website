import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // 👈 Switched to HashRouter and react-router-dom
import Home from './pages/Home';
import Upload from './pages/Upload.jsx';
import Navbar from "./Navbar";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Navigate to="/Home" replace />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Upload" element={<Upload />} />
            </Routes>
        </Router>
    );
}

export default App;
