class FavouriteTrails extends HTMLElement {
    savedTrails = 
        {
        title: "Lion's Head",
        description : "Very long hike, worth it for the view!",
        mapImage : "placeholder for image",
        stockImageURL : "https://lh5.googleusercontent.com/CtcVF_MpkTaGgN9FvwCv4Vfduc2jmnE320Sbthr9-TMdkaXLgdjb8x3nnJWE-SUkDzyMB8VilllTs21hot1YzdFwUE10-aA1qGxOxcxP7TSe04YJBxYjAEC-eE-mdVZ1wuRmvjSt"
        }

        
    selectedTrails = [
        {title: "Lion's Head",
        description: "Long hike",
        location: "",
        imgURL: ""},
        {title: "Chapman's Peak",
        description: "",
        location: "",
        imgURL: ""},
        {title: "Piers Cave",
        description: "",
        location: "",
        imgURL: ""},
        {title: "Table Mountain",
        description: "",
        location: "",
        imgURL: ""},
        {title: "Devil's Peak",
        description: "",
        location: "",
        imgURL: ""}
    ]

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
            h2{
                margin-left: 0.5rem;
            }
            h3{
                margin-left: 0.2rem;
            }
            p{
                margin-left: 0.2rem;
            }
            .map-image {
                width: 100%;
                margin-bottom: 0;
                border-top-right-radius: 5px;                
                border-top-left-radius: 5px;
                border-bottom-right-radius: 5px;                
                border-bottom-left-radius: 5px;
                margin-bottom: 6rem;
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
            }

        </style>
        
        <h2>Favourite Trails</h2>
        <div class="trail">
            <img class="trail-image" src="https://lh5.googleusercontent.com/CtcVF_MpkTaGgN9FvwCv4Vfduc2jmnE320Sbthr9-TMdkaXLgdjb8x3nnJWE-SUkDzyMB8VilllTs21hot1YzdFwUE10-aA1qGxOxcxP7TSe04YJBxYjAEC-eE-mdVZ1wuRmvjSt">
            <h3>${this.savedTrails.title}</h3>
            <p>${this.savedTrails.description}</p>
            <img class="map-image" src="https://hikelionshead.co.za/wp-content/uploads/2018/04/Advanced-Lions-Head-hike-map.png" alt="Trail location on map">
        </div>`
    }
    connectedCallback() {
        this.render()
    }
}

customElements.define("favourite-trails", FavouriteTrails)

