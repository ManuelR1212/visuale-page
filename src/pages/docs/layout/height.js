import React, { useEffect } from 'react';
import DocHeader from '../../../page-components/docheader';
import Footer from '../../../components/footer';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CopyButton from "../../../page-components/CopyButton";

export default function Height() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            window.hljs.highlightAll();
        };
    }, []);

    const codeString1 = `<div className='card-1 container-4'>
    <div className='b-blue500 height-4'>
        <h1>Hola mundo!</h1>
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
                <h1 class="display-1 smt-display-5 tab-display-2 center-txt bottom-margin-3 container-3 smt-container-1">Height</h1>
                <p class="container-3 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">El Height es un parámetro que puede ser asignado a casi cualquier elemento dentro del código HTML, siempre y cuando de modificar su altura se trate. El mismo, está dividido en distintos tamaños,
                    de manera que puedas escoger el que se adapte mejor a los estilos de tu página web..</p>


                <h1 class="display-5 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Tamaños y medidas</h1>

                <div class="card-1">
                    <p class="container-3 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Los números de los Height van de forma ascendente, mientras mayor sea el número de la etiqueta, mayor será el tamaño de la propiedad Height,
                        como se puede apreciar en la siguiente tabla:</p>
                    <div class="cont-scroll-1">
                        <code>
                            <table class="centered-table container-2 smt-container-1 full-table responsive-table smt-txt-size-2sm td-border-s1 th-border-s2 th-b-gray400 th-border-s1 th-bd-black50">
                                <thead>
                                    <tr className='t-white50'>
                                        <th>Tag</th>
                                        <th>Porcentaje de pantalla</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr >
                                        <td>height-1</td>
                                        <td>10%</td>


                                    </tr>
                                    <tr>
                                        <td>height-2</td>
                                        <td>20%</td>
                                    </tr>
                                    <tr>
                                        <td>height-3</td>
                                        <td>30%</td>
                                    </tr>
                                    <tr>
                                        <td>height-4</td>
                                        <td>40%</td>
                                    </tr>

                                    <tr >
                                        <td>height-5</td>
                                        <td>50%</td>

                                    </tr>
                                    <tr>
                                        <td>height-6</td>
                                        <td>60%</td>
                                    </tr>
                                    <tr>
                                        <td>height-7</td>
                                        <td>70%</td>
                                    </tr>
                                    <tr>
                                        <td>height-8</td>
                                        <td>80%</td>
                                    </tr>

                                    <tr >
                                        <td>height-9</td>
                                        <td>90%</td>

                                    </tr>
                                    <tr>
                                        <td>height-10</td>
                                        <td>100%</td>
                                    </tr>

                                </tbody>

                            </table>
                        </code>
                    </div>
                </div>
            </div>

            <p class="container-3 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Puedes utilizar varias etiquetas en distintos elementos, pero no varias etiquetas en un solo elemento, ya que, el
                código por defecto tomará el tamaño mayor.</p>

            <div className='cont-scroll-2 container-2 tab-txt-size-2 smt-txt-size-1'>
            <CopyButton text={codeString1} />
                <SyntaxHighlighter language="html" style={docco} wrapLongLines={true}>
                    {codeString1}
                </SyntaxHighlighter>
            </div>

            <div class="card-1 container-3">

                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3  container-3 smt-container-1">Responsividad</h1>

                <p class="container-3 smt-container-1 smt-txt-size-2sm top-margin-0 bottom-padding-5 tab-txt-size-5sm justify-txt">Los height pueden ser utilizadas por distintos tamaños de pantalla,
                    por lo que, es necesario que los mismos posean una responsividad adecuada adaptada mediante <b>@mediaquerys</b>,
                    las cuales comprenden múltiples proporciones para distintos tamaños de pantalla.</p>

                <div class="cont-scroll-1">

                    <code>
                        <table class="centered-table container-2 smt-container-1 full-table responsive-table smt-txt-size-2sm td-border-s1 th-border-s2 th-b-gray400 th-border-s1 th-bd-black50">
                            <thead>
                                <tr className='t-white50'>
                                    <th>tag</th>
                                    <th>Descripción</th>
                                    <th>MediaQuery</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr >
                                    <td>md-height-1</td>
                                    <td>Tamaño medio</td>
                                    <td>@media screen and (max-width: 1280px)</td>
                                </tr>
                                <tr>
                                    <td>sh-height-1</td>
                                    <td>Tamaño semi-grande</td>
                                    <td>@media screen and (max-width: 1440px)</td>
                                </tr>
                                <tr>
                                    <td>hg-height-1</td>
                                    <td>Tamaño grande</td>
                                    <td>@media screen and (max-width: 1920px)</td>
                                </tr>
                                <tr>
                                    <td>tab-height-1</td>
                                    <td>Tamaño tabletas</td>
                                    <td>@media screen and (max-width: 992px)</td>
                                </tr>

                                <tr>
                                    <td>smt-height-1</td>
                                    <td>Tamaño smartphones</td>
                                    <td>@media screen and (max-width: 576px)</td>
                                </tr>
                            </tbody>

                        </table>
                    </code>
                </div>
            </div>


            <Footer />
        </>

    )
}