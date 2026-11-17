# PARTE 1 · Investigación: Web Components

### 1. ¿Qué problema resuelven los Web Components y qué aporta cada tecnología: Custom Elements, Shadow DOM y HTMLTemplates?

RTA:Soluciona los problemas de fragmentación y falta de modularidad nativa en HTML. Con Custom Elements podemos crear nuevos tipos de etiquetas HTML personalizadas con su propio comportamiento dinámico. Los Shadow DOM nos permiten aislar los estilos o el marcado interno de nuestro componente para que no afecten al resto de la página. Por último, los HTML Templates nos dan la estructura pasiva de nuestro marcado que se clonará y podrá ser reutilizado varias veces.


### 2. ¿En qué se diferencia un `<template>` de un `<div>` oculto con display: none ?


RTA: Un `<div>` oculto es procesado inmediatamente por el navegador (sus imágenes se cargan, sus scripts se ejecutan y el DOM lo indexa). En cambio, el contenido dentro de un `<template>` permanece latente e inactivo: el navegador no carga sus recursos internos ni ejecuta sus scripts hasta que JavaScript clona e inserta explícitamente su contenido en el DOM. Además, document.querySelector no busca dentro de los elementos hijos directos de un template a menos que se acceda a su propiedad .content.


### 3. ¿Qué cambia entre el Shadow DOM en modo "open" y en modo "closed" ?


RTA:En el modo "open", el Shadow DOM es accesible desde el código JavaScript exterior mediante la propiedad element.shadowRoot, facilitando la inspección y la depuración. En el modo "closed", element.shadowRoot devuelve null desde el exterior, bloqueando el acceso directo (aunque no representa una seguridad estricta, ya que puede eludirse si se guardaron referencias previas del shadow root).


4. ¿Qué es un `<slot>` y para qué sirve en un componente reutilizable?


RTA:Un `<slot>` (ranura) es un marcador de posición ubicado dentro del Shadow DOM que permite inyectar contenido HTML personalizado proporcionado por el usuario desde el exterior. Sirve para dotar de flexibilidad a los componentes reutilizables, permitiendo que la estructura base sea fija pero que ciertos bloques de texto o elementos internos varíen dinámicamente en cada instancia.


5. ¿Qué navegadores soportan hoy los Web Components?


RTA:Actualmente, los Web Components cuentan con compatibilidad nativa total en todos los navegadores web modernos de escritorio y dispositivos móviles (Google Chrome, Mozilla Firefox, Apple Safari y Microsoft Edge). Fuente: MDN Web Docs - Web Components. Fecha de consulta: 17 de noviembre de 2026.

## PARTE 2 · Investigación: frameworks, librerías y Node.js

1. Explica con un ejemplo la diferencia entre estándar del navegador, librería, framework
y entorno de ejecución.

RTA: Un estándar del navegador (como Web Components) es una especificación nativa soportada por todos los navegadores sin librerías externas. Una librería (como React) es un conjunto de funciones y herramientas que importas voluntariamente para estructurar vistas de usuario. Un framework (como Angular) es una arquitectura rígida y completa que impone normas estrictas sobre cómo desarrollar toda la aplicación. Por último, un entorno de ejecución (como Node.js) es el motor que permite ejecutar código JavaScript fuera de la ventana del navegador.

2. Completa la tabla con una o dos frases por celda:


| Criterio | Web Components nativos | React / Vue | Angular |
| :--- | :--- | :--- | :--- |
| **Tipo (estándar, librería o framework)** | Estándar web nativo | React: Librería / Vue: Framework progresivo | Framework |
| **Cómo se crea un componente** | Mediante clases de JavaScript que extienden `HTMLElement` y `customElements.define()` | Mediante funciones/clases que retornan sintaxis declarativa (JSX o plantillas virtuales) | Mediante clases decoradas con `@Component` y una estructura modular |
| **Necesita instalar herramientas (npm)** | No (funciona directamente con JavaScript puro) | Sí (requiere Node.js y gestores de paquetes) | Sí (requiere Node.js y herramientas de línea de comandos CLI) |
| **Ventajas principales** | Independencia total de frameworks, alta durabilidad y soporte universal nativo | Enorme ecosistema de complementos, gran flexibilidad y rendimiento óptimo | Arquitectura robusta, ideal para grandes equipos y estandarización corporativa |
| **Desventajas principales** | Falta de características avanzadas integradas; requiere más código base (boilerplate) | Curva de aprendizaje inicial y dependencia constante de actualizaciones externas | Curva de aprendizaje elevada y alta complejidad estructural |

3. ¿Qué es Node.js, para qué se usa y qué relación tiene npm con React, Vue yAngular?
Si una tienda en línea usa React y Node.js, ¿qué hace cada uno?

RTA:Node.js es un entorno de ejecución de JavaScript basado en el motor V8 de Chrome que permite correr código JS en el servidor. npm (Node Package Manager) es el gestor de paquetes que acompaña a Node.js y sirve para descargar e instalar las librerías o frameworks (como React, Vue o Angular) y sus dependencias en el proyecto. En una tienda en línea, React se ejecuta en el navegador del cliente para renderizar los productos, el carrito de compras y la interfaz visual interactiva, mientras que Node.js opera en el servidor gestionando la lógica de negocio, las conexiones a la base de datos y las solicitudes de pago.

4. Elige la herramienta que usarías en cada caso y justifica en 3 a 5 líneas:
a. Un botón de chat que varias empresas pegan en sus propias páginas.
b. Una aplicación web grande para un banco, con muchos equipos de desarrollo

RTA: 
a. Un botón de chat que varias empresas pegan en sus propias páginas:
Usaría Web Components nativos, ya que al ser un estándar del navegador, el widget se integrará perfectamente en cualquier sitio web sin importar si el cliente usa React, Angular, WordPress o HTML plano, evitando conflictos de estilos gracias al Shadow DOM.

b. Una aplicación web grande para un banco, con muchos equipos de desarrollo:
Usaría Angular, porque al ser un framework opinionado y estructurado, establece reglas claras, arquitectura modular y TypeScript por defecto, lo que facilita que múltiples equipos trabajen ordenadamente bajo los mismos estándares corporativos.

## Fuentes de investigación 
MDN Web Docs - Web Components. Disponible en: https://developer.mozilla.org/es/docs/Web/API/Web_components. Fecha de consulta: 17 de noviembre de 2026.

MDN Web Docs - Uso de plantillas y espacios (Templates y Slots). Disponible en: https://developer.mozilla.org/es/docs/Web/API/Web_components/Using_templates_and_slots. Fecha de consulta: 17 de noviembre de 2026.

Node.js Documentation - About Node.js. Disponible en: https://nodejs.org/en/about. Fecha de consulta: 17 de noviembre de 2026.