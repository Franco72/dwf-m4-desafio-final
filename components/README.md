# Requerimientos para el uso de los diferentes componentes

# headerComponent

# necesita de la font "Poppins" y su estilo "Regular 400"

# necesita un kit de fontAwesome el cual tenga este icono dentro "fa-bars", el kit debe ser importado antes de importar este componente

# necesita importar su script y su hoja de estilos antes de ser llamado

# la forma de usarlo es llamando a la función headerComponent(container), debe recibir un parámetro que es el contenedor en el cual vivirá

# cardsComponent

# necesita la font "Poppins y su estilo "Regular 400" y la font "Montserrat" y su estilo "Bold 700"

# necesita importar su script y su hoja de estilos antes de ser llamado

# la forma de usarlo es llamando a la función cardsComponent(container, titleOfCards, data), el primer parámetro va a ser el contenedor donde vivirá, el segundo es el título que tendrá esta sección de cards, y el tercer parámetro será una collection, cada objeto de esta collection debe tener como mínimo esta estructura

{
title: - texto que será el título de la card
text: - una pequeña descripción de lo que trata la card
img: - url de la imágen que sere verá en la card
altImg: - pequeña descripción de la imagen
}
(todos estos datos en formato "string")

Opcionalmente, se pueden añadir 2 datos más
link:
textOfLink:

Si se pasan estos 2 datos se generará un botón, el "textOfLink" va a ser lo que se vea en el botón y el "link" va a ser la url donde será redireccionado el usuario al hacer click

# footerComponent

# necesita de la font "Poppins" y su estilo "Regular 400"

# necesita importar su script y su hoja de estilos llamado

# la forma de usarlo es llamando a la función footerComponent(container), debe recibir un parámetro que es el contenedor en el cual vivirá

# necesita un kit de fontAwesome el cual tenga estos iconos dentro "fa-bars","fa-instagram","fa-linkedin","fa-github", el kit debe ser importado antes de importar este componente
