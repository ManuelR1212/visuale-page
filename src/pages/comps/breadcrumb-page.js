import DocHeader from "../../page-components/docheader";
import React from 'react';
import Footer from "../../components/footer";
import SyntaxHighlighter from 'react-syntax-highlighter';
import CopyButton from "../../page-components/CopyButton";
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Breadcrumbs from "../../components/breadcrumb";

export default function BreadcrumbPage() {

    const product = {
        id: 123,
        name: 'Zapatillas Deportivas',
        category: 'Calzado >',
        brand: 'Visual Shoes',
    };

    const breadcrumbsItems = [
        { label: 'Inicio >', link: 'https://github.com/visual-e-ve/visuale-page?tab=readme-ov-file' },
        { label: 'Productos >', link: 'https://github.com/visual-e-ve/visuale-page?tab=readme-ov-file' },
        { label: product.category, link: `https://github.com/visual-e-ve/visuale-page?tab=readme-ov-file` },
        { label: product.name, link: `https://github.com/visual-e-ve/visuale-page?tab=readme-ov-file` },
    ];


    const codeString1 = `import React from 'react';
    import PropTypes from 'prop-types';
    import '../styles/framework.css';
    
    const Breadcrumbs = ({ items, className }) => {
      return (
        <nav className={className}>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {item.link ? (
                  <a href={item.link}>{item.label}</a>
                ) : (
                  <span>{item.label}</span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      );
    };
    
    Breadcrumbs.propTypes = {
        className: PropTypes.string,
      };
    
    
    export default Breadcrumbs;
    `

    const codeString2 = `const product = {
        id: 123,
        name: 'Zapatillas Deportivas',
        category: 'Calzado',
        brand: 'Visual Shoes',
    };

const breadcrumbsItems = [
        { label: 'Inicio', link: '/' },
        { label: 'Productos', link: '/productos' },
        { label: product.category, link: "/productos/$ {product.category}" },
        { label: product.name, link: "/productos/$ {product.category}/$ {product.id}" },
    ];
`

    const codeString3 = `<div className="b-red50">
 <Breadcrumbs className={"breadcrumbs b-red200 border-s1"} classNameLi={"b-gray400"} items={breadcrumbsItems} />
 <h1>{product.name}</h1>
 <p>Marca: {product.brand}</p>
</div>`



    return (
        <>
            <DocHeader />

            <div class="b-red500 top-margin-0">
                <h1 class="display-3 smt-display-5 tab-display-4 left-padding-3 container-1 top-margin-0 top-padding-2 t-white50">Componentes</h1>
                <p class="container-1 left-padding-6 top-margin-0 bottom-padding-5 t-white50 smt-txt-size-2sm tab-txt-size-4sm">Nuestros componentes completamente modificables!</p>
            </div>




            <div class="container-3 smt-container-1 tab-container-3">
                <h1 class="display-1 smt-display-5 tab-display-2 center-txt bottom-margin-3 container-3 smt-container-1">Breadcrumb</h1>
                <p class="container-3 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">El Breadcrumb de Visual E es un tipo de esquema de navegación
                    secundario que visualmente indica la ubicación del usuario dentro de la jerarquía de un sitio web. Imagina las “migas de pan” que Hansel y Gretel dejaron en el bosque para encontrar su camino de regreso a casa. De manera similar,
                    las breadcrumbs muestran el camino de regreso al contenido principal de un sitio web</p>
            </div>

            <section class="container-3 smt-container-1 tab-container-2">
                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Uso del Breadcrumb</h1>
                <div class="container-2 smt-container-1 card-1 tab-container-1">

                    <p class="container-1 smt-container-1 top-margin-9 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">La estructura de los Breadcrumb de Visual E, es bastante sencilla y llamativa, la misma retorna un prop,
                        el cual se encarga de asignarle estilos a todo el Breadcrumb; por otro lado, su contenido se basa en <b>items</b>, los cuales representan una serie de los mismos que almacenarán los enlaces para navegación.</p>

                    <div className='cont-scroll-2 container-2 txt-size-4 tab-txt-size-2 smt-txt-size-1'>
                        <CopyButton text={codeString1} />
                        <SyntaxHighlighter language="js" style={atomOneDark} wrapLongLines={true}>
                            {codeString1}
                        </SyntaxHighlighter>
                    </div>

                </div>


            </section>

            <section class="container-3 smt-container-1 tab-container-2">
                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Ejemplo de uso</h1>

                <div class="container-2 smt-container-1 card-1 tab-container-1">

                    <p class="container-1 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">El Breadcrumb de Visual E, necesita que definas las variables correspondientes a los items e index para
                        brindarle información.</p>


                    <div className='cont-scroll-2 container-2 txt-size-4 tab-txt-size-2 smt-txt-size-1'>
                        <CopyButton text={codeString2} />
                        <SyntaxHighlighter language="js" style={atomOneDark} wrapLongLines={true}>
                            {codeString2}
                        </SyntaxHighlighter>
                    </div>


                    <p class="container-1 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Luego de esto, utiliza la etiqueta Breadcrumbs para llamar al componente dentro de tu página web. A su
                        vez, utiliza etiquetas para llamar a las propiedades de las variables previamente definidas. Por ejemplo, un <b>h1</b> para almacenar el nombre de producto o <b>product.name</b>,
                        así mismo con los distintos datos. Para su estilos, se recomienda encerrar dentro de un <b>div</b> y personalizar, sin embargo, puedes utilizar la etiqueta <b>className</b></p>

                    <div className='cont-scroll-2 container-2 txt-size-4 tab-txt-size-2 smt-txt-size-1'>
                        <CopyButton text={codeString3} />
                        <SyntaxHighlighter language="js" style={atomOneDark} wrapLongLines={true}>
                            {codeString3}
                        </SyntaxHighlighter>
                    </div>


                    <div className="b-blue200 smt-txt-size-2sm tab-txt-size-5sm">
                        <Breadcrumbs className={"breadcrumbs b-blue400"} classNameLi={'t-black50'} items={breadcrumbsItems} />
                        <h1>{product.name}</h1>
                        <p>Marca: {product.brand}</p>
                    </div>
                </div>



            </section>





            <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js"></script>
            <script>hljs.highlightAll();</script>

            <Footer />
        </>

    )
}