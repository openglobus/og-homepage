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
            <Video isMuted={true}></Video>
        </div>

        <div className="og-line">
            <div className="og-description">
                &emsp;&emsp;Openglobus is a tool for creating visualization programs for landscapes, satellite images,
                buildings,
                and any moving objects in real-time. is an open-source JavaScript/TypeScript library based on pure
                WebGL, which can be easily
                integrated
                into any related project thanks to its simple API. Openglobus supports various
                high-resolution terrain data providers and imagery layers, can render thousands of 3D objects, offers
                geometry measurement tools, and more.
                <br/>
                <br/>
                &emsp;&emsp;Openglobus is released under the&ensp;
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
                <a className="nav-link" href="https://github.com/openglobus/openglobus" title="GitHub">
                    <i className="icon-github-circled" aria-hidden="true"></i>
                </a>
                <a className="nav-link" href="https://twitter.com/openglobus" title="Twitter">
                    <i className="icon-twitter" aria-hidden="true"></i>
                </a>
                <a className="nav-link" href="https://www.linkedin.com/company/openglobus/"
                   title="LinkedIn">
                    <i className="icon-linkedin" aria-hidden="true"></i>
                </a>
            </div>
        </div>

        <div className="og-line">
            <p className="og-copyright">© Michael Gevlich 2023</p>
        </div>

    </div>)
};

export default Home;