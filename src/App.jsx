import './App.css';
import "./fontello/css/fontello.css";

import React, {useRef, useEffect} from "react";

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

    return (
        <video
            id="background-video"
            ref={refVideo}
            autoPlay
            playsInline
            loop
        >
            <source src="//openglobus.org/video.mp4" type="video/mp4"/>
        </video>
    );
}

const App = () => {
    return (
        <div className="App">

            <div className="og-videobackground">
                <Video isMuted={true}></Video>
            </div>

            <div className="og-gradient"></div>

            <div className="og-underconstruction">UNDER CONSTRUCTION</div>

            <div className="og-main">
                <div className="og-top">
                    <div className="og-brand">Openglobus</div>
                    <div className="og-social">
                        <a className="nav-link"  href="https://github.com/openglobus/openglobus" title="GitHub">
                            <i className="icon-github-circled" aria-hidden="true"></i>
                        </a>
                        <a className="nav-link" href="https://twitter.com/openglobus" title="Twitter">
                            <i className="icon-twitter" aria-hidden="true"></i>
                        </a>
                        <a className="nav-link" href="https://www.linkedin.com/company/openglobus/" title="LinkedIn">
                            <i className="icon-linkedin" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>

                <div className="og-center">
                    <div className="og-description">
                        &emsp;Openglobus is an open-source javascript library for creating interactive 3D maps,
                        with real-time
                        surroundings rendering. It supports various high-resolution terrain providers, and imagery
                        layers,
                        renders thousands of 3D objects, provides geometry measurement tools, and more.
                        Check some examples here: <a className="og-examples_href" href="https://www.openglobus.org/examples">EXAMPLES</a>
                    </div>
                </div>

                <div className="og-subscribe">
                    Stay tuned, and subscribe!
                </div>
            </div>

            <div className="og-bottom">
                <p className="og-copyright">© Michael Gevlich 2023. <a
                    href="https://github.com/openglobus/openglobus/blob/master/LICENSE.md">License MIT</a></p>
            </div>

        </div>
    )
        ;
}

export default App;
