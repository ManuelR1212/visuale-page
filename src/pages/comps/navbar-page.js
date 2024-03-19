import DocHeader from "../../page-components/docheader";
import React from 'react';
import Footer from "../../components/footer";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CopyButton from "../../page-components/CopyButton";

export default function NavbarPage() {

    const codeString1 = `import React, {useState, useEffect, useRef} from 'react';
    
    const Navbar = () => {
      
        return (
          <>
            <nav className="nav b-gray400 shadow-8">
              {Tu contenido aquí!}
            </div>
      
          </>
        );
      }
      
      export default Navbar;
      `

    const codeString2 = `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <Footer />
</body>
    `



    return (
        <>
            <DocHeader />

            <div class="b-red500 top-margin-0">
                <h1 class="display-3 smt-display-5 tab-display-4 left-padding-3 container-1 top-margin-0 top-padding-2 t-white50">Componentes</h1>
                <p class="container-1 left-padding-6 top-margin-0 bottom-padding-5 t-white50 smt-txt-size-2sm tab-txt-size-4sm">Nuestros componentes completamente modificables!</p>
            </div>




            <div class="container-3 smt-container-1 tab-container-3">
                <h1 class="display-1 smt-display-5 tab-display-2 center-txt bottom-margin-3 container-3 smt-container-1">Navbar</h1>
                <p class="container-3 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">El Navbar de Visual E,
                    es el encargado de almacenar todos los enlaces e información necesaria en la parte superior de la página web. El mismo es una parte fundamental para tus proyectos,
                    un Navbar cómodo, sencillo e intuitivo que puede ser perfectamente combinado con etiquetas de estilos y distintas funciones.</p>
            </div>

            <section class="container-3 smt-container-1 tab-container-2">
                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Uso del Navbar</h1>
                <div class="container-2 smt-container-1 card-1 tab-container-1">

                    <p class="container-1 smt-container-1 top-margin-9 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">
                        Debido a que el Navbar, debería ser un componente fijo, el mismo no cuenta con props para modificar la información de su interior, ya que, normalmente cuenta con enlaces en su interior que son cómodos de manejar directamente desde el archivo.
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

                    <p class="container-1 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Nuestro Navbar está adaptado para tener una responsividad predefinida en dispositivos móviles. El mismo oculta los enlaces contenidos dentro de sí, para ser introducidos dentro de un desplegable. De esta manera,
                        se garantiza una mejor proporción en el espacio teniendo una organización detallada.</p>


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