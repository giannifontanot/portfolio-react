import React from 'react';
import TechBlogGif from '../pages/img/tech-blog.gif'
import EcommerceBackendGif from '../pages/img/ecommerce-backend.gif'
import EMSGif from '../pages/img/employee-management-system.gif'
import TestTakerGif from '../pages/img/test-taker.gif'
import WeatherDashboardGif from '../pages/img/weather-dashboard.gif'
import PortfolioGif from '../pages/img/portfolio.gif'
import Project from '../Project'
import Strong from '../Strong'


export default function Work() {
    return (
        <div>
            <div className="flex-grid">
                <div className="main-content">
                    <main>

                        <div className="mywork-container">
                            <a id="work"></a>
                            <h2>My Work</h2>
                            <hr/>
                            Following you will find a selection of my best projects completed during my <strong>Bootcamp</strong> in <strong>SMU</strong>. Click on any image to see it <strong>bigger!</strong><br/><br/>
                        </div>

                        <Project title="Tech Blog"
                                 subtitle="A Blog Site for Techies"
                                 location="tech-blog"
                                 live="Heroku"
                                 image={TechBlogGif}
                                 content={<React.Fragment>This project is made using <strong>Express' handlebars</strong> to generate the front-end
                                  dynamically, and <strong>Squelize</strong> with <strong>MySQL</strong> to record blogger's entries in the back-end.
                                  It is live on <strong>Heroku!</strong></React.Fragment>}
                        />
                        <Project title="Employee Management System"
                                 subtitle="Manage Your Business"
                                 location="employee-management-system"
                                 live="none"
                                 image={EMSGif}
                                 content={<React.Fragment>This application helps a small business owner to organize the departments, roles, and employees in the company. It is a <strong>back-end project</strong> that uses the <strong>terminal</strong> as a front-end and interacts with <strong>MySQL</strong> and <strong>InquirerJS</strong> in the back-end.</React.Fragment>}
                        />
                        <Project title="Test Taker"
                                 subtitle="Show What You Know"
                                 location="test-taker"
                                 live="GitHub"
                                 image={TestTakerGif}
                                 content={<React.Fragment>This little app is built with <strong>Javascript, CSS, and HTML</strong>, and although it doesn't have a back-end per se, it saves your score using your browser's <strong>local storage</strong>.</React.Fragment>}
                        />
                        <Project title="E-commerce Backend"
                                 subtitle="Organize Your Inventory"
                                 location="ecommerce-backend"
                                 live="none"
                                 image={EcommerceBackendGif}
                                 content={<React.Fragment>This is a <strong>backend project</strong> that helps a small business organize their products. This application uses <strong>Sequelize</strong> and <strong>Express JS</strong> to abstract the SQL into regular Javascript code.</React.Fragment>}
                        />
                        <Project title="This Portfolio Site"
                                 subtitle="My Best Projects"
                                 location="portfolio-react"
                                 live="none"
                                 image={PortfolioGif}
                                 content={<React.Fragment>This is my website to show my projects, and it's in itself a whole project. I used <strong>React, PureCSS, CSS, media queries</strong>, and <strong>HTML5</strong> to build it. No pre-made templates!</React.Fragment>}
                        />
                        <Project title="Weather Dashboard"
                                 subtitle="Do You Need an Umbrella?"
                                 location="Wheather-Dashboard"
                                 live="GitHub"
                                 image={WeatherDashboardGif}
                                 content={<React.Fragment>This little app aims to show the weather of any country in the world, along with the moon phases for the next five days... Werewolves, take note!</React.Fragment>}
                        />
                    </main>
                </div>
            </div>
        </div>
    );
}









