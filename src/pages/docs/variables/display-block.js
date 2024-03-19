import React, { useEffect } from 'react';
import DocHeader from '../../../page-components/docheader';
import Footer from '../../../components/footer';
import SyntaxHighlighter from 'react-syntax-highlighter';
import CopyButton from "../../../page-components/CopyButton";
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function DisplayBlock() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            window.hljs.highlightAll();
        };
    }, []);

    const codeString2 = `<div class="container-3 card-1 d-block b-red200 round-8 smt-txt-size-1 tab-txt-size-5sm">

    <div>
        <h2 class="card-1 b-red400 round-8 right-margin-5 smt-txt-size-1sm tab-txt-size-1sm top-padding-3 bottom-padding-3 left-padding-3 right-padding-3">Display Block</h2>
    </div>

    <div>
        <h2 class="card-1 b-red400 round-8 right-margin-5 smt-txt-size-1sm tab-txt-size-1sm top-padding-3 bottom-padding-3 left-padding-3 right-padding-3">Display Block</h2>
    </div>

    <div>
        <h2 class="card-1 b-red400 round-8 right-margin-5 smt-txt-size-1sm tab-txt-size-1sm top-padding-3 bottom-padding-3 left-padding-3 right-padding-3">Display Block</h2>
    </div>

</div>`

    return (
        <>

            <DocHeader />

            <div class="b-red500 top-margin-0">
                <h1 class="display-3 smt-display-5 tab-display-4 left-padding-3 container-1 top-margin-0 top-padding-2 t-white50">Documentación</h1>
                <p class="container-1 left-padding-6 top-margin-0 bottom-padding-5 t-white50 smt-txt-size-2sm tab-txt-size-4sm">Todo lo que necesitas saber de Visual.E en un solo lugar.</p>
            </div>

            <div class="container-3 smt-container-1 tab-container-3">
                <h1 class="display-1 smt-display-5 tab-display-2 center-txt bottom-margin-3 container-3 smt-container-1">Display Block</h1>
                <p class="container-3 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">El display block de Visual E es un
                    selector que controla el comportamiento y la presentación de los elementos HTML.
                    Su principal función es definir si un elemento debe ser mostrado como un bloque o como un elemento en línea.</p>

                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Ejemplo de uso</h1>

                <div class="container-2 smt-container-1 card-1 tab-container-1">
                    <p class="container-3 smt-container-1 tab-container-2 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm justify-txt"> Cuando aplicas <b>d-block</b> a un elemento,
                        este se comporta como un bloque independiente, ocupando todo el ancho disponible y comenzando en una nueva línea.
                        Los elementos con esta propiedad no comparten espacio horizontal con otros elementos.</p>

                    <div className='cont-scroll-2 container-2 tab-txt-size-2 smt-txt-size-1'>
                    <CopyButton text={codeString2} />
                        <SyntaxHighlighter language="html" style={docco} wrapLongLines={true}>
                            {codeString2}
                        </SyntaxHighlighter>
                    </div>

                    <div class="container-3 card-1 d-block b-red200 round-8 smt-txt-size-1 tab-txt-size-5sm">

                        <div>
                            <h2 class="card-1 b-red400 round-8 right-margin-5 smt-txt-size-1sm tab-txt-size-1sm top-padding-3 bottom-padding-3 left-padding-3 right-padding-3">Display Block</h2>
                        </div>

                        <div>
                            <h2 class="card-1 b-red400 round-8 right-margin-5 smt-txt-size-1sm tab-txt-size-1sm top-padding-3 bottom-padding-3 left-padding-3 right-padding-3">Display Block</h2>
                        </div>

                        <div>
                            <h2 class="card-1 b-red400 round-8 right-margin-5 smt-txt-size-1sm tab-txt-size-1sm top-padding-3 bottom-padding-3 left-padding-3 right-padding-3">Display Block</h2>
                        </div>

                    </div>
                </div>

            </div>

            <Footer />
        </>

    )
}