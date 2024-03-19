import { Link } from 'react-router-dom';
import React, {useState, useEffect, useRef} from 'react';
import Sidebar from '../page-components/Sidebar';
import SideNav from '../page-components/SideNav';
import Logo from '../images/Logo2.png'

const DocHeader = () => {

  function switchTheme() {
    const currentTheme = document.documentElement.dataset.theme;
    if (currentTheme === 'dark') {
      document.documentElement.dataset.theme = 'light';
    } else {
      document.documentElement.dataset.theme = 'dark';
    }
  }

    const [sidebarActive, setSidebarActive] = useState(false);
    const sidebarRef = useRef(null);
  
    const toggleSidebar = () => {
      setSidebarActive(!sidebarActive);
    };
  
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarActive(false);
      }
    };

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
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);


    return (
      <>
        <nav className="nav b-black50 shadow-8">
          <div>

            <header>
              <button className='desplegable smt-desplegable smt-top-margin-5 smt-left-margin-1' onClick={toggleSidebar}>☰</button>
            </header>
          </div>

          <div className="d-flex font-regular nav-mobile">
          <img src={Logo} alt="Logo2" className="width-3 smt-width-5 top-margin-auto bottom-margin-auto bottom-padding-2 right-margin-4 right-padding-0 left-margin-0 smt-left-margin-11"></img>
            <Link to='/home'><p className='t-white50 txt-size-4 smt-txt-size-1sm margin-none'>Inicio</p></Link>
            <Link to="/container"><p className='t-white50 txt-size-4 smt-txt-size-1sm margin-none'>Documentación</p></Link>
            <Link to="/components"><p className='t-white50 txt-size-4 smt-txt-size-1sm margin-none'>Componentes</p></Link>
            <button onClick={switchTheme} className='top-padding-0 b-none border-none txt-size-8 smt-txt-size-5 rounded-hover '>🌓</button>
          </div>

          <div>

            <header>
              <button className='sidenav-button smt-sidenav-button' onClick={toggleSidenav}>...</button>
            </header>
          </div>

        </nav>

        <div ref={sidebarRef}>
          <Sidebar className={sidebarActive ? 'active' : ''}></Sidebar>
        </div>

        <div ref={sidenavRef}>
          <SideNav className={sidenavActive ? 'active' : ''}></SideNav>
        </div>
      </>
    );
  }

  export default DocHeader;