import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"; // Global CSS styles
// import "./four.css";

const HomePage = lazy(() => import("./Components/HomePage"));
const NotFoundPage = lazy(() => import("./Components/four"));
 
const App = () => {
  return (
    <Router>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          {/* Define other routes */}
          <Route path="/" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};
 
export default App;
 