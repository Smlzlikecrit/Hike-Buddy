class NavBar extends HTMLElement {
    shadow = this.attachShadow({ mode: 'closed' })
    constructor(){
        super()
    }
    render(){        
        this.shadow.innerHTML = `
        <style>
            aside {
                background: red;
                box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1x 10px 0px rgb(0 0 0 / 12%);
                bottom: 0;
                left: 0;
                width: 100%;
                position: fixed;
            }
            ul {
                list-style: none;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: space-around;
            }
            
            a{
                text-decoration: none;
                border: 1px solid grey;
                display: block;
                padding: 1rem 2rem;
                color: black;
            }
        </style>
        
        <div>
            <aside aria-label="navigation">
            <nav>
                <ul>
                    <li><a href="/favourite-trails.html">Trails</a></li>
                    <li><a href="/map.html">Map</a></li>
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