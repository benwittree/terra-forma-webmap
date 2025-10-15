require(["esri/config", "esri/Map", "esri/views/MapView"], //this seems like the import statement in a py file (Adding libraries)
    function(esriConfig, Map, MapView) {

        //esriConfig.apiKey = "YOUR_API_KEY";

        const map = new Map({
            basemap: "gray" //basemap styles service
        });

        const view = new MapView({
            container: "map",
            center: [-106.805, 38.927],            
            zoom: 8,
            map: map

            
        });

        //const watershedsLayer = new FeatureLayer({"ADDURL TO HUC WATERSHEDS"})
    }
);