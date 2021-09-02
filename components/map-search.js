class MapSearch extends HTMLElement {
    shadow = this.attachShadow({ mode: 'closed' })
    constructor(){
        super()
    }

    connectedCallback() {
        this.render()
    }

    render(){
        this.shadow.innerHTML = `
        <style>
            #map-search {
                margin-top: 0.5rem;
                width: 15rem;
                height: 2rem;
            }
            #map-search-btn {
                height: 2rem;
            }
            #map-container {
                margin-top: 0.5rem;
                border: 1px solid green;
            }
        </style>
        <div>
            <input type="text" name="map-search" id="map-search" placeholder="Find a Location">
            <button id="map-search-btn">Search</button>
        </div>
        <div id="map-container">
            map related data goes here
        </div>
        `
    }
}

window.customElements.define("map-search", MapSearch)