function start() {

    var osm = new og.layer.XYZ("OpenStreetMap", {
        isBaseLayer: true,
        url: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        visibility: true,
        attribution: 'Data @ <a href="http://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="http://www.openstreetmap.org/copyright">ODbL</a>'
    });

    var globus = new og.Globe({
        "target": "globus",
        "name": "Earth",
        "terrain": new og.terrain.GlobusTerrain(),
        "layers": [osm],
        "autoActivated": true
    });

    new og.layer.Vector("Markers", {
        clampToGround: true
    })
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