class Trails extends HTMLElement {
    // shadow = this.attachShadow({ mode: closed })
    constructor(){
        super()
        
    }
    render(){
        const title = this.getAttribute("data-title")
        const description = this.getAttribute("data-description")
        const mapImage = "placeholder for image"
        this.innerHTML = `
        <div class="trail">
            <h2>${title}</h2>
            <p>${description}</p>
            <div class="map-image">${mapImage}</div>
        </div>
        `
    }
    connectedCallback() {
        this.render()
    }
}

window.customElements.define("hiking-trail", Trails)















// class Navbar extends HTMLElement {
//     constructor(){
//         super()
//     }
// }

// window.customElements.define("nav-bar", Navbar)