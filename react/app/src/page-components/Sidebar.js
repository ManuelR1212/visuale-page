import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = ({className}) => {

  return (
    <div className={`sidebar ${className}`}>
        {<div class='sidebar-scrollbox'>
          <h1 class="txt-size-5 t-white50 font-normal bottom-margin-7 left-margin-7">Elementos</h1>

          <h2 class="txt-size-5 t-white50 font-normal bottom-margin-3">Escenciales</h2>
          <p class="txt-size-3 t-white50 font-light hover left-margin-3">Variables CSS</p>
          <p class="txt-size-3 t-white50 font-light hover left-margin-3">Display Flex</p>
          <p class="txt-size-3 t-white50 font-light hover left-margin-3">Diseño General</p>
          
          <h2 class="txt-size-5 t-white50 font-normal bottom-margin-3 top-margin-7">Capas</h2>
          <p class="txt-size-3 t-white50 font-light hover left-margin-3">Height</p>
          <p class="txt-size-3 t-white50 font-light hover left-margin-3">Width</p>
          <Link to='/container'><p class="txt-size-3 t-white50 font-light hover left-margin-3">Container</p></Link>
          <Link to='/grids'><p class="txt-size-3 t-white50 font-light hover left-margin-3">Grid</p></Link>
          <p class="txt-size-3 t-white50 font-light hover left-margin-3">Column</p>
          <p class="txt-size-3 t-white50 font-light hover left-margin-3">Span</p>

          <h2 class="txt-size-5 t-white50 font-normal bottom-margin-3 top-margin-7">Contenido</h2>
          <p class="txt-size-3 t-white50 font-light hover left-margin-3">Tipography</p>
          <p class="txt-size-3 t-white50 font-light hover left-margin-3">Tables</p>

          <h2 class="txt-size-5 t-white50 font-normal bottom-margin-3 top-margin-7">Componentes</h2>
          <p class="txt-size-3 t-white50 font-light hover left-margin-3">Navbar</p>
          <p class="txt-size-3 t-white50 font-light hover left-margin-3">Sidebar</p>
          <p class="txt-size-3 t-white50 font-light hover left-margin-3">Button</p>
          <p class="txt-size-3 t-white50 font-light hover left-margin-3">Form</p>

          <h2 class="txt-size-5 t-white50 font-normal bottom-margin-3 top-margin-7">Simplifiers</h2>
          <p class="txt-size-3 t-white50 font-light hover left-margin-3">Border</p>
          <p class="txt-size-3 t-white50 font-light hover left-margin-3">Radius</p>
          <p class="txt-size-3 t-white50 font-light hover left-margin-3">Shadow</p>
          <p class="txt-size-3 t-white50 font-light hover left-margin-3">Color</p>
          <p class="txt-size-3 t-white50 font-light hover left-margin-3">Background</p>
          <p class="txt-size-3 t-white50 font-light hover left-margin-3">Margin</p>
          <p class="txt-size-3 t-white50 font-light hover left-margin-3">Padding</p>

        </div>}
    </div>
  );
};

export default Sidebar;
