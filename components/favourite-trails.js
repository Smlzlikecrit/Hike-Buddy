class FavouriteTrails extends HTMLElement {
    savedTrails = 
        {
        title: "Lion's Head",
        description : "Very long hike, worth it for the view!",
        difficulty: "",
        mapImage : "placeholder for image",
        stockImageURL : "https://lh5.googleusercontent.com/CtcVF_MpkTaGgN9FvwCv4Vfduc2jmnE320Sbthr9-TMdkaXLgdjb8x3nnJWE-SUkDzyMB8VilllTs21hot1YzdFwUE10-aA1qGxOxcxP7TSe04YJBxYjAEC-eE-mdVZ1wuRmvjSt"
        }

        
    selectedTrails = [
        {title: "Lion's Head",
        description: "Long hike",
        coordinates: "33.9350° S, 18.3890° E",
        difficulty: "",
        imgURL: "https://lh5.googleusercontent.com/CtcVF_MpkTaGgN9FvwCv4Vfduc2jmnE320Sbthr9-TMdkaXLgdjb8x3nnJWE-SUkDzyMB8VilllTs21hot1YzdFwUE10-aA1qGxOxcxP7TSe04YJBxYjAEC-eE-mdVZ1wuRmvjSt"},
        {title: "Chapman's Peak",
        description: "",
        coordinates: "34.0883° S, 18.3594° E",
        difficulty: "",
        imgURL: ""},
        {title: "Peers Cave",
        description: "",
        coordinates: "34.1191° S, 18.4074° E",
        difficulty: "",
        imgURL: ""},
        {title: "Elsie's Peak",
        description: "",
        coordinates: "34.1501° S, 18.4355° E",
        difficulty: "",
        imgURL: ""},
        {title: "Devil's Peak",
        description: "",
        coordinates: "33.9549° S, 18.4395° E",
        difficulty: "",
        imgURL: ""}
    ]

    shadow = this.attachShadow({ mode: 'closed' })
    constructor(){
        super()
        
    }

    connectedCallback() {
        this.render()
        
    }

    disconnectedCallback(){

    }


    /* Custom Methods */
    render(){
        
        this.shadow.innerHTML = `
        <style>
            h2{
                margin-left: 0.5rem;
            }
            h3{
                margin-left: 0.2rem;
            }
            p{
                margin-left: 0.2rem;
            }
            .trail-image{
                border-top-right-radius: 5px;                
                border-top-left-radius: 5px;
                width: 100%;       
                height: 150px;
                object-fit: cover;    
            }
            .trail{ 
                border: 1px solid darkgrey;
                border-radius: 10px;
                margin-top: 0.5rem;
                margin-left: 0.2rem;
                box-shadow: 0px 3px 8px -1px #3232470D;
                box-shadow: 0px 0px 1px 0px #0C1A4B3D;
                background: #F7FAFC;
                width: 97%;
                margin-right: 0.2rem;
                margin-bottom: 1rem;
                overflow: hidden;
                height: 350px;
            }
            .view-favourite-trail-button{
                height: 2rem;
                width: 15rem;
                background: #8CDFB3;
                margin-left: 2rem;
                margin-right: 2rem;
                border-width: 0.5px;
                border-radius: 7px;
                border-color: #0C1A4B3D;
            }

        </style>
        
        <h2>Favourite Trails</h2>
        <div class="trail">
            <img class="trail-image" src="https://lh5.googleusercontent.com/CtcVF_MpkTaGgN9FvwCv4Vfduc2jmnE320Sbthr9-TMdkaXLgdjb8x3nnJWE-SUkDzyMB8VilllTs21hot1YzdFwUE10-aA1qGxOxcxP7TSe04YJBxYjAEC-eE-mdVZ1wuRmvjSt">
            <h3 class="title">${this.savedTrails.title}</h3>
            <p class="description">${this.savedTrails.description}</p>
            <button class="view-favourite-trail-button">View on Map</button>
        </div>`
    }

    mapView(){
        this.shadow.innerHTML = `
        <h2>Hello</h2>
        
        
        `
    }
}

customElements.define("favourite-trails", FavouriteTrails)

