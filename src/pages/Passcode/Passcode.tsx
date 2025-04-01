import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import eye from '../../assets/nda/eye.svg';
import unlock from '../../assets/nda/unlock.svg';
import returnIcon from '../../assets/nda/return.svg';
import './Passcode.css';

const Passcode = () => {
  const navigate = useNavigate();
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');

  const correctPasscode = '1234'; // Change this to the actual passcode

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
      <span className='nda-warning-title'>PRIVATE CONTENT</span>

      <span className='nda-access-text passcode-text'>
        Enter passcode Mentioned in resume to access Project
      </span>
      <div className='nda-access-container'>
        <div
          className={`nda-input-container ${
            error ? 'error' : ''
          } passcode-access-project`}
        >
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

export default Passcode;
