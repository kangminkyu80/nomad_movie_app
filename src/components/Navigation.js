import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link> {/* Link 는 Router 안에서만 사용 가능 */}
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;
