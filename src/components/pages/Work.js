import React from 'react';
import TechBlogGif from '../pages/img/tech-blog.gif'
import EcommerceBackendGif from '../pages/img/ecommerce-backend.gif'
import EMSGif from '../pages/img/employee-management-system.gif'
import TestTakerGif from '../pages/img/test-taker.gif'
import WeatherDashboardGif from '../pages/img/weather-dashboard.gif'
import PortfolioGif from '../pages/img/portfolio.gif'
import PortfolioSiteGif from '../pages/img/portfolio-site.gif'


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
                            Some time ago, I developed some small programs using
                            HTML, CSS and Javascript to help the children get better
                            in our Math lessons:<br/><br/>
                        </div>

                        <Project name="Tech Blog"
                                 location="tech-blog"
                                 live="Heroku"
                                 image={TechBlogGif}
                                 content="This project is made using handlebars to generate the front-end dynamically, and Squelize with MySQL to record blogger's entries in the back-end. It is live on Heroku!"
                        />
                        <Project name="Employee Management System"
                                 location="employee-management-system"
                                 live="none"
                                 image={EMSGif}
                                 content="This application helps a small business owner to organize the departments, roles, and employees in the company. It uses the terminal as a front-end and interacts with MySQL and InquirerJS in the back-end."
                        />
                        <Project name="Test Taker"
                                 location="test-taker"
                                 live="GitHub"
                                 image={TestTakerGif}
                                 content="This little app is built with Javascript, CSS, and HTML, and although it doesn't have a back-end per se, it saves your score using your browser's local storage."
                        />
                        <Project name="E-commerce Backend"
                                 location="ecommerce-backend"
                                 live="none"
                                 image={EcommerceBackendGif}
                                 content="This is a backend project that helps a small business organize their products. This application uses Sequelize and Express JS to abstract the SQL into regular Javascript code."
                        />
                        <Project name="Portfolio Site"
                                 location="portfolio-react"
                                 live="none"
                                 image={PortfolioGif}
                                 content="This is my website to show my projects, and it's in itself a whole project. I used React, PureCSS, CSS, media queries, HTML, and Javascript to build it. No pre-made templates!"
                        />
                        <Project name="Weather Dashboard"
                                 location="Wheather-Dashboard"
                                 live="GitHub"
                                 image={WeatherDashboardGif}
                                 content="This little app aims to show the weather of any country in the world, along with the moon phases for the next five days... Werewolves, take note!"
                        />
                    </main>
                </div>
            </div>
        </div>
    );
}


function ImgWork(props){
    return(
        <div className="col-5 col-5-md col-10-sm text-center vertical-center">
            <img alt="" className="img-thumbnail" src={props.src}/>
        </div>
    );
}
function ProjectDescription(props) {
    return (
        <div>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
        </div>

    );
}

function ButtonContainer(props){
    let live;
    if(props.live === 'GitHub'){
        live = "GitHub";
    }else if(props.live === 'Heroku'){
        live = "Heroku";
    }

    let btnLive = false;
    if(props.live != 'none'){
        btnLive = true;
    }



    return(
        <div className="button-container">
            <button className="button button-red"
                    onClick={() => window["fOpenRepo"](props.location)}>

                <i className="fab fa-github"></i>&nbsp;&nbsp;GitHub repo
            </button>
            &nbsp;


            {
                (btnLive && <button className="button button-blue"
                        onClick={() => window["fOpenLive"+live](props.location)}>
                    <i className="fas fa-satellite-dish"></i>&nbsp;&nbsp;Live link
                </button>) || ""
            }

        </div>
    );
}

function ContentsProject(props){
    return(
        <div className="col-5 col-5-md col-10-sm text-left vertical-center">

            <ProjectDescription
                title={props.name}
                content={props.content}
            />

            <ButtonContainer location={props.location} live={props.live} />
        </div>
    );
}

function Project(props){
    return(
        <div>
        <div className="flex-grid tenths work-container">

                <ContentsProject name={props.name} location={props.location} live={props.live} content={props.content} />
                <ImgWork src={props.image} />
        </div>
            <br /><br />
        </div>
    );
}
