import React from "react";

const About = () => {
    return (
        <>
            <div className="og-line">
                <img className="og-about-background" src="./atmos2.png"></img>
                <div className="og-about">
                    &emsp;&emsp;Openglobus was created in 2013 year by software engineer Michael Gevlich. It was based
                    on the idea of
                    developing very simple graphics engine based on pure WebGL API, without any additional libraries or
                    frameworks. Later, one of the main elements of the engine became a scene for rendering the planet
                    Earth with high terrain resolution data. The accuracy of the data of the planet allows visualizing
                    geospatial data at the scale of the
                    whole planet and ant at the same time, and the planet engine allows you to work with the highest
                    precision terrain data.
                    The main ideas for working with the planet engine are simplicity, rigor, beauty and visual quality
                    of the picture, and ease of navigation.
                </div>
            </div>
        </>
    );
};

export default About;