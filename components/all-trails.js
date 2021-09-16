class AllTrails extends HTMLElement {
    shadow = this.attachShadow({ mode: 'closed' })
    constructor(){
        super()
    }
    render(){
        this.shadow.innerHTML = `
        <style>
            .trail-cards{
                // padding-top: 1rem;
                padding-bottom: 6rem;
            }
        </style>
        <div class="trail-cards">
            <hiking-trail></hiking-trail>
            <hiking-trail></hiking-trail>
            <hiking-trail></hiking-trail>
            <hiking-trail></hiking-trail>
        </div>`
    }
    connectedCallback(){
        this.render()
    }
}

customElements.define("all-trails", AllTrails)
