import React, { useState } from 'react';
import { Link } from 'react-router';
import praveenLogo from '../../assets/logo-thunderstorm-96.d1126ac.svg fill.svg';
import './Header.css';
import CaseStudiesHover from '../CaseStudiesHover/CaseStudiesHover';
import ResourceModal from '../ResourceModal/ResourceModal';

const Header: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isResourceModalVisible, setIsResourceModalVisible] = useState(false);
  const [activeLink, setActiveLink] = useState<string>('/');

  const handleModal = () => {
    setIsResourceModalVisible(false);
    setIsModalVisible(!isModalVisible);
    setActiveLink('#case-studies');
  };

  const handleResourceModal = () => {
    setIsModalVisible(false);
    setIsResourceModalVisible(!isResourceModalVisible);
    setActiveLink('#resource');
  };

  const handleLinkClick = (path: string) => {
    setIsModalVisible(false);
    setIsResourceModalVisible(false);
    setActiveLink(path);
  };

  return (
    <>
      <header
        className={`header ${
          ((activeLink === '#case-studies' || activeLink === '#resource') &&
            isModalVisible) ||
          isResourceModalVisible
            ? 'white-bg'
            : ''
        }`}
      >
        <div className='header-left'>
          <Link to='/' onClick={() => handleLinkClick('/')}>
            <img src={praveenLogo} alt='Praveen Manchi' />
          </Link>
        </div>
        <nav className='header-right'>
          <ul>
            <li>
              <Link
                to='/about-me'
                className={activeLink === '/about-me' ? 'active' : ''}
                onClick={() => handleLinkClick('/about-me')}
              >
                ABOUT ME
              </Link>
            </li>
            <li>
              <Link
                to='#'
                onClick={handleModal}
                className={activeLink === '#case-studies' ? 'active' : ''}
              >
                Case Studies
              </Link>
            </li>
            <li>
              <Link
                to='/contact'
                className={activeLink === '/contact' ? 'active' : ''}
                onClick={() => handleLinkClick('/contact')}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to='/blog'
                className={activeLink === '/blog' ? 'active' : ''}
                onClick={() => handleLinkClick('/blog')}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to='#'
                onClick={handleResourceModal}
                className={activeLink === '#resource' ? 'active' : ''}
              >
                Resource
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {isModalVisible && (
        <div className='case-studies-modal'>
          <CaseStudiesHover setIsModalVisible={setIsModalVisible} />
        </div>
      )}
      {isResourceModalVisible && (
        <div className='case-studies-modal'>
          <ResourceModal />
        </div>
      )}
    </>
  );
};

export default Header;
