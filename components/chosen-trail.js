class ChosenTrail extends HTMLElement {
    shadow = this.attachShadow({ mode: 'closed' })

    constructor(){
        super()
    }


    connectedCallback(){
        this.render()
    }

    disconnectedCallback(){}

    // Custom Methods
    render(){
        this.shadow.innerHTML = `
            <div class="trail">
                <h2>${this.data.title}</h2>
                <p>${this.data.description}</p>
                <div class="map-image">${this.data.mapImage}</div>
            </div>
        `
    }
}



window.customElements.define("chosen-trail", ChosenTrail)