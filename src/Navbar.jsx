import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav>
            <Link className='nav-item' to='/Home'>
                Home
            </Link>
            <Link className='nav-item' to='/Upload'>
                Upload
            </Link>
            <div className="nav-right">
                <div className="nav-logo">
                    DermaML
                </div>
            </div>
        </nav>
    );
}
