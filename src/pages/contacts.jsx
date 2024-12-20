import "./contacts.css";

import React from "react";

const Contacts = () => {
    return (
        <>
            <div className="og-videobackground">
                <div className="og-gradient"></div>
                <img className="og-about-background" src="./atmos2.png"></img>
            </div>

            <div className="og-line">
                <div className="og-description">
                    <div className="contacts">
                        <p>I’d love to hear from you! Feel free to reach out to me directly using any of the options
                            below:</p>
                        <ul>
                            <li><strong>Email:</strong> <a
                                href="mailto:mgevlich@gmail.com">mgevlich@gmail.com</a></li>
                            <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/mgevlich/"
                                                              target="_blank">https://www.linkedin.com/in/mgevlich/</a></li>
                        </ul>
                        <p>Let’s stay in touch! Looking forward to your message. 😊</p>
                        <p>Cheers,<br/>Michael Gevlich</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contacts;