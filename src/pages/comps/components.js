import DocHeader from "../../page-components/docheader";
import Slider from "../../components/slider";
import React, { useState } from 'react';
import Accordion from "../../components/accordion";
import Footer from "../../components/footer";
import SearchBar from "../../components/searchbar";
import Jumbotron from "../../components/jumbotron";
import Breadcrumbs from "../../components/breadcrumb";
import Modal from "../../components/modals";

export default function Components() {

  const imageUrls = [
    'https://www.petful.com/wp-content/uploads/2015/05/Turkish-Van-cat-1-750x507.jpg',
    'https://d3544la1u8djza.cloudfront.net/APHI/Blog/2021/08-26/white+Turkish+van+cat+with+one+green+eye+and+one+blue+eye+and+blue+collar+being+held+by+a+human-min.jpg',
    'https://i0.wp.com/ittykitty.com/wp-content/uploads/2018/04/turkish-van-cat-1.jpg?resize=696%2C695',

  ];

  const product = {
    id: 123,
    name: 'Zapatillas deportivas',
    category: 'Calzado',
    brand: 'MiMarca',
  };

  const breadcrumbsItems = [
    { label: 'Inicio', link: '/' },
    { label: 'Productos', link: '/productos' },
    { label: product.category, link: `/productos/${product.category}` },
    { label: product.name, link: `/productos/${product.category}/${product.id}` },
  ];

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <DocHeader />

      <div class="b-red500 top-margin-0">
        <h1 class="display-3 smt-display-5 tab-display-4 left-padding-3 container-1 top-margin-0 top-padding-2 t-white50">Componentes</h1>
        <p class="container-1 left-padding-6 top-margin-0 bottom-padding-5 t-white50 smt-txt-size-2sm tab-txt-size-4sm">Nuestros componentes completamente modificables!</p>
      </div>


      <div class="container-3 smt-container-1 tab-container-3">
        <h1 class="display-1 smt-display-5 tab-display-2 center-txt bottom-margin-3 container-3 smt-container-1">Slider</h1>
        <p class="container-3 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1">Los containers en son elementos que envuelven y contienen otros elementos.
          Pueden ser utilizados para aplicar estilos; como márgenes, rellenos, anchos y alturas a un grupo de elementos.</p>
      </div>

      <section class="container-3 smt-container-1 tab-container-2">
        <div class="container-2 smt-container-1 card-1 b-white50 tab-container-1">

          <div>
            <Slider images={imageUrls} />
          </div>

          <div>
            <SearchBar />
          </div>

          <div>
            <Jumbotron className={"jumbotron b-red500"} title={"Hola Mundo!"} description={"Bienvenidos a mi primer Jumbotron"} />
          </div>

          <div>
            <Breadcrumbs className={"breadcrumbs"} items={breadcrumbsItems} />
            <h1>{product.name}</h1>
            <p>Marca: {product.brand}</p>
          </div>


          <div>
            <button onClick={openModal}>Abrir Modal</button>
            <Modal isOpen={showModal} onClose={closeModal}>
              <h2>Holaaaaaaa</h2>
              <p>Esto es un mensaje</p>
            </Modal>
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

        <div>
          <div></div>
          <iframe width="820.33"
            height="497"
            title="aa"
            src="https://snappify.com/embed/b81ea337-847d-4cef-aa02-7566ce56c156/3cbfea16-5d67-4b9e-85d7-00031d5de8c2?responsive=1&autoplay=1&b=0"
            allow="clipboard-write"
            allowfullscreen=""
            loading="lazy"
            frameborder="0"></iframe>
        </div>

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

      <Footer />
    </>

  )
}