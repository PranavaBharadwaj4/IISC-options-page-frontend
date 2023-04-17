import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
    
    <div className="home-container">
        <h1 className="home-heading">IISC GPT</h1>
      <div className="card">
        <div className="card-half">
          <h2>Sign Up</h2>
          <p>Become a Registered User.</p>
          <Link to="/register">
          <button>Register</button>
          </Link>
        </div>
        <div className="divider"></div>
        <div className="card-half">
          <h2>Sign In</h2>
          <p>Already a member?</p>
          <Link to="/login">
          <button >Login</button>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
