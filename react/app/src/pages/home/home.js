import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../page-components/header'


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
    return (
        <>

<Header />

<div>

<div class="b-red500 top-margin-0">
        <h1 class="display-3 smt-display-5 tab-display-4 left-padding-3 container-1 top-margin-0 top-padding-2 t-white50">Inicio</h1>
        <p class="container-1 left-padding-6 top-margin-0 bottom-padding-5 t-white50 smt-txt-size-2sm tab-txt-size-4sm">Comienza tus proyectos junto a nosotros, Visual E</p>
    </div>

    <div class="container-3 smt-container-2 tab-container-3">
      <h1 class="display-1 smt-display-5 tab-display-2 center-txt bottom-margin-3 container-3 smt-container-1">Visual E</h1>
      <h2 class="font-normal tab-txt-size-6 smt-txt-size-4sm">Un framework de estilos dirigido a sitios web informativos, intuitivo, compacto y fácil de utilizar.</h2>
    </div>
    
    <section class="container-4 smt-container-2">
        <h2 class="display-3 smt-display-6 tab-display-4 smt-container-1 top-padding-5 bottom-margin-3">Inicio rápido</h2>
        <p class="smt-container-1 smt-txt-size-2sm tab-txt-size-5sm top-margin-0 bottom-padding-5">Antes de comenzar con la creación de tus proyectos web, es necesario que conozcas todos los pasos
            necesarios para la instalación de tu framework de estilos preferido.
        </p>

        <div class="card-1">
            <p class="smt-container-1 smt-txt-size-2sm tab-txt-size-5sm top-margin-0 bottom-padding-5">Puedes comenzar la instalación de Visual E en tus proyectos de manera sencilla, utilizando nuestro link CDN,
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
                        <td>cdn.jsdelivr.net/npm/visual-e-cdn@1.0.0/visual-e.min.css</td>
                    </tr>
                </tbody>    

            </table>
        </div>

            <p class="top-margin-8 smt-txt-size-2sm tab-txt-size-5sm">Para agregar el link CDN de Visual E a tu proyecto, debes seguir los pasos a continuación:</p>

            <p class="top-margin-8 container-2 smt-container-1 smt-txt-size-2sm tab-txt-size-5sm"><b>1:</b> Crea un archivo dentro de la raíz de tu proyecto, hablamos de un archivo como <b>"index.html"</b>, asegúrate de que tenga la etiqueta
                <b>aaa</b>, esto garantiza una mayor responsivdad para dispositivos móbiles.
            </p>

<div class="container-2 smt-container-1 smt-txt-size-2sm tab-container-1 bottom-margin-8">
<pre>
<code class="round-4">
&lt;!doctype html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;
    &lt;title&gt;Visual E Project&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Esto es un ejemplo!&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code>
</pre>

</div>
                                
<p class="top-margin-8 container-2 smt-container-1 smt-txt-size-2sm tab-txt-size-5sm"><b>2:</b> Dentro del archivo html creado, copia el link del CDN de Visual E y añade una etiqueta <b>"link"</b> dentro de el <b>"header"</b>,
    en esta etiqueta pega el link del CDN en el <b>"href"</b>, de la siguiente manera:
</p>

<div class="container-2 smt-container-1 smt-txt-size-2sm tab-container- bottom-margin-8">
<pre>
<code class="round-4">
&lt;!doctype html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;
    &lt;title&gt;Visual E Project&lt;/title&gt;
    &lt;link href=&quot;https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css&quot; rel=&quot;stylesheet&quot; integrity=&quot;sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN&quot; crossorigin=&quot;anonymous&quot;&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Esto es un ejemplo!&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code>
</pre>

</div>

<p class="top-margin-8 container-2 smt-container-1 smt-txt-size-2sm tab-txt-size-5sm"><b>3:</b> ¡Todo listo! Si seguiste los pasos correctamente, entonces significa que ya puedes utilizar todos los estilos y etiquetas
    de Visual E en tu proyecto, recuerda, esto es solo un link CDN; cuando quieras volver a utilizarlo en otro proyecto debes repetir el procedimiento.
</p>

</div>
    </section>




<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

    </div>
        </>
    )
}