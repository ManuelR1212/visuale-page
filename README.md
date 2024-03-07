![Logo](https://github.com/ManuelR1212/Visual-E-Framework/assets/156364733/9d4b5ef5-a93d-4986-90eb-c28015a10c66)

[![Licence](https://img.shields.io/badge/Licence-MIT-green?labelColor=gray&style=flat&link=https://github.com/ManuelR1212/Visual-E-Framework/blob/master/LICENSE)](https://github.com/ManuelR1212/Visual-E-Framework/blob/master/LICENSE) [![npm package](https://img.shields.io/badge/npm%20package-10.4.0-green?labelColor=gray&style=flat&link=https://github.com/ManuelR1212/Visual-E-Framework/blob/master/LICENSE)](https://github.com/ManuelR1212/Visual-E-Framework/blob/master/LICENSE) [![stable](https://img.shields.io/badge/stable-1.0.0-blue?labelColor=gray&style=flat&link=https://github.com/ManuelR1212/Visual-E-Framework/blob/master/LICENSE)](https://github.com/ManuelR1212/Visual-E-Framework/blob/master/LICENSE)


# Visual E

Este es el repositorio oficial de Visual E, donde encontrarás la información necesaria para su implementación en tus proyectos, como; plugins, dependencias y tutoriales. Para una mayor información, visita la página de [documentación](https://manuelr1212.github.io/visuale-page/).

## Introducción

Visual E es un framework de estilos CSS moderno, con adaptabilidad para proyecytos de ReactJS. Está orientado principalmente al diseño de páginas web informativas, sin embargo, si eres un principiante en el mundo de los estilos web, seguro que Visual E podrá ayudarte; es un framework, dinámico, accesible y lo mejor de todo, ¡Muy fácil de usar!  </p>

Si manejar únicamente CSS y HTML es lo tuyo, Visual E te ofrece una amplia cantidad de estilos y atajos bastante interesantes para tus proyectos HTML.

```html
<!DOCTYPE html>
<html>
    <head>
        <mate charest="utf-8" />
        <title>Mi proyecto!</title>
    </head>
    <body>
        <h1 class="txt-size-2 center-txt, t-white50">¡Noticia de última hora!</h1>
    </body>
</html>
```

Por otro lado, puedes combinar tus proyectos de ReactJS con Visual E. Utilizando sus componentes modulares y completamente modificables a tu preferencia.

```javascript
function App() {
return (
< 
    <Header/> /* Importando un super componente! */
	<h1 class="display-1 left-txt">pulsa el botón para despegar!</h1>
	<Button/> /* Botón modificable */
/>)
}
```
Este ejemplo te muestra una pequeña parte de todas las funciones que ofrece Visual E para tus proyectos, para aprender más sobre ellas visita la [documentación](https://manuelr1212.github.io/visuale-page/).

¿Te sientes preparado? Sigue los pasos en la sección de "inicio rápido" para comenzar con tus proyectos.

## Inicio Rápido

Visual E ofrece a aquellos usuarios que necesiten de un diseño rápido pero agradable y consistente, un método de implementar el framework en sus proyectos sin necesidad de instalaciones previas; todo esto através del uso del [Link CDN](https://cdn.jsdelivr.net/npm/visual-e-cdn@1.0.0/visual-e.min.css) de Visual E.

`https://cdn.jsdelivr.net/npm/visual-e-cdn@1.0.0/visual-e.min.css`

Pega el [Link CDN](https://cdn.jsdelivr.net/npm/visual-e-cdn@1.0.0/visual-e.min.css) dentro del "head" de tu código HTML. Simplemente con esto, podrás utilizar todos los estilos y etiquetas de Visual E dentro de tu proyecto, para una mayor información, visita la página de [documentación](https://manuelr1212.github.io/visuale-page/).

```html
<!DOCTYPE html>
<html lang="en"> 
  <head> 
    <meta charset="utf-8"> 
	 <meta name="viewport" content="width=device-width, initial-scale=1">
	 <title>Visual E Project</title>
	 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"> 
  </head>
</html>
```

Visual E también ofrece una versión adaptada a ReactJs, perfecta para todos aquellos usuarios que quieran experimentar con sus proyectos de React y los componentes de Visual E.

Antes de instalar Visual E en tus proyectos, asegurate de tener una versión de Node.js v21.1.0 o superior en tu sistema. Lo siguiente es ejecutar el comando de instalación de Visual E usando npm en la raíz de tu proyecto de React.

`$ npm install visual-e`

Esto hará que npm instale todos los paquetes necesarios para que puedas utilizar Visual E en tus proyectos de React. npm arrojará una carpeta con todos los componentes de Visual E, además de otorgarte la posibilidad de utilizar todos los estilos CSS del framework. Una vez terminado el proceso, es necesario que importes las carpetas "components" y "styles" en los archivos de tu proyecto que requieran de la mano de Visual E.

## Documentación

Podrás encontrar toda la documentación disponible de Visual E, en nuestra [página web oficial](https://manuelr1212.github.io/visuale-page/). La documentación de Visual E sigue en desarrollo, te invitamos a empezar tus proyectos con nosotros!

## Licencia

Visual E cuenta con una licencia MIT. Puedes averiguar más y leer sobre la misma aquí.