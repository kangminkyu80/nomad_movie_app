import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <Link to="/">Home</Link> {/* Link 는 Router 안에서만 사용 가능 */}
            <Link to="/about">About</Link>
            <Link to="/movie-detail">Detail</Link>
        </div>
    );
}

export default Navigation;
