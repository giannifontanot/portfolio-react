import React from 'react';

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
                                <form className="pure-form pure-form-aligned">
                                    <fieldset>
                                        <div className="pure-control-group">
                                            <label htmlFor="aligned-name">Name</label>
                                            <input type="text" id="aligned-name" placeholder="name" onBlur={window['checkEmpty']}/>
                                            <span className="pure-form-message-inline">This is a required field.</span>
                                        </div>

                                        <div className="pure-control-group">
                                            <label htmlFor="aligned-email">Email Address</label>
                                            <input type="email" id="aligned-email" placeholder="Email Address"/>
                                            <span className="pure-form-message-inline">This is a required field.</span>
                                        </div>
                                        <div className="pure-control-group">
                                            <label htmlFor="aligned-foo">Message</label>
                                            <textarea type="text" id="aligned-foo" placeholder="Enter something here..."></textarea>
                                        </div>
                                        <div className="pure-controls">

                                            <button type="submit" className="pure-button pure-button-primary">Submit
                                            </button>
                                        </div>
                                    </fieldset>
                                </form>
                                </div>
                            </div>
                            <div className="col-5 col-5-md col-10-sm contact-container-left">
                                <div><strong>email</strong></div>
                                <div><a href="mailto:giannifontanot@gmail.com">giannifontanot@gmail.com</a></div>
                                <div>&nbsp;</div>
                                <div><strong>phone &middot; sms</strong></div>
                                <div>(214) 809 - 4544</div>
                            </div>
                            <div className="col-5 col-5-md col-10-sm text-right contact-container-right">
                                <div><strong>Linkedin</strong></div>
                                <div><a
                                    href="https://www.linkedin.com/in/gianni-fontanot">linkedin.com/in/gianni-fontanot</a>
                                </div>
                                <div>&nbsp;</div>
                                <div><strong>GitHub</strong></div>
                                <div><a href="https://github.com/giannifontanot">github.com/giannifontanot</a></div>
                            </div>

                        </div>

                    </main>
                    <footer><div>&copy; 2021 Gianni Fontanot</div></footer>
                </div>

        </>
    );
}
