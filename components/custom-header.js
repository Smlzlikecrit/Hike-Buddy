class CustomHeader extends HTMLElement {
    shadow = this.attachShadow({ mode: 'closed' })
    constructor(){
        super()
    }

    render(){
        this.shadow.innerHTML = `
            <style>
            .header-container{
                top: 0;
                left: 0;
                position: sticky;
            }
                #header {
                    background: #8CDFB3;
                    text-align: center;
                    box-shadow: 0px 5px 6px -3px #888888;
                }
                
                a{
                    text-decoration: none;
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