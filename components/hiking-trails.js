class HikingTrails extends HTMLElement {
    /* Variables */
    data = {
        title : this.getAttribute("data-title"),
        description : this.getAttribute("data-description"),
        mapImage : "placeholder for image"
    }

    elements = {
        h2: null,
        p: null,
        div: null
    }
    
    shadow = this.attachShadow({ mode: 'closed' })


    /* Internal Methods */

    constructor(){
        super()
        
    }


    connectedCallback() {
        this.render()

        this.elements = {
            title: this.shadow.querySelector("h2"),
            description: this.shadow.querySelector("p"),
            button: this.shadow.querySelector(".view-button"),
            mapImage: this.shadow.querySelector(".map-image")
        }


        //Add EventListener to individual divs for trails that reference back to the clicked on trail 
        // and opens eg: lionshead
        /* 1.tempTitle = this.title
           2. find where tempTitle == data-title
           3. load trail.html with relating values*/
        this.elements.button.addEventListener('click',  () => {
            window.open("trail.html","_self")
        })
    }
    disconnectedCallback(){
        // this.removeEventListener('click',)
    }

    /* Custom Methods */

    render(){
        this.shadow.innerHTML = `
        <style>
            .trail{ 
                border: 1px solid black
            }
        </style>
        <div class="trail">
            <h2>${this.data.title}</h2>
            <p>${this.data.description}</p>
            <button class="view-button">View</button>
            <div class="map-image">${this.data.mapImage}</div>
        </div>
        
        `
    }

    removeListener(){
        // this.removeEventListener('click',)
    }
}

customElements.define("hiking-trail", HikingTrails)

