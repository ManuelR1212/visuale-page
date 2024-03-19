import React from 'react';
import '../styles/framework.css';

const Footer = () => {
  return (
<>
    <footer className="footer b-black50">

    <div className='smt-d-none pos-absolute'>
    <h3 className='left-txt top-margin-5 tab-txt-size-5 smt-txt-size-4sm'>Visual E</h3>
    <p className='left-txt tab-txt-size-1sm smt-txt-size-1sm'>Diseñado por Manuel Rodríguez, <br/> para su uso y mejoramiento gratuito.</p>
    </div>

      <div className="footer-content">
        <p className='tab-txt-size-2 smt-txt-size-1sm'>© 2024 Visual E. Todos los derechos reservados</p>
        <ul className="footer-links">
          <li><a href="https://github.com/visual-e-ve/Visual-E-Framework" className='t-white50 tab-txt-size-2 smt-txt-size-1sm'>Github</a></li>
          <li><a href="https://www.npmjs.com/package/visual-e" className='t-white50 tab-txt-size-2 smt-txt-size-1sm'>NPM</a></li>
          <li><a href="/contact" className='t-white50 tab-txt-size-2 smt-txt-size-1sm'>Gmail</a></li>
        </ul>
      </div>
    </footer>

</>
  );
};

export default Footer;
