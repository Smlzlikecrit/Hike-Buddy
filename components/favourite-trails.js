class FavouriteTrails extends HTMLElement {
    shadow = this.attachShadow({ mode: 'closed' })
    constructor(){
        super()
        
    }
    render(){
        const title = this.getAttribute("data-title")
        const description = this.getAttribute("data-description")
        const mapImage = "placeholder for image"

        this.shadow.innerHTML = `  
            <div class="trail">
                <h2>${title}</h2>
                <p>${description}</p>
                <div class="map-image">${mapImage}</div>
            </div>`
    }
    connectedCallback() {
        this.render()
    }
}

customElements.define("favourite-trail", FavouriteTrails)

