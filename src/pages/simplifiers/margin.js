import React, { useEffect } from 'react';
import DocHeader from '../../page-components/docheader';
import Footer from '../../components/footer';


export default function Margin() {
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
                <h1 class="display-1 smt-display-5 tab-display-2 center-txt bottom-margin-3 container-3 smt-container-1">Márgenes</h1>
                <p class="container-3 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Visual E, ofrece márgenes, estos mismos se refieren al espacio en blanco que rodea un elemento HTML. Puedes pensar en él como el espacio entre un elemento y otros elementos cercanos en tu página web.
                    Es esencial para darle estructura y mejorar la legibilidad de tu contenido.</p>

            </div>

            <section class="container-3 smt-container-1 tab-container-2">

                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Márgenes Superiores</h1>
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
                                        <td>top-margin-1</td>
                                        <td>2px</td>

                                    </tr>
                                    <tr>
                                        <td>top-margin-2</td>
                                        <td>4px</td>
                                    </tr>
                                    <tr>
                                        <td>top-margin-3</td>
                                        <td>6px</td>
                                    </tr>
                                    <tr>
                                        <td>top-margin-4</td>
                                        <td>8px</td>
                                    </tr>

                                    <tr>
                                        <td>top-margin-5</td>
                                        <td>12px</td>
                                    </tr>

                                    <tr>
                                        <td>top-margin-6</td>
                                        <td>16px</td>
                                    </tr>

                                    <tr>
                                        <td>top-margin-7</td>
                                        <td>24px</td>
                                    </tr>

                                    <tr>
                                        <td>top-margin-8</td>
                                        <td>28px</td>
                                    </tr>

                                    <tr>
                                        <td>top-margin-9</td>
                                        <td>32px</td>
                                    </tr>

                                    <tr>
                                        <td>top-margin-10</td>
                                        <td>64px</td>
                                    </tr>

                                    <tr>
                                        <td>top-margin-11</td>
                                        <td>96px</td>
                                    </tr>

                                    <tr>
                                        <td>top-margin-12</td>
                                        <td>128px</td>
                                    </tr>


                                </tbody>

                            </table>
                        </code>
                    </div>
                </div>


                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Márgenes Izquierdos</h1>
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
                                        <td>left-margin-1</td>
                                        <td>2px</td>

                                    </tr>
                                    <tr>
                                        <td>left-margin-2</td>
                                        <td>4px</td>
                                    </tr>
                                    <tr>
                                        <td>left-margin-3</td>
                                        <td>6px</td>
                                    </tr>
                                    <tr>
                                        <td>left-margin-4</td>
                                        <td>8px</td>
                                    </tr>

                                    <tr>
                                        <td>left-margin-5</td>
                                        <td>12px</td>
                                    </tr>

                                    <tr>
                                        <td>left-margin-6</td>
                                        <td>16px</td>
                                    </tr>

                                    <tr>
                                        <td>left-margin-7</td>
                                        <td>24px</td>
                                    </tr>

                                    <tr>
                                        <td>left-margin-8</td>
                                        <td>28px</td>
                                    </tr>

                                    <tr>
                                        <td>left-margin-9</td>
                                        <td>32px</td>
                                    </tr>

                                    <tr>
                                        <td>left-margin-10</td>
                                        <td>64px</td>
                                    </tr>

                                    <tr>
                                        <td>left-margin-11</td>
                                        <td>96px</td>
                                    </tr>

                                    <tr>
                                        <td>left-margin-12</td>
                                        <td>128px</td>
                                    </tr>


                                </tbody>
                            </table>
                        </code>
                    </div>
                </div>

                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Márgenes Derechos</h1>
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
                                        <td>right-margin-1</td>
                                        <td>2px</td>

                                    </tr>
                                    <tr>
                                        <td>right-margin-2</td>
                                        <td>4px</td>
                                    </tr>
                                    <tr>
                                        <td>right-margin-3</td>
                                        <td>6px</td>
                                    </tr>
                                    <tr>
                                        <td>right-margin-4</td>
                                        <td>8px</td>
                                    </tr>

                                    <tr>
                                        <td>right-margin-5</td>
                                        <td>12px</td>
                                    </tr>

                                    <tr>
                                        <td>right-margin-6</td>
                                        <td>16px</td>
                                    </tr>

                                    <tr>
                                        <td>right-margin-7</td>
                                        <td>24px</td>
                                    </tr>

                                    <tr>
                                        <td>right-margin-8</td>
                                        <td>28px</td>
                                    </tr>

                                    <tr>
                                        <td>right-margin-9</td>
                                        <td>32px</td>
                                    </tr>

                                    <tr>
                                        <td>right-margin-10</td>
                                        <td>64px</td>
                                    </tr>

                                    <tr>
                                        <td>right-margin-11</td>
                                        <td>96px</td>
                                    </tr>

                                    <tr>
                                        <td>right-margin-12</td>
                                        <td>128px</td>
                                    </tr>


                                </tbody>
                            </table>
                        </code>
                    </div>
                </div>

                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Márgenes Inferiores</h1>
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
                                        <td>bottom-margin-1</td>
                                        <td>2px</td>

                                    </tr>
                                    <tr>
                                        <td>bottom-margin-2</td>
                                        <td>4px</td>
                                    </tr>
                                    <tr>
                                        <td>bottom-margin-3</td>
                                        <td>6px</td>
                                    </tr>
                                    <tr>
                                        <td>bottom-margin-4</td>
                                        <td>8px</td>
                                    </tr>

                                    <tr>
                                        <td>bottom-margin-5</td>
                                        <td>12px</td>
                                    </tr>

                                    <tr>
                                        <td>bottom-margin-6</td>
                                        <td>16px</td>
                                    </tr>

                                    <tr>
                                        <td>bottom-margin-7</td>
                                        <td>24px</td>
                                    </tr>

                                    <tr>
                                        <td>bottom-margin-8</td>
                                        <td>28px</td>
                                    </tr>

                                    <tr>
                                        <td>bottom-margin-9</td>
                                        <td>32px</td>
                                    </tr>

                                    <tr>
                                        <td>bottom-margin-10</td>
                                        <td>64px</td>
                                    </tr>

                                    <tr>
                                        <td>bottom-margin-11</td>
                                        <td>96px</td>
                                    </tr>

                                    <tr>
                                        <td>bottom-margin-12</td>
                                        <td>128px</td>
                                    </tr>


                                </tbody>

                            </table>
                        </code>
                    </div>
                </div>
                <div className='card-1 top-margin-11'>
                    <div>
                        <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3  container-3 smt-container-1">Responsividad</h1>
                        <p class="container-3 smt-container-1 smt-txt-size-2sm top-margin-0 bottom-padding-5 tab-txt-size-5sm justify-txt">Los Márgenes pueden ser utilizados por distintos tamaños de pantalla,
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
                                        <td>top-margin-1</td>
                                        <td>Tamaño medio</td>
                                        <td>@media screen and (max-width: 1280px)</td>
                                    </tr>
                                    <tr>
                                        <td>top-margin-1</td>
                                        <td>Tamaño semi-grande</td>
                                        <td>@media screen and (max-width: 1440px)</td>
                                    </tr>
                                    <tr>
                                        <td>top-margin-1</td>
                                        <td>Tamaño grande</td>
                                        <td>@media screen and (max-width: 1920px)</td>
                                    </tr>
                                    <tr>
                                        <td>top-margin-1</td>
                                        <td>Tamaño tabletas</td>
                                        <td>@media screen and (max-width: 992px)</td>
                                    </tr>

                                    <tr>
                                        <td>top-margin-1</td>
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