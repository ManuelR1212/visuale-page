import DocHeader from "../../page-components/docheader";
import React, { useState } from 'react';
import Footer from "../../components/footer";
import Modal from "../../components/modals";
import CopyButton from "../../page-components/CopyButton";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function ModalPage() {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };


    const codeString1 = `import React, { useState, useEffect } from 'react';
import '../styles/framework.css';
    
    const Modal = ({ isOpen, onClose, children }) => {
        const [isVisible, setIsVisible] = useState(false);
      
        useEffect(() => {
          setIsVisible(isOpen);
        }, [isOpen]);
      
        const closeModal = () => {
          setIsVisible(false);
          onClose();
        };
      
        return (
          <div className={"modal $ {isVisible ? 'visible' : ''}"}>
            <div className="modal-content">
              <button className="close-button" onClick={closeModal}>
                &times;
              </button>
              {children}
            </div>
          </div>
        );
      };
    
    export default Modal;`

    const codeString2 = `const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };`



    return (
        <>
            <DocHeader />

            <div class="b-red500 top-margin-0">
                <h1 class="display-3 smt-display-5 tab-display-4 left-padding-3 container-1 top-margin-0 top-padding-2 t-white50">Componentes</h1>
                <p class="container-1 left-padding-6 top-margin-0 bottom-padding-5 t-white50 smt-txt-size-2sm tab-txt-size-4sm">Nuestros componentes completamente modificables!</p>
            </div>




            <div class="container-3 smt-container-1 tab-container-3">
                <h1 class="display-1 smt-display-5 tab-display-2 center-txt bottom-margin-3 container-3 smt-container-1">Modal</h1>
                <p class="container-3 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">El Modal en de Visual E es una ventana emergente que se superpone al contenido principal de una página web. Este cuador de diálogo,
                    permite mostrar información adicional de manera no intrusiva. Al abrir el modal, se oscurece el fondo y se presenta un contenido específico, como formularios, detalles o mensajes. El Modal puede cerrarse al presionar la “x”. Solo se puede tener un modal abierto a la vez, esto evita que se abran múltiples ventanas emergentes simultáneamente</p>
            </div>

            <section class="container-3 smt-container-1 tab-container-2">
                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Uso de Modal</h1>
                <div class="container-2 smt-container-1 card-1 tab-container-1">

                    <p class="container-1 smt-container-1 top-margin-9 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Comprender el Modal de Visual E es bastante sencillo, el mismo cuenta con una función que mantiene el Modal siempre cerrado. Por otro lado,
                        cuenta, con una función adicional que es la que permite abrir el modal cuando se haga click en el botón; de manera que aplicará los estilos correspondientes mostrando la información solicitada.</p>

                    <div className='cont-scroll-2 container-2 txt-size-4 tab-txt-size-2 smt-txt-size-1'>
                        <CopyButton text={codeString1} />
                        <SyntaxHighlighter language="js" style={atomOneDark} wrapLongLines={true}>
                            {codeString1}
                        </SyntaxHighlighter>
                    </div>

                </div>


            </section>

            <section class="container-3 smt-container-1 tab-container-2">

                <p class="container-2 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Es importante tener en cuenta, que para poder usar el modal debes declarar su estado en tu archivo JSX.
                    Es decir, debes pegar las siguientes funciones para que el componente funcione correctamente, de lo contrario, el modal no se mostrará como debe.</p>

                <div class="container-2 smt-container-1 card-1 tab-container-1">

                    <div className='cont-scroll-2 container-2 txt-size-4 tab-txt-size-2 smt-txt-size-1'>
                        <CopyButton text={codeString2} />
                        <SyntaxHighlighter language="js" style={atomOneDark} wrapLongLines={true}>
                            {codeString2}
                        </SyntaxHighlighter>
                    </div>

                        <p class="container-1 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Recuerda, estas funciones son de suma importancia, ya que, permitirán establecer el estado del Modal. 
                        Es decir, si está activo o inactivo.</p>
                  
                </div>

            </section>

            <section class="container-3 smt-container-1 tab-container-2">
                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Ejemplo de uso</h1>

                <div class="container-2 smt-container-1 card-1 tab-container-1">

                    <p class="container-1 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Para añadir el Modal dentro de tus proyectos, 
                    simplemente tendrás que crear un botón con la función <b>OpenModal</b>, luego de eso, importa el componente con <b>Modal</b>. Dentro de la etiqueta, declara el isOpen y el OnClose de la manera que se muestra en el ejemplo. 
                    Dentro, podrás colocar todo el contenido que quieras! Desde enlaces hasta cualquier tipo de texto.</p>


                    <div className='cont-scroll-2 container-2 txt-size-4 tab-txt-size-2 smt-txt-size-1'>
                        <CopyButton text={codeString2} />
                        <SyntaxHighlighter language="js" style={atomOneDark} wrapLongLines={true}>
                            {codeString2}
                        </SyntaxHighlighter>
                    </div>


                    <div className="grid-u col-1 container-4">
                        <button onClick={openModal} className="round-full  b-gray200 t-white50 hover">Abrir Modal</button>
                        <Modal isOpen={showModal} onClose={closeModal} tittle={'Modal Ejemplo Visual E'} content={"Contenido"} className={"b-gray50"}>
                        </Modal>
                    </div>

                </div>

            </section>






            <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js"></script>
            <script>hljs.highlightAll();</script>

            <Footer />
        </>

    )
}