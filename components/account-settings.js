class AccountSettings extends HTMLElement {
    shadow = this.attachShadow({ mode: 'closed' })
    constructor(){
        super()
    }
    render(){
        this.shadow.innerHTML = `
            <style>
                h3, input {
                margin-left: 1rem;
            }
                .button-container {
                    bottom: 4rem;
                    left: 0;
                    width: 100%;
                    position: fixed;
                    display: flex;
                    justify-content: space-around;
                }
                #cancel-button, #save-button {
                    width: 48%;
                    height: 2rem;
                    background: #cccc
                }
                #premium-upgrade-button {
                    display: fixed;
                    width: 15rem;
                    height: 3rem;
                    margin-left: 2.5rem;
                    position: absolute;
                    top: 60%;
                    background: gold;
                    box-shadow: 0 8px 8px -5px 
                }
            </style>
            <div class="settings-container">
                <h3>Colour Scheme</h3>
                <input type="radio" id="default-colour" name="colour-scheme">
                <label for="colour-scheme-1">Default</label><br>
                <input type="radio" id="dark-mode" name="colour-scheme">
                <label for="colour-scheme-2">Dark Mode</label><br>  

                <button id="premium-upgrade-button">Upgrade to Premium</button>
                <br>

                <div class="button-container">
                    <button id="cancel-button">Cancel</button>
                    <button id="save-button">Save Changes</button>
                </div>
                
            </div>
            `
    }

    connectedCallback() {
        this.render()
    }
}


customElements.define("account-settings", AccountSettings)