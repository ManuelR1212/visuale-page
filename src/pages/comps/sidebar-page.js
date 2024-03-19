import DocHeader from "../../page-components/docheader";
import React from 'react';
import Footer from "../../components/footer";
import CopyButton from "../../page-components/CopyButton";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function SidebarPage() {


    const codeString1 = `import '../styles/framework.css';

    const Sidebar = ({className}) => {
    
      return (
        <div className={"sidebar $ {className}"}>
    
           {Tu Contenido Aqui}
    
        </div>
      );
    };
    
    export default Sidebar;`

    const codeString2 = `import { Link } from 'react-router-dom';
import '../styles/framework.css';
    
    const Sidebar = ({className}) => {
    
      return (
<div className={"sidebar $ {className}"}>
{<div class='sidebar-scrollbox'>
<h1 class="txt-size-5 t-white50 font-normal bottom-margin-7 left-margin-7">Elementos</h1>
    
<h2 class="txt-size-5 t-white50 font-normal bottom-margin-3">Escenciales</h2>
<li class="txt-size-3 t-white50 font-light hover left-margin-3">Variables CSS</li>
<li class="txt-size-3 t-white50 font-light hover left-margin-3">Display Flex</li>
<li class="txt-size-3 t-white50 font-light hover left-margin-3">Diseño General</li>
              
<h2 class="txt-size-5 t-white50 font-normal bottom-margin-3 top-margin-7">Capas</h2>
<Link to='/card'><li class="txt-size-3 t-white50 font-light hover left-margin-3">Card</li></Link>
<Link to='/col-ro'><li class="txt-size-3 t-white50 font-light hover left-margin-3">Column and rows</li></Link>
<Link to='/container'><li class="txt-size-3 t-white50 font-light hover left-margin-3">Container</li></Link>
<Link to='/grids'><li class="txt-size-3 t-white50 font-light hover left-margin-3">Grid</li></Link>
<Link to='/height'><li class="txt-size-3 t-white50 font-light hover left-margin-3">Height</li></Link>
<Link to='/width'><li class="txt-size-3 t-white50 font-light hover left-margin-3">Width</li></Link>
    
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
    `



    return (
        <>
            <DocHeader />

            <div class="b-red500 top-margin-0">
                <h1 class="display-3 smt-display-5 tab-display-4 left-padding-3 container-1 top-margin-0 top-padding-2 t-white50">Componentes</h1>
                <p class="container-1 left-padding-6 top-margin-0 bottom-padding-5 t-white50 smt-txt-size-2sm tab-txt-size-4sm">Nuestros componentes completamente modificables!</p>
            </div>




            <div class="container-3 smt-container-1 tab-container-3">
                <h1 class="display-1 smt-display-5 tab-display-2 center-txt bottom-margin-3 container-3 smt-container-1">Sidebar</h1>
                <p class="container-3 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">El Sidebar de Visual E, se encarga de almacenar información o principalmente enlaces, dentro de sí mismo, de manera que el usuario podrá acceder a distintas rutas de la web de una forma dinámica y bastante sencilla.</p>
            </div>

            <section class="container-3 smt-container-1 tab-container-2">
                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Uso del Sidebar</h1>
                <div class="container-2 smt-container-1 card-1 tab-container-1">

                    <p class="container-1 smt-container-1 top-margin-9 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Nuestro sidebar parece bastante complejo, sin embargo, es bastante sencillo. El mismo cuenta con una función que le permite ocultarse tras un menú hamburguesa que al ser clickeado desplegará por completo el sidebar.
                        Al dar click en cualquier parte de la página fuera del mismo, nuestro sidebar se ocultará como si nada hubiera pasado.
                    </p>

                    <div className='cont-scroll-2 container-2 txt-size-4 tab-txt-size-2 smt-txt-size-1'>
                        <CopyButton text={codeString1} />
                        <SyntaxHighlighter language="js" style={atomOneDark} wrapLongLines={true}>
                            {codeString1}
                        </SyntaxHighlighter>
                    </div>


                </div>


            </section>

            <section class="container-3 smt-container-1 tab-container-2">
                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Ejemplo de uso</h1>

                <div class="container-2 smt-container-1 card-1 tab-container-1">

                    <p class="container-1 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Es importante tener en cuenta que el sidebar es completamente modificable, si se desea que el mismo no se encuentre dentro de un menú hamburguesa, solo accede sus clases de Visual E y desactiva la propiedad <b>sidebar</b>,
                        de esta manera el sidebar estará listo para que lo modifiques como más te guste.</p>

                    <div className='cont-scroll-2 container-2 txt-size-4 tab-txt-size-2 smt-txt-size-1'>
                        <CopyButton text={codeString2} />
                        <SyntaxHighlighter language="js" style={atomOneDark} wrapLongLines={true}>
                            {codeString2}
                        </SyntaxHighlighter>
                    </div>

                    <p class="container-1 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">¿Qué mejor resultado de este ejemplo que nuestro propio sidebar? ¡Échale un ojo!</p>
                </div>

            </section>





            <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js"></script>
            <script>hljs.highlightAll();</script>

            <Footer />
        </>

    )
}