class CustomHeader extends HTMLElement {
    shadow = this.attachShadow({ mode: 'closed' })
    constructor(){
        super()
    }

    render(){
        this.shadow.innerHTML = `
            <style>
                #header {
                    background-color: red;
                    text-align: center;
                }
                
                a{
                    text-decoration: none;
                    border: 1px solid grey;
                    display: block;
                    padding: 1rem 2rem;
                    color: black;
                }
            </style>
            <div class="header-container">
                <a href="index.html" id="header">Hike Buddy</a>
            </div>
        `
    }

    connectedCallback() {
        this.render()
    }
}

window.customElements.define("custom-header", CustomHeader)