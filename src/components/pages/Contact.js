import React from 'react';
import NameInput from "../NameInput";
import EmailInput from "../EmailInput";
import NameTextarea from "../NameTextarea";



export default function Contact() {
    return (
        <>

                <div className="main-content">
                    <main>
                        <div className="contact-container flex-grid tenths">
                            <div className="col-10">

                                <h2>Contact</h2>
                                <hr/>
                                <h4>Drop me an email. Old-fashioned phone calls work too!</h4>
< br />< br />
                                <div className="form-email">
                                {/*<form className="pure-form pure-form-aligned">*/}
                                {/*    <fieldset>*/}
                                {/*        <NameInput InputName="name" id="aligned-name" placeholder="Please enter your name" />*/}
                                {/*        <EmailInput InputName="email" id="aligned-email" placeholder="Please enter your email" />*/}
                                {/*        <NameTextarea InputName="message" id="aligned-message" placeholder="Enter something here..." />*/}

                                {/*        <div className="pure-controls">*/}
                                {/*            <button type="submit" className="pure-button pure-button-primary">Submit*/}
                                {/*            </button>*/}
                                {/*        </div>*/}
                                {/*    </fieldset>*/}
                                {/*</form>*/}
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
        </>
    );
}


