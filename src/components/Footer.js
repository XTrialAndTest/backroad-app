import React from 'react';
import { PageLinks, SocialLinks } from './data';

const Footer = () => {
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        <PageLinks parent={'footer-link'} />
      </ul>
      <ul className='footer-icons'>
        <SocialLinks />
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
