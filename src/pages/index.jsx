import React, {useRef, useEffect} from 'react';


const Video = ({isMuted}) => {
    const refVideo = useRef(null);

    useEffect(() => {
        if (!refVideo.current) {
            return;
        }

        if (isMuted) {
            refVideo.current.defaultMuted = true;
            refVideo.current.muted = true;
        }

    }, [isMuted]);

    return (<video
        id="background-video"
        ref={refVideo}
        autoPlay
        playsInline
        loop
    >
        <source src="//openglobus.org/video.mp4" type="video/mp4"/>
    </video>);
}

const Home = () => {
    return (<div className="App">

        <div className="og-videobackground">
            <div className="og-gradient"></div>
            <img className="og-about-background" src="./atmos2.png"></img>
        </div>

        <div className="og-line">
            <div className="og-description">
                &emsp;&emsp;OpenGlobus is an open-source JavaScript/TypeScript library for creating virtual globes
                and visualizing geospatial data with precision at all scales. It supports real-time rendering of
                terrain, satellite images, buildings, and moving objects. Built on pure WebGL, it’s easy to integrate into
                projects using its simple API. OpenGlobus handles high-resolution maps, renders thousands of 3D objects,
                and includes tools for measurement and more.
                <br/>
                <br/>
                &emsp;&emsp;OpenGlobus is released under the&ensp;
                <a className="og-mit" href="https://github.com/openglobus/openglobus/blob/master/LICENSE.md">MIT
                    License</a> and completely free for both commercial and non-commercial use.
            </div>
        </div>

        <div className="og-line">
            <div className="og-subscribe">
                Stay tuned, and subscribe!
            </div>
        </div>

        <div className="og-line">
            <div className="og-social">
                <a className="nav-link" href="https://github.com/openglobus/openglobus" title="GitHub" target="_blank">
                    <i className="icon-github-circled" aria-hidden="true"></i>
                </a>
                <a className="nav-link" href="https://twitter.com/openglobus" title="Twitter" target="_blank">
                    <i className="icon-twitter" aria-hidden="true"></i>
                </a>
                <a className="nav-link" href="https://www.linkedin.com/company/openglobus/"
                   title="LinkedIn" target="_blank">
                    <i className="icon-linkedin" aria-hidden="true"></i>
                </a>
                <a className="nav-link" href="https://www.youtube.com/@mgevlich"
                   title="YouTube" target="_blank">
                    <i className="icon-youtube-play" aria-hidden="true"></i>
                </a>
            </div>
        </div>

        <div className="og-line">
            <p className="og-copyright">© Michael Gevlich 2025</p>
        </div>

    </div>)
};

export default Home;