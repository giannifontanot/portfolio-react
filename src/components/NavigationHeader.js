import React from 'react';
import './pages/css/style.css';
import './pages/css/purecssframework.css';
import profileJpg from './pages/img/profile.jpg'


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavigationHeader({pageToDraw, handlePageChange}) {
    return (
        <div>

            <header>
                <nav className="nav-container-top">
                    <table className="nav-table vred">
                        <tr>
                            <td className={pageToDraw === 'About' ? 'nav-table-cell-active' : 'nav-table-cell'}>
                                <a className="nav-item-right"
                                   href="#"
                                   onClick={() => handlePageChange('About')}><div className="cell-menu">about me</div>
                                </a>
                            </td>
                            <td className={pageToDraw === 'Work' ? 'nav-table-cell-active' : 'nav-table-cell'}>
                                <a className="nav-item-right"
                                   href="#"
                                   onClick={() => handlePageChange('Work')}><div className="cell-menu">portfolio</div>
                                </a>
                            </td>
                            <td className={pageToDraw === 'Resume' ? 'nav-table-cell-active' : 'nav-table-cell'}>

                                    <a className=""
                                       href="#"
                                       onClick={() => handlePageChange('Resume')}>
                                        <div className="cell-menu">resume</div>
                                    </a>

                            </td>
                            <td className={pageToDraw === 'Contact' ? 'nav-table-cell-active' : 'nav-table-cell'}>
                                <a className="nav-item-right" href="#"
                                   onClick={() => handlePageChange('Contact')}><div className="cell-menu">contact</div>
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
                        <div className="profile-name">Gianni Fontanot</div><br />
                        <div className="profile-email">giannifontanot@gmail.com</div>
                    </div>

                    <nav className="nav-container-right col-4 col-4-md col-10-sm vertical-centered">


                            <table className="nav-table">
                                <tr className="menu-horizontal">

                                        <td className={pageToDraw === 'About' ? 'nav-table-cell-active' : 'nav-table-cell'}>
                                            <a className="nav-item-right"
                                               href="#"
                                               onClick={() => handlePageChange('About')}><div className="cell-menu">about me</div>
                                            </a>
                                        </td>
                                        <td className={pageToDraw === 'Work' ? 'nav-table-cell-active' : 'nav-table-cell'}>
                                            <a className="nav-item-right"
                                               href="#"
                                               onClick={() => handlePageChange('Work')}><div className="cell-menu">portfolio</div>
                                            </a>
                                        </td>
                                        <td className={pageToDraw === 'Resume' ? 'nav-table-cell-active' : 'nav-table-cell'}>

                                            <a className=""
                                               href="#"
                                               onClick={() => handlePageChange('Resume')}>
                                                <div className="cell-menu">resume</div>
                                            </a>

                                        </td>
                                        <td className={pageToDraw === 'Contact' ? 'nav-table-cell-active' : 'nav-table-cell'}>
                                            <a className="nav-item-right" href="#"
                                               onClick={() => handlePageChange('Contact')}><div className="cell-menu">contact</div>
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

export default NavigationHeader;
