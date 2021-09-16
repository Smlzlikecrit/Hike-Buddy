class NavBar extends HTMLElement {
    shadow = this.attachShadow({ mode: 'closed' })
    constructor(){
        super()
    }
    render(){        
        this.shadow.innerHTML = `
        <style>
            aside {
                background: #8CDFB3;
                box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1x 10px 0px rgb(0 0 0 / 12%);
                bottom: 0;
                left: 0;
                width: 100%;
                position: fixed;
                box-shadow: 0px -5px 6px -3px #888888;
            }
            ul {
                list-style: none;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: space-evenly;
                width: 95%;
            }
            a{
                text-decoration: none;
                display: block;
                padding-top: 1rem;
                padding-bottom: 1rem;
                color: black;
            }
            .separator {
                border-left: 0.5px solid #4AAE8C; 
                border-right:0.5px solid #4AAE8C; 
                top:10px; 
                margin-top: 0.5rem;
                margin-bottom: 0.5rem;
              }
        </style>
        
        <div>
            <aside aria-label="navigation">
            <nav>
                <ul>
                    <li><a href="/favourite-trails.html">Favourites</a></li>
                    <span class="separator"></span>
                    <li><a href="/map.html">Map</a></li>
                    <span class="separator"></span>
                    <li><a href="/account.html">Account</a></li>
                </ul>
                </nav>
            </aside>
        </div>`
    }
    connectedCallback() {
        this.render()
    }
}

window.customElements.define("nav-bar", NavBar)