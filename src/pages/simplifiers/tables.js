import React, { useEffect } from 'react';
import DocHeader from '../../page-components/docheader';
import Footer from '../../components/footer';
import CopyButton from "../../page-components/CopyButton";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';



export default function Tables() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            window.hljs.highlightAll();
        };
    }, []);

    const codeString1 = `<table class="container-2 smt-container-1 full-table responsive-table smt-txt-size-2sm td-border-s1 th-border-s2 th-b-gray400 th-border-s1 th-bd-black50">`

    const codeString2 = `<table class="container-2 cont-scroll-1 smt-container-1 full-table responsive-table smt-txt-size-2sm td-border-s1 th-border-s2 th-b-gray400 th-border-s1 th-bd-black50">`

    const codeString3 = `<table class="zebra-table container-2 smt-container-1 full-table responsive-table smt-txt-size-2sm td-border-s1 th-border-s2 th-b-gray400 th-border-s1 th-bd-black50">`
    
    const codeString4 = `<table class="centered-table container-2 smt-container-1 full-table responsive-table smt-txt-size-2sm td-border-s1 th-border-s2 th-b-gray400 th-border-s1 th-bd-black50">`

    return (
        <>

            <DocHeader />


            <div class="b-red500 top-margin-0">
                <h1 class="display-3 smt-display-5 tab-display-4 left-padding-3 container-1 top-margin-0 top-padding-2 t-white50">Documentación</h1>
                <p class="container-1 left-padding-6 top-margin-0 bottom-padding-5 t-white50 smt-txt-size-2sm tab-txt-size-4sm">Todo lo que necesitas saber de Visual.E en un solo lugar.</p>
            </div>


            <div class="container-3 smt-container-1 tab-container-3">
                <h1 class="display-1 smt-display-5 tab-display-2 center-txt bottom-margin-3 container-3 smt-container-1">Tablas</h1>
                <p class="container-3 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Las tablas de Visual E,
                    ofrecen una estructura rectangular compuesta por filas y columnas, donde se organizan datos en celdas. Cada celda puede contener información como texto, imágenes o incluso elementos HTML más complejos. Las tablas permiten buscar y relacionar valores entre diferentes tipos de datos,
                    como la edad de una persona, los días de la semana o los horarios de una piscina municipal.</p>

                <p class="container-3 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Visualmente, los encabezados de filas y
                    columnas facilitan la interpretación de la información. En Visual E, te permitimos modificar las tablas de la manera que más te guste… Desde modificar toda una columna o fila completa, darle estilos individuales a cada celda e
                    incluso añadir distintos tipos de tablas predefinidas.</p>


            </div>

            <section class="container-3 smt-container-1 tab-container-2">


                <div className='cont-scroll-2 container-2 txt-size-4 tab-txt-size-2 smt-txt-size-1'>
                    <CopyButton text={codeString1} />
                    <SyntaxHighlighter language="js" style={atomOneDark} wrapLongLines={true}>
                        {codeString1}
                    </SyntaxHighlighter>
                </div>


                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Tablas Generales</h1>
                <div class="container-2 smt-container-1 card-1 tab-container-1">

                    <div class="cont-scroll-1">
                        <code>
                            <table class="container-2 smt-container-1 full-table responsive-table smt-txt-size-2sm td-border-s1 th-border-s2 th-b-gray400 th-border-s1 th-bd-black50">
                                <thead>
                                    <tr className='t-white50'>
                                        <th>Nombre Clave</th>
                                        <th>Edad</th>
                                        <th>Cargo</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr >
                                        <td>White Tiger</td>
                                        <td>21</td>
                                        <td>General</td>

                                    </tr>
                                    <tr>
                                        <td>African</td>
                                        <td>19</td>
                                        <td>Comandante</td>
                                    </tr>
                                    <tr>
                                        <td>Eagle Eye</td>
                                        <td>21</td>
                                        <td>Cabo</td>
                                    </tr>
                                    <tr>
                                        <td>Solid Snake</td>
                                        <td>45</td>
                                        <td>Soldado</td>
                                    </tr>


                                </tbody>

                            </table>
                        </code>
                    </div>
                </div>

                <div className='cont-scroll-2 container-2 txt-size-4 tab-txt-size-2 smt-txt-size-1'>
                    <CopyButton text={codeString2} />
                    <SyntaxHighlighter language="js" style={atomOneDark} wrapLongLines={true}>
                        {codeString2}
                    </SyntaxHighlighter>
                </div>


                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Tablas Scroll</h1>
                <div class="container-2 smt-container-1 card-1 tab-container-1">

                    <div class="cont-scroll-1">
                        <code>
                            <table class="container-2 smt-container-1 full-table responsive-table smt-txt-size-2sm td-border-s1 th-border-s2 th-b-gray400 th-border-s1 th-bd-black50">
                                <thead>
                                    <tr className='t-white50'>
                                        <th>Nombre Clave</th>
                                        <th>Edad</th>
                                        <th>Cargo</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr >
                                        <td>White Tiger</td>
                                        <td>21</td>
                                        <td>General</td>

                                    </tr>
                                    <tr>
                                        <td>African</td>
                                        <td>19</td>
                                        <td>Comandante</td>
                                    </tr>
                                    <tr>
                                        <td>Eagle Eye</td>
                                        <td>21</td>
                                        <td>Cabo</td>
                                    </tr>
                                    <tr>
                                        <td>Solid Snake</td>
                                        <td>45</td>
                                        <td>Soldado</td>
                                    </tr>

                                    <tr >
                                        <td>White Tiger</td>
                                        <td>21</td>
                                        <td>General</td>

                                    </tr>
                                    <tr>
                                        <td>African</td>
                                        <td>19</td>
                                        <td>Comandante</td>
                                    </tr>
                                    <tr>
                                        <td>Eagle Eye</td>
                                        <td>21</td>
                                        <td>Cabo</td>
                                    </tr>
                                    <tr>
                                        <td>Solid Snake</td>
                                        <td>45</td>
                                        <td>Soldado</td>
                                    </tr>


                                </tbody>

                            </table>
                        </code>
                    </div>
                </div>

                <div className='cont-scroll-2 container-2 txt-size-4 tab-txt-size-2 smt-txt-size-1'>
                    <CopyButton text={codeString3} />
                    <SyntaxHighlighter language="js" style={atomOneDark} wrapLongLines={true}>
                        {codeString3}
                    </SyntaxHighlighter>
                </div>

                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Tablas Zebra</h1>
                <div class="container-2 smt-container-1 card-1 tab-container-1">

                    <div class="cont-scroll-1">
                        <code>
                            <table class="zebra-table container-2 smt-container-1 full-table responsive-table smt-txt-size-2sm td-border-s1 th-border-s2 th-b-gray400 th-border-s1 th-bd-black50">
                                <thead>
                                    <tr className='t-white50'>
                                        <th>Nombre Clave</th>
                                        <th>Edad</th>
                                        <th>Cargo</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr >
                                        <td>White Tiger</td>
                                        <td>21</td>
                                        <td>General</td>

                                    </tr>
                                    <tr>
                                        <td>African</td>
                                        <td>19</td>
                                        <td>Comandante</td>
                                    </tr>
                                    <tr>
                                        <td>Eagle Eye</td>
                                        <td>21</td>
                                        <td>Cabo</td>
                                    </tr>
                                    <tr>
                                        <td>Solid Snake</td>
                                        <td>45</td>
                                        <td>Soldado</td>
                                    </tr>
                                </tbody>
                            </table>
                        </code>
                    </div>
                </div>

                <div className='cont-scroll-2 container-2 txt-size-4 tab-txt-size-2 smt-txt-size-1'>
                    <CopyButton text={codeString4} />
                    <SyntaxHighlighter language="js" style={atomOneDark} wrapLongLines={true}>
                        {codeString4}
                    </SyntaxHighlighter>
                </div>

                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Tablas Centradas</h1>
                <div class="container-2 smt-container-1 card-1 tab-container-1">

                    <div class="cont-scroll-1">
                        <code>
                            <table class="centered-table container-2 smt-container-1 full-table responsive-table smt-txt-size-2sm td-border-s1 th-border-s2 th-b-gray400 th-border-s1 th-bd-black50">
                                <thead>
                                    <tr className='t-white50'>
                                        <th>Nombre Clave</th>
                                        <th>Edad</th>
                                        <th>Cargo</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr >
                                        <td>White Tiger</td>
                                        <td>21</td>
                                        <td>General</td>

                                    </tr>
                                    <tr>
                                        <td>African</td>
                                        <td>19</td>
                                        <td>Comandante</td>
                                    </tr>
                                    <tr>
                                        <td>Eagle Eye</td>
                                        <td>21</td>
                                        <td>Cabo</td>
                                    </tr>
                                    <tr>
                                        <td>Solid Snake</td>
                                        <td>45</td>
                                        <td>Soldado</td>
                                    </tr>

                                    <tr >
                                        <td>White Tiger</td>
                                        <td>21</td>
                                        <td>General</td>

                                    </tr>
                                    <tr>
                                        <td>African</td>
                                        <td>19</td>
                                        <td>Comandante</td>
                                    </tr>
                                    <tr>
                                        <td>Eagle Eye</td>
                                        <td>21</td>
                                        <td>Cabo</td>
                                    </tr>
                                    <tr>
                                        <td>Solid Snake</td>
                                        <td>45</td>
                                        <td>Soldado</td>
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