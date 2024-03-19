import DocHeader from "../../page-components/docheader";
import React from 'react';
import Footer from "../../components/footer";
import SyntaxHighlighter from 'react-syntax-highlighter';
import CopyButton from "../../page-components/CopyButton";
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function FooterPage() {

    const codeString1 = `import React from 'react';
    import '../styles/framework.css';
    
    const Footer = () => {
      return (
    <>
        <footer className="footer b-gray400">
    
        <div className='smt-d-none pos-absolute'>
        <h3 className='left-txt top-margin-5 tab-txt-size-5 smt-txt-size-4sm'>Visual E</h3>
        <p className='left-txt tab-txt-size-1sm smt-txt-size-1sm'>Diseñado por Manuel Rodríguez, <br/> para su uso y mejoramiento gratuito.</p>
        </div>
    
          <div className="footer-content">
            <p className='tab-txt-size-2 smt-txt-size-1sm'>© 2024 Visual E. Todos los derechos reservados</p>
            <ul className="footer-links">
              <li><a href="https://github.com/visual-e-ve/Visual-E-Framework" className='t-white50 tab-txt-size-2 smt-txt-size-1sm'>Github</a></li>
              <li><a href="https://www.npmjs.com/package/visual-e" className='t-white50 tab-txt-size-2 smt-txt-size-1sm'>NPM</a></li>
              <li><a href="/contact" className='t-white50 tab-txt-size-2 smt-txt-size-1sm'>Gmail</a></li>
            </ul>
          </div>
        </footer>
    
    </>
      );
    };
    
    export default Footer;`

    const codeString2 = `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <Footer />
</body>`



    return (
        <>
            <DocHeader />

            <div class="b-red500 top-margin-0">
                <h1 class="display-3 smt-display-5 tab-display-4 left-padding-3 container-1 top-margin-0 top-padding-2 t-white50">Componentes</h1>
                <p class="container-1 left-padding-6 top-margin-0 bottom-padding-5 t-white50 smt-txt-size-2sm tab-txt-size-4sm">Nuestros componentes completamente modificables!</p>
            </div>




            <div class="container-3 smt-container-1 tab-container-3">
                <h1 class="display-1 smt-display-5 tab-display-2 center-txt bottom-margin-3 container-3 smt-container-1">Footer</h1>
                <p class="container-3 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">En Visual E, el footer o pie de página, como su nombre lo indica, es aquel espacio inferior de la página web en donde se almacenará información relevante sobre la misma; como puede ser derechos de autor,
                    enlaces o incluso una breve descripción sobre el sitio web de una forma breve y concisa.</p>
            </div>

            <section class="container-3 smt-container-1 tab-container-2">
                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Uso del Footer</h1>
                <div class="container-2 smt-container-1 card-1 tab-container-1">

                    <p class="container-1 smt-container-1 top-margin-9 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">El footer al ser un componente estático y de uso continuo, debe adoptar propiedades y elementos dentro del archivo js del componente. Básicamente, toda la información debe ser plasmada de forma única, mostrando la misma en todas las rutas de la página web. 
                    Sin embargo,podrás usar los estilos de Visual E a tus necesidades.
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

                    <p class="container-1 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Para agregar un footer dentro de tu proyecto, debes importar el componente con el mismo nombre:.</p>


                    <div className='cont-scroll-2 container-2 txt-size-4 tab-txt-size-2 smt-txt-size-1'>
                    <CopyButton text={codeString2} />
                        <SyntaxHighlighter language="js" style={atomOneDark} wrapLongLines={true}>
                            {codeString2}
                        </SyntaxHighlighter>
                    </div>

                    <p class="container-1 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">¿Qué mejor resultado de este ejemplo que nuestro propio footer? ¡Échale un ojo!</p>
                </div>

            </section>





            <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js"></script>
            <script>hljs.highlightAll();</script>

            <Footer />
        </>

    )
}