import React, { useEffect } from 'react';
import DocHeader from '../../page-components/docheader';
import Footer from '../../components/footer';


export default function Radius() {
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
                <h1 class="display-1 smt-display-5 tab-display-2 center-txt bottom-margin-3 container-3 smt-container-1">Redondeado</h1>
                <p class="container-3 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">En Visual E, nuestro radius permite a los desarrolladores web definir qué tan redondeadas serán las esquinas de un elemento. Puedes establecer un solo radio para crear esquinas circulares o dos radios para crear esquinas elípticas. La redondez de cada esquina está definida usando uno o dos valores para el radio,
                    dependiendo si se desea un círculo o una elipse.</p>

            </div>

            <section class="container-3 smt-container-1 tab-container-2">
                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Todos los bordes</h1>
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
                                        <td>round-1</td>
                                        <td>2px</td>

                                    </tr>
                                    <tr>
                                        <td>round-2</td>
                                        <td>4px</td>
                                    </tr>
                                    <tr>
                                        <td>round-3</td>
                                        <td>6px</td>
                                    </tr>
                                    <tr>
                                        <td>round-4</td>
                                        <td>8px</td>
                                    </tr>

                                    <tr>
                                        <td>round-5</td>
                                        <td>12px</td>
                                    </tr>

                                    <tr>
                                        <td>round-6</td>
                                        <td>16px</td>
                                    </tr>

                                    <tr>
                                        <td>round-7</td>
                                        <td>24px</td>
                                    </tr>

                                    <tr>
                                        <td>round-full</td>
                                        <td>9999px</td>
                                    </tr>


                                </tbody>

                            </table>
                        </code>
                    </div>
                </div>


                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Bordes Superiores</h1>
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
                                        <td>round-top-1</td>
                                        <td>2px</td>

                                    </tr>
                                    <tr>
                                        <td>round-top-2</td>
                                        <td>4px</td>
                                    </tr>
                                    <tr>
                                        <td>round-top-3</td>
                                        <td>6px</td>
                                    </tr>
                                    <tr>
                                        <td>round-top-4</td>
                                        <td>8px</td>
                                    </tr>

                                    <tr>
                                        <td>round-top-5</td>
                                        <td>12px</td>
                                    </tr>

                                    <tr>
                                        <td>round-top-6</td>
                                        <td>16px</td>
                                    </tr>

                                    <tr>
                                        <td>round-top-7</td>
                                        <td>24px</td>
                                    </tr>

                                    <tr>
                                        <td>round-top-full</td>
                                        <td>9999px</td>
                                    </tr>


                                </tbody>

                            </table>
                        </code>
                    </div>
                </div>

                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Bordes Superiores Izquierdos</h1>
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
                                        <td>round-topl-1</td>
                                        <td>2px</td>

                                    </tr>
                                    <tr>
                                        <td>round-topl-2</td>
                                        <td>4px</td>
                                    </tr>
                                    <tr>
                                        <td>round-topl-3</td>
                                        <td>6px</td>
                                    </tr>
                                    <tr>
                                        <td>round-topl-4</td>
                                        <td>8px</td>
                                    </tr>

                                    <tr>
                                        <td>round-topl-5</td>
                                        <td>12px</td>
                                    </tr>

                                    <tr>
                                        <td>round-topl-6</td>
                                        <td>16px</td>
                                    </tr>

                                    <tr>
                                        <td>round-topl-7</td>
                                        <td>24px</td>
                                    </tr>

                                    <tr>
                                        <td>round-topl-full</td>
                                        <td>9999px</td>
                                    </tr>


                                </tbody>

                            </table>
                        </code>
                    </div>
                </div>


                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Bordes Superiores Derechos</h1>
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
                                        <td>round-topr-1</td>
                                        <td>2px</td>

                                    </tr>
                                    <tr>
                                        <td>round-topr-2</td>
                                        <td>4px</td>
                                    </tr>
                                    <tr>
                                        <td>round-topr-3</td>
                                        <td>6px</td>
                                    </tr>
                                    <tr>
                                        <td>round-topr-4</td>
                                        <td>8px</td>
                                    </tr>

                                    <tr>
                                        <td>round-topr-5</td>
                                        <td>12px</td>
                                    </tr>

                                    <tr>
                                        <td>round-topr-6</td>
                                        <td>16px</td>
                                    </tr>

                                    <tr>
                                        <td>round-topr-7</td>
                                        <td>24px</td>
                                    </tr>

                                    <tr>
                                        <td>round-topr-full</td>
                                        <td>9999px</td>
                                    </tr>


                                </tbody>

                            </table>
                        </code>
                    </div>
                </div>

                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Bordes Izquierdos</h1>
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
                                        <td>round-left-1</td>
                                        <td>2px</td>

                                    </tr>
                                    <tr>
                                        <td>round-left-2</td>
                                        <td>4px</td>
                                    </tr>
                                    <tr>
                                        <td>round-left-3</td>
                                        <td>6px</td>
                                    </tr>
                                    <tr>
                                        <td>round-left-4</td>
                                        <td>8px</td>
                                    </tr>

                                    <tr>
                                        <td>round-left-5</td>
                                        <td>12px</td>
                                    </tr>

                                    <tr>
                                        <td>round-left-6</td>
                                        <td>16px</td>
                                    </tr>

                                    <tr>
                                        <td>round-left-7</td>
                                        <td>24px</td>
                                    </tr>

                                    <tr>
                                        <td>round-left-full</td>
                                        <td>9999px</td>
                                    </tr>


                                </tbody>

                            </table>
                        </code>
                    </div>
                </div>

                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Bordes Derechos</h1>
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
                                        <td>round-right-1</td>
                                        <td>2px</td>

                                    </tr>
                                    <tr>
                                        <td>round-right-2</td>
                                        <td>4px</td>
                                    </tr>
                                    <tr>
                                        <td>round-right-3</td>
                                        <td>6px</td>
                                    </tr>
                                    <tr>
                                        <td>round-right-4</td>
                                        <td>8px</td>
                                    </tr>

                                    <tr>
                                        <td>round-right-5</td>
                                        <td>12px</td>
                                    </tr>

                                    <tr>
                                        <td>round-right-6</td>
                                        <td>16px</td>
                                    </tr>

                                    <tr>
                                        <td>round-right-7</td>
                                        <td>24px</td>
                                    </tr>

                                    <tr>
                                        <td>round-right-full</td>
                                        <td>9999px</td>
                                    </tr>


                                </tbody>

                            </table>
                        </code>
                    </div>
                </div>

                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Bordes Inferiores</h1>
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
                                        <td>round-bottom-1</td>
                                        <td>2px</td>

                                    </tr>
                                    <tr>
                                        <td>round-bottom-2</td>
                                        <td>4px</td>
                                    </tr>
                                    <tr>
                                        <td>round-bottom-3</td>
                                        <td>6px</td>
                                    </tr>
                                    <tr>
                                        <td>round-bottom-4</td>
                                        <td>8px</td>
                                    </tr>

                                    <tr>
                                        <td>round-bottom-5</td>
                                        <td>12px</td>
                                    </tr>

                                    <tr>
                                        <td>round-bottom-6</td>
                                        <td>16px</td>
                                    </tr>

                                    <tr>
                                        <td>round-bottom-7</td>
                                        <td>24px</td>
                                    </tr>

                                    <tr>
                                        <td>round-bottom-full</td>
                                        <td>9999px</td>
                                    </tr>


                                </tbody>

                            </table>
                        </code>
                    </div>
                </div>

                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Bordes Inferiores Izquierdos</h1>
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
                                        <td>round-bottoml-1</td>
                                        <td>2px</td>

                                    </tr>
                                    <tr>
                                        <td>round-bottoml-2</td>
                                        <td>4px</td>
                                    </tr>
                                    <tr>
                                        <td>round-bottoml-3</td>
                                        <td>6px</td>
                                    </tr>
                                    <tr>
                                        <td>round-bottoml-4</td>
                                        <td>8px</td>
                                    </tr>

                                    <tr>
                                        <td>round-bottoml-5</td>
                                        <td>12px</td>
                                    </tr>

                                    <tr>
                                        <td>round-bottoml-6</td>
                                        <td>16px</td>
                                    </tr>

                                    <tr>
                                        <td>round-bottoml-7</td>
                                        <td>24px</td>
                                    </tr>

                                    <tr>
                                        <td>round-bottoml-full</td>
                                        <td>9999px</td>
                                    </tr>


                                </tbody>

                            </table>
                        </code>
                    </div>
                </div>


                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Bordes Inferiores Derechos</h1>
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
                                        <td>round-bottomr-1</td>
                                        <td>2px</td>

                                    </tr>
                                    <tr>
                                        <td>round-bottomr-2</td>
                                        <td>4px</td>
                                    </tr>
                                    <tr>
                                        <td>round-bottomr-3</td>
                                        <td>6px</td>
                                    </tr>
                                    <tr>
                                        <td>round-bottomr-4</td>
                                        <td>8px</td>
                                    </tr>

                                    <tr>
                                        <td>round-bottomr-5</td>
                                        <td>12px</td>
                                    </tr>

                                    <tr>
                                        <td>round-bottomr-6</td>
                                        <td>16px</td>
                                    </tr>

                                    <tr>
                                        <td>round-bottomr-7</td>
                                        <td>24px</td>
                                    </tr>

                                    <tr>
                                        <td>round-bottomr-full</td>
                                        <td>9999px</td>
                                    </tr>


                                </tbody>

                            </table>
                        </code>
                    </div>
                </div>

                  <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Ejemplo de uso</h1>

                <div class="container-3 smt-container-1 card-1 tab-container-1">

                    <section class="grid-u col-3 md-col-2 tab-col-2 smt-col-1 center-txt display-6 tab-txt-size-5 smt-txt-size-2 container-3">
                        <div className='card-1 b-blue500 round-top-5'>Redondeo 1</div>
                        <div className='card-1 b-blue500 round-bottom-5'>Redondeo 2</div>
                        <div className='card-1 b-blue500 round-full'>Redondeo 3</div>
                    </section>
                </div>

            </section>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js"></script>
            <script>hljs.highlightAll();</script>

            <Footer />
        </>

    )
}