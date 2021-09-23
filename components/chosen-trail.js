class ChosenTrail extends HTMLElement {
    /* Variables */ 
    
    data = {
        title : "Lion's Head",
        description : "lorTempor anim amet anim magna ea esse qui occaecat labore sint tempor tempor. Occaecat duis veniam fugiat non ex consequat adipisicing cupidatat nisi et ipsum labore commodo eu. Laborum nulla excepteur nisi exercitation commodo. Velit aute nisi irure magna esse amet nisi labore tempor in aute enim. In officia id cupidatat mollit id nisi elit. Ipsum ad veniam ad adipisicing in quis ea aute sit et. Lorem et ad dolore anim nulla reprehenderit Lorem labore non reprehenderit anim adipisicing.em",
        trailImageURL : "https://images.unsplash.com/uploads/1412533519888a485b488/bb9f9777?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        difficulty: "4",
        coordinatesLon: 33.9350,
        coordinatesLat: 18.3890
    }

    elements = {
        h2: null,
        addFavourite: null,
        difficulty: null,
        description: null,
        directions: null,
    }

    shadow = this.attachShadow({ mode: 'closed' })


    /* Internal Methods */

    constructor(){
        super()
    }

    connectedCallback(){
        this.render()

        this.elements = {
            h2: this.querySelector("h2"),
            addFavourite: this.querySelector(".add-to-fav-icon"),
            difficulty: this.querySelector("difficulty-level"),
            description: this.querySelector(".description"),
            directions: this.querySelector(".map-directions"),
        }
        
        const map = this.shadow.querySelector("#map")
        new ol.Map({
            target: map,
            layers: [
              new ol.layer.Tile({
                source: new ol.source.OSM()
              })
            ],
            view: new ol.View({
              center: ol.proj.fromLonLat([this.data.coordinatesLon, this.data.coordinatesLat]),
              zoom: 4
            })
          });
    }

    disconnectedCallback(){

    }

    /* Custom Methods */

    

    render(){
        
        this.shadow.innerHTML = `
        <style>
            *{
                box-sizing: border-box;
            }
            .ol-box{box-sizing:border-box;border-radius:2px;border:2px solid #00f}.ol-mouse-position{top:8px;right:8px;position:absolute}.ol-scale-line{background:rgba(0,60,136,.3);border-radius:4px;bottom:8px;left:8px;padding:2px;position:absolute}.ol-scale-line-inner{border:1px solid #eee;border-top:none;color:#eee;font-size:10px;text-align:center;margin:1px;will-change:contents,width;transition:all .25s}.ol-scale-bar{position:absolute;bottom:8px;left:8px}.ol-scale-step-marker{width:1px;height:15px;background-color:#000;float:right;z-Index:10}.ol-scale-step-text{position:absolute;bottom:-5px;font-size:12px;z-Index:11;color:#000;text-shadow:-2px 0 #fff,0 2px #fff,2px 0 #fff,0 -2px #fff}.ol-scale-text{position:absolute;font-size:14px;text-align:center;bottom:25px;color:#000;text-shadow:-2px 0 #fff,0 2px #fff,2px 0 #fff,0 -2px #fff}.ol-scale-singlebar{position:relative;height:10px;z-Index:9;box-sizing:border-box;border:1px solid #000}.ol-unsupported{display:none}.ol-unselectable,.ol-viewport{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.ol-selectable{-webkit-touch-callout:default;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.ol-grabbing{cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.ol-grab{cursor:move;cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.ol-control{position:absolute;background-color:rgba(255,255,255,.4);border-radius:4px;padding:2px}.ol-control:hover{background-color:rgba(255,255,255,.6)}.ol-zoom{top:.5em;left:.5em}.ol-rotate{top:.5em;right:.5em;transition:opacity .25s linear,visibility 0s linear}.ol-rotate.ol-hidden{opacity:0;visibility:hidden;transition:opacity .25s linear,visibility 0s linear .25s}.ol-zoom-extent{top:4.643em;left:.5em}.ol-full-screen{right:.5em;top:.5em}.ol-control button{display:block;margin:1px;padding:0;color:#fff;font-size:1.14em;font-weight:700;text-decoration:none;text-align:center;height:1.375em;width:1.375em;line-height:.4em;background-color:rgba(0,60,136,.5);border:none;border-radius:2px}.ol-control button::-moz-focus-inner{border:none;padding:0}.ol-zoom-extent button{line-height:1.4em}.ol-compass{display:block;font-weight:400;font-size:1.2em;will-change:transform}.ol-touch .ol-control button{font-size:1.5em}.ol-touch .ol-zoom-extent{top:5.5em}.ol-control button:focus,.ol-control button:hover{text-decoration:none;background-color:rgba(0,60,136,.7)}.ol-zoom .ol-zoom-in{border-radius:2px 2px 0 0}.ol-zoom .ol-zoom-out{border-radius:0 0 2px 2px}.ol-attribution{text-align:right;bottom:.5em;right:.5em;max-width:calc(100% - 1.3em);display:flex;flex-flow:row-reverse;align-items:flex-end}.ol-attribution ul{margin:0;padding:1px .5em;color:#000;text-shadow:0 0 2px #fff}.ol-attribution li{display:inline;list-style:none}.ol-attribution li:not(:last-child):after{content:" "}.ol-attribution img{max-height:2em;max-width:inherit;vertical-align:middle}.ol-attribution button{flex-shrink:0}.ol-attribution.ol-collapsed ul{display:none}.ol-attribution:not(.ol-collapsed){background:rgba(255,255,255,.8)}.ol-attribution.ol-uncollapsible{bottom:0;right:0;border-radius:4px 0 0}.ol-attribution.ol-uncollapsible img{margin-top:-.2em;max-height:1.6em}.ol-attribution.ol-uncollapsible button{display:none}.ol-zoomslider{top:4.5em;left:.5em;height:200px}.ol-zoomslider button{position:relative;height:10px}.ol-touch .ol-zoomslider{top:5.5em}.ol-overviewmap{left:.5em;bottom:.5em}.ol-overviewmap.ol-uncollapsible{bottom:0;left:0;border-radius:0 4px 0 0}.ol-overviewmap .ol-overviewmap-map,.ol-overviewmap button{display:block}.ol-overviewmap .ol-overviewmap-map{border:1px solid #7b98bc;height:150px;margin:2px;width:150px}.ol-overviewmap:not(.ol-collapsed) button{bottom:2px;left:2px;position:absolute}.ol-overviewmap.ol-collapsed .ol-overviewmap-map,.ol-overviewmap.ol-uncollapsible button{display:none}.ol-overviewmap:not(.ol-collapsed){background:rgba(255,255,255,.8)}.ol-overviewmap-box{border:2px dotted rgba(0,60,136,.7)}.ol-overviewmap .ol-overviewmap-box:hover{cursor:move}
            /*# sourceMappingURL=ol.css.map */
            #map {
                height: 200px;
                width: 100%;
                margin-bottom: 8rem;
                position: relative;
            }
            .trail{ 
                border-radius: 10px;
                margin-top: 0.5rem;
                margin-right: 0.2rem
                box-shadow: 0px 3px 8px -1px #3232470D;
                box-shadow: 0px 0px 1px 0px #0C1A4B3D;
                background: #F7FAFC;
                width: 98%;
                margin-left: 0.2rem;
                margin-bottom: 1rem;
            }
            h2{
                margin-top: 5px;
                margin-left: 0.2rem;
                width: 50%;
            }
            p{
                margin-left: 0.2rem;
            }
            .map-directions{
                width: 7rem;
                height: 2rem;
                border-radius: 7px;
                padding: 6px 7px 10px 10px;
                background-color: #4C6FFF;
                color: #FFFFFF;
                margin: auto;
                padding-left: 1.1rem;
                margin-top: 0.5rem;
                margin-bottom: 0.5rem;

            }
            #trail-image{
                width: 100%;
                border-top-right-radius: 5px;
                border-top-left-radius: 5px;
            }
            .description{
                margin-bottom: 1rem;
                margin-left: 0.2rem;
                margin-right: 0.2rem;
            }
            .add-to-fav-icon{
                width: 25px;
                display: inline;
                float: right;
                margin-top: -1.1rem;
                margin-right: 1.5rem;
            }
            .difficulty-level{
                margin-top: -1rem;
                margin-left: 0.2rem;
            }
        </style>

        <div class="trail">
            <img id="trail-image" src=${this.data.trailImageURL} alt="">
            <h2>${this.data.title}</h2>
            <img class="add-to-fav-icon" src="https://cdn-icons-png.flaticon.com/512/1517/1517846.png">
            <div class="difficulty-level">Difficulty: ${this.data.difficulty}/5</div>
            <p class="description">${this.data.description}</p>
            <div class="map-directions">Directions</div>
            <div id="map" class="map-image"></div>
            
        </div>
        `
    }
}



customElements.define("chosen-trail", ChosenTrail)