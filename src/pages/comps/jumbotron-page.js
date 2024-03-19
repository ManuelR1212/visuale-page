import DocHeader from "../../page-components/docheader";
import React from 'react';
import Footer from "../../components/footer";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Jumbotron from "../../components/jumbotron";
import CopyButton from "../../page-components/CopyButton";

export default function JumbotronPage() {

    const codeString1 = `import React from 'react';
    import PropTypes from 'prop-types';
    import '../styles/framework.css';
    
    const Jumbotron = ({ title, description, className }) => {
      return (
        <div className={className}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      );
    };
    
    Jumbotron.propTypes = {
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        className: PropTypes.string,
      };
    
    export default Jumbotron;
     `

    const codeString2 = `<Jumbotron title="Noticia de última hora!" description="Un simio fue visto a las afueras de un zoologico tocando una serenata."
        className="b-red100 border-s1 bd-red200" />

<Jumbotron title="¡Prueba nuestro nuevo maquillaje!" description="Te quita mas de veinte años de encima, ¡vísitanos!"
        className="b-blue100 border-s1 bd-blue200 top-margin-8 center-txt" /> `



    return (
        <>
            <DocHeader />

            <div class="b-red500 top-margin-0">
                <h1 class="display-3 smt-display-5 tab-display-4 left-padding-3 container-1 top-margin-0 top-padding-2 t-white50">Componentes</h1>
                <p class="container-1 left-padding-6 top-margin-0 bottom-padding-5 t-white50 smt-txt-size-2sm tab-txt-size-4sm">Nuestros componentes completamente modificables!</p>
            </div>




            <div class="container-3 smt-container-1 tab-container-3">
                <h1 class="display-1 smt-display-5 tab-display-2 center-txt bottom-margin-3 container-3 smt-container-1">Jumbotron</h1>
                <p class="container-3 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Es un componente versátil y llamativo que se utiliza para resaltar contenido importante.
                    Funciona como una especie de “unidad heroica” en la página, atrayendo la atención del usuario hacia mensajes clave o información destacada. Este elemento, permite crear títulos impactantes y presentar contenido de manera prominente.
                    Puede extenderse opcionalmente a lo largo de toda la ventana gráfica, ocupando el ancho completo, o bien, ajustarse al ancho de un contenedor específico.</p>
            </div>

            <section class="container-3 smt-container-1 tab-container-2">
                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Uso del Jumbotron</h1>
                <div class="container-2 smt-container-1 card-1 tab-container-1">

                    <p class="container-1 smt-container-1 top-margin-9 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">El Jumbotron de Visual E, cuenta tres props, que te ayudaran a diseñar cuantos de estos componentes desees.
                        Crea Jumnbotrons de la manera que más te guste. Sus tres props permiten modificar el contenido del Jumbotron, su título resaltado y por último sus estilos completamente modificables.</p>

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

                    <p class="container-1 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">El Jumbotron debe ser importado en tu archivo JSX. Para utiliarlo, primeramente definiendo su título ubicado en el prop <b>description</b>, seguido de eso, puedes modificar el contenido del Jumbotron dentro del prop <b>content</b>,
                        por último, añade todos los estilos de Visual E que quieras usando el prop <b>className</b>.</p>


                    <div className='cont-scroll-2 container-2 txt-size-4 tab-txt-size-2 smt-txt-size-1'>
                    <CopyButton text={codeString2} />
                        <SyntaxHighlighter language="js" style={atomOneDark} wrapLongLines={true}>
                            {codeString2}
                        </SyntaxHighlighter>
                    </div>

                    <Jumbotron title="Noticia de última hora!" description="Un simio fue visto a las afueras de un zoologico tocando una serenata."
                        className="b-red100 border-s1 bd-red200 smt-txt-size-2sm tab-txt-size-5sm top-padding-4" />


                    <Jumbotron title="¡Maquillaje" description="Te quita mas de veinte años de encima, ¡vísitanos!"
                        className="b-blue100 border-s1 bd-blue200 top-margin-8 center-txt smt-txt-size-2sm tab-txt-size-5sm top-padding-4" />
                </div>



            </section>





            <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js"></script>
            <script>hljs.highlightAll();</script>

            <Footer />
        </>

    )
}