import React from "react";


export default function Footer(){
    return(
        <footer className="">
            <div className="col-5 col-5-md col-10-sm contact-container-left">
                <div><strong>email</strong></div>
                <div><a href="mailto:giannifontanot@gmail.com">giannifontanot@gmail.com</a></div>
                <div>&nbsp;</div>
                <div><strong>Stackoverflow</strong></div>
                <div><a href="https://stackoverflow.com/users/15772854/gianni-fontanot">https://stackoverflow.com/users/15772854/</a></div>
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

        </footer>
    );
}

