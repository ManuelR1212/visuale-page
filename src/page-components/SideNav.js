import { Link } from 'react-router-dom';
import '../styles/framework.css';

const SideNav = ({className}) => {

  return (
    <div className={`sidenav ${className} b-black50`}>
        {<div class='sidebar-scrollbox'>
        <h1 class="txt-size-5 t-white50 font-normal bottom-margin-7 left-margin-7">Navegación</h1>
        <Link to='/home'><p class="txt-size-3 t-white50 font-light hover left-margin-3">Inicio</p></Link>
        <Link to='/container'><p class="txt-size-3 t-white50 font-light hover left-margin-3">Documentación</p></Link>
        <Link to='/components'><p class="txt-size-3 t-white50 font-light hover left-margin-3">Componentes</p></Link>
        </div>}
    </div>
  );
};

export default SideNav;
