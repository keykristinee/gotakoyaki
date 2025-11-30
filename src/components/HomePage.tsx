import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Flame, Heart, Clock, Quote, Star } from 'lucide-react';
import { Button } from './ui/button';
import PhotoBannerSlider from './PhotoBannerSlider';
import '../styles/HomePage.css';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-[#FFFDF8]">
      
      {/* Hero Section */}
      <section className="relative min-h-[750px] overflow-hidden flex items-center py-24 lg:py-32">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/home_bg.png" 
            alt="Home Background" 
            className="hero-blur" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center">
          <div className="grid md:grid-cols-2 gap-20 items-center w-full">
            
            {/* Left Content */}
            <div className="z-10">
              <div className="hero-badge-modern">
                Authentic Takoyaki Cheesebombs
              </div>
              <h1 className="hero-title-modern">
                Delicious Takoyaki,<br />
                <span className="text-highlight-gold">Made <span className='text-change-gold'>Fresh</span> Daily</span>
              </h1>
              <p className="hero-desc-modern">
                Experience the authentic taste of Japan with our perfectly crispy outside, 
                tender inside takoyaki cheesebombs, crafted with love and premium ingredients.
              </p>
              <div className="hero-btn-group">
                <button 
                  onClick={() => onNavigate('franchise')}
                  className="btn-hero-primary"
                >
                  Franchise with Us <ArrowRight size={22} />
                </button>
                
                <button 
                  onClick={() => onNavigate('location')}
                  className="btn-hero-secondary"
                >
                  Find Us
                </button>
              </div>
            </div>
            
            <div className="relative hidden md:block">
              <div className="relative z-10">
                <ImageWithFallback
                  src="/home_side.png"
                  alt="Delicious Takoyaki"
                  className="rounded-lg shadow-2xl border-4 border-[#FBD612]"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-[#FBD612] rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section*/}
      <section className="py-24 bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="feature-script-title">The Go Takoyaki Difference</h2>
            <div className="h-1.5 w-24 bg-[#FBD612] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We bring you the authentic taste of Japanese street food with a commitment to quality and tradition.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="feature-card group">
              <div className="feature-icon-wrapper">
                <Flame className="text-white group-hover:scale-110 transition-transform" size={32} />
              </div>
              <h3 className="feature-title">Made Fresh Daily</h3>
              <p className="feature-desc">
                Every takoyaki is cooked to order on our custom grills, ensuring you get the hottest, crispiest bite every single time.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card group">
              <div className="feature-icon-wrapper">
                <Heart className="text-white group-hover:scale-110 transition-transform" size={32} />
              </div>
              <h3 className="feature-title">Premium Ingredients</h3>
              <p className="feature-desc">
                We use real baby octopus, our secret savory batter mix, and authentic Japanese seasonings imported directly from source.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card group">
              <div className="feature-icon-wrapper">
                <Clock className="text-white group-hover:scale-110 transition-transform" size={32} />
              </div>
              <h3 className="feature-title">Traditional Recipe</h3>
              <p className="feature-desc">
                Inspired by the street food masters of Osaka, our technique mimics the traditional "thousand pick" rotation method.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PhotoBannerSlider */}
      <div className="border-y-4 border-[#FBD612] bg-[#FFF8E7]">
        <PhotoBannerSlider />
      </div>

      {/* Testimonials Section*/}
      <section className="home-testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="testimonials-script-title">Reviews</h2>
             <div className="h-1.5 w-24 bg-[#FBD612] mx-auto rounded-full mb-6"></div>
             <p className="text-gray-500">What our happy customers are saying</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Testimonial 1 */}
            <div className="testimonial-bubble">
              <Quote className="testimonial-quote-icon" size={40} />
              <p className="testimonial-text">"It's my second time ordering from Go Takoyaki. Hassle-free and super delicious! It tastes authentic ❤️"</p>
              <div className="testimonial-author">
                <div className="font-bold text-[#70080B]">Hana J.</div>
                <div className="flex text-[#FBD612] text-xs"><Star fill="currentColor" size={14}/><Star fill="currentColor" size={14}/><Star fill="currentColor" size={14}/><Star fill="currentColor" size={14}/><Star fill="currentColor" size={14}/></div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-bubble">
              <Quote className="testimonial-quote-icon" size={40} />
              <p className="testimonial-text">"loved everything I ordered! ❤️ tried the baby octo and the ones w shrimp :)"</p>
              <div className="testimonial-author">
                <div className="font-bold text-[#70080B]">Chengtu R.</div>
                <div className="flex text-[#FBD612] text-xs"><Star fill="currentColor" size={14}/><Star fill="currentColor" size={14}/><Star fill="currentColor" size={14}/><Star fill="currentColor" size={14}/><Star fill="currentColor" size={14}/></div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="testimonial-bubble">
              <Quote className="testimonial-quote-icon" size={40} />
              <p className="testimonial-text">"Tried their octobits variant and it's really good! It hada lot of bonito and floss. Transacting with them is also very easy and convenient. I'll order again!"</p>
              <div className="testimonial-author">
                <div className="font-bold text-[#70080B]">Bea S.</div>
                <div className="flex text-[#FBD612] text-xs"><Star fill="currentColor" size={14}/><Star fill="currentColor" size={14}/><Star fill="currentColor" size={14}/><Star fill="currentColor" size={14}/><Star fill="currentColor" size={14}/></div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="testimonial-bubble">
              <Quote className="testimonial-quote-icon" size={40} />
              <p className="testimonial-text">"masarap po freshly cooked and kahit reheat 😋 fave ko po yung baby octopus, yung sister ko yung kani. will definitely order again 😁💗"</p>
              <div className="testimonial-author">
                <div className="font-bold text-[#70080B]">Mary G.</div>
                <div className="flex text-[#FBD612] text-xs"><Star fill="currentColor" size={14}/><Star fill="currentColor" size={14}/><Star fill="currentColor" size={14}/><Star fill="currentColor" size={14}/><Star fill="currentColor" size={14}/></div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}