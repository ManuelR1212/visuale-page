import React, { useEffect } from 'react';
import DocHeader from '../../../page-components/docheader';
import Footer from '../../../components/footer';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CopyButton from "../../../page-components/CopyButton";

export default function Card() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            window.hljs.highlightAll();
        };
    }, []);

    const codeString1 = `<div class="card-1">
    <h2>Soy una card</h2>
      <div class="card-1">
    <h2>Soy una card dentro de otra card</h2>
</div>`

    const codeString2 = `<div class="container-3 card-1 b-red200">
<h2>Soy una card</h2>
  <div class="card-1 b-red400">
<h2>Soy una card dentro de otra card</h2>
</div>`

    return (
        <>

            <DocHeader />

            <div class="b-red500 top-margin-0">
                <h1 class="display-3 smt-display-5 tab-display-4 left-padding-3 container-1 top-margin-0 top-padding-2 t-white50">Documentación</h1>
                <p class="container-1 left-padding-6 top-margin-0 bottom-padding-5 t-white50 smt-txt-size-2sm tab-txt-size-4sm">Todo lo que necesitas saber de Visual.E en un solo lugar.</p>
            </div>

            <div class="container-3 smt-container-1 tab-container-3">
                <h1 class="display-1 smt-display-5 tab-display-2 center-txt bottom-margin-3 container-3 smt-container-1">Card</h1>
                <p class="container-3 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Las cards, permiten al usuario almacenar datos dentro de un contenedor;
                    responsivo y estilizado. Las cards son utilizadas princinpalmente para hacer conjuntos de palabras o incluso secciones completas, las mismas tienen por defecto un color de fondo con el fin de diferenciarlas del resto de la página.
                    Varias cards pueden ser incluidas dentro de una página, de manera que quede la información ordenada y estilizada.</p>

                <div className='cont-scroll-2 container-2 tab-txt-size-2 smt-txt-size-1'>
                <CopyButton text={codeString1} />
                    <SyntaxHighlighter language="html" style={docco} wrapLongLines={true}>
                        {codeString1}
                    </SyntaxHighlighter>
                </div>

                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Ejemplo de uso</h1>

                <div class="container-2 smt-container-1 card-1 tab-container-1">
                    <p class="container-3 smt-container-1 tab-container-2 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm justify-txt">Las cards pueden recibir todo tipo de estilos adicionales a la preferencia del usuario.
                        Inclusive, pueden ser manejadas por un container, tanto dentro como fuera de la misma.</p>

                    <div className='cont-scroll-2 container-2 tab-txt-size-2 smt-txt-size-1'>
                    <CopyButton text={codeString2} />
                        <SyntaxHighlighter language="html" style={docco} wrapLongLines={true}>
                            {codeString2}
                        </SyntaxHighlighter>
                    </div>

                    <div class="container-3 card-1 b-blue200 round-8 smt-txt-size-1 tab-txt-size-5sm">
                        <h2>Soy una card</h2>
                        <div>
                            <h2 class="card-1 b-blue400 round-8">Soy una card dentro de otra card</h2>
                        </div>

                    </div>

                    <p class="container-3 smt-container-1 tab-container-2 top-margin-7 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm justify-txt">En el caso de las cards, las mismas adaptan su tamaño a
                        las distintas medidas de pantalla de los dispositivos. Da igual si son vistos, por tabletas, pantallas grandes o incluso smartphones; la card, siempre tendrá estilos agradables.
                    </p>

                </div>

            </div>

            <Footer />
        </>

    )
}