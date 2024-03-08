import { Link } from 'react-router-dom';
import React, {useState, useEffect, useRef} from 'react';
import Logo from '../images/Logo2.png';
import SideNav from '../page-components/SideNav';

const Header = () => {

  const [sidenavActive, setSidenavActive] = useState(false);
  const sidenavRef = useRef(null);

  const toggleSidenav = () => {
    setSidenavActive(!sidenavActive);
  };

  const handleClickOutsided = (event) => {
    if (sidenavRef.current && !sidenavRef.current.contains(event.target)) {
      setSidenavActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsided);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsided);
    };
  }, []);


    return (
      <>
        <nav className="nav b-gray400 shadow-8">
          <div className="d-flex font-regular nav-mobile">
          <img src={Logo} alt="Logo2" className=" width-3 smt-width-5 top-margin-auto bottom-margin-auto bottom-padding-2 right-margin-4 right-padding-0 left-margin-5 smt-left-margin-12"></img>
          <Link to='/home'><p className='t-white50 txt-size-4 smt-txt-size-1sm margin-none'>Inicio</p></Link>
            <Link to="/container"><p className='t-white50 txt-size-4 smt-txt-size-1sm margin-none'>Documentación</p></Link>
            <Link to="/components"><p className='t-white50 txt-size-4 smt-txt-size-1sm margin-none'>Componentes</p></Link>
          </div>

          
          <div>

            <header>
              <button className='sidenav-button smt-sidenav-button' onClick={toggleSidenav}>...</button>
            </header>
          </div>

        </nav>

        <div ref={sidenavRef}>
          <SideNav className={sidenavActive ? 'active' : ''}></SideNav>
        </div>

      </>
    );
  }

  export default Header;
  