import React from 'react';
import './pages/css/style.css';
import './pages/css/purecssframework.css';
import profileJpg from './pages/img/profile.jpg'


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({pageToDraw, handlePageChange}) {
    return (
        <div>

            <header>
                <nav className="nav-container-top">
                    <div className=""><a className="nav-item-right" href="#" onClick={() => handlePageChange('About')}>about
                        me</a></div>
                    <div className=""><a className="nav-item-right" href="#" onClick={() => handlePageChange('Work')}>my
                        work</a></div>
                    <div className=""><a className="nav-item-right"
                                         href="javascript:window.open('/assets/pdf/Gianni-Fontanot-RESUME-9-24-2021.pdf', '_blank');">resume</a>
                    </div>
                    <div className=""><a className="nav-item-right" href="#"
                                         onClick={() => handlePageChange('Contact')}>Contact</a></div>
                </nav>
                <div className="profile flex-grid tenths">
                    <div className="col-3 col-3-md col-10-sm profile-image-container vred">
                        <div className="profile-image-right"><img alt="" className="profile-image" src={profileJpg}/>
                        </div>
                        <div className="profile-image-center"><img alt="" className="profile-image" src={profileJpg}/>
                        </div>
                    </div>
                    <div className="col-3 col-3-md col-10-sm text-center name-container vred">
                        <span className="profile-name"><h1>Gianni Fontanot</h1></span>
                        <span className="profile-email"><h4>giannifontanot@gmail.com</h4></span>
                    </div>

                    <div className="col-4 col-4-md col-10-sm vertical-centered  vred">
                        <div className="flex-container">
                            <div>
                                <nav className="nav-container-right">
                                    <div className="col-3 col-10-md col-10-sm"><a className="" href="#"
                                                                                  onClick={() => handlePageChange('About')}>about
                                        me</a></div>
                                    <div className="col-3 col-10-md col-10-sm"><a className="" href="#"
                                                                                  onClick={() => handlePageChange('Work')}>my
                                        work</a></div>
                                    <div className="col-2 col-10-md col-10-sm"><a className=""
                                                                                  href="javascript:window.open('/assets/pdf/Gianni-Fontanot-RESUME-9-24-2021.pdf', '_blank');">resume</a>
                                    </div>
                                    <div className="col-2 col-10-md col-10-sm"><a className="" href="#"
                                                                                  onClick={() => handlePageChange('Contact')}>Contact</a>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default NavTabs;
