import React, { useEffect } from 'react';
import DocHeader from '../../../page-components/docheader';
import Footer from '../../../components/footer';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CopyButton from "../../../page-components/CopyButton";

export default function Grids() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            window.hljs.highlightAll();
        };
    }, []);

    const codeString1 = `<div class="grid-u">
  <section class="card-1 b-red500>
      <h1>¡Hola Mundo!</h1>
  </section>
</div>`

    return (
        <>

            <DocHeader />

            <div class="b-red500 top-margin-0">
                <h1 class="display-3 smt-display-5 tab-display-4 left-padding-3 container-1 top-margin-0 top-padding-2 t-white50">Documentación</h1>
                <p class="container-1 left-padding-6 top-margin-0 bottom-padding-5 t-white50 smt-txt-size-2sm tab-txt-size-4sm ">Todo lo que necesitas saber de Visual.E en un solo lugar.</p>
            </div>

            <div class="container-3 smt-container-1 tab-container-3">
                <h1 class="display-1 smt-display-5 tab-display-2 center-txt bottom-margin-3 container-3 smt-container-1">Grid</h1>
                <p class="container-3 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">El Grid es un etiqueta sencilla, que se encargar de ordenar todos los elementos de un contenedor, de manera que, si el mismo contiene varios elementos por separado, sean ordenados con una separación coherente entre ellos,
                    agregando estilos funcionales y correctos.</p>

                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Ejemplo de uso</h1>

                <div className='container-2 smt-container-1 card-1 tab-container-1'>

                    <p class="container-3 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">En el siguiente ejemplo, se muestra como una sencilla manera de utilizar el grid. Ya que,
                        únicamente es un tag para heredar propiedades a elementos, el mismo no tiene ningún resultado visual, el resultado será proporcionado al momento de combinarlo con otras etiquetas.</p>

                    <div className='cont-scroll-2 container-2 tab-txt-size-2 smt-txt-size-1'>
                    <CopyButton text={codeString1} />
                        <SyntaxHighlighter language="html" style={docco} wrapLongLines={true}>
                            {codeString1}
                        </SyntaxHighlighter>
                    </div>

                </div>

                <p class="container-3 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Los Grid reciben un <b>display='grid'</b> el cual se encarga de ordenar los elementos,
                    por otro lado, se usa un <b>gap</b> de 30px para una separación coherente entre los elementos, sin embargo, puede ser modificada a gusto. Por ultimo, se tiene un <b>margin</b> de
                    20px, para dar un espaciado exterior completamente modificable.</p>
            </div>

            <Footer />
        </>

    )
}