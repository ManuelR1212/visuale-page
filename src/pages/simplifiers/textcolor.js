import React, { useEffect } from 'react';
import DocHeader from '../../page-components/docheader';
import Footer from '../../components/footer';



export default function TextColor() {
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
                <h1 class="display-1 smt-display-5 tab-display-2 center-txt bottom-margin-3 container-3 smt-container-1">Color de Texto</h1>
                <p class="container-3 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">En Visual E, usamos el selector <b>t-</b> acompañado del color que más te guste. En nuestro caso, combinamos el selector de los text con nuestras variables de color css. Por ejemplo; <b>t-red50</b>, esto transforma el color del texto de cualquier palabra o frase… 
                Juega con los colores y crea las páginas web más atractivas.</p>

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
                                        <td>t-white50</td>
                                        <td className='t-white50'>Visual E Text</td>

                                    </tr>
                                    <tr>
                                        <td>t-white100</td>
                                        <td className='t-white100'>Visual E Text</td>
                                    </tr>
                                    <tr>
                                        <td>t-white200</td>
                                        <td className='t-white100'>Visual E Text</td>
                                    </tr>
                                    <tr>
                                        <td>t-white300</td>
                                        <td className='t-white300'>Visual E Text</td>
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
                                        <td>t-gray50</td>
                                        <td className='t-gray50'>Visual E Text</td>

                                    </tr>
                                    <tr>
                                        <td>t-gray100</td>
                                        <td className='t-gray100'>Visual E Text</td>
                                    </tr>
                                    <tr>
                                        <td>t-gray200</td>
                                        <td className='t-gray200'>Visual E Text</td>
                                    </tr>
                                    <tr>
                                        <td>t-gray300</td>
                                        <td className='t-gray300'>Visual E Text</td>
                                    </tr>

                                    <tr >
                                        <td>t-gray400</td>
                                        <td className='t-gray400'>Visual E Text</td>

                                    </tr>

                                    <tr >
                                        <td>t-black50</td>
                                        <td className='t-black50'>Visual E Text</td>

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
                                        <td>t-blue50</td>
                                        <td className='t-blue50'>Visual E Text</td>

                                    </tr>
                                    <tr>
                                        <td>t-blue100</td>
                                        <td className='t-blue100'>Visual E Text</td>
                                    </tr>
                                    <tr>
                                        <td>t-blue200</td>
                                        <td className='t-blue200'>Visual E Text</td>
                                    </tr>
                                    <tr>
                                        <td>t-blue300</td>
                                        <td className='t-blue300'>Visual E Text</td>
                                    </tr>

                                    <tr >
                                        <td>t-blue400</td>
                                        <td className='t-blue400'>Visual E Text</td>

                                    </tr>

                                    <tr >
                                        <td>t-blue500</td>
                                        <td className='t-blue500'>Visual E Text</td>

                                    </tr>

                                    <tr>
                                        <td>t-blue600</td>
                                        <td className='t-blue600'>Visual E Text</td>
                                    </tr>
                                    <tr>
                                        <td>t-blue700</td>
                                        <td className='t-blue700'>Visual E Text</td>
                                    </tr>

                                    <tr >
                                        <td>t-blue800</td>
                                        <td className='t-blue800'>Visual E Text</td>

                                    </tr>

                                    <tr >
                                        <td>t-blue900</td>
                                        <td className='t-blue900'>Visual E Text</td>

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
                                        <td>t-red50</td>
                                        <td className='t-red50'>Visual E Text</td>

                                    </tr>
                                    <tr>
                                        <td>t-red100</td>
                                        <td className='t-red100'>Visual E Text</td>
                                    </tr>
                                    <tr>
                                        <td>t-red200</td>
                                        <td className='t-red200'>Visual E Text</td>
                                    </tr>
                                    <tr>
                                        <td>t-red300</td>
                                        <td className='t-red300'>Visual E Text</td>
                                    </tr>

                                    <tr >
                                        <td>t-red400</td>
                                        <td className='t-red400'>Visual E Text</td>

                                    </tr>

                                    <tr >
                                        <td>t-red500</td>
                                        <td className='t-red500'>Visual E Text</td>

                                    </tr>

                                    <tr>
                                        <td>t-red600</td>
                                        <td className='t-red600'>Visual E Text</td>
                                    </tr>
                                    <tr>
                                        <td>t-red700</td>
                                        <td className='t-red700'>Visual E Text</td>
                                    </tr>

                                    <tr >
                                        <td>t-red800</td>
                                        <td className='t-red800'>Visual E Text</td>

                                    </tr>

                                    <tr >
                                        <td>t-red900</td>
                                        <td className='t-red900'>Visual E Text</td>

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