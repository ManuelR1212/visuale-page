import { Link } from 'react-router-dom';
import Logo from '../images/Logo2.png';

const Header = () => {

    return (
      <>
        <nav className="nav b-gray400 shadow-8">
          <div className="d-flex font-regular">
          <img src={Logo} alt="Logo2" className=" width-3 top-margin-auto bottom-margin-auto right-margin-5 right-padding-0"></img>
          <Link to='/home'><p className='t-white50 txt-size-4 smt-txt-size-1sm margin-none'>Inicio</p></Link>
            <Link to="/container"><p className='t-white50 txt-size-4 smt-txt-size-1sm margin-none'>Documentación</p></Link>
            <Link to="/components"><p className='t-white50 txt-size-4 smt-txt-size-1sm margin-none'>Componentes</p></Link>
          </div>
        </nav>
      </>
    );
  }

  export default Header;
  