import DocHeader from "../../page-components/docheader";
import React, { useState } from 'react';
import Footer from "../../components/footer";
import Accordion from "../../components/accordion";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Components() {

  const codeString1 = `const Accordion = ({ title, content, className, classNamebtn}) => {
    const [isOpen, setIsOpen] = useState(false); //Open and close function | Función para abrir y cerrar
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return ( // Return title and content | Retornar título y contenido
      <div className={className}>
        <button className={"accordion__button $ {isOpen ? 'open' : ''} $ {classNamebtn}"} onClick={toggleAccordion} >
          {title}
        </button>
        {isOpen && <div className="accordion__content">{content}</div>}
      </div>
    );
  };
  
  Accordion.propTypes = {
    content: PropTypes.string.isRequired,
    tittle: PropTypes.string.isRequired,
    className: PropTypes.string,
  };
  
  export default Accordion;`

  const codeString2 = `<div className='cont-scroll-2 container-2 txt-size-4 tab-txt-size-2 smt-txt-size-1'>
  <SyntaxHighlighter language="js" style={atomOneDark} wrapLongLines={true}>
    {codeString1}
  </SyntaxHighlighter>
</div>`

  return (
    <>
      <DocHeader />

      <div class="b-red500 top-margin-0">
        <h1 class="display-3 smt-display-5 tab-display-4 left-padding-3 container-1 top-margin-0 top-padding-2 t-white50">Componentes</h1>
        <p class="container-1 left-padding-6 top-margin-0 bottom-padding-5 t-white50 smt-txt-size-2sm tab-txt-size-4sm">Nuestros componentes completamente modificables!</p>
      </div>


      <div class="container-3 smt-container-1 tab-container-3">
        <h1 class="display-1 smt-display-5 tab-display-2 center-txt bottom-margin-3 container-3 smt-container-1">Accordion</h1>
        <p class="container-3 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1">El acordeón es un elemento de interfaz de usuario utilizado para presentar una lista de elementos de manera compacta. Consiste en una lista vertical de encabezados que se expanden y contraen cuando se hace clic en ellos.
          Este tipo de componente es útil porque permite a los usuarios escanear rápidamente una lista y expandir solo los elementos relevantes.</p>
      </div>

      <section class="container-3 smt-container-1 tab-container-2">
        <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Ejemplo de uso</h1>
        <div class="container-2 smt-container-1 card-1 b-white50 tab-container-1">


          <p class="container-1 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1">La composición de un componente Accordion es sencilla. El mismo, cuenta con una función para abrir y cerrar,
            que se complementa con clases CSS para tener una funcionalidad efectiva. Por otro lado, retorna dos parámetros muy importantes <b>tittle</b> y <b>content</b> los cuales almacenarán el título del acordeón y su contenido respectivamente.</p>


          <div className='cont-scroll-2 container-2 txt-size-4 tab-txt-size-2 smt-txt-size-1'>
            <SyntaxHighlighter language="js" style={atomOneDark} wrapLongLines={true}>
              {codeString1}
            </SyntaxHighlighter>
          </div>

          <p class="container-1 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1">Para utilizar el componente dentro de tu proyecto React, es importante que importes el componente. Utilizando <b>import Accordion from "ruta del componente"</b> el código tendrá acceso al componente y sus funciones.
            Puedes llamar a sus propiedades de la siguiente manera en tu archivo jsx:</p>

          <div className='cont-scroll-2 container-2 txt-size-4 tab-txt-size-2 smt-txt-size-1'>
            <SyntaxHighlighter language="js" style={atomOneDark} wrapLongLines={true}>
              {codeString2}
            </SyntaxHighlighter>
          </div>

          <p class="container-1 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1">Puedes usar tantos acordeones como quieras en tu código, también puedes usar varios acordeones dentro de si mismos, de ahí su nombre.
            El estilo de cada acordeón es individual, por lo que no pierdas tiempo y deja volar tu imaginación. Recuerda, debes usar el parameto <b>className</b> para modificar las medidas del acordeón, <b>classNamebtn</b> para los estilos del botón y por
            último, <b>classNamectn</b> para el diseño del interior.</p>

          <div>
            <Accordion className="accordion width-4 container-3" classNamebtn="b-blue500 round-3 t-white50" title="¡Da click aquí para abrir y cerrar el acordeón!" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" classNamectn="b-blue200 center-txt" />
          </div>

        </div>


      </section>




      <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js"></script>
      <script>hljs.highlightAll();</script>

      <Footer />
    </>

  )
}