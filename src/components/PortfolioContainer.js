import React, { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Resume') {
      return <Resume />
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div style={{backgroundColor: '#E0E1DD'}}>
    <style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
</style>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
