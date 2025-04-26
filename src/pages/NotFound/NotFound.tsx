// src/pages/NotFound/NotFound.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  );
};

export default NotFound;
