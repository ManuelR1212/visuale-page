import { Link } from 'react-router-dom';
import '../styles/framework.css';

const Sidebar = ({className}) => {

  return (
    <div className={`sidebar ${className}`}>
        {<div class='sidebar-scrollbox'>
          <h1 class="txt-size-5 t-white50 font-normal bottom-margin-7 left-margin-7">Elementos</h1>

          <h2 class="txt-size-5 t-white50 font-normal bottom-margin-3">Escenciales</h2>
          <li class="txt-size-3 t-white50 font-light hover left-margin-3">Variables CSS</li>
          <li class="txt-size-3 t-white50 font-light hover left-margin-3">Display Flex</li>
          <li class="txt-size-3 t-white50 font-light hover left-margin-3">Diseño General</li>
          
          <h2 class="txt-size-5 t-white50 font-normal bottom-margin-3 top-margin-7">Capas</h2>
          <Link to='/height'><li class="txt-size-3 t-white50 font-light hover left-margin-3">Height</li></Link>
          <Link to='/width'><li class="txt-size-3 t-white50 font-light hover left-margin-3">Width</li></Link>
          <Link to='/container'><li class="txt-size-3 t-white50 font-light hover left-margin-3">Container</li></Link>
          <Link to='/card'><li class="txt-size-3 t-white50 font-light hover left-margin-3">Card</li></Link>
          <Link to='/grids'><li class="txt-size-3 t-white50 font-light hover left-margin-3">Grid</li></Link>
          <Link to='/col-ro'><li class="txt-size-3 t-white50 font-light hover left-margin-3">Column and rows</li></Link>

          <h2 class="txt-size-5 t-white50 font-normal bottom-margin-3 top-margin-7">Contenido</h2>
          <li class="txt-size-3 t-white50 font-light hover left-margin-3">Tipography</li>
          <li class="txt-size-3 t-white50 font-light hover left-margin-3">Tables</li>

          <h2 class="txt-size-5 t-white50 font-normal bottom-margin-3 top-margin-7">Componentes</h2>
          <li class="txt-size-3 t-white50 font-light hover left-margin-3">Navbar</li>
          <li class="txt-size-3 t-white50 font-light hover left-margin-3">Sidebar</li>
          <li class="txt-size-3 t-white50 font-light hover left-margin-3">Button</li>
          <li class="txt-size-3 t-white50 font-light hover left-margin-3">Form</li>

          <h2 class="txt-size-5 t-white50 font-normal bottom-margin-3 top-margin-7">Simplifiers</h2>
          <li class="txt-size-3 t-white50 font-light hover left-margin-3">Border</li>
          <li class="txt-size-3 t-white50 font-light hover left-margin-3">Radius</li>
          <li class="txt-size-3 t-white50 font-light hover left-margin-3">Shadow</li>
          <li class="txt-size-3 t-white50 font-light hover left-margin-3">Color</li>
          <li class="txt-size-3 t-white50 font-light hover left-margin-3">Background</li>
          <li class="txt-size-3 t-white50 font-light hover left-margin-3">Margin</li>
          <li class="txt-size-3 t-white50 font-light hover left-margin-3">Padding</li>

        </div>}
    </div>
  );
};

export default Sidebar;
