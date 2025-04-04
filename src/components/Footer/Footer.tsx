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
          This project is part of my personal design portfolio and is intended solely for showcasing my skills and creative process. Please note that the rights reservation and official copyright registration for this work are currently pending. All visual designs, concepts, and written content presented here remain the intellectual property of the creator (Praveen Manchi) unless otherwise stated. Any unauthorized use, reproduction, modification, or distribution for commercial or non-commercial purposes is strictly prohibited.
          </p>
        </div>
        <div className='footer__links-section'>
          <ul className='footer__links'>
            <li className='footer__link-item'>
              <Link to='/' className='footer__link'>
                HOME
              </Link>
            </li>
            <li className='footer__link-item'>
              <Link to='/aboutme' className='footer__link'>
                ABOUT ME
              </Link>
            </li>
            <li className='footer__link-item'>
              <Link to='/casestudies' className='footer__link'>
                CASESTUDIES
              </Link>
            </li>
            <li className='footer__link-item'>
              <Link to='/contact' className='footer__link'>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
        <div className='footer__links-section'>
          <ul className='footer__links'>
            <li className='footer__link-item'>
              <Link to='/blog' className='footer__link'>
                BLOG
              </Link>
            </li>
            <li className='footer__link-item'>
              <Link to='/contact' className='footer__link'>
                RESUME
              </Link>
            </li>
            <li className='footer__link-item'>
              <Link to='/designprocess' className='footer__link'>
                DESIGNPROCESS
              </Link>
            </li>
            <li className='footer__link-item'>
              <Link to='/photography' className='footer__link'>
              PHOTOGRAPHY
              </Link>
            </li>
          </ul>
        </div>
        <footer className='footer__empty-section'>
          <nav className='footer__empty-section-icons'>
            {[
              {
                src: gitIcon,
                alt: 'GitHub',
                link: 'https://github.com/praveenmanchi',
              },
              {
                src: figmaIcon,
                alt: 'Figma',
                link: 'https://www.figma.com/@praveenmanchi',
              },
              {
                src: noteIcon,
                alt: 'Notion',
                link: 'https://www.notion.so/praveenmanchi',
              },
              {
                src: linkedinIcon,
                alt: 'LinkedIn',
                link: 'https://www.linkedin.com/in/praveenmanchi',
              },
            ].map((icon, index) => (
              <a
                key={index}
                href={icon.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={icon.src} alt={icon.alt} className='footer__logo' />
              </a>
            ))}
          </nav>
          <span className='footer__empty-section-text'>
            © 2024 Praveen Manchi. All Rights Reserved.
          </span>
        </footer>
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
