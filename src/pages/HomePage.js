import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <div className="card-container">
        <Link to="/weather" className="card">Weather</Link>
        <Link to="/products" className="card">Products</Link>
        <Link to="/todo" className="card">To-Do</Link>
        <Link to="/news" className="card">News</Link>
      </div>
    </div>
  );
}

export default HomePage;
