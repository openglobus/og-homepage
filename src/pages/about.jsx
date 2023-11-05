import React from "react";

const About = () => {
    return (
        <>
            <div className="og-line">
                <img className="og-about-background" src="./atmos2.png"></img>
                <div className="og-description">
                    &emsp;&emsp;Openglobus was created in 2013 by Michael Gevlich, a programmer, geoinformation
                    engineer, and
                    dreamer. He wanted to create computer games and immersive worlds, seeking an inspiring idea. One day
                    he was challenged with the task of working with terrain in three-dimensional
                    space. The
                    visualization libraries that were available at the time did not meet his technical and aesthetic
                    requirements. So he decided to make his own tool to render planetary and ant-sized objects
                    simultaneously.
                    <br/>
                    <br/>
                    &emsp;&emsp;He was so fascinated by this process that he devoted all his free time to it. He wanted
                    to share the
                    spoils of his work with other programmers and made his library completely open. Newcomers
                    brought fresh ideas and utilized Openglobus for their own tasks. These were projects such as weather
                    visualization, 3D mapping of river and lake bottoms, mapping of satellite and
                    drone trajectories, creation of computer games, and route planning.
                    <br/>
                    <br/>
                    &emsp;&emsp;At the moment, Openglobus is a popular and accessible tool for solving various tasks
                    related to
                    geoinformation technologies. Nowadays 3D technologies continue to evolve. The metaverse, digital
                    tweens, and augmented reality are becoming increasingly prevalent in our daily lives. The
                    development of drones, the aerospace industry, increasing computer performance, and cloud
                    technologies indicate a rising need for 3D visualization tools, and the Openglobus will continue to
                    evolve and grow.
                </div>
            </div>
        </>
    );
};

export default About;