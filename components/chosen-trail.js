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
                <h2>123</h2>
                <p></p>
                <div class="map-image"></div>
            </div>
        `
    }
}



customElements.define("chosen-trail", ChosenTrail)