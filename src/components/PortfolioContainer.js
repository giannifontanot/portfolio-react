import React, {useState} from 'react';
import NavigationHeader from './NavigationHeader';
import Home from './pages/Portfolio';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';

export default function PortfolioContainer() {
    const [pageToDraw, setPageToDraw] = useState('About');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
        if (pageToDraw === 'Portfolio') {
            return <Home/>;
        }
        if (pageToDraw === 'About') {
            return <About/>;
        }
        if (pageToDraw === 'Portfolio') {
            return <Portfolio/>;
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
            <NavigationHeader pageToDraw={pageToDraw} handlePageChange={handlePageChange}/>
            {/* Here we are calling the renderPage method which will return a component  */}
            {renderPage()}
            <Footer />
        </div>
    );
}
