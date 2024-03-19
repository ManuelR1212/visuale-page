import React, { useEffect } from 'react';
import DocHeader from '../../../page-components/docheader';
import Footer from '../../../components/footer';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function ColorVariables() {
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
                <h1 class="display-1 smt-display-5 tab-display-2 center-txt bottom-margin-3 container-3 smt-container-1">Variables de Color</h1>
                <p class="container-3 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Visual E te ofrece una amplia cantidad de variables de color, las cuales vienen predefinas y utilizadas por defecto dentro de los colores para las etiquetas. Como pueden ser 
                ; colores de fondo, textos, bordes, sombreados, etc... Nuestro framework d estilos brinda tonalidades referentes a nuestra paleta de colores oficial para la documentación. Si eres desarrollador y quieres aportar más colores a nuestras variables, no esperes más tiempo!</p>

            </div>

            <section class="container-3 smt-container-1 tab-container-2">
            <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Tonalidades Blancas</h1>
                <div class="container-2 smt-container-1 card-1 tab-container-1">

                    <div class="cont-scroll-1">
                        <code>
                            <table class="centered-table container-2 smt-container-1 full-table responsive-table smt-txt-size-2sm td-border-s1 th-border-s2 th-b-gray400 th-border-s1 th-bd-black50">
                                <thead>
                                    <tr className='t-white50'>
                                        <th>Variable</th>
                                        <th>Color</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr >
                                        <td>--white50</td>
                                        <td className='b-white50'></td>

                                    </tr>
                                    <tr>
                                        <td>--white100</td>
                                        <td className='b-white100'></td>
                                    </tr>
                                    <tr>
                                        <td>--white200</td>
                                        <td className='b-white200'></td>
                                    </tr>
                                    <tr>
                                        <td>--white300</td>
                                        <td className='b-white300'></td>
                                    </tr>


                                </tbody>

                            </table>
                        </code>
                    </div>
                </div>

                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Tonalidades Grises y Negras</h1>

                <div class="container-2 smt-container-1 card-1 tab-container-1">
                    

                    <div class="cont-scroll-1">
                        <code>
                            <table class="centered-table container-2 smt-container-1 full-table responsive-table smt-txt-size-2sm td-border-s1 th-border-s2 th-b-gray400 th-border-s1 th-bd-black50">
                                <thead>
                                    <tr className='t-white50'>
                                        <th>Variable</th>
                                        <th>Color</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr >
                                        <td>--gray50</td>
                                        <td className='b-gray50'></td>

                                    </tr>
                                    <tr>
                                        <td>--gray100</td>
                                        <td className='b-gray100'></td>
                                    </tr>
                                    <tr>
                                        <td>--gray200</td>
                                        <td className='b-gray200'></td>
                                    </tr>
                                    <tr>
                                        <td>--gray300</td>
                                        <td className='b-gray300'></td>
                                    </tr>

                                    <tr >
                                        <td>--gray400</td>
                                        <td className='b-gray400'></td>

                                    </tr>

                                    <tr >
                                        <td>--black50</td>
                                        <td className='b-black50'></td>

                                    </tr>

                                </tbody>

                            </table>
                        </code>
                    </div>
                </div>

                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Tonalidades Azules</h1>

                <div class="container-2 smt-container-1 card-1 tab-container-1">

                    

                    <div class="cont-scroll-1">
                        <code>
                            <table class="centered-table container-2 smt-container-1 full-table responsive-table smt-txt-size-2sm td-border-s1 th-border-s2 th-b-gray400 th-border-s1 th-bd-black50">
                                <thead>
                                    <tr className='t-white50'>
                                        <th>Variable</th>
                                        <th>Color</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr >
                                        <td>--blue50</td>
                                        <td className='b-blue50'></td>

                                    </tr>
                                    <tr>
                                        <td>--blue100</td>
                                        <td className='b-blue100'></td>
                                    </tr>
                                    <tr>
                                        <td>--blue200</td>
                                        <td className='b-blue200'></td>
                                    </tr>
                                    <tr>
                                        <td>--blue300</td>
                                        <td className='b-blue300'></td>
                                    </tr>

                                    <tr >
                                        <td>--blue400</td>
                                        <td className='b-blue400'></td>

                                    </tr>

                                    <tr >
                                        <td>--blue500</td>
                                        <td className='b-blue500'></td>

                                    </tr>

                                    <tr>
                                        <td>--blue600</td>
                                        <td className='b-blue600'></td>
                                    </tr>
                                    <tr>
                                        <td>--blue700</td>
                                        <td className='b-blue700'></td>
                                    </tr>

                                    <tr >
                                        <td>--blue800</td>
                                        <td className='b-blue800'></td>

                                    </tr>

                                    <tr >
                                        <td>--blue900</td>
                                        <td className='b-blue900'></td>

                                    </tr>

                                </tbody>

                            </table>
                        </code>
                    </div>
                </div>

                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Tonalidades Rojas</h1>

                <div class="container-2 smt-container-1 card-1 tab-container-1">

                    

                    <div class="cont-scroll-1">
                        <code>
                            <table class="centered-table container-2 smt-container-1 full-table responsive-table smt-txt-size-2sm td-border-s1 th-border-s2 th-b-gray400 th-border-s1 th-bd-black50">
                                <thead>
                                    <tr className='t-white50'>
                                        <th>Variable</th>
                                        <th>Color</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr >
                                        <td>-red50</td>
                                        <td className='b-red50'></td>

                                    </tr>
                                    <tr>
                                        <td>--red100</td>
                                        <td className='b-red100'></td>
                                    </tr>
                                    <tr>
                                        <td>--red200</td>
                                        <td className='b-red200'></td>
                                    </tr>
                                    <tr>
                                        <td>--red300</td>
                                        <td className='b-red300'></td>
                                    </tr>

                                    <tr >
                                        <td>--red400</td>
                                        <td className='b-red400'></td>

                                    </tr>

                                    <tr >
                                        <td>--red500</td>
                                        <td className='b-red500'></td>

                                    </tr>

                                    <tr>
                                        <td>--red600</td>
                                        <td className='b-red600'></td>
                                    </tr>
                                    <tr>
                                        <td>--red700</td>
                                        <td className='b-red700'></td>
                                    </tr>

                                    <tr >
                                        <td>--red800</td>
                                        <td className='b-red800'></td>

                                    </tr>

                                    <tr >
                                        <td>--red900</td>
                                        <td className='b-red900'></td>

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