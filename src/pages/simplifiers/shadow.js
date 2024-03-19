import React, { useEffect } from 'react';
import DocHeader from '../../page-components/docheader';
import Footer from '../../components/footer';


export default function Shadow() {
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
                <h1 class="display-1 smt-display-5 tab-display-2 center-txt bottom-margin-3 container-3 smt-container-1">Sombras</h1>
                <p class="container-3 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Visual E ofrece una amplia cantidad de sombreados para tus elementos. Simplemente añade el selector de clase, los números crecientes de las sombras no significan que sean más grandes o más pequeños, simplemente cada número representa un tipo de sombra diferente. Puedes aplicar distintos tipos de sombra a distintos elementos,
                    pero no distintas sombras a un solo elemento.</p>

            </div>

            <section class="container-3 smt-container-1 tab-container-2">
                <h1 class="display-4 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">shadow-1</h1>
                <div class="container-2 smt-container-1 card-1 tab-container-1">


                    <section class="grid-u col-1 md-col-1 tab-col-1 smt-col-1 center-txt display-6 tab-txt-size-5 smt-txt-size-2 container-3">
                        <div className='card-1 b-red500 shadow-1'>Sombra</div>
                    </section>

                </div>

                <h1 class="display-4 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">shadow-2</h1>
                <div class="container-2 smt-container-1 card-1 tab-container-1">


                    <section class="grid-u col-1 md-col-1 tab-col-1 smt-col-1 center-txt display-6 tab-txt-size-5 smt-txt-size-2 container-3">
                        <div className='card-1 b-red500 shadow-2'>Sombra</div>
                    </section>

                </div>

                <h1 class="display-4 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">shadow-3</h1>
                <div class="container-2 smt-container-1 card-1 tab-container-1">


                    <section class="grid-u col-1 md-col-1 tab-col-1 smt-col-1 center-txt display-6 tab-txt-size-5 smt-txt-size-2 container-3">
                        <div className='card-1 b-red500 shadow-3'>Sombra</div>
                    </section>

                </div>

                <h1 class="display-4 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">shadow-4</h1>
                <div class="container-2 smt-container-1 card-1 tab-container-1">


                    <section class="grid-u col-1 md-col-1 tab-col-1 smt-col-1 center-txt display-6 tab-txt-size-5 smt-txt-size-2 container-3">
                        <div className='card-1 b-red500 shadow-4'>Sombra</div>
                    </section>

                </div>

                <h1 class="display-4 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">shadow-5</h1>
                <div class="container-2 smt-container-1 card-1 tab-container-1">


                    <section class="grid-u col-1 md-col-1 tab-col-1 smt-col-1 center-txt display-6 tab-txt-size-5 smt-txt-size-2 container-3">
                        <div className='card-1 b-red500 shadow-5'>Sombra</div>
                    </section>

                </div>

                <h1 class="display-4 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">shadow-6</h1>
                <div class="container-2 smt-container-1 card-1 tab-container-1">


                    <section class="grid-u col-1 md-col-1 tab-col-1 smt-col-1 center-txt display-6 tab-txt-size-5 smt-txt-size-2 container-3">
                        <div className='card-1 b-red500 shadow-8'>Sombra</div>
                    </section>

                </div>

                <h1 class="display-4 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">shadow-7</h1>
                <div class="container-2 smt-container-1 card-1 tab-container-1">


                    <section class="grid-u col-1 md-col-1 tab-col-1 smt-col-1 center-txt display-6 tab-txt-size-5 smt-txt-size-2 container-3">
                        <div className='card-1 b-red500 shadow-7'>Sombra</div>
                    </section>

                </div>

                <h1 class="display-4 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">shadow-8</h1>
                <div class="container-2 smt-container-1 card-1 tab-container-1">


                    <section class="grid-u col-1 md-col-1 tab-col-1 smt-col-1 center-txt display-6 tab-txt-size-5 smt-txt-size-2 container-3">
                        <div className='card-1 b-red500 shadow-8'>Sombra</div>
                    </section>

                </div>

                <h1 class="display-4 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">shadow-9</h1>
                <div class="container-2 smt-container-1 card-1 tab-container-1">


                    <section class="grid-u col-1 md-col-1 tab-col-1 smt-col-1 center-txt display-6 tab-txt-size-5 smt-txt-size-2 container-3">
                        <div className='card-1 b-red500 shadow-9'>Sombra</div>
                    </section>

                </div>

                <h1 class="display-4 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">shadow-10</h1>
                <div class="container-2 smt-container-1 card-1 tab-container-1">


                    <section class="grid-u col-1 md-col-1 tab-col-1 smt-col-1 center-txt display-6 tab-txt-size-5 smt-txt-size-2 container-3">
                        <div className='card-1 b-red500 shadow-10'>Sombra</div>
                    </section>

                </div>




            </section>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js"></script>
            <script>hljs.highlightAll();</script>

            <Footer />
        </>

    )
}