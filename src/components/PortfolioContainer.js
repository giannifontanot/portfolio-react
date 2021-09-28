import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Work';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [pageToDraw, setPageToDraw] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (pageToDraw === 'Home') {
      return <Home />;
    }
    if (pageToDraw === 'About') {
      return <About />;
    }
    if (pageToDraw === 'Work') {
      return <Work />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setPageToDraw(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs pageToDraw={pageToDraw} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
