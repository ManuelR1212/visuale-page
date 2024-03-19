import React, { useEffect } from 'react';
import DocHeader from '../../page-components/docheader';
import Footer from '../../components/footer';


export default function TypoGraphy() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            window.hljs.highlightAll();
        };
    }, []);


    return (
        <>

            <DocHeader />


            <div class="b-red500 top-margin-0">
                <h1 class="display-3 smt-display-5 tab-display-4 left-padding-3 container-1 top-margin-0 top-padding-2 t-white50">Documentación</h1>
                <p class="container-1 left-padding-6 top-margin-0 bottom-padding-5 t-white50 smt-txt-size-2sm tab-txt-size-4sm">Todo lo que necesitas saber de Visual.E en un solo lugar.</p>
            </div>


            <div class="container-3 smt-container-1 tab-container-3">
                <h1 class="display-1 smt-display-5 tab-display-2 center-txt bottom-margin-3 container-3 smt-container-1">Tipografía</h1>
                <p class="container-3 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Visual E, ofrece una tipografía por defecto, Roboto. Sin embargo, puedes implementar o importar cualquiet tipo de fuente que desees.
                    Por otro lado, Visual E cuenta con numerosos selectores de clases para tus textos, vamos a echarles un vistazo.</p>

            </div>

            <section class="container-3 smt-container-1 tab-container-2">

                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Ajustes de Texto</h1>
                <div class="container-2 smt-container-1 card-1 tab-container-1">

                    <div class="cont-scroll-1">
                        <code>
                            <table class="centered-table container-2 smt-container-1 full-table responsive-table smt-txt-size-2sm td-border-s1 th-border-s2 th-b-gray400 th-border-s1 th-bd-black50">
                                <thead>
                                    <tr className='t-white50'>
                                        <th>Tag</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr >
                                        <td>center-txt</td>
                                        <td>Texto al centro</td>

                                    </tr>
                                    <tr>
                                        <td>left-txt</td>
                                        <td>Texto a la izquierda</td>
                                    </tr>
                                    <tr>
                                        <td>right-txt</td>
                                        <td>Texto a la derecha</td>
                                    </tr>
                                    <tr>
                                        <td>justify-txt</td>
                                        <td>Justificar Texto</td>
                                    </tr>


                                </tbody>

                            </table>
                        </code>
                    </div>
                </div>


                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Tamaños de texto</h1>
                <div class="container-2 smt-container-1 card-1 tab-container-1">

                    <div class="cont-scroll-1">
                        <code>
                            <table class="centered-table container-2 smt-container-1 full-table responsive-table smt-txt-size-2sm td-border-s1 th-border-s2 th-b-gray400 th-border-s1 th-bd-black50">
                                <thead>
                                    <tr className='t-white50'>
                                        <th>Tag</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr >
                                        <td>text-size-1</td>
                                        <td>16px</td>

                                    </tr>
                                    <tr>
                                        <td>text-size-2</td>
                                        <td>20px</td>
                                    </tr>
                                    <tr>
                                        <td>text-size-3</td>
                                        <td>24px</td>
                                    </tr>
                                    <tr>
                                        <td>text-size-4</td>
                                        <td>28px</td>
                                    </tr>

                                    <tr>
                                        <td>text-size-5</td>
                                        <td>30px</td>
                                    </tr>

                                    <tr>
                                        <td>text-size-6</td>
                                        <td>32px</td>
                                    </tr>

                                    <tr>
                                        <td>text-size-7</td>
                                        <td>36px</td>
                                    </tr>

                                    <tr>
                                        <td>text-size-8</td>
                                        <td>40px</td>
                                    </tr>


                                </tbody>
                            </table>
                        </code>
                    </div>
                </div>

                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Tamaños de texto pequeño</h1>
                <div class="container-2 smt-container-1 card-1 tab-container-1">

                    <div class="cont-scroll-1">
                        <code>
                            <table class="centered-table container-2 smt-container-1 full-table responsive-table smt-txt-size-2sm td-border-s1 th-border-s2 th-b-gray400 th-border-s1 th-bd-black50">
                                <thead>
                                    <tr className='t-white50'>
                                        <th>Tag</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr >
                                        <td>text-size-1sm</td>
                                        <td>1px</td>

                                    </tr>
                                    <tr>
                                        <td>text-size-2sm</td>
                                        <td>2px</td>
                                    </tr>
                                    <tr>
                                        <td>text-size-3sm</td>
                                        <td>4px</td>
                                    </tr>
                                    <tr>
                                        <td>text-size-4sm</td>
                                        <td>6px</td>
                                    </tr>

                                    <tr>
                                        <td>text-size-5sm</td>
                                        <td>8px</td>
                                    </tr>

                                    <tr>
                                        <td>text-size-6sm</td>
                                        <td>10px</td>
                                    </tr>

                                    <tr>
                                        <td>text-size-7sm</td>
                                        <td>12px</td>
                                    </tr>


                                </tbody>
                            </table>
                        </code>
                    </div>
                </div>

                <div className='card-1 top-margin-11'>
                    <div>
                        <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3  container-3 smt-container-1">Responsividad</h1>
                        <p class="container-3 smt-container-1 smt-txt-size-2sm top-margin-0 bottom-padding-5 tab-txt-size-5sm justify-txt">Los textos pueden ser utilizados por distintos tamaños de pantalla,
                            por lo que, es necesario que los mismos posean una responsividad adecuada adaptada mediante <b>@mediaquerys</b>,
                            las cuales comprenden múltiples proporciones para distintos tamaños de pantalla.</p>
                    </div>
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
                                        <td>text-size-1</td>
                                        <td>Tamaño medio</td>
                                        <td>@media screen and (max-width: 1280px)</td>
                                    </tr>
                                    <tr>
                                        <td>text-size-1</td>
                                        <td>Tamaño semi-grande</td>
                                        <td>@media screen and (max-width: 1440px)</td>
                                    </tr>
                                    <tr>
                                        <td>text-size-1</td>
                                        <td>Tamaño grande</td>
                                        <td>@media screen and (max-width: 1920px)</td>
                                    </tr>
                                    <tr>
                                        <td>ttext-size-1</td>
                                        <td>Tamaño tabletas</td>
                                        <td>@media screen and (max-width: 992px)</td>
                                    </tr>

                                    <tr>
                                        <td>stext-size-1</td>
                                        <td>Tamaño smartphones</td>
                                        <td>@media screen and (max-width: 576px)</td>
                                    </tr>
                                </tbody>

                            </table>
                        </code>
                    </div>
                </div>
            </section>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js"></script>
            <script>hljs.highlightAll();</script>

            <Footer />
        </>

    )
}