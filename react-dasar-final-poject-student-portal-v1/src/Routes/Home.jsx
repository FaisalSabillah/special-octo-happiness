import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '10px',
  };
  
  return (
        <div>
        <h1 style={{ textAlign: 'center' }}>Welcome to Student Portal</h1>
        <button data-testid="student-btn" style={buttonStyle}>
        <Link to="/student" style={{ color: 'white', textDecoration: 'none' }}>All Student</Link>
      </button>
      </div>
    );
};

export default Home;
