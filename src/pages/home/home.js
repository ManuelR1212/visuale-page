import React, { useEffect } from 'react';
import Header from '../../page-components/header'
import Footer from '../../components/footer';
import CopyButton from '../../page-components/CopyButton';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


export default function Home() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            window.hljs.highlightAll();
        };
    }, []);


    const codeString1 = `import Button from "/node_modules/visual-e/components;
    
<div class="card-1 container-">
 <Button content={"Soy un botón!"} </Button>`

    const codeString2 = `import Button from "/node_modules/visual-e/components;

    <Jumbotron title="Noticia de última hora!" description="Un simio fue visto a las afueras de un zoologico tocando una serenata."/>


   <Jumbotron title="¡Maquillaje" description="Te quita mas de veinte años de encima, ¡vísitanos!"/>`


    return (
        <>

            <Header />

            <div className=''>

                <div class="b-red500 top-margin-0">
                    <h1 class="display-3 smt-display-5 tab-display-4 left-padding-3 container-1 top-margin-0 top-padding-2 t-white50">Inicio</h1>
                    <p class="container-1 left-padding-6 top-margin-0 bottom-padding-5 t-white50 smt-txt-size-2sm tab-txt-size-4sm">Comienza tus proyectos junto a nosotros, Visual E</p>
                </div>

                <div class="container-3 smt-container-2 tab-container-3">
                    <h1 class="display-1 smt-display-5 tab-display-2 center-txt bottom-margin-3 container-3 smt-container-1">Visual E</h1>
                    <h2 class="font-normal tab-txt-size-6 smt-txt-size-4sm center-txt">Un framework de estilos dirigido a sitios web informativos, intuitivo, compacto y fácil de utilizar.</h2>
                </div>

                <section class="container-4 smt-container-2">
                    <h2 class="display-3 smt-display-6 tab-display-4 smt-container-1 top-padding-5 bottom-margin-3">Inicio rápido</h2>
                    <p class="smt-container-1 smt-txt-size-2sm tab-txt-size-5sm top-margin-0 bottom-padding-5 justify-txt">Antes de comenzar con la creación de tus proyectos web, es necesario que conozcas todos los pasos
                        necesarios para la instalación de tu framework de estilos preferido.
                    </p>

                    <div class="card-1">
                        <p class="smt-container-1 smt-txt-size-2sm tab-txt-size-5sm top-margin-0 bottom-padding-5 justify-txt">Puedes comenzar la instalación de Visual E en tus proyectos de manera sencilla, utilizando nuestro link CDN,
                            el cual te proporcionará únicamente la capacidad de utilizar los estilos CSS de Visual E, sin necesidad de descargar ningún archivo.
                        </p>
                        <h3 class="smt-txt-size-4">Link CDN</h3>

                        <div class="cont-scroll-1">
                            <table class="centered-table full-table responsive-table smt-container-1 t-white50 smt-txt-size-1sm td-borderbottom-s1 th-borderbottom-s1 th-b-gray400 td-b-gray400">
                                <thead>
                                    <tr>
                                        <th>Descripción</th>
                                        <th>URL</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr class="">
                                        <td class="">CSS</td>
                                        <td>https://cdn.jsdelivr.net/npm/visual-e@1.0.4/styles/framework.min.css</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>

                        <p class="top-margin-8 smt-txt-size-2sm tab-txt-size-5sm">Para agregar el link CDN de Visual E a tu proyecto, debes seguir los pasos a continuación:</p>

                        <p class="top-margin-8 bottom-margin-0 container-2 smt-container-1 smt-txt-size-2sm tab-txt-size-5sm justify-txt"><b>1:</b> Crea un archivo dentro de la raíz de tu proyecto, hablamos de un archivo como <b>"index.html"</b>, asegúrate de que tenga la etiqueta <b>meta</b>, esto garantiza una mayor responsivdad para dispositivos móbiles.
                        </p>

                        <div className='cont-scroll-2 container-2 tab-txt-size-2 smt-txt-size-1 '>
                            <CopyButton text={codeString1} />
                            <SyntaxHighlighter language="html" style={docco} wrapLongLines={true}>
                                {codeString1}
                            </SyntaxHighlighter>
                        </div>

                        <p class="top-margin-8 container-2 smt-container-1 smt-txt-size-2sm tab-txt-size-5sm bottom-margin-0 justify-txt"><b>2:</b> Dentro del archivo html creado, copia el link del CDN de Visual E y añade una etiqueta <b>"link"</b> dentro de el <b>"header"</b>,
                            en esta etiqueta pega el link del CDN en el <b>"href"</b>, de la siguiente manera:
                        </p>

                        <div className='cont-scroll-2 container-2 tab-txt-size-2 smt-txt-size-1'>
                            <CopyButton text={codeString2} />
                            <SyntaxHighlighter language="html" style={docco} wrapLongLines={true}>
                                {codeString2}
                            </SyntaxHighlighter>
                        </div>

                        <p class="top-margin-0 container-2 smt-container-1 smt-txt-size-2sm tab-txt-size-5sm justify-txt"><b>3:</b> ¡Todo listo! Si seguiste los pasos correctamente, entonces significa que ya puedes utilizar todos los estilos y etiquetas
                            de Visual E en tu proyecto, recuerda, esto es solo un link CDN; cuando quieras volver a utilizarlo en otro proyecto debes repetir el procedimiento.
                        </p>

                    </div>


                    <div class="card-1">
                        <p class="smt-container-1 smt-txt-size-2sm tab-txt-size-5sm top-margin-0 bottom-padding-5 justify-txt">Visual E también ofrece una versión adaptada a ReactJs, perfecta para todos aquellos usuarios que quieran experimentar con sus proyectos de React y
                            los componentes de Visual E.
                        </p>
                        <h3 class="smt-txt-size-4">Comando NPM & YARN</h3>

                        <div class="cont-scroll-1">
                            <table class="centered-table full-table responsive-table smt-container-1 t-white50 smt-txt-size-1sm td-borderbottom-s1 th-borderbottom-s1 th-b-gray400 td-b-gray400">
                                <thead>
                                    <tr>
                                        <th>Comando</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr class="">
                                        <td>$ npm install visual-e</td>
                                    </tr>
                                    <tr class="">
                                        <td>$ yarn add visual-e</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>

                        <p class="top-margin-8 smt-txt-size-2sm tab-txt-size-5sm">Antes de instalar Visual E en tus proyectos, asegurate de tener una versión de Node.js v21.1.0 o superior en tu sistema.
                            Lo siguiente es ejecutar el comando de instalación de Visual E usando npm en la raíz de tu proyecto de React.</p>

                        <p class="top-margin-8 bottom-margin-0 container-2 smt-container-1 smt-txt-size-2sm tab-txt-size-5sm justify-txt">Esto hará que npm instale todos los paquetes
                            necesarios para que puedas utilizar Visual E en tus proyectos de React. npm arrojará una carpeta con todos los componentes de Visual E, además de otorgarte la posibilidad de utilizar todos los estilos CSS del framework. Una vez terminado el proceso, es necesario que importes las carpetas "components" y
                            "styles" en los archivos de tu proyecto que requieran de la mano de Visual E.
                        </p>

                    </div>
                    <h2 class="display-3 smt-display-6 tab-display-4 smt-container-1 top-padding-5 bottom-margin-3">Tutoriales</h2>

                    <div class="card-1">

                        <p class="top-margin-8 container-2 smt-container-1 smt-txt-size-2sm tab-txt-size-5sm bottom-margin-0 justify-txt">Esta es una demostración de como se utiliza el componente <b>Button</b> dentro de una aplicación de Reactjs.

                            <div className='cont-scroll-2 container-2 tab-txt-size-2 smt-txt-size-1 '>
                                <CopyButton text={codeString1} />
                                <SyntaxHighlighter language="html" style={docco} wrapLongLines={true}>
                                    {codeString1}
                                </SyntaxHighlighter>
                            </div>

                        </p>

                        <p class="top-margin-8 container-2 smt-container-1 smt-txt-size-2sm tab-txt-size-5sm bottom-margin-0 justify-txt">Esta es una demostración de como se utiliza el componente <b>Jumbotron</b> dentro de una aplicación de Reactjs.</p>

                            <div className='cont-scroll-2 container-2 tab-txt-size-2 smt-txt-size-1'>
                                <CopyButton text={codeString2} />
                                <SyntaxHighlighter language="html" style={docco} wrapLongLines={true}>
                                    {codeString2}
                                </SyntaxHighlighter>
                            </div>

                    </div>
                </section>




                <script src=""></script>
                <script>hljs.highlightAll();</script>

            </div>

            <Footer />

        </>
    )
}