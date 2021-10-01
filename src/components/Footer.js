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

                        <div className="logo-img"><a href="mailto:giannifontanot@gmail.com"><img className="img-thumbnail" alt="" src={GmailPNG}/></a></div>

                        <div className="logo-img"><a href="https://stackoverflow.com/users/15772854/gianni-fontanot"><img className="img-thumbnail" alt="" src={StackPNG}/></a></div>

                        <div className="logo-img"><a href="https://www.linkedin.com/in/gianni-fontanot"><img className="img-thumbnail" alt="" src={LinkedInPNG}/></a></div>

                        <div className="logo-img"><a href="https://github.com/giannifontanot"><img className="img-thumbnail" alt="" src={GitHubPNG}/></a></div>
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

