import React from "react";
import LinkedInPNG from '../components/pages/img/logos/linkedin.png'
import GitHubPNG from '../components/pages/img/logos/github.png'
import GmailPNG from '../components/pages/img/logos/gmail.png'
import StackPNG from '../components/pages/img/logos/overflowing.png'


export default function Footer() {
    return (
        <footer className="">
            <div className="footer-logo-container">

                <div>
                    <div className="logo-container">

                        <div><a href="mailto:giannifontanot@gmail.com"><img className="img-thumbnail logo-img" alt=""
                                                                            src={GmailPNG}/></a></div>

                        <div><a href="https://stackoverflow.com/users/15772854/gianni-fontanot"><img
                            className="img-thumbnail logo-img" alt="" src={StackPNG}/></a></div>

                        <div><a href="https://www.linkedin.com/in/gianni-fontanot"><img
                            className="img-thumbnail logo-img" alt="" src={LinkedInPNG}/></a></div>

                        <div><a href="https://github.com/giannifontanot"><img className="img-thumbnail logo-img" alt=""
                                                                              src={GitHubPNG}/></a></div>
                    </div>
                </div>


                <div>
                    <span className="copyright-message">Icons made by <a href="https://www.freepik.com"
                                                                         title="Freepik">Freepik</a> from <a
                        href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></span>
                </div>
            </div>
        </footer>
    );
}

