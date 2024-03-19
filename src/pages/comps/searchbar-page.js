import DocHeader from "../../page-components/docheader";
import React from 'react';
import Footer from "../../components/footer";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SearchBar from "../../components/searchbar";
import CopyButton from "../../page-components/CopyButton";

export default function SearchbarPage() {

    const codeString1 = `import React, { useState } from 'react';
import '../styles/framework.css'; 

    const SearchBar = ({ onSearch }) => {
      const [searchTerm, setSearchTerm] = useState('');
    
      const handleSearch = () => {
        // Lógica para realizar la búsqueda
        onSearch(searchTerm);
      };
    
      return (
        <div className="search-bar">
          <input class="searchbar-input"
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button class="searchbar-button" onClick={handleSearch}>Buscar</button>
        </div>
      );
    };
    
    export default SearchBar;
     export default Navbar;
      `

    const codeString2 = `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <Searchbar />
</body>
    `



    return (
        <>
            <DocHeader />

            <div class="b-red500 top-margin-0">
                <h1 class="display-3 smt-display-5 tab-display-4 left-padding-3 container-1 top-margin-0 top-padding-2 t-white50">Componentes</h1>
                <p class="container-1 left-padding-6 top-margin-0 bottom-padding-5 t-white50 smt-txt-size-2sm tab-txt-size-4sm ">Nuestros componentes completamente modificables!</p>
            </div>




            <div class="container-3 smt-container-1 tab-container-3">
                <h1 class="display-1 smt-display-5 tab-display-2 center-txt bottom-margin-3 container-3 smt-container-1">Searchbar</h1>
                <p class="container-3 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">En Visual E, el Searchbar o barra de navegación, 
                es tan sencillo de entender como su nombre; es un componente que se encarga de realizar búsquedas y filtrados dentro de tu página web al introducir información en un formulario o input, 
                de manera que la barra se encargará de mostrarte la información que necesites..</p>
            </div>

            <section class="container-3 smt-container-1 tab-container-2">
                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Uso del Searchbar</h1>
                <div class="container-2 smt-container-1 card-1 tab-container-1">

                    <p class="container-1 smt-container-1 top-margin-9 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Nuestro Searchbar, cuenta con diseño simple, completamente modificable y adaptable a cualquier tipo de estilos. 
                    Para introducirlo en tu página web es necesario que importes el componente como si fuera cualquier otro.</p>

                    <div className='cont-scroll-2 container-2 txt-size-4 tab-txt-size-2 smt-txt-size-1'>
                    <CopyButton text={codeString1} />
                        <SyntaxHighlighter language="js" style={atomOneDark} wrapLongLines={true}>
                            {codeString1}
                        </SyntaxHighlighter>
                    </div>

                    
                    <p class="container-1 smt-container-1 top-margin-8 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Es importante resaltar que el Searchbar cuenta con una función vacía, que debería ser la encargada de filtrar los elementos de búsqueda que desees. Sin embargo, eso lo dejamos completamente en tus manos, 
                    ¡diviértete con las funciones que se acomoden a tus necesidades!</p>

                </div>


            </section>

            <section class="container-3 smt-container-1 tab-container-2">
                <h1 class="display-2 smt-display-5 tab-display-4 left-txt bottom-margin-3 container-3 smt-container-1">Ejemplo de uso</h1>

                <div class="container-2 smt-container-1 card-1 tab-container-1">

                    <p class="container-1 smt-container-1 top-margin-0 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Al momento de utilizar el componente en tu página web, simplemente haz una importación sencilla del mismo. 
                    Con esto, deberías poder observar sin problemas nuestro componente de Sidebar, accede a sus archivos para modificar sus estilos.</p>


                    <div className='cont-scroll-2 container-2 txt-size-4 tab-txt-size-2 smt-txt-size-1'>
                    <CopyButton text={codeString2} />
                        <SyntaxHighlighter language="js" style={atomOneDark} wrapLongLines={true}>
                            {codeString2}
                        </SyntaxHighlighter>
                    </div>

                    <div className="smt-txt-size-2sm tab-txt-size-5sm">

                    <SearchBar/>

                    </div>

                    <p class="container-1 smt-container-1 top-margin-8 bottom-padding-5 smt-txt-size-2sm tab-txt-size-5sm tab-container-1 justify-txt">Realiza todas tus búsquedas de una manera original y estilizada. Recuerda, puedes modificar los estilos en el archivo searchbar.js a tus necesidades. Juega con las props
                    y crea distintos searchbar dentro de una misma página web.</p>
                </div>

            </section>





            <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js"></script>
            <script>hljs.highlightAll();</script>

            <Footer />
        </>

    )
}