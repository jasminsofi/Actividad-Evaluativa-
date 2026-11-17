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

    // Método auxiliar para actualizar los datos dentro del Shadow DOM de manera segura
    render() {
        const nombre = this.getAttribute('name') || this.getAttribute('nombre') || '';
        const especie = this.getAttribute('especie') || '';
        const edad = this.getAttribute('edad') || '';
        const vacuna = this.getAttribute('proxima-vacuna') || '';

        // Muestra los datos de los atributos en los elementos internos del template
        const elNombre = this.shadowRoot.getElementById('nombre-mascota');
        const elEspecie = this.shadowRoot.getElementById('especie-mascota');
        const elEdad = this.shadowRoot.getElementById('edad-mascota');
        const elVacuna = this.shadowRoot.getElementById('vacuna-mascota');

        if (elNombre) elNombre.textContent = nombre;
        if (elEspecie) elEspecie.textContent = especie;
        if (elEdad) elEdad.textContent = edad;
        if (elVacuna) elVacuna.textContent = vacuna;
    }
}

//Nombre con guion y registrado con customElements.define()
customElements.define('mascota-ficha', MascotaFicha);