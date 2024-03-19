import DocHeader from "../../page-components/docheader";
import React from 'react';
import Footer from "../../components/footer";
import CopyButton from "../../page-components/CopyButton";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Slider from "../../components/slider";

export default function SliderPage() {

    const codeString1 = `import React, { useState } from 'react';
    import PropTypes from 'prop-types';
    import '../styles/framework.css';
    
    const Slider = ({ images }) => {
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
    
    
      return (
        <>
        <div className='slider-container'> 
        <div className="">
          <img src={images[currentIndex]} alt={"$ {currentIndex + 1}"} className="slider-image"/>
        </div>
    
        <div class="">
          <button onClick={handleNext} className="slider-button tab-txt-size-3sm smt-txt-size-1sm b-none round-full">→</button>
        </div>
    
        </div>   
        </>
      );
    };
    
    Slider.propTypes = {
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
    };
    
    export default Slider;`

    const codeString2 = `<Slider images={imagen}></Slider>`


    const codeString3 = `const imagen = ["https://www.drifted.com/wp-content/uploads/2021/04/initial-d-ae86-thumbnail.jpg", 
"https://gourmetdemexico.com.mx/wp-content/uploads/2019/05/destinos-misteriosos-verano-Qatar-690x384.jpg"]`


    const imagen = ["https://www.drifted.com/wp-content/uploads/2021/04/initial-d-ae86-thumbnail.jpg",
        "https://gourmetdemexico.com.mx/wp-content/uploads/2019/05/destinos-misteriosos-verano-Qatar-690x384.jpg"]



    return (
        <>
            <DocHeader />

            <div class="b-red500 top-margin-0">
                <h1 class="display-3 smt-display-5 tab-display-4 left-padding-3 container-1 top-margin-0 top-padding-2 t-white50">Componentes</h1>
                <p class="container-1 left-padding-6 top-margin-0 bottom-padding-5 t-white50 smt-txt-size-2sm tab-txt-size-4sm">Nuestros componentes completamente modificables!</p>
            </div>




            <div class="container-3 smt-container-1 tab-container-3">
                <h1 class="display-1 smt-display-5 tab-display-2 center-txt bottom-margin-3 container-3 smt-container-1">Slider</h1>
                <p class="container-3 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">El Slider de Visual E,
                    es un elemento gráfico para presentar contenido de manera dinámica. El Slider muestra imágenes o diapositivas que se desplazan suavemente, revelando información relevante, como promociones, productos destacados o noticias. El espacio que ocupa es considerable y no pasa desapercibido. A través de su diseño personalizable,
                    los usuarios pueden navegar entre diferentes imágenes o mensajes.</p>
            </div>

            <section class="container-3 smt-container-1 tab-container-2">
                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Uso de Slider</h1>
                <div class="container-2 smt-container-1 card-1 tab-container-1">

                    <p class="container-1 smt-container-1 top-margin-9 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">El componente Slider cuenta una estructura sencilla. Primeramente hace uso de los props para manejar las imágenes que se almacenen dentro, así como cuenta con una variable que permite contener una cantidad de imágenes ilimitada.
                        Cuenta con una función que permite avanzar entre las imágenes, esta función será asignada al botón para ir avanzando.</p>

                    <div className='cont-scroll-2 container-2 txt-size-4 tab-txt-size-2 smt-txt-size-1'>
                        <CopyButton text={codeString1} />
                        <SyntaxHighlighter language="js" style={atomOneDark} wrapLongLines={true}>
                            {codeString1}
                        </SyntaxHighlighter>
                    </div>

                    <p class="container-1 smt-container-1 top-margin-9 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Debes importar las imágenes que quieras utilizar en tu página web en tu archivo principal.
                        Aquí te dejamos un código que debes copiar para facilitar este proceso. Reemplaza las imágenes de ejemplo por las de tu preferencia, si quieres agregar más, solo separa con una "," y agrega todas esas imágenes!</p>

                    <div className='cont-scroll-2 container-2 txt-size-4 tab-txt-size-2 smt-txt-size-1'>
                        <CopyButton text={codeString3} />
                        <SyntaxHighlighter language="js" style={atomOneDark} wrapLongLines={true}>
                            {codeString3}
                        </SyntaxHighlighter>
                    </div>

                </div>


            </section>

            <section class="container-3 smt-container-1 tab-container-2">
                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Ejemplo de uso</h1>

                <div class="container-2 smt-container-1 card-1 tab-container-1">

                    <p class="container-1 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Nuestro Slider retorna las imágenes 
                    que declaraste, mostrando siempre la primera en estar importada, las demás quedarán ocultas detrás del contenedor. Al momento que se le de click al botón de la flecha, 
                    el Slider comenzará a mostrar su contenido uno por uno.</p>


                    <div className='cont-scroll-2 container-2 txt-size-4 tab-txt-size-2 smt-txt-size-1'>
                        <CopyButton text={codeString2} />
                        <SyntaxHighlighter language="js" style={atomOneDark} wrapLongLines={true}>
                            {codeString2}
                        </SyntaxHighlighter>
                    </div>

                    <Slider images={imagen}></Slider>

                </div>

            </section>





            <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js"></script>
            <script>hljs.highlightAll();</script>

            <Footer />
        </>

    )
}