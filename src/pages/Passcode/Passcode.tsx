import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import eye from '../../assets/nda/eye.svg';
import unlock from '../../assets/nda/unlock.svg';
import returnIcon from '../../assets/nda/return.svg';
import './Passcode.css';

const Passcode = () => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  const [passcode, setPasscode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const correctPasscode = import.meta.env.VITE_PASSCODE;
  const safeRedirect = `/casestudies/${slug}`;
  const unlockKey = `unlocked-${safeRedirect}`;

  const handleUnlock = () => {
    if (passcode === correctPasscode) {
      sessionStorage.setItem(unlockKey, 'true');
      setError('');
      navigate(safeRedirect);
    } else {
      setError('Incorrect passcode, try again');
    }
  };

  return (
    <div className='nda-container'>
      <span className='nda-warning-title'>PRIVATE CONTENT</span>
      <span className='nda-access-text passcode-text'>
        Enter passcode mentioned in resume to access project
      </span>
      <div className='nda-access-container'>
        <div className={`nda-input-container ${error ? 'error' : ''} passcode-access-project`}>
          <input
            type={showPassword ? 'text' : 'password'}
            className='nda-password-input'
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
          />
          <img
            src={eye}
            alt='toggle password'
            onClick={() => setShowPassword(!showPassword)}
            style={{ cursor: 'pointer' }}
          />
        </div>
        {error && <p className='error-message'>{error}</p>}
        <button className='nda-unlock-button' onClick={handleUnlock}>
          <img src={unlock} alt='unlock icon' />
          Unlock
        </button>
        <button className='nda-return-button' onClick={() => navigate(-1)}>
          <img src={returnIcon} alt='return icon' />
          Return Back
        </button>
      </div>
    </div>
  );
};

export default Passcode;
