class HikingTrails extends HTMLElement {
    /* Variables */
    data = {
        title : "Lion's Head",
        description : "lorTempor anim amet anim magna ea esse qui occaecat labore sint tempor tempor. Occaecat duis veniam fugiat non ex consequat adipisicing cupidatat nisi et ipsum labore commodo eu. Laborum nulla excepteur nisi exercitation commodo. Velit aute nisi irure magna esse amet nisi labore tempor in aute enim. In officia id cupidatat mollit id nisi elit. Ipsum ad veniam ad adipisicing in quis ea aute sit et. Lorem et ad dolore anim nulla reprehenderit Lorem labore non reprehenderit anim adipisicing.em",
        locationImageURL : "https://images.unsplash.com/uploads/1412533519888a485b488/bb9f9777?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        difficulty: 4
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
                height: 395px;
            }
            h2{
                margin-top: 5px;
                margin-left: 0.2rem;
            }
            p{
                margin-left: 0.2rem;
            }

            .buttons-div{
                display: flex;
            }
            .view-button{
                float: left;
                width: 56px;
                height: 1rem;
                border-radius: 7px;
                padding: 6px 7px 10px 10px;
                background-color: #4C6FFF;
                color: #FFFFFF;
                margin-left: 5%;
                padding-left: 1.5rem;
                margin-top: 0.5rem;
            }

            .add-to-fav-image{
                width: 25px;
                display: inline;
                float: right;
                margin-top: -1.4rem;
                margin-right: 1.5rem;
            }

            .hike-image{
                width: 100%;
                border-top-right-radius: 5px;
                border-top-left-radius: 5px;

            }
            .description{
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-right: 1rem;
                margin-bottom: 0.2rem;
            }
            .difficulty{
                margin-left: 8rem;
                margin-top: 0.2rem;
                padding-top: 0.8rem;
                width: 120px;
            }
            
        </style>
        <div class="trail">
            <img class="hike-image" src="https://images.unsplash.com/uploads/1412533519888a485b488/bb9f9777?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"/>
            <h2>${this.data.title}</h2>
            <p class="description">${this.data.description}</p>
            
            <div id="buttons-div">
                <div class="view-button">View</div>
                <div class="difficulty">Difficulty: ${this.data.difficulty}/5</div>
                <img class="add-to-fav-image" src="https://cdn-icons-png.flaticon.com/512/1517/1517846.png">
            </div>
        </div>
        `
    }

    removeListener(){
        // this.removeEventListener('click',)
    }
}

customElements.define("hiking-trail", HikingTrails)

