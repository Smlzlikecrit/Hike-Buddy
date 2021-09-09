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
            <hiking-trail data-title="Lion's Head" data-description="long hike"></hiking-trail>
            <hiking-trail data-title="Peer's Cave" data-description="Easy hike"></hiking-trail>
            <hiking-trail data-title="Simon's Town Waterfall" data-description="beautiful views, easy hike"></hiking-trail>
            <hiking-trail data-title="Chapman's Peak" data-description="long hike, brilliant sea views"></hiking-trail>
        </div>`
    }
    connectedCallback(){
        this.render()
    }
}

customElements.define("all-trails", AllTrails)
