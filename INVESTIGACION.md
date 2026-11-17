1. ¿Qué problema resuelven los Web Components y qué aporta cada tecnología: Custom Elements, Shadow DOM y HTMLTemplates?

RTA:Soluciona los problemas de fragmentación y falta de modularidad nativa en HTML. Con Custom Elements podemos crear nuevos tipos de etiquetas HTML personalizadas con su propio comportamiento dinámico. Los Shadow DOM nos permiten aislar los estilos o el marcado interno de nuestro componente para que no afecten al resto de la página. Por último, los HTML Templates nos dan la estructura pasiva de nuestro marcado que se clonará y podrá ser reutilizado varias veces.

2. ¿En qué se diferencia un <template> de un <div> oculto con display: none ?
Piensa en qué se muestra, qué se ejecuta y qué encuentra document.querySelector .

RTA: Un <div> oculto es procesado inmediatamente por el navegador (sus imágenes se cargan, sus scripts se ejecutan y el DOM lo indexa). En cambio, el contenido dentro de un <template> permanece latente e inactivo: el navegador no carga sus recursos internos ni ejecuta sus scripts hasta que JavaScript clona e inserta explícitamente su contenido en el DOM. Además, document.querySelector no busca dentro de los elementos hijos directos de un template a menos que se acceda a su propiedad .content.

3. ¿Qué cambia entre el Shadow DOM en modo "open" y en modo "closed" ?