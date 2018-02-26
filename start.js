function start() {
    //og.RESOURCES_URL = "./resources/";

    var osm = new og.layer.XYZ("OpenStreetMap", {
        specular: [0.0003, 0.00012, 0.00001],
        //extent: [[0, 0], [45, 45]],
        shininess: 20,
        diffuse: [0.89, 0.9, 0.83],
        isBaseLayer: true,
        url: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        visibility: true,
        attribution: 'Data @ <a href="http://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="http://www.openstreetmap.org/copyright">ODbL</a>'
    });

    var controls = [
        og.control.mouseNavigation(),
	    og.control.touchNavigation(),
    	og.control.zoomControl(),
        og.control.earthCoordinates(),
    	og.control.sun()
    ];

    globus = new og.Globus({
        "target": "globus",
        "name": "Earth",
        "controls": controls,
        "terrain": new og.terrainProvider.TerrainProvider("OpenGlobus"),
        "layers": [osm],
        "autoActivated": true
    });

    og.layer.vector("Markers", { groundAlign: true })
        .addTo(globus.planet)
        .add(new og.Entity({
            lonlat: [5.73, 45.183],
            label: {
                text: "Hi, Globus!",
                outline: 0.77,
                outlineColor: "rgba(255,255,255,.4)",
                size: 27,
                color: "black",
                face: "Lucida Console",
                offset: [10, -2]
            },
            billboard: {
                src: "./marker.png",
                width: 64,
                height: 64,
                offset: [0, 32]
            }
        }));

	
    globus.planet.viewExtentArr([5.54,45.141,5.93,45.23]);

};