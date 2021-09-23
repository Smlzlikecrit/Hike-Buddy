class AccountSettings extends HTMLElement {
    /* Variables */


    shadow = this.attachShadow({ mode: 'closed' })

    /* Internal Methods */

    constructor(){
        super()
    }
    

    connectedCallback() {
        this.render()
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
                    display: fixed;
                    width: 15rem;
                    height: 3rem;
                    margin-left: 2.5rem;
                    position: absolute;
                    top: 60%;
                    background: #4C6FFF;
                    border: 1px solid #4C6FFF;
                    border-radius: 10px;
                    color: #FFFFFF;
                }

            </style>
            <div class="settings-container">
                <h3>Colour Scheme</h3>
                <input type="radio" id="default-colour" name="colour-scheme" checked>
                <label for="colour-scheme-1">Standard</label><br>
                <input type="radio" id="dark-mode" name="colour-scheme">
                <label for="colour-scheme-2">Dark Mode</label><br>  

                <button id="premium-upgrade-button">Upgrade to Premium</button>
                
            </div>
            `
    }
}


customElements.define("account-settings", AccountSettings)