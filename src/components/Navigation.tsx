import { Menu, X } from 'lucide-react';
import { useState } from 'react';
// Ensure this path points to where you saved the CSS file
import '../styles/Navigation.css';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'menu', label: 'Menu' },
    { id: 'location', label: 'Location' },
    { id: 'franchise', label: 'Franchise' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-content">
          
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="nav-logo-btn"
            aria-label="Go to Homepage"
          >
            <img
              src="/header.png"
              alt="Go Takoyaki Logo"
              className="nav-logo-img"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="nav-links-desktop">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu-dropdown">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMobileMenuOpen(false);
              }}
              className={`mobile-nav-link ${currentPage === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}