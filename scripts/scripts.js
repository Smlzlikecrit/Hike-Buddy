class Trails extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({ mode: 'open' })
    }
    render(){
        const title = this.getAttribute("title")
        const description = this.getAttribute("description")
        const mapImage = "placeholder for image"
        this.innerHTML = `
        <div class="trail">
            <h2>${data-title}</h2>
            <p>${data-description}</p>
            <div class="map-image">${data-mapImage}</div>
        </div>
        `
    }
    connectedCallback() {
        this.render()
    }
}

window.customElements.define("hiking-trails", Trails)















class Navbar extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({ mode: 'open' })
    }
}

window.customElements.define("nav-bar", Navbar)