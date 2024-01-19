import React from "react";

const About = () => {
    return (
        <>
            <div className="og-line">
                <img className="og-about-background" src="./atmos2.png"></img>
                <div className="og-description og-description__about">
                    &emsp;&emsp;"I created Openglobus in 2013. I wanted to create computer games and immersive worlds,
                    and was seeking an inspiring idea. One day
                    I was challenged with the task of working with terrain in three-dimensional
                    space. The
                    visualization libraries that were available at the time did not meet my technical and aesthetic
                    requirements. So I decided to make my own tool to render planetary and ant-sized objects
                    simultaneously on a virtual Earth.
                    <br/>
                    <br/>
                    &emsp;&emsp;I was so fascinated by this process that I devoted all my free time to it. Wanting to
                    share the spoils of my work, I opened the library to be freely available to other
                    programmers. Newcomers
                    brought fresh ideas and utilized Openglobus for their own tasks. These were projects such as weather
                    visualization, 3D mapping of river and lake bottoms, mapping of satellite and
                    drone trajectories, creation of computer games, route planning etc.
                    <br/>
                    <br/>
                    &emsp;&emsp;Nowadays 3D technologies continue to evolve. The metaverse, digital
                    tweens, and augmented reality are becoming increasingly prevalent in our daily lives. With the
                    development of drones, the aerospace industry, increasing computer performance, and cloud
                    technologies there is a rising need for 3D visualization tools. At the moment, Openglobus is a
                    popular and accessible tool for solving various tasks
                    related to geoinformation technologies, and aims to continue to
                    evolve and grow to suit the needs of forward-thinking industries.
                    <br/>
                    <br/>
                    Michael Gevlich"
                </div>
            </div>
        </>
    );
};

export default About;