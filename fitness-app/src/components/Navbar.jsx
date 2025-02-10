import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">FitnessPro</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Ana Sayfa</Link></li>
                <li><Link to="/exercises">Egzersizler</Link></li>
                <li><Link to="/workout">Antrenman</Link></li>
                <li><Link to="/profile">Profil</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar; 