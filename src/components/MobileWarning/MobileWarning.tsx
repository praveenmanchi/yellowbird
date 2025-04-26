import React, { useEffect, useState } from 'react';
import praveenLogo from '../../assets/logo-thunderstorm-96.d1126ac.svg fill.svg'; // ✅ after renaming

const MobileWarning = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeIn(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      backgroundColor: '#00030A',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '20px',
      opacity: fadeIn ? 1 : 0,
      transition: 'opacity 1s ease-in-out',
    }}>
      {/* Logo - Bigger now */}
      <img 
        src={praveenLogo} 
        alt="Praveen Logo" 
        style={{ width: '300px', marginBottom: '30px' }} 
      />
      
      {/* Message - No emojis */}
      <h1 style={{ fontSize: '36px', marginBottom: '20px' }}>Oops! Too tiny here</h1>
      <p style={{ fontSize: '20px', marginBottom: '30px' }}>
        This portfolio is best enjoyed on a BIG screen.<br />
        Please switch to Desktop Mode.
      </p>

      {/* Retry Button */}
      <button
        onClick={handleReload}
        style={{
          padding: '12px 24px',
          backgroundColor: '#0049B8',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#00308a')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#0049B8')}
      >
        Retry in Desktop Mode
      </button>
    </div>
  );
};

export default MobileWarning;
