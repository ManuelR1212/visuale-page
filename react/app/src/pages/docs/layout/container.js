import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import DocHeader from '../../../page-components/docheader';


export default function Container() {
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

    <DocHeader/>

    <div class="b-red500 top-margin-0">
        <h1 class="display-3 smt-display-5 tab-display-4 left-padding-3 container-1 top-margin-0 top-padding-2 t-white50">Documentación</h1>
        <p class="container-1 left-padding-6 top-margin-0 bottom-padding-5 t-white50 smt-txt-size-2sm tab-txt-size-4sm">Todo lo que necesitas saber de Visual.E en un solo lugar.</p>
    </div>


    <div class="container-3 smt-container-1 tab-container-3">
        <h1 class="display-1 smt-display-5 tab-display-2 center-txt bottom-margin-3 container-3 smt-container-1">Containers</h1>
        <p class="container-3 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1">Los containers en son elementos que envuelven y contienen otros elementos. 
            Pueden ser utilizados para aplicar estilos; como márgenes, rellenos, anchos y alturas a un grupo de elementos.</p>

        <p class="container-3 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1">En Visual.E, los containers son fundamentales al momento de desarrollar tu página web, ya que facilitan la contención de distintos componentes.
            Pueden ser utilizados para agregar espacios, márgenes e incluso para centrar elementos y mantenerlos ordenados.</p>
    </div>

    <section class="container-3 smt-container-1 tab-container-2">
        <div class="container-2 smt-container-1 card-1 b-white50 tab-container-1">
            <p class="container-3 smt-container-1 tab-container-2 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm">Visual.E proporciona distintos tipos de containers con medidas individuales, 
                completamente responsive hasta el punto de quiebre:</p>

<div class="container-4 tab-container-3 bottom-margin-8">
 <pre>
<code class="round-4">
&lt;div class=&quot;container-1&quot;&gt;
&lt;span&gt;&iexcl;Estoy dentro de un container!&lt;/span&gt;
&lt;/div&gt;
</code>
 </pre>
                    
</div>
            <p class="container-2 smt-container-1 tab-container-2 smt-txt-size-2sm top-margin-0 bottom-padding-5 tab-txt-size-5sm">Los containers en Visual.E te ofrecen distintas medidas basadas en porcentajes ocupados por la pantalla. 
                Se definen principalmente por la variable --w-box y por un max-width, que limita las dimensiones del contenedor, así como estilos que mejoran su posicionamiento responsive y centrado:</p>  
                
            <div class="cont-scroll-1">
                <code>
                <table class="centered-table container-2 smt-container-1 full-table responsive-table t-black50 smt-txt-size-2sm td-border-s1 th-border-s2 th-bd-red600 th-b-blue500">
                <thead>
                    <tr>
                        <th>Tag</th>
                        <th>Width</th>
                        <th>Max-Width</th>
                    </tr>
                </thead>

                <tbody>
                    <tr class="td-b-red500">
                        <td class="b-red500">.container-1</td>
                        <td>1800px</td>
                        <td>100%</td>
                    </tr>
                    <tr>
                        <td>.container-2</td>
                        <td>1800px</td>
                        <td>90%</td>
                    </tr>
                    <tr>
                        <td>.container-3</td>
                        <td class="b-red500">1800px</td>
                        <td>80%</td>
                    </tr>
                    <tr>
                        <td>.container-4</td>
                        <td>1800px</td>
                        <td>70%</td>
                    </tr>
                </tbody>

                </table>
                </code>
            </div>
        </div>

    </section>

<section class="container-3 smt-container-1 tab-container-1">

    <div>
        <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Ejemplos de uso</h1>
        <p class="container-3 smt-container-1 smt-txt-size-2sm top-margin-0 bottom-padding-5 tab-txt-size-5sm">Un container puede ser utilizado en cualquier parte de tu código HTML, siempre y 
            cuando quieras mantener un orden de los elementos específico, basado en porcentajes ocupados en la pantalla.</p>
    </div>

    <div class="card-1 container-2 smt-container-1">
        <div class="container-3 smt-container-1 tab-container-1 grid-u col-2 tab-col-2 smt-col-1 items-center">

         <div>
            <h4 class="center-txt">Sin uso de "container"</h4>
            <div class="b-blue400">
             <p class="left-txt smt-txt-size-3sm tab-txt-size-5sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, necessitatibus.</p>
            </div>
         </div>
         
         <div>
            <h4 class="center-txt">Uso de "container-1" 100%</h4>
            <div class="b-blue500 container-1">
                <p class="left-txt smt-txt-size-3sm tab-txt-size-5sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, necessitatibus.</p>
            </div>
        </div>

        <div>
            <h4 class="center-txt">Uso de "container-2" 90%</h4>
            <div class="b-blue600 container-2">
                <p class="left-txt smt-txt-size-3sm tab-txt-size-5sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, necessitatibus.</p>
            </div>
        </div>

        <div>
            <h4 class="center-txt">Uso de "container-3" 80%</h4>
            <div class="b-blue700 container-3">
                <p class="left-txt smt-txt-size-3sm tab-txt-size-5sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.</p>
            </div>
        </div>

    </div>
    </div>

    <p class="container-2 top-margin-0 bottom-padding-5 smt-container-2 smt-txt-size-2sm tab-txt-size-5sm">El número de la etiqueta de cada container alterará su porcentaje ocupado en pantalla. Mientras el
        número de la etiqueta sea mayor, el porcentaje irá disminuyendo en un 10%. Los container usan propiedades de "padding" y "margin" para ordenar sus elementos, como se observó en el ejemplo:
    </p>

    <div class="width-5 left-padding-2 container-4 smt-container-4 bottom-margin-8">
<pre>
</pre>

    </div>

    <p class="container-2 top-margin-0 bottom-padding-5 smt-container-2 smt-txt-size-2sm tab-txt-size-5sm">Puedes usar un container dentro de otro. Juega con sus propiedades para crear estilos totalmente originales:
    </p>

    <pre>
        <code class="round-4">
    &lt;div class=&quot;card-1 container-2 b-blue600 round-6&quot;&gt;
        &lt;div class=&quot;card-1 container-3 b-red500 round-full&quot;&gt;
            &lt;h2 class=&quot;center-txt t-white50&quot;&gt;Zyzz ✉️&lt;/h2&gt;
            &lt;p class=&quot;container-2 top-margin-0 bottom-padding-5 center-txt&quot;&gt; &iexcl;Hola bro! &iquest;Quieres ir al gym conmigo hoy?
        &lt;/div&gt;
    &lt;/div&gt;
        </code>
     </pre>
     
     <h1 class="display-1 center-txt margin-none smt-display-5">=</h1>

    <div class="card-1 container-2 b-gray400 smt-container-2 round-6">
        <div class="card-1 container-3 b-red500 smt-container-3 round-full">
            <h2 class="center-txt t-white50 smt-txt-size-3sm">Zyzz ✉️</h2>
            <p class="container-2 top-margin-0 bottom-padding-5 txt-size-6 center-txt smt-txt-size-2sm smt-container-1"> ¡Hola bro! ¿Quieres ir al gym conmigo hoy? </p>
        </div>
    </div>


</section>


<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

</>

    )
}