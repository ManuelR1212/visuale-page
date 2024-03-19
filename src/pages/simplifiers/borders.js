import React, { useEffect } from 'react';
import DocHeader from '../../page-components/docheader';
import Footer from '../../components/footer';


export default function Border() {
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
                <h1 class="display-1 smt-display-5 tab-display-2 center-txt bottom-margin-3 container-3 smt-container-1">Bordes</h1>
                <p class="container-3 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Los bordes de los elementos css se
                    aplican a través de nuestros selectores de clases. Estos son visibles principalmente en contenedores, imágenes, botones, inputs, entre otros elementos. Los mismos cuentan con distintos tipos, completamente modificables y
                    adaptables a cualquier tipo de estilo.</p>

            </div>

            <section class="container-3 smt-container-1 tab-container-2">
                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Bordes Sólidos</h1>
                <div class="container-2 smt-container-1 card-1 tab-container-1">

                    <p class="container-2 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Los bordes sólidos de Visual E,
                        como su nombre lo indica, son bordes sencillos y sólidos, es decir, de línea recta. Estos bordes pueden ser utilizados en todo el elemento o incluso en partes del mismo; sea arriba, abajo,
                        a la izquierda o a la derecha.</p>


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
                                        <td>border-s1</td>
                                        <td>3px</td>

                                    </tr>
                                    <tr>
                                        <td>border-s2</td>
                                        <td>6px</td>
                                    </tr>
                                    <tr>
                                        <td>border-s3</td>
                                        <td>9px</td>
                                    </tr>
                                    <tr>
                                        <td>border-s4</td>
                                        <td>12px</td>
                                    </tr>

                                    <tr>
                                        <td>border-s5</td>
                                        <td>15px</td>
                                    </tr>


                                </tbody>

                            </table>
                        </code>
                    </div>

                    <div class="cont-scroll-1 top-margin-8">
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
                                        <td>bordertop-s1</td>
                                        <td>3px</td>

                                    </tr>
                                    <tr>
                                        <td>bordertop-s2</td>
                                        <td>6px</td>
                                    </tr>
                                    <tr>
                                        <td>bordertop-s3</td>
                                        <td>9px</td>
                                    </tr>
                                    <tr>
                                        <td>bordertop-s4</td>
                                        <td>12px</td>
                                    </tr>

                                    <tr>
                                        <td>bordertop-s5</td>
                                        <td>15px</td>
                                    </tr>


                                </tbody>

                            </table>
                        </code>
                    </div>

                    <div class="cont-scroll-1 top-margin-8">
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
                                        <td>borderbottom-s1</td>
                                        <td>3px</td>

                                    </tr>
                                    <tr>
                                        <td>borderbottom-s2</td>
                                        <td>6px</td>
                                    </tr>
                                    <tr>
                                        <td>borderbottom-s3</td>
                                        <td>9px</td>
                                    </tr>
                                    <tr>
                                        <td>borderbottom-s4</td>
                                        <td>12px</td>
                                    </tr>

                                    <tr>
                                        <td>borderbottom-s5</td>
                                        <td>15px</td>
                                    </tr>


                                </tbody>

                            </table>
                        </code>
                    </div>

                    <div class="cont-scroll-1 top-margin-8">
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
                                        <td>borderleft-s1</td>
                                        <td>3px</td>

                                    </tr>
                                    <tr>
                                        <td>borderleft-s2</td>
                                        <td>6px</td>
                                    </tr>
                                    <tr>
                                        <td>borderleft-s3</td>
                                        <td>9px</td>
                                    </tr>
                                    <tr>
                                        <td>borderleft-s4</td>
                                        <td>12px</td>
                                    </tr>

                                    <tr>
                                        <td>borderleft-s5</td>
                                        <td>15px</td>
                                    </tr>


                                </tbody>

                            </table>
                        </code>
                    </div>


                    <div class="cont-scroll-1 top-margin-8">
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
                                        <td>borderright-s1</td>
                                        <td>3px</td>

                                    </tr>
                                    <tr>
                                        <td>borderright-s2</td>
                                        <td>6px</td>
                                    </tr>
                                    <tr>
                                        <td>borderright-s3</td>
                                        <td>9px</td>
                                    </tr>
                                    <tr>
                                        <td>borderright-s4</td>
                                        <td>12px</td>
                                    </tr>

                                    <tr>
                                        <td>borderright-s5</td>
                                        <td>15px</td>
                                    </tr>


                                </tbody>

                            </table>
                        </code>
                    </div>
                </div>

                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Bordes Punteados</h1>
                <div class="container-2 smt-container-1 card-1 tab-container-1">

                    <p class="container-2 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Los bordes punteados de Visual, E
                        se encargan de mostrar un subrayado de los bordes caracterizado por tener puntos en vez de una línea recta. Estos bordes pueden ser utilizados en todo el elemento o incluso en partes del mismo; sea arriba, abajo,
                        a la izquierda o a la derecha.</p>


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
                                        <td>border-d1</td>
                                        <td>3px</td>

                                    </tr>
                                    <tr>
                                        <td>border-d2</td>
                                        <td>6px</td>
                                    </tr>
                                    <tr>
                                        <td>border-d3</td>
                                        <td>9px</td>
                                    </tr>
                                    <tr>
                                        <td>border-d4</td>
                                        <td>12px</td>
                                    </tr>

                                    <tr>
                                        <td>border-d5</td>
                                        <td>15px</td>
                                    </tr>


                                </tbody>

                            </table>
                        </code>
                    </div>

                    <div class="cont-scroll-1 top-margin-8">
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
                                        <td>bordertop-d1</td>
                                        <td>3px</td>

                                    </tr>
                                    <tr>
                                        <td>bordertop-d2</td>
                                        <td>6px</td>
                                    </tr>
                                    <tr>
                                        <td>bordertop-d3</td>
                                        <td>9px</td>
                                    </tr>
                                    <tr>
                                        <td>bordertop-d4</td>
                                        <td>12px</td>
                                    </tr>

                                    <tr>
                                        <td>bordertop-d5</td>
                                        <td>15px</td>
                                    </tr>


                                </tbody>

                            </table>
                        </code>
                    </div>

                    <div class="cont-scroll-1 top-margin-8">
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
                                        <td>borderbottom-d1</td>
                                        <td>3px</td>

                                    </tr>
                                    <tr>
                                        <td>borderbottom-d2</td>
                                        <td>6px</td>
                                    </tr>
                                    <tr>
                                        <td>borderbottom-d3</td>
                                        <td>9px</td>
                                    </tr>
                                    <tr>
                                        <td>borderbottom-d4</td>
                                        <td>12px</td>
                                    </tr>

                                    <tr>
                                        <td>borderbottom-d5</td>
                                        <td>15px</td>
                                    </tr>


                                </tbody>

                            </table>
                        </code>
                    </div>

                    <div class="cont-scroll-1 top-margin-8">
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
                                        <td>borderleft-d1</td>
                                        <td>3px</td>

                                    </tr>
                                    <tr>
                                        <td>borderleft-d2</td>
                                        <td>6px</td>
                                    </tr>
                                    <tr>
                                        <td>borderleft-d3</td>
                                        <td>9px</td>
                                    </tr>
                                    <tr>
                                        <td>borderleft-d4</td>
                                        <td>12px</td>
                                    </tr>

                                    <tr>
                                        <td>borderleft-d5</td>
                                        <td>15px</td>
                                    </tr>


                                </tbody>

                            </table>
                        </code>
                    </div>


                    <div class="cont-scroll-1 top-margin-8">
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
                                        <td>borderright-d1</td>
                                        <td>3px</td>

                                    </tr>
                                    <tr>
                                        <td>borderright-d2</td>
                                        <td>6px</td>
                                    </tr>
                                    <tr>
                                        <td>borderright-d3</td>
                                        <td>9px</td>
                                    </tr>
                                    <tr>
                                        <td>borderright-d4</td>
                                        <td>12px</td>
                                    </tr>

                                    <tr>
                                        <td>borderright-d5</td>
                                        <td>15px</td>
                                    </tr>


                                </tbody>

                            </table>
                        </code>
                    </div>
                </div>

                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Bordes Discontinuos</h1>
                <div class="container-2 smt-container-1 card-1 tab-container-1">

                    <p class="container-2 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Los bordes discontinuos de Visual E,
                        son una combinación entre los bordes sólidos y punteados. Los mismos muestran líneas pequeñas separadas entre sí. Estos bordes pueden ser utilizados en todo el elemento o incluso en partes del mismo; sea arriba, abajo,
                        a la izquierda o a la derecha.</p>


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
                                        <td>border-ds1</td>
                                        <td>3px</td>

                                    </tr>
                                    <tr>
                                        <td>border-ds2</td>
                                        <td>6px</td>
                                    </tr>
                                    <tr>
                                        <td>border-ds3</td>
                                        <td>9px</td>
                                    </tr>
                                    <tr>
                                        <td>border-ds4</td>
                                        <td>12px</td>
                                    </tr>

                                    <tr>
                                        <td>border-ds5</td>
                                        <td>15px</td>
                                    </tr>


                                </tbody>

                            </table>
                        </code>
                    </div>

                    <div class="cont-scroll-1 top-margin-8">
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
                                        <td>bordertop-ds1</td>
                                        <td>3px</td>

                                    </tr>
                                    <tr>
                                        <td>bordertop-ds2</td>
                                        <td>6px</td>
                                    </tr>
                                    <tr>
                                        <td>bordertop-ds3</td>
                                        <td>9px</td>
                                    </tr>
                                    <tr>
                                        <td>bordertop-ds4</td>
                                        <td>12px</td>
                                    </tr>

                                    <tr>
                                        <td>bordertop-ds5</td>
                                        <td>15px</td>
                                    </tr>


                                </tbody>

                            </table>
                        </code>
                    </div>

                    <div class="cont-scroll-1 top-margin-8">
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
                                        <td>borderbottom-ds1</td>
                                        <td>3px</td>

                                    </tr>
                                    <tr>
                                        <td>borderbottom-ds2</td>
                                        <td>6px</td>
                                    </tr>
                                    <tr>
                                        <td>borderbottom-ds3</td>
                                        <td>9px</td>
                                    </tr>
                                    <tr>
                                        <td>borderbottom-ds4</td>
                                        <td>12px</td>
                                    </tr>

                                    <tr>
                                        <td>borderbottom-ds5</td>
                                        <td>15px</td>
                                    </tr>


                                </tbody>

                            </table>
                        </code>
                    </div>

                    <div class="cont-scroll-1 top-margin-8">
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
                                        <td>borderleft-ds1</td>
                                        <td>3px</td>

                                    </tr>
                                    <tr>
                                        <td>borderleft-ds2</td>
                                        <td>6px</td>
                                    </tr>
                                    <tr>
                                        <td>borderleft-ds3</td>
                                        <td>9px</td>
                                    </tr>
                                    <tr>
                                        <td>borderleft-ds4</td>
                                        <td>12px</td>
                                    </tr>

                                    <tr>
                                        <td>borderleft-ds5</td>
                                        <td>15px</td>
                                    </tr>


                                </tbody>

                            </table>
                        </code>
                    </div>


                    <div class="cont-scroll-1 top-margin-8">
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
                                        <td>borderright-d1</td>
                                        <td>3px</td>

                                    </tr>
                                    <tr>
                                        <td>borderright-d2</td>
                                        <td>6px</td>
                                    </tr>
                                    <tr>
                                        <td>borderright-d3</td>
                                        <td>9px</td>
                                    </tr>
                                    <tr>
                                        <td>borderright-d4</td>
                                        <td>12px</td>
                                    </tr>

                                    <tr>
                                        <td>borderright-d5</td>
                                        <td>15px</td>
                                    </tr>


                                </tbody>

                            </table>
                        </code>
                    </div>

                </div>

                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Ejemplo de uso</h1>

                <div class="container-3 smt-container-1 card-1 tab-container-1">

                    <section class="grid-u col-3 md-col-2 tab-col-2 smt-col-1 center-txt display-6 tab-txt-size-5 smt-txt-size-2 container-3">
                        <div className='card-1 b-blue500 border-s1'>Borde Sólido</div>
                        <div className='card-1 b-blue500 border-d1'>Borde Punteado</div>
                        <div className='card-1 b-blue500 border-ds1'>Borde Discontinuo</div>
                    </section>
                </div>


            </section>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js"></script>
            <script>hljs.highlightAll();</script>

            <Footer />
        </>

    )
}