import React from 'react';

export default function Contact() {
    return (
        <div>

            <div className="flex-grid">
                <div className="main-content">
                    <main>
                        <div className="contact-container flex-grid tenths">
                            <div className="col-10">
                                <a id="contact"></a>
                                <h2>Contact</h2>
                                <hr/>
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
                </div>
            </div>
        </div>
    );
}
