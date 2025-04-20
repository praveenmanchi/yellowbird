import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import eye from '../../assets/nda/eye.svg';
import unlock from '../../assets/nda/unlock.svg';
import returnIcon from '../../assets/nda/return.svg';
import './NdaCaseStudy.css';

const NdaCaseStudy = () => {
  const navigate = useNavigate();
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');

  const correctPasscode = import.meta.env.VITE_PASSCODE; // Change this to the actual passcode

  const handleUnlock = () => {
    if (passcode === correctPasscode) {
      setError('');
      navigate('/casestudydetails');
    } else {
      setError('Please enter valid password budddy');
    }
  };

  return (
    <div className='nda-container'>
      <span className='nda-warning-title'>
        Sharing is definitely not caring
      </span>
      <span className='nda-warning-text'>
        The UI screens you are about to view are the exclusive property of the
        respective companies involved in this work. These designs represent the
        hard work and creativity of mine and companies are protected under
        intellectual property laws. Any misuse, unauthorized reproduction, or
        replication is strictly prohibited.
      </span>
      <span className='nda-warning-text nda-warning-text-1'>
        Any violations will be met with legal action faster than you can say, "I
        didn't mean to!". I trust you'll respect the efforts of all parties
        involved and help me keep this work secure, because in this case,
        sharing is definitely not caring.
      </span>
      <span className='nda-access-text'>
        Enter passcode Mentioned in resume to access Project
      </span>
      <div className='nda-access-container'>
        <div className={`nda-input-container ${error ? 'error' : ''}`}>
          <input
            type='password'
            className='nda-password-input'
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
          />
          <img src={eye} alt='' />
        </div>
        {error && <p className='error-message'>{error}</p>}{' '}
        <button className='nda-unlock-button' onClick={handleUnlock}>
          <img src={unlock} alt='' />
          Unlock
        </button>
        <button className='nda-return-button' onClick={() => navigate(-1)}>
          <img src={returnIcon} alt='' />
          Return Back
        </button>
      </div>
    </div>
  );
};

export default NdaCaseStudy;
