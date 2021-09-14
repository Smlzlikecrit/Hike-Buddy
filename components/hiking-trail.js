class HikingTrails extends HTMLElement {
    /* Variables */
    data = {
        title : "Lion's Head",
        description : "lorTempor anim amet anim magna ea esse qui occaecat labore sint tempor tempor. Occaecat duis veniam fugiat non ex consequat adipisicing cupidatat nisi et ipsum labore commodo eu. Laborum nulla excepteur nisi exercitation commodo. Velit aute nisi irure magna esse amet nisi labore tempor in aute enim. In officia id cupidatat mollit id nisi elit. Ipsum ad veniam ad adipisicing in quis ea aute sit et. Lorem et ad dolore anim nulla reprehenderit Lorem labore non reprehenderit anim adipisicing.em",
        mapImageURL : "stock img"
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


        this.elements.button.addEventListener('click',  () => {
            window.open("trail.html","_self")
            // history.pushState(null, null, "trail")
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
                border: 1px solid darkgrey;
                border-radius: 10px;
                margin-top: 0.5rem;
                margin-right: 0.2rem
                box-shadow: 0px 3px 8px -1px #3232470D;
                box-shadow: 0px 0px 1px 0px #0C1A4B3D;
                background: #F7FAFC;
                width: 98%;
                margin-right: 0.2rem;
                margin-bottom: 1rem;
            }
            h2{
                margin-top: 5px;
                margin-left: 0.2rem;
            }
            p{
                margin-left: 0.2rem;
            }
            button{
                width: 4rem;
            }
            #button-div{
                text-align: center;
            }
            .view-button{

                border-radius: 7px;
                padding: 7px 10px 7px 10px;
                margin-bottom: 10px;
                background-color: #8CDFB3;
            }
            .map-image{
                margin-top: 20px;
                margin-left: 1rem;
                margin-bottom: 0.5rem;
                margin-right: 1rem;
                
            }
            .stock-image{
                width: 100%;
                border-top-right-radius: 5px;
                border-top-left-radius: 5px;
            }
            .description{
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-right: 1rem;
            }
        </style>
        <div class="trail">
            <img class="stock-image" src="https://images.unsplash.com/uploads/1412533519888a485b488/bb9f9777?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"/>
            <h2>${this.data.title}</h2>
            <p class="description">${this.data.description}</p>
            <div id="button-div"><a class="view-button">View</a></div>
            <div class="map-image">${this.data.mapImageURL}</div>
        </div>
        `
    }

    removeListener(){
        // this.removeEventListener('click',)
    }
}

customElements.define("hiking-trail", HikingTrails)

