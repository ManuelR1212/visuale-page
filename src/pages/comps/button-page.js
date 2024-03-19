import DocHeader from "../../page-components/docheader";
import React from 'react';
import Footer from "../../components/footer";
import ButtonComp from "../../components/button";
import CopyButton from "../../page-components/CopyButton";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Button() {

    const codeString1 = `import React from 'react';
    import PropTypes from 'prop-types';
    
    const Button = ({ btncontent, onClick, className }) => {
      return (
        <button className={className} onClick={onClick}>
          {btncontent}
        </button>
      );
    };
    
    Button.propTypes = {
      btncontent: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      className: PropTypes.string,
    };
    
    export default Button;`

    const codeString2 = `<ButtonComp className={"btn-click b-blue300 border-s1 bd-black50 t-red500"} btncontent={"Botón"}/>

<ButtonComp className={"btn-click b-gray50 border-none round-full bd-black50 t-black50"} btncontent={"Botón"}/>

<ButtonComp className={"btn-click b-none border-s1 bd-red500 round-full t-black50"} btncontent={"Botón"}/> />`



    return (
        <>
            <DocHeader />

            <div class="b-red500 top-margin-0">
                <h1 class="display-3 smt-display-5 tab-display-4 left-padding-3 container-1 top-margin-0 top-padding-2 t-white50">Componentes</h1>
                <p class="container-1 left-padding-6 top-margin-0 bottom-padding-5 t-white50 smt-txt-size-2sm tab-txt-size-4sm">Nuestros componentes completamente modificables!</p>
            </div>




            <div class="container-3 smt-container-1 tab-container-3">
                <h1 class="display-1 smt-display-5 tab-display-2 center-txt bottom-margin-3 container-3 smt-container-1">Button</h1>
                <p class="container-3 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Visual E proporciona  los button (botón), los cuales son elementos utilizados para crear botones clicables en la página web.
                    Los botones se utilizan comúnmente en formularios y también pueden ser utilizados en otras partes de la página donde se requiera una acción interactiva.</p>
            </div>

            <section class="container-3 smt-container-1 tab-container-2">
                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Uso de Button</h1>
                <div class="container-2 smt-container-1 card-1 tab-container-1">

                    <p class="container-1 smt-container-1 top-margin-9 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Nuestros Botones cuentan con una estructura simple, haciendo uso de las props para poder usar de forma libre el componente dentro de tu archivo principal de forma individual, es decir,
                        puedes utilizar el mismo componente con propiedades diferentes cuantas veces quieras.</p>

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

                    <p class="container-1 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Por otro lado, de una forma similar que el resto
                        de nuestros componentes. Los botones deben ser importados dentro del archivo JSX que estés diseñando. Al momento de llamar al componente button, simplemente ingresa dentro de <b>btncontent</b> la palabra que quieras dentro del botón, mientras que, el prop <b>className</b> se encargará de darle los estilos que más te gusten. A su vez, los botones incluyen un prop llamado <b>onClick</b> que se encarga de asignar una función al botón si es que el usuario lo desea. De ser así,
                        deberá ingresar al archivo js del botón en la carpeta components para construir la propiedad.</p>


                    <div className='cont-scroll-2 container-2 txt-size-4 tab-txt-size-2 smt-txt-size-1'>
                        <CopyButton text={codeString2} />
                        <SyntaxHighlighter language="js" style={atomOneDark} wrapLongLines={true}>
                            {codeString2}
                        </SyntaxHighlighter>
                    </div>

                    <div className="grid-u col-3  sh-col-3 tab-col-3 smt-col-3 container-4 tab-container-1 smt-container-1">

                        <ButtonComp className={"btn-click b-blue300 border-s1 bd-black50 t-red500"} btncontent={"Botón"} />
                        <ButtonComp className={"btn-click b-gray50 border-none round-full bd-black50 t-black50"} btncontent={"Botón"} />
                        <ButtonComp className={"btn-click b-none border-s1 bd-red500 round-full t-black50"} btncontent={"Botón"} />

                    </div>
                </div>

            </section>





            <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js"></script>
            <script>hljs.highlightAll();</script>

            <Footer />
        </>

    )
}