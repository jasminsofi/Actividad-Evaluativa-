const templateMascota = document.createElement('template');

class MascotaFicha extends HTMLElement {
    constructor() {
        super();
        // Se adjunta el Shadow DOM en modo open
        this.attachShadow({ mode: 'open' });
        
        //  Se clona el contenido del template dentro del Shadow DOM
        const templateContent = document.getElementById('template-mascota').content;
        this.shadowRoot.appendChild(templateContent.cloneNode(true));
    }

    // Observamos los atributos que definen los datos de la mascota
    static get observedAttributes() {
        return ['nombre', 'especie', 'edad', 'proxima-vacuna'];
    }

    // Se ejecuta cuando los atributos cambian o se inicializan
    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    