import React from 'react';
import { useNavigate } from 'react-router-dom';


const NotFound = () => {
    const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div>
      <p>404 | Not Found</p>
      <button onClick={handleGoBack} data-testid="back">
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
