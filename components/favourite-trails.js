class FavouriteTrails extends HTMLElement {
    /* Variables */
    savedTrails =
        {
            title: "Lion's Head",
            id: "1",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stand",
            difficulty: "4",
            mapImage: "placeholder for image",
            stockImageURL: "https://lh5.googleusercontent.com/CtcVF_MpkTaGgN9FvwCv4Vfduc2jmnE320Sbthr9-TMdkaXLgdjb8x3nnJWE-SUkDzyMB8VilllTs21hot1YzdFwUE10-aA1qGxOxcxP7TSe04YJBxYjAEC-eE-mdVZ1wuRmvjSt"
        }


    selectedTrails = [
        {
            title: "Lion's Head",
            id: "1",
            description: "Long hike",
            coordinates: "33.9350° S, 18.3890° E",
            difficulty: "4",
            imgURL: "https://lh5.googleusercontent.com/CtcVF_MpkTaGgN9FvwCv4Vfduc2jmnE320Sbthr9-TMdkaXLgdjb8x3nnJWE-SUkDzyMB8VilllTs21hot1YzdFwUE10-aA1qGxOxcxP7TSe04YJBxYjAEC-eE-mdVZ1wuRmvjSt"
        },
        {
            title: "Chapman's Peak",
            id: "2",
            description: "",
            coordinates: "34.0883° S, 18.3594° E",
            difficulty: "3",
            imgURL: "https://lh5.googleusercontent.com/CtcVF_MpkTaGgN9FvwCv4Vfduc2jmnE320Sbthr9-TMdkaXLgdjb8x3nnJWE-SUkDzyMB8VilllTs21hot1YzdFwUE10-aA1qGxOxcxP7TSe04YJBxYjAEC-eE-mdVZ1wuRmvjSt"
        },
        {
            title: "Peers Cave",
            id: "3",
            description: "",
            coordinates: "34.1191° S, 18.4074° E",
            difficulty: "3",
            imgURL: "https://lh5.googleusercontent.com/CtcVF_MpkTaGgN9FvwCv4Vfduc2jmnE320Sbthr9-TMdkaXLgdjb8x3nnJWE-SUkDzyMB8VilllTs21hot1YzdFwUE10-aA1qGxOxcxP7TSe04YJBxYjAEC-eE-mdVZ1wuRmvjSt"
        },
        {
            title: "Elsie's Peak",
            id: "4",
            description: "",
            coordinates: "34.1501° S, 18.4355° E",
            difficulty: "5",
            imgURL: "https://lh5.googleusercontent.com/CtcVF_MpkTaGgN9FvwCv4Vfduc2jmnE320Sbthr9-TMdkaXLgdjb8x3nnJWE-SUkDzyMB8VilllTs21hot1YzdFwUE10-aA1qGxOxcxP7TSe04YJBxYjAEC-eE-mdVZ1wuRmvjSt"
        },
        {
            title: "Devil's Peak",
            id: "5",
            description: "",
            coordinates: "33.9549° S, 18.4395° E",
            difficulty: "5",
            imgURL: "https://lh5.googleusercontent.com/CtcVF_MpkTaGgN9FvwCv4Vfduc2jmnE320Sbthr9-TMdkaXLgdjb8x3nnJWE-SUkDzyMB8VilllTs21hot1YzdFwUE10-aA1qGxOxcxP7TSe04YJBxYjAEC-eE-mdVZ1wuRmvjSt"
        }
    ]

    elements = {
        h2: null,
        h3: null,
        p: null,
        button: null,
    }
    
    shadow = this.attachShadow({ mode: 'closed' })

    /* Internal Methods */

    constructor() {
        super()

    }

    connectedCallback() {
        this.render()

        this.elements = {
            h2: this.querySelector(".main-heading"),
            h3: this.querySelector(".title"),
            p: this.querySelector(".description"),
            button: this.querySelector(".view-trail-map-button"),
        }
    }

    disconnectedCallback() {

    }


    /* Custom Methods */

    // result = selectedTrails
    // .filter(trail => !(trail.title.toLocaleLowerCase().includes('peak')))
    // .map((trail) => (
    //     `
    //         <div>
    //             <h2>${trail.title}</h2>
    //             <p>${trail.coordinates}</p>
    //         </div>
    //     `
    // ))
    // .join('')
    // ----------
    // displayFavourites(){
    
    // result = this.selectedTrails.map((trail => (
    //     `<div>
    //         <h2>${trail.title}</h2>
    //         <p>${trail.coordinates}</p>
    //     </div>`
    // ))).join('')
    //
    // }

    render() {
        this.shadow.innerHTML = `
        <style>
            h2{
                margin-left: 0.5rem;
                margin-top: 0.5rem;
                margin-bottom: 0rem;
            }
            h3{
                margin-left: 0.2rem;
                margin-bottom: -0.5rem;
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
            .view-trail-map-button{
                height: 2rem;
                width: 10rem;
                display: block;
                background: #4C6FFF;
                margin-left: auto;
                margin-right: auto;
                border-width: 0.5px;
                border-radius: 7px;
                border-color: #4C6FFF;
                color: #FFFFFF;
            }

            .description{
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

        </style>
        
        <h2 class="main-heading">Favourite Trails</h2>
        <div class="trail">
            <img class="trail-image" src="https://lh5.googleusercontent.com/CtcVF_MpkTaGgN9FvwCv4Vfduc2jmnE320Sbthr9-TMdkaXLgdjb8x3nnJWE-SUkDzyMB8VilllTs21hot1YzdFwUE10-aA1qGxOxcxP7TSe04YJBxYjAEC-eE-mdVZ1wuRmvjSt">
            <h3 class="title">${this.savedTrails.title}</h3>
            <p class="description">${this.savedTrails.description}</p>
            <button class="view-trail-map-button">View</button>
        </div>`
    }


}

customElements.define("favourite-trails", FavouriteTrails)

