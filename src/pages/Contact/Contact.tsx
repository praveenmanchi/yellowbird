import React from 'react';
import './Contact.css';
import CustomisedButton from '../../components/CustomisedButton/CustomisedButton';
import emailIcon from '../../assets/contact/copy-my-email.svg';
import resumeIcon from '../../assets/contact/resume.svg';
import gitIcon from '../../assets/git-icon.svg';
import linkedinIcon from '../../assets/linkdn-icon.svg';
import noteIcon from '../../assets/note-icon.svg';
import figmaIcon from '../../assets/figma-icon.svg';

const Contact: React.FC = () => {
  const userEmail = 'praveenmanchi.work@proton.me'; // Replace with actual email
  const resumeUrl = 'https://drive.google.com/uc?export=download&id=1-Rg2c36FfnNILcTeQp-PmiQp4C-4LhvK'; 

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(userEmail)
      .then(() => {
        alert('Email copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy email: ', err);
        alert('Failed to copy email. Please try again.');
      });
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Praveen_Manchi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='contact-container'>
      <div className='contact-message'>
      <span className='contact-greeting'>
  Wait, did someone just whisper "UX/UI opportunity"? You have my full attention!
</span>
<span className='contact-description'>
  I'm always game for chatting about crafting delightful user experiences, solving 
  design puzzles, or exchanging stories with fellow creators. The best way to reach 
  me is via LinkedIn—it's like the modern-day business card, right? But if you're feeling 
  old-school, you can always shoot me an email (no smoke signals, please).
</span>

        <div className='contact-buttons-container'>
          <CustomisedButton 
            label={'Copy my e-mail'} 
            img={emailIcon} 
            onClick={handleCopyEmail} 
          />
          <CustomisedButton 
            label={'Resume'} 
            img={resumeIcon} 
            onClick={handleDownloadResume} 
          />
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
        </div>
      </div>
      <div className='contact-pdf-thumbnail'>
        <iframe
          src='https://drive.google.com/file/d/1-Rg2c36FfnNILcTeQp-PmiQp4C-4LhvK/preview'
          width='680px'
          height='800px'
          style={{ border: 'none', borderRadius: '8px' }}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;