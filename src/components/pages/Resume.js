import React from 'react';
import resumeGif from '../../components/pages/img/resume.jpg'


export default function Resume() {
    return (
        <div>
            <div className="flex-grid">
                <div className="main-content">
                    <main>

                        <div className="about-container">
                            <h2>Resume</h2>
                            <hr/>
                            <p>I am a proactive software development professional accustomed to working with Internet
                                applications. Skilled
                                at developing, optimizing, and reworking systems to meet specific customer requirements.
                                Proficient in
                                many types of programming languages. US Permanent Resident / W2.</p>


                            <div className="flex-grid tenths resume-container">
                                <div className="skills-resume col-5 col-5-md  col-10-sm">
                                    <div className="skill-list">
                                        <div>Skills</div>
                                        <div>
                                            <ul>
                                            <li>React, NodeJS, ExpressJS</li>
                                            <li>Java, SQL, JSP</li>
                                            <li>JavaScript, HTML5, CCS3</li>
                                            <li>MongoDB, GraphQL</li>
                                            <li>Bilingual (English / Spanish)</li>
                                        </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-5 col-5-md col-10-sm ">
                                    <div className="resume-link-container">
                                    <a className="" href={process.env.PUBLIC_URL + "/assets/pdf/ResumeApril2022.pdf"} target="_blank">Resume</a>
                                    <a className="" href={process.env.PUBLIC_URL + "/assets/pdf/ResumeApril2022.pdf"}
                                       target="_blank">

                                        <img className="img-resume" src={resumeGif}/>

                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>

    );
}
