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
                    <table className="nav-table vred">
                        <tr>
                            <td className={pageToDraw === 'About' ? 'nav-table-cell-active' : 'nav-table-cell'}>
                                <a className="nav-item-right"
                                   href="#"
                                   onClick={() => handlePageChange('About')}>about me
                                </a>
                            </td>
                            <td className={pageToDraw === 'Work' ? 'nav-table-cell-active' : 'nav-table-cell'}>
                                <a className="nav-item-right"
                                   href="#"
                                   onClick={() => handlePageChange('Work')}>my work
                                </a>
                            </td>
                            <td className={pageToDraw === 'Resume' ? 'nav-table-cell-active' : 'nav-table-cell'}>
                                <a className="nav-item-right"
                                   href="javascript:window.open('/assets/pdf/Gianni-Fontanot-RESUME-9-24-2021.pdf', '_blank');">resume
                                </a>
                            </td>
                            <td className={pageToDraw === 'Contact' ? 'nav-table-cell-active' : 'nav-table-cell'}>
                                <a className="nav-item-right" href="#"
                                   onClick={() => handlePageChange('Contact')}>Contact
                                </a>
                            </td>
                        </tr>
                    </table>
                </nav>

                <div className="profile flex-grid tenths">
                    <div className="col-3 col-3-md col-10-sm profile-image-container">
                        <div className="profile-image-right"><img alt="" className="profile-image" src={profileJpg}/>
                        </div>
                        <div className="profile-image-center"><img alt="" className="profile-image" src={profileJpg}/>
                        </div>
                    </div>
                    <div className="col-3 col-3-md col-10-sm text-center name-container">
                        <div className="profile-name">Gianni Fontanot</div>
                        <div className="profile-email">giannifontanot@gmail.com</div>
                    </div>

                    <nav className="nav-container-right col-4 col-4-md col-10-sm vertical-centered">


                            <table className="nav-table">
                                <tr>
                                    <td>
                                        <a className=""
                                           href="#"
                                           onClick={() => handlePageChange('About')}>about me
                                        </a>
                                    </td>
                                    <td>
                                        <a className=""
                                           href="#"
                                           onClick={() => handlePageChange('Work')}>my work
                                        </a>
                                    </td>
                                    <td>
                                        <a className=""
                                           href="javascript:window.open('/resume.pdf', '_blank');">resume
                                        </a>
                                    </td>
                                    <td>
                                        <a className=""
                                           href="#"
                                           onClick={() => handlePageChange('Contact')}>Contact
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </nav>


                </div>
            </header>
        </div>
    );
}

export default NavTabs;
