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

const Home = () => {
    return (
        <div className="App">

            <div className="og-videobackground">
                <Video isMuted={true}></Video>
            </div>

            <div className="og-gradient"></div>

            <div className="og-main">
                <div className="og-center">

                    <div className="og-top">
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

                    <div className="og-description">
                        &emsp;&emsp;Openglobus is an open-source javascript/typescript library for creating interactive
                        high
                        precised 3D
                        maps, with real-time surroundings rendering. It supports various high-resolution terrain data
                        providers, and imagery
                        layers, renders thousands of 3D objects, provides geometry measurement tools, and more.
                        <br/>
                        <br/>
                        &emsp;&emsp;Openglobus is released under the&ensp;
                        <a className="og-mit" href="https://github.com/openglobus/openglobus/blob/master/LICENSE.md">MIT
                            License</a> and is
                        free for both commercial and non-commercial use.
                    </div>

                    <div className="og-subscribe">
                        Stay tuned, and subscribe!
                    </div>

                </div>
            </div>

            <div className="og-bottom">
                <p className="og-copyright">© Michael Gevlich 2023</p>
            </div>

        </div>
    )
};

export default Home;