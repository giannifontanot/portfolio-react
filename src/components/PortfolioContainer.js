import React, {useState} from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Work';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
    const [pageToDraw, setPageToDraw] = useState('About');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
        if (pageToDraw === 'Home') {
            return <Home/>;
        }
        if (pageToDraw === 'About') {
            return <About/>;
        }
        if (pageToDraw === 'Work') {
            return <Work/>;
        }
        if (pageToDraw === 'Resume') {
            return <Resume/>;
        }
        if (pageToDraw === 'Contact') {
            return <Contact/>;
        }
        return <About/>;
    };

    const handlePageChange = (page) => setPageToDraw(page);

    return (
        <div>
            {/* We are passing the currentPage from state and the function to update it */}
            <NavTabs pageToDraw={pageToDraw} handlePageChange={handlePageChange}/>
            {/* Here we are calling the renderPage method which will return a component  */}
            {renderPage()}
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
        </div>
    );
}
