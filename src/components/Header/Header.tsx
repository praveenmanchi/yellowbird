import React, { useState } from 'react';
import { Link } from 'react-router';
import praveenLogo from '../../assets/logo-thunderstorm-96.d1126ac.svg fill.svg';
import './Header.css';
import CaseStudiesHover from '../CaseStudiesHover/CaseStudiesHover';
import ResourceModal from '../ResourceModal/ResourceModal';

const Header: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isResourceModalVisible, setIsResourceModalVisible] = useState(false);

  const handleModal = () => {
    if (isResourceModalVisible) {
      setIsResourceModalVisible(false);
    }
    setIsModalVisible(!isModalVisible);
  };

  const handleResourceModal = () => {
    if (isModalVisible) {
      setIsModalVisible(false);
    }
    setIsResourceModalVisible(!isResourceModalVisible);
  };
  return (
    <>
      <header className='header'>
        <div className='header-left'>
          <Link to='/'>
            <img src={praveenLogo} alt='Praveen Manchi' />
          </Link>
        </div>
        <nav className='header-right'>
          <ul>
            <li>
              <Link to='/about-me'>ABOUT ME</Link>
            </li>
            <li>
              <Link to='#' onClick={handleModal}>
                Case Studies
              </Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
            <li>
              <Link to='#' onClick={handleResourceModal}>
                Resource
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {isModalVisible && (
        <div className='case-studies-modal'>
          <CaseStudiesHover />
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
