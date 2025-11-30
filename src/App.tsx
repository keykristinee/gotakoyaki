import { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import MenuPage from './components/MenuPage';
import LocationPage from './components/LocationPage';
import FranchisePage from './components/FranchisePage';
import Footer from './components/Footer';
import './styles/globals.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'menu':
        return <MenuPage />;
      case 'location':
        return <LocationPage />;
      case 'franchise':
        return <FranchisePage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}
