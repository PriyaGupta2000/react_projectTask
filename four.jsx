import React from "react";
import { Link } from "react-router-dom";
import "./four.css";  // Importing custom styles for the 404 page

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="error-code">404</h1>
        <h2 className="error-message">Sorry, we can't find that page</h2>
        <p className="error-description">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/home" className="home-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
