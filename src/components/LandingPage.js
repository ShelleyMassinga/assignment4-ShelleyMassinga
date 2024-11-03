import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
    return (
        <div className="landing-page">
            <div className="landing-content">
                <h1>Welcome to Haven of Pages</h1>
                <p>Discover a world of knowledge and imagination in our curated collection of books.</p>
                <Link to="/products" className="cta-button">See Available Books</Link>
            </div>
        </div>
    );
}

export default LandingPage;