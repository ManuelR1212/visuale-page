import DocHeader from "../../page-components/docheader";
import React from 'react';
import Footer from "../../components/footer";
import CopyButton from "../../page-components/CopyButton";
import BadgeComp from "../../components/badge";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Badge() {

    const codeString1 = `import React from 'react';
    import PropTypes from 'prop-types';
    
    const BadgeComp = ({ content, className }) => {
      return (
        <div>
          <span className={className}>{content}</span>
        </div>
      );
    };
    
    BadgeComp.propTypes = {
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    };
    
    export default BadgeComp;`

    const codeString2 = `<BadgeComp className={"b-red200 round-3 txt-size-6 tab-txt-size-2sm smt-txt-size-1sm left-padding-3 right-padding-3 "} content="Badge" />

<BadgeComp className={"b-red300 border-s1 bd-blue500 round-3 txt-size-6 tab-txt-size-2sm smt-txt-size-1sm left-padding-3 right-padding-3 "} content="Badge" /> `



    return (
        <>
            <DocHeader />

            <div class="b-red500 top-margin-0">
                <h1 class="display-3 smt-display-5 tab-display-4 left-padding-3 container-1 top-margin-0 top-padding-2 t-white50">Componentes</h1>
                <p class="container-1 left-padding-6 top-margin-0 bottom-padding-5 t-white50 smt-txt-size-2sm tab-txt-size-4sm">Nuestros componentes completamente modificables!</p>
            </div>




            <div class="container-3 smt-container-1 tab-container-3">
                <h1 class="display-1 smt-display-5 tab-display-2 center-txt bottom-margin-3 container-3 smt-container-1">Badge</h1>
                <p class="container-3 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Visual E presenta los Badge, los cuales son elementos utilizados para agregar información adicional a un elemento o contenido en una página web. Los badges son comúnmente utilizados para resaltar o indicar algo importante, como una notificación, un estado o una categoría.
                    Importa este componente dentro de tu código JSX y crea distintos tipos a tus necesidades.</p>
            </div>

            <section class="container-3 smt-container-1 tab-container-2">
                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Uso de Badges</h1>
                <div class="container-2 smt-container-1 card-1 tab-container-1">

                    <p class="container-1 smt-container-1 top-margin-9 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Nuestros Badges cuentan con una estructura simple,
                        haciendo uso de las props para poder usar de forma libre el componente dentro de tu archivo principal de forma individual,
                        es decir, puedes utilizar el mismo componente con propiedades diferentes cuantas veces quieras.</p>

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

                    <p class="container-1 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Por otro lado, de una forma similar que el resto de nuestros componentes. Los badges deben ser importados dentro del archivo JSX que estés diseñando. Al momento de llamar al componente badge, simplemente ingresa dentro de <b>content=</b>
                        la palabra que quieras dentro del badge, mientras que, el prop <b>className=" "</b> se encargará de darle los estilos que más te gusten.</p>


                    <div className='cont-scroll-2 container-2 txt-size-4 tab-txt-size-2 smt-txt-size-1'>
                        <CopyButton text={codeString2} />
                        <SyntaxHighlighter language="js" style={atomOneDark} wrapLongLines={true}>
                            {codeString2}
                        </SyntaxHighlighter>
                    </div>

                    <div className="grid-u col-8  sh-col-4 tab-col-5 smt-col-3 container-4 tab-container-1 smt-container-1">
                        <BadgeComp className={"b-red200 round-3 txt-size-6 tab-txt-size-2sm smt-txt-size-1sm left-padding-3 right-padding-3 "} content="Badge" />
                        <BadgeComp className={"b-red300 border-s1 bd-blue500 round-3 txt-size-6 tab-txt-size-2sm smt-txt-size-1sm left-padding-3 right-padding-3 "} content="Badge" />
                        <BadgeComp className={"b-none border-s1 bd-blue500 round-3 txt-size-6 tab-txt-size-2sm smt-txt-size-1sm left-padding-3 right-padding-3 "} content="Badge" />
                        <BadgeComp className={"b-none border-s1 bd-blue500 t-blue500 round-3 txt-size-6 tab-txt-size-2sm smt-txt-size-1sm left-padding-3 right-padding-3 "} content="Badge" />

                        <BadgeComp className={"b-blue200 round-full txt-size-6 tab-txt-size-2sm smt-txt-size-1sm left-padding-3 right-padding-3 "} content="Badge" />
                        <BadgeComp className={"b-blue200 border-s1 bd-red500 round-full txt-size-6 tab-txt-size-2sm smt-txt-size-1sm left-padding-3 right-padding-3 "} content="Badge" />
                        <BadgeComp className={"b-none border-s1 bd-red500 round-full txt-size-6 tab-txt-size-2sm smt-txt-size-1sm left-padding-3 right-padding-3 "} content="Badge" />
                        <BadgeComp className={"b-none border-s1 bd-red500 t-blue500 round-full txt-size-6 tab-txt-size-2sm smt-txt-size-1sm left-padding-3 right-padding-3 "} content="Badge" />

                    </div>
                </div>

            </section>





            <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js"></script>
            <script>hljs.highlightAll();</script>

            <Footer />
        </>

    )
}