import React, { useEffect } from 'react';
import DocHeader from '../../../page-components/docheader';
import Footer from '../../../components/footer';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CopyButton from "../../../page-components/CopyButton";

export default function ColRo() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            window.hljs.highlightAll();
        };
    }, []);

    const codeString1 = `<section class="grid-u col-4 tab-col-2 smt-col-1 center-txt display-6 tab-txt-size-5 smt-txt-size-2">
    <div className='card-1 b-blue500'>Columna 1</div>
    <div className='card-1 b-blue500'>Columna 2</div>
    <div className='card-1 b-blue500'>Columna 3</div>
    <div className='card-1 b-blue500'>Columna 4</div>
</section>`

    const codeString2 = `<section class="grid-u col-4 tab-col-2 smt-col-1 center-txt display-6 tab-txt-size-5 smt-txt-size-2 container-3">
    <div className='card-1 b-blue500 span-2 tab-span-2 smt-span-2'>Columna 1</div>
    <div className='card-1 b-blue500'>Columna 2</div>
    <div className='card-1 b-blue500'>Columna 3</div>
    <div className='card-1 b-blue500 span-4 tab-span-2 smt-span-2'>Columna 4</div>
</section>`

    return (
        <>

            <DocHeader />

            <div class="b-red500 top-margin-0">
                <h1 class="display-3 smt-display-5 tab-display-4 left-padding-3 container-1 top-margin-0 top-padding-2 t-white50">Documentación</h1>
                <p class="container-1 left-padding-6 top-margin-0 bottom-padding-5 t-white50 smt-txt-size-2sm tab-txt-size-4sm">Todo lo que necesitas saber de Visual.E en un solo lugar.</p>
            </div>

            <div class="container-3 smt-container-1 tab-container-3">
                <h1 class="display-1 smt-display-5 tab-display-2 center-txt bottom-margin-3 container-3 smt-container-1">Columnas y Filas</h1>
                <p class="container-3 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">En Visual E, adaptamos las columnas y filas para facilitar
                    el trabajo de desarrollo. Las mismas son manejadas y adaptadas para distintos tipos de pantalla. Podrás trabajar la información de manera ordenada y distribuida de la manera que se adapte
                    mejor a tus necesidades. Con la herramienta de <b>col</b> y <b>span</b> no existe el límite entre la imaginación y la realidad.</p>

                <h1 class="display-5 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Cantidad de columnas</h1>

                <div class="card-1">
                    <div class="cont-scroll-1">
                        <code>
                            <table class="centered-table container-2 smt-container-1 full-table responsive-table smt-txt-size-2sm td-border-s1 th-border-s2 th-b-gray400 th-border-s1 th-bd-black50">
                                <thead>
                                    <tr className='t-white50'>
                                        <th>Tag</th>
                                        <th>Número de columnas</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr >
                                        <td>col-1</td>
                                        <td>una columna</td>


                                    </tr>
                                    <tr>
                                        <td>col-2</td>
                                        <td>dos columnas</td>
                                    </tr>
                                    <tr>
                                        <td>col-3</td>
                                        <td>tres columnas</td>
                                    </tr>
                                    <tr>
                                        <td>col-4</td>
                                        <td>cuatro columnas</td>
                                    </tr>

                                    <tr >
                                        <td>col-5</td>
                                        <td>cinco columnas</td>

                                    </tr>
                                    <tr>
                                        <td>col-6</td>
                                        <td>seis columnas</td>
                                    </tr>
                                    <tr>
                                        <td>col-7</td>
                                        <td>siete columnas</td>
                                    </tr>
                                    <tr>
                                        <td>col-8</td>
                                        <td>ocho columnas</td>
                                    </tr>

                                    <tr >
                                        <td>col-9</td>
                                        <td>nueve columnas</td>

                                    </tr>
                                    <tr>
                                        <td>col-10</td>
                                        <td>diez columnas</td>
                                    </tr>
                                    <tr>
                                        <td>col-11</td>
                                        <td>once columnas</td>
                                    </tr>
                                    <tr>
                                        <td>col-12</td>
                                        <td>doce columnas</td>
                                    </tr>
                                </tbody>

                            </table>
                        </code>
                    </div>
                </div>
            </div>


            <p class="container-3 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Sencillamente se debe establecer el número de columnas
                bajo la etiqueta "col" más el número de columnas "4", dando como resultado "col-4" indicando en la étiqueta la cantidad de columnas que debe llevar la propiedad "col". Con esto,
                la págian interpretará el número de columnas, a la espera de la información introducida en las mismas.</p>

            <p class="container-3 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">En Visual E ofrecemos columnas para todo tipo de pantallas. Asegurando
                una responsividad absoluta al momento de utilizarlas. De manera que, si el tamaño de la pantalla del dispositivo se va haciendo pequeño, puedes reducir el número de columnas basandote en las dimensiones
                del dispositivo:</p>

            <div class="card-1 container-3">

                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3  container-3 smt-container-1">Responsividad</h1>

                <p class="container-3 smt-container-1 smt-txt-size-2sm top-margin-0 bottom-padding-5 tab-txt-size-5sm justify-txt">Las columns pueden ser utilizadas por distintos tamaños de pantalla,
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
                                    <td>md-col-1</td>
                                    <td>Tamaño medio</td>
                                    <td>@media screen and (max-width: 1280px)</td>
                                </tr>
                                <tr>
                                    <td>sh-col-1</td>
                                    <td>Tamaño semi-grande</td>
                                    <td>@media screen and (max-width: 1440px)</td>
                                </tr>
                                <tr>
                                    <td>hg-col-1</td>
                                    <td>Tamaño grande</td>
                                    <td>@media screen and (max-width: 1920px)</td>
                                </tr>
                                <tr>
                                    <td>tab-col-1</td>
                                    <td>Tamaño tabletas</td>
                                    <td>@media screen and (max-width: 992px)</td>
                                </tr>

                                <tr>
                                    <td>smt-col-1</td>
                                    <td>Tamaño smartphones</td>
                                    <td>@media screen and (max-width: 576px)</td>
                                </tr>
                            </tbody>

                        </table>
                    </code>
                </div>
            </div>

            <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Ejemplo de uso</h1>

            <div class="container-3 smt-container-1 card-1 tab-container-1">

                <div className='cont-scroll-2 container-2 tab-txt-size-2 smt-txt-size-1'>
                    <CopyButton text={codeString1} />
                    <SyntaxHighlighter language="html" style={docco} wrapLongLines={true}>
                        {codeString1}
                    </SyntaxHighlighter>
                </div>

                <p class="container-3 smt-container-1 tab-container-2 top-margin-7 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm justify-txt">En el siguiente ejemplo, se agregó la etiqueta <b>gri-u</b> para mantener una separación adecuada entre las columnas, por otro lado, se asignó un número de columnas de 4, para tamaño tablates en número de 2 y para tamaño smartphone un número de 1.
                    Dando como resultado lo siguiente:</p>

                <section class="grid-u col-4 md-col-3 tab-col-2 smt-col-1 center-txt display-6 tab-txt-size-5 smt-txt-size-2 container-3">
                    <div className='card-1 b-blue500'>Columna 1</div>
                    <div className='card-1 b-blue500'>Columna 2</div>
                    <div className='card-1 b-blue500'>Columna 3</div>
                    <div className='card-1 b-blue500'>Columna 4</div>
                </section>

                <p class="container-3 smt-container-1 tab-container-2 top-margin-7 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm justify-txt">Nuestras columnas son imaginarias, si el número de las mismas es "4" por ejemplo, entonces se podrán integrar
                    cuatro tipos de contenedores, que ocuparán las columnas respectivamente.</p>

            </div>

            <div class="container-3 smt-container-1 tab-container-3">

                <h1 class="display-5 smt-display-5 tab-display-4 left-txt bottom-margin-3 top-margin-6 container-3 smt-container-1">Cantidad de filas</h1>

                <div class="card-1">
                    <div class="cont-scroll-1">
                        <code>
                            <table class="centered-table container-2 smt-container-1 full-table responsive-table smt-txt-size-2sm td-border-s1 th-border-s2 th-b-gray400 th-border-s1 th-bd-black50">
                                <thead>
                                    <tr className='t-white50'>
                                        <th>Tag</th>
                                        <th>Número de columnas</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr >
                                        <td>span-1</td>
                                        <td>una fila</td>


                                    </tr>
                                    <tr>
                                        <td>span-2</td>
                                        <td>dos filas</td>
                                    </tr>
                                    <tr>
                                        <td>span-3</td>
                                        <td>tres filas</td>
                                    </tr>
                                    <tr>
                                        <td>span-4</td>
                                        <td>cuatro filas</td>
                                    </tr>

                                    <tr >
                                        <td>span-5</td>
                                        <td>cinco filas</td>

                                    </tr>
                                    <tr>
                                        <td>span-6</td>
                                        <td>seis filas</td>
                                    </tr>
                                    <tr>
                                        <td>span-7</td>
                                        <td>siete filas</td>
                                    </tr>
                                    <tr>
                                        <td>span-8</td>
                                        <td>ocho filas</td>
                                    </tr>

                                    <tr >
                                        <td>span-9</td>
                                        <td>nueve filas</td>

                                    </tr>
                                    <tr>
                                        <td>span-10</td>
                                        <td>diez filas</td>
                                    </tr>
                                    <tr>
                                        <td>span-11</td>
                                        <td>once filas</td>
                                    </tr>
                                    <tr>
                                        <td>span-12</td>
                                        <td>doce filas</td>
                                    </tr>
                                </tbody>

                            </table>
                        </code>
                    </div>
                </div>
            </div>

            <p class="container-3 smt-container-1 tab-container-2 top-margin-7 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm justify-txt">Visual E permite que un elemento dentro de una columna pueda abarcar varias de ellas. Se le asigna al elemento la etiqueta "span" más el número de columnas que se quieren abarcar "2" dando como resultado "span-2" Al asignarle la etiqueta a un elemento, el mismo ocupara dos de las cuatro columnas disponibles. Cada elemento debe ocupar un número de columnas lógico,
                basado en el número total de las mismas</p>


            <div class="card-1 container-3">

                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3  container-3 smt-container-1">Responsividad</h1>

                <p class="container-3 smt-container-1 smt-txt-size-2sm top-margin-0 bottom-padding-5 tab-txt-size-5sm justify-txt">Los span pueden ser utilizados por distintos tamaños de pantalla,
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
                                    <td>md-span-1</td>
                                    <td>Tamaño medio</td>
                                    <td>@media screen and (max-width: 1280px)</td>
                                </tr>
                                <tr>
                                    <td>sh-span-1</td>
                                    <td>Tamaño semi-grande</td>
                                    <td>@media screen and (max-width: 1440px)</td>
                                </tr>
                                <tr>
                                    <td>hg-span-1</td>
                                    <td>Tamaño grande</td>
                                    <td>@media screen and (max-width: 1920px)</td>
                                </tr>
                                <tr>
                                    <td>tab-span-1</td>
                                    <td>Tamaño tabletas</td>
                                    <td>@media screen and (max-width: 992px)</td>
                                </tr>

                                <tr>
                                    <td>smt-span-1</td>
                                    <td>Tamaño smartphones</td>
                                    <td>@media screen and (max-width: 576px)</td>
                                </tr>
                            </tbody>

                        </table>
                    </code>
                </div>
            </div>

            <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Ejemplo de uso</h1>

            <div class="container-3 smt-container-1 card-1 tab-container-1">

                <div className='cont-scroll-2 container-2 tab-txt-size-2 smt-txt-size-1'>
                <CopyButton text={codeString2} />
                    <SyntaxHighlighter language="html" style={docco} wrapLongLines={true}>
                        {codeString2}
                    </SyntaxHighlighter>
                </div>

                <p class="container-3 smt-container-1 tab-container-2 top-margin-7 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm justify-txt">En el siguiente ejemplo, se agregó la etiqueta <b>span</b> la cual,
                    seguida de un número del uno al doce, asignará al elemento de la fila con la propiedad, un espacio dentro de las columnas. Por ejemplo, si se tienen cuatro columnas, quiero que el elemento "Columna 1"
                    ocupe un <b>span-2</b>, es decir, dos columnas de las cuatro disponibles.</p>

                <section class="grid-u col-4 tab-col-2 smt-col-1 center-txt display-6 tab-txt-size-5 smt-txt-size-2 container-3 smt-container-1">
                    <div className='card-1 b-blue500 span-2 tab-span-2 smt-span-2'>Columna 1</div>
                    <div className='card-1 b-blue500'>Columna 2</div>
                    <div className='card-1 b-blue500'>Columna 3</div>
                    <div className='card-1 b-blue500 span-4 tab-span-2 smt-span-2'>Columna 4</div>
                </section>

                <p class="container-3 smt-container-1 tab-container-2 top-margin-7 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm justify-txt">Es importante tener en cuenta que el número del <b>span</b> no puede ser mayor al número de columnas totales,
                    ya que, un elemento no puede abarcar una columna inexistente.</p>

            </div>


            <Footer />
        </>

    )
}