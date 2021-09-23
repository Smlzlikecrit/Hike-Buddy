class AccountSettings extends HTMLElement {
    /* Variables */

    elements = {
        h3: null,
        upgradeButton: null,
        standardColour: null,
        darkMode: null,
    }

    shadow = this.attachShadow({ mode: 'closed' })

    /* Internal Methods */

    constructor(){
        super()
    }


    connectedCallback() {
        this.render()
        
        this.elements = {
            h3: this.querySelector("#title"),
            upgradeButton: this.querySelector("#premium-upgrade-button"),
            standardColour: this.querySelector("#default-colour"),
            darkMode: this.querySelector("#dark-mode"),
        }
    }
    disconnectedCallback(){

    }

    /*Custom Methods */
    
    render(){
        this.shadow.innerHTML = `
            <style>
                h3, input {
                margin-left: 1rem;
                }

                #premium-upgrade-button {
                    width: 15rem;
                    height: 2rem;
                    margin-left: auto;
                    margin-right: auto;
                    display: block;
                    text-align: center;
                    justify-content: center;
                    background: #4C6FFF;
                    border: 1px solid #4C6FFF;
                    border-radius: 10px;
                    color: #FFFFFF;
                    margin-top: 14rem;
                    padding-top: 0.5rem;
                }

            </style>
            <div class="settings-container">
                <h3 id="title">Colour Scheme</h3>
                <input type="radio" id="default-colour" name="colour-scheme" checked>
                <label for="colour-scheme-1">Standard</label><br>
                <input type="radio" id="dark-mode" name="colour-scheme">
                <label for="colour-scheme-2">Dark Mode</label><br>  

                <div id="premium-upgrade-button">Upgrade to Premium</div>
                
            </div>
            `
    }
}


customElements.define("account-settings", AccountSettings)