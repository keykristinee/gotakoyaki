import { ImageWithFallback } from './figma/ImageWithFallback';
import { Clock, MapPin } from 'lucide-react';
import '../styles/LocationPage.css';

export default function LocationPage() {
  const hours = [
    { day: 'Monday', hours: '11:00 AM - 10:00 PM' },
    { day: 'Tuesday', hours: '11:00 AM - 10:00 PM' },
    { day: 'Wednesday', hours: '11:00 AM - 10:00 PM' },
    { day: 'Thursday', hours: '11:00 AM - 10:00 PM' },
    { day: 'Friday', hours: '11:00 AM - 10:00 PM' },
    { day: 'Saturday', hours: '11:00 AM - 9:00 PM' },
    { day: 'Sunday', hours: '11:00 AM - 9:00 PM' },
  ];

  // Consolidate branch data here
  const branches = [
    { 
      status: 'Open', 
      name: 'Ayala Malls Vertis North', 
      address: 'Level 4, Japan Town', 
      type: 'new' 
    },
    { 
      status: 'Open', 
      name: 'SM Center Las Pinas', 
      address: 'Lower Ground Floor, Covered Walk', 
      type: 'new' 
    },

    { 
      status: 'Soon', 
      name: 'SM Fairview', 
      address: 'Opening Soon', 
      type: 'upcoming' 
    },
  ];

  return (
    <div className="location-page">
      {/* Hero Section */}
      <section className="location-hero relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
           <img 
             src="/location_bg.png" 
             alt="Our Location" 
             className="hero-blur"
           />
           {/* Gradient Overlay */}
           <div className="absolute inset-0 bg-gradient-to-r from-[#70080B]/95 to-[#8a0a0e]/80"></div>
        </div>
        <div className="location-container">
          <div className="hero-content">
            <h1 className="hero-script-title">Visit Us</h1>
            <p className="hero-subtitle">
              Come experience authentic takoyaki at our welcoming location
            </p>
          </div>  
        </div>
      </section>

      {/* Hours & Branches Section */}
      <section className="hours-branches-section">
        <div className="location-container">
          <div className="hours-branches-flex">
            
            {/* Left Side: Hours */}
            <div className="hours-inner">
              <div className="hours-badge">Opening Hours</div>
              <h2 className="content-script-title">When We're Open</h2>
              <div className="h-1.5 w-24 bg-[#FBD612] mx-auto rounded-full mb-6"></div>
              <div className="hours-card">
                <div className="hours-header">
                  <div className="hours-icon">
                    <Clock size={20} />
                  </div>
                  <p className="hours-text">We're open 7 days a week</p>
                </div>
                <div className="hours-list">
                  {hours.map((item, index) => (
                    <div
                      key={index}
                      className={`hours-item ${
                        item.day === 'Saturday' || item.day === 'Sunday'
                          ? 'hours-item--weekend'
                          : ''
                      }`}
                    >
                      <span className="hours-item-day">{item.day}</span>
                      <span className="hours-item-hours">{item.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="hours-note">
                  <p>
                    <span>Note:</span> Last orders are taken 30 minutes before closing time
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: Branches */}
            <div className="branches-side">
              <div className="branch-header" style={{marginTop: '2.5rem'}}>
                <h2 className="content-script-title">Branches</h2>
                <div className="h-1.5 w-24 bg-[#FBD612] mx-auto rounded-full mb-6"></div>
                <p className="branch-text">Check out our locations bringing you fresh takoyaki cheesebombs to your community!</p>
              </div>
              
              {/* UNIFIED CONTAINER FOR ALL CARDS */}
              <div className="branch-cards-grid">
                {branches.map((branch, index) => (
                  <div key={index} className={`branch-card branch-card--${branch.type}`}>
                    <div className="branch-card-header">
                      <span className={`branch-badge branch-badge--${branch.type}`}>
                        {branch.status}
                      </span>
                      <span className="branch-location">{branch.name}</span>
                    </div>
                    {/* This will now align properly because of the CSS Flex/Grid */}
                    <div className="branch-address-wrapper">
                       {branch.type === 'new' && <MapPin size={16} className="inline mr-1 text-gray-400"/>}
                       <span className="branch-address">{branch.address}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}