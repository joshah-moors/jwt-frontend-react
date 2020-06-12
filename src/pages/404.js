import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="section">
      <div className="container">
        <h2 className="title">404 Not Found!</h2>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;