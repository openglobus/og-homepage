function start() {

    var osm = new og.layer.XYZ("OpenStreetMap", {
        isBaseLayer: true,
        url: "//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        visibility: true,
        attribution: 'Data @ <a href="http://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="http://www.openstreetmap.org/copyright">ODbL</a>'
    });

    var globus = new og.Globe({
        "target": "globus",
        "name": "Earth",
        "terrain": new og.terrain.GlobusTerrain(),
        "layers": [osm],
        "autoActivated": true,
        "viewExtent": [5.56707, 45.15679, 5.88834, 45.22260]
    });

    globus.planet.setRatioLod(1.3, 1.1);

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
                offset: [10, -2]
            },
            billboard: {
                src: "./marker.png",
                width: 64,
                height: 64,
                offset: [0, 32]
            }
        }));

    //globus.planet.viewExtent(
    //    new og.Extent(
    //        new og.LonLat(5.56707, 45.15679),
    //        new og.LonLat(5.88834, 45.22260)
    //    )
    //);

    window.globus = globus;

};