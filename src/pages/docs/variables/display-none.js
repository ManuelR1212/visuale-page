import React, { useEffect } from 'react';
import DocHeader from '../../../page-components/docheader';
import CopyButton from "../../../page-components/CopyButton";
import Footer from '../../../components/footer';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function DisplayNone() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            window.hljs.highlightAll();
        };
    }, []);

    const codeString2 = `<div class="container-3 card-1 d-flex b-red200 col-3 grid-u smt-col-3 tab-col-3 round-8 smt-txt-size-1 tab-txt-size-5sm">

    <div>
        <h2 class="card-1 b-red400 round-8 smt-txt-size-1sm tab-txt-size-1sm top-padding-3 bottom-padding-3 left-padding-3 right-padding-3">Display None</h2>
    </div>

    <div>
        <h2 class="card-1 b-red400 round-8 smt-txt-size-1sm tab-txt-size-1sm top-padding-3 bottom-padding-3 left-padding-3 right-padding-3 d-none">Display None</h2>
    </div>

    <div>
        <h2 class="card-1 b-red400 round-8 smt-txt-size-1sm tab-txt-size-1sm top-padding-3 bottom-padding-3 left-padding-3 right-padding-3 ">Display None</h2>
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
                <h1 class="display-1 smt-display-5 tab-display-2 center-txt bottom-margin-3 container-3 smt-container-1">Display None</h1>
                <p class="container-3 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Nuestro Display None permite ocultar
                 completamente un elemento en una página web. Cuando aplicas <b>d-none</b> a un elemento, este desaparece por completo de la vista del usuario y no ocupa espacio en el diseño. En otras palabras, el elemento se excluye del flujo normal del documento y no se renderiza en la pantalla. A diferencia de visibility: hidden, que simplemente oculta el elemento pero mantiene su espacio reservado, 
                display: none elimina completamente la presencia del elemento.</p>

                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Ejemplo de uso</h1>

                <div class="container-2 smt-container-1 card-1 tab-container-1">
                    <p class="container-3 smt-container-1 tab-container-2 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm justify-txt"> El d-none de Visual E puede ser útil 
                    para ocultar contenido dinámicamente, como menús desplegables o elementos que no deben mostrarse en ciertas condiciones. Sin embargo, ten en cuenta que al utilizar <b>d-none</b>, también afectas a los elementos descendientes, ya que si un elemento padre tiene esta propiedad, 
                    todos sus hijos también quedan desactivados.</p>

                    <div className='cont-scroll-2 container-2 tab-txt-size-2 smt-txt-size-1'>
                    <CopyButton text={codeString2} />
                        <SyntaxHighlighter language="html" style={docco} wrapLongLines={true}>
                            {codeString2}
                        </SyntaxHighlighter>
                    </div>

                    <p class="container-3 smt-container-1 tab-container-2 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm justify-txt">En este ejemplo, como se pudo apreciar en el snippet, hay tres elementos div, 
                    sin embargo, uno de ellos tiene la propiedad display none, la cual lo mantiene oculto.</p>

                    <div class="container-3 card-1 d-flex b-red200 col-3 grid-u smt-col-3 tab-col-3 round-8 smt-txt-size-1 tab-txt-size-5sm">

                        <div>
                            <h2 class="card-1 b-red400 round-8 smt-txt-size-1sm tab-txt-size-1sm top-padding-3 bottom-padding-3 left-padding-3 right-padding-3">Display None</h2>
                        </div>

                        <div>
                            <h2 class="card-1 b-red400 round-8 smt-txt-size-1sm tab-txt-size-1sm top-padding-3 bottom-padding-3 left-padding-3 right-padding-3 d-none">Display None</h2>
                        </div>

                        <div>
                            <h2 class="card-1 b-red400 round-8 smt-txt-size-1sm tab-txt-size-1sm top-padding-3 bottom-padding-3 left-padding-3 right-padding-3 ">Display None</h2>
                        </div>

                    </div>
                </div>

            </div>

            <Footer />
        </>

    )
}