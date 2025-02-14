import React from 'react';
import Logo from '../../images/i3_0.png'
import './GettingStarted.css'
import { useNavigate } from 'react-router-dom';

const GettingStarted = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    // Add your navigation logic for moving to the next page
    navigate('/login');
  };

  const handleTermsAndConditions = () => {
    // Add your navigation logic for moving to the Terms & Conditions page
  };

  return (
    <div className='box'>
      <div className='get-started' style={{ textAlign: 'center', padding: '0 20px' }}>
        {/* Your logo component */}
        <div className='logo-section'>
          <div className='logo-name'>
            <img src={Logo} alt="Stocks Up Logo" style={{ width: '80px', height: '80px' }} />
            <div className='name'>Stock's Up</div>
          </div>
          <p className='tagline'>Where Ideas Take Flight, Investors Unite!</p>
        </div>
        <div className='get-started-btn-section'>
          {/* Get Started button */}
          <button className='get-started-btn' onClick={handleGetStarted}>Get Started</button>
          {/* Terms & Conditions link */}
          <p className='policy-content' style={{ marginTop: '10px', fontSize: '0.8em', color: '#fff' }}>
              By clicking "Get Started," you agree to our{' '}
              <span style={{cursor: 'pointer' , fontWeight:'bold', color:'#fff'}} onClick={handleTermsAndConditions}>
              Terms of use, Privacy Policy
              </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
