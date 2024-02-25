import { Link } from 'react-router-dom';
import React, {useState, useEffect, useRef} from 'react';
import Sidebar from '../page-components/Sidebar';
import Logo from '../images/Logo2.png'

const DocHeader = () => {
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
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);


    return (
      <>
        <nav className="nav b-gray400 shadow-8">
          <div>

            <header>
              <button className='desplegable smt-desplegable' onClick={toggleSidebar}>☰</button> {/* Botón de menú */}
            </header>
          </div>

          <div className="d-flex font-regular">
          <img src={Logo} alt="Logo2" className="width-3 top-margin-auto bottom-margin-auto right-margin-4 right-padding-0 left-margin-0"></img>
            <Link to='/home'><p className='t-white50 txt-size-4 smt-txt-size-1sm margin-none'>Inicio</p></Link>
            <Link to="/container"><p className='t-white50 txt-size-4 smt-txt-size-1sm margin-none'>Documentación</p></Link>
            <Link to="/components"><p className='t-white50 txt-size-4 smt-txt-size-1sm margin-none'>Componentes</p></Link>
          </div>
        </nav>

        <div ref={sidebarRef}>
          <Sidebar className={sidebarActive ? 'active' : ''}></Sidebar>
        </div>
      </>
    );
  }

  export default DocHeader;