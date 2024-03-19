import { Link } from 'react-router-dom';
import '../styles/framework.css';

const Sidebar = ({className}) => {

  return (
    <div className={`sidebar ${className} b-black50`}>
        {<div class='sidebar-scrollbox '>
          <h1 class="txt-size-5 t-white50 font-normal bottom-margin-7 left-margin-7 ">Elementos</h1>

          <h2 class="txt-size-5 t-white50 font-normal bottom-margin-3">Escenciales</h2>
          <Link to="/variables"><li class="txt-size-3 t-white50 font-light hover left-margin-3">Variables de color</li></Link>
          <Link to="/displayblock"><li class="txt-size-3 t-white50 font-light hover left-margin-3">Display Block</li></Link>
          <Link to="/displayflex"><li class="txt-size-3 t-white50 font-light hover left-margin-3">Display Flex</li></Link>
          <Link to="/displaynone"><li class="txt-size-3 t-white50 font-light hover left-margin-3">Display None</li></Link>
          
          <h2 class="txt-size-5 t-white50 font-normal bottom-margin-3 top-margin-7">Capas</h2>
          <Link to='/card'><li class="txt-size-3 t-white50 font-light hover left-margin-3">Card</li></Link>
          <Link to='/col-ro'><li class="txt-size-3 t-white50 font-light hover left-margin-3">Column and rows</li></Link>
          <Link to='/container'><li class="txt-size-3 t-white50 font-light hover left-margin-3">Container</li></Link>
          <Link to='/grids'><li class="txt-size-3 t-white50 font-light hover left-margin-3">Grid</li></Link>
          <Link to='/height'><li class="txt-size-3 t-white50 font-light hover left-margin-3">Height</li></Link>
          <Link to='/width'><li class="txt-size-3 t-white50 font-light hover left-margin-3">Width</li></Link>

          <h2 class="txt-size-5 t-white50 font-normal bottom-margin-3 top-margin-7">Contenido</h2>
          <Link to='/text'><li class="txt-size-3 t-white50 font-light hover left-margin-3">Typography</li></Link>
          <Link to='/tables'><li class="txt-size-3 t-white50 font-light hover left-margin-3">Tables</li></Link>

          <h2 class="txt-size-5 t-white50 font-normal bottom-margin-3 top-margin-7">Componentes</h2>
          <Link to='/components'><li class="txt-size-3 t-white50 font-light hover left-margin-3">Accordion</li></Link>
          <Link to='/badge'><li class="txt-size-3 t-white50 font-light hover left-margin-3">Badge</li></Link>
          <Link to='/breadcrumb'><li class="txt-size-3 t-white50 font-light hover left-margin-3">Breadcrumb</li></Link>
          <Link to='/button'><li class="txt-size-3 t-white50 font-light hover left-margin-3">Button</li></Link>
          <Link to='/footer'><li class="txt-size-3 t-white50 font-light hover left-margin-3">Footer</li></Link>
          <Link to='/jumbotron'><li class="txt-size-3 t-white50 font-light hover left-margin-3">Jumbotron</li></Link>
          <Link to='/modal'><li class="txt-size-3 t-white50 font-light hover left-margin-3">Modal</li></Link>
          <Link to='/navbar'><li class="txt-size-3 t-white50 font-light hover left-margin-3">Navbar</li></Link>
          <Link to='/searchbar'><li class="txt-size-3 t-white50 font-light hover left-margin-3">Searchbar</li></Link>
          <Link to='/sidebar'><li class="txt-size-3 t-white50 font-light hover left-margin-3">Sidebar</li></Link>
          <Link to='/slider'><li class="txt-size-3 t-white50 font-light hover left-margin-3">Slider</li></Link>
          

          <h2 class="txt-size-5 t-white50 font-normal bottom-margin-3 top-margin-7">Simplifiers</h2>
          <Link to="/border"><li class="txt-size-3 t-white50 font-light hover left-margin-3">Border</li></Link>
          <Link to="/radius"><li class="txt-size-3 t-white50 font-light hover left-margin-3">Radius</li></Link>
          <Link to="/shadow"><li class="txt-size-3 t-white50 font-light hover left-margin-3">Shadow</li></Link>
          <Link to="/textcolor"><li class="txt-size-3 t-white50 font-light hover left-margin-3">Text Color</li></Link>
          <Link to="/margin"><li class="txt-size-3 t-white50 font-light hover left-margin-3">Margin</li></Link>
          <Link to="/padding"><li class="txt-size-3 t-white50 font-light hover left-margin-3">Padding</li></Link>

        </div>}
    </div>
  );
};

export default Sidebar;
