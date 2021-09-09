class FavouriteTrails extends HTMLElement {
    savedTrails = 
        {
        title: "Lion's Head",
        description : "Very long hike, worth it for the view!",
        mapImage : "placeholder for image"
        }

    shadow = this.attachShadow({ mode: 'closed' })
    constructor(){
        super()
        
    }
    render(){
        const title = this.getAttribute("data-title")
        const description = this.getAttribute("data-description")
        const mapImage = "placeholder for image"

        this.shadow.innerHTML = `
        <style>
            img {
                width: 100%;
            }

        </style>
        <div class="trail">
            <h2>${this.savedTrails.title}</h2>
            <p>${this.savedTrails.description}</p>
            <div class="map-image"><img src="https://hikelionshead.co.za/wp-content/uploads/2018/04/Advanced-Lions-Head-hike-map.png" alt="Trail location on map"</div>
        </div>`
    }
    connectedCallback() {
        this.render()
    }
}

customElements.define("favourite-trails", FavouriteTrails)

