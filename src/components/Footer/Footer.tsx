import React from 'react';
import { Link } from 'react-router';
import praveenLogo from '../../assets/logo-thunderstorm-96.d1126ac.svg fill.svg';
import praveenFooter from '../../assets/praveen-footer-logo.svg';
import gitIcon from '../../assets/git-icon.svg';
import linkedinIcon from '../../assets/linkdn-icon.svg';
import noteIcon from '../../assets/note-icon.svg';
import figmaIcon from '../../assets/figma-icon.svg';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__logo-section'>
          <img
            src={praveenLogo}
            alt='Praveen Manchi'
            className='footer__logo'
          />
          <p className='footer__text'>
            The rights reservation for this project is currently pending The
            rights reservation for this project is currently pendingThe rights
            reservation for this project is currently pendingThe rights
            reservation for this project is currently pending The rights
            reservation for this project is currently pending The rights
            reservation for this project is currently pending
          </p>
        </div>
        <div className='footer__links-section'>
          <ul className='footer__links'>
            <li className='footer__link-item'>
              <Link to='/' className='footer__link'>
                Home
              </Link>
            </li>
            <li className='footer__link-item'>
              <Link to='/about-me' className='footer__link'>
                ABOUT
              </Link>
            </li>
            <li className='footer__link-item'>
              <Link to='/case-studies' className='footer__link'>
                Case Studies
              </Link>
            </li>
            <li className='footer__link-item'>
              <Link to='/contact' className='footer__link'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className='footer__links-section'>
          <ul className='footer__links'>
            <li className='footer__link-item'>
              <Link to='/blog' className='footer__link'>
                Blog
              </Link>
            </li>
            <li className='footer__link-item'>
              <Link to='/about-me' className='footer__link'>
                ABOUT ME
              </Link>
            </li>
            <li className='footer__link-item'>
              <Link to='/case-studies' className='footer__link'>
                Case Studies
              </Link>
            </li>
            <li className='footer__link-item'>
              <Link to='/contact' className='footer__link'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className='footer__empty-section'>
          <div className='footer__empty-section-icons'>
            <img src={gitIcon} alt='Praveen Manchi' className='footer__logo' />
            <img
              src={figmaIcon}
              alt='Praveen Manchi'
              className='footer__logo'
            />
            <img src={noteIcon} alt='Praveen Manchi' className='footer__logo' />
            <img
              src={linkedinIcon}
              alt='Praveen Manchi'
              className='footer__logo'
            />
          </div>
          <span className='footer__empty-section-text'>
            © 2024 Praveen Manchi. All Rights Reserved.
          </span>
        </div>
      </div>
      <div className='footer__bottom-logo'>
        <img
          src={praveenFooter}
          alt='Praveen Manchi'
          className='footer__bottom-logo-img'
        />
      </div>
    </footer>
  );
};

export default Footer;
