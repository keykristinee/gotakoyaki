import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, Users, Sparkles, Target, UtensilsCrossed, Flame, ChefHat } from 'lucide-react';
import '../styles/AboutPage.css';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const storyBeats = [
    {
      id: 1,
      tag: "Before Pandemic",
      title: "A Dream from Osaka",
      description: "We visited Osaka, Japan — home of the famous takoyaki. While we were there, we had our first taste of what real takoyaki should be like. That's when it hit us: Why not bring this authentic taste back to the Philippines? What started as a simple idea quickly turned into something way bigger.",
      image: "/story1.png", 
      rotation: "rotate-left" 
    },
    {
      id: 2,
      tag: "During Pandemic",
      title: "Bringing the Recipe Home",
      description: "Our journey began amidst the challenges of a pandemic. We thought, \"Why not bring authentic takoyaki closer to every home?\" We started as an online commissary, delivering authentic takoyaki delights right to your doorstep. A proper kitchen where we could make even more takoyaki without worrying about space.",
      image: "/story2.png", 
      rotation: "rotate-right"
    },
    {
      id: 3,
      tag: "Growth",
      title: "Crafting our Legacy",
      description: "We started with just one flavor — simple and authentic. But as we grew, we knew our customers wanted more. We experimented, tried different combinations, and listened to feedback. Slowly but surely, our menu grew to include 5 amazing flavors.",
      image: "/story3.png",
      rotation: "rotate-left"
    },
    {
      id: 4,
      tag: "Milestone",
      title: "Opening our First Branch",
      description: "Our biggest leap was opening our dine-in branch at Panay Avenue. With the support of our loyal customers, we finally had a space to call our own. From a home kitchen to this? It felt surreal. It's not just a store, but a reminder of what's possible when you build something with heart.",
      image: "/story4.png",
      rotation: "rotate-right"
    },
    {
      id: 5,
      tag: "Today",
      title: "Turned Into Reality",
      description: "We didn’t just open a branch — we built Panay from the ground up. Everything you see inside, we chose with care — from the layout to the little details. It wasn’t easy, but seeing it all come together made it one of the proudest moments in our journey.",
      image: "/story5.png",
      rotation: "rotate-left"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#FFF8E7]">
      {/* Hero Section */}
      <section className="relative text-white py-24 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/story_bg.png" 
            alt="Story Background" 
            className="hero-blur" 
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="hero-script-title mb-6">How It All Started</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto font-light tracking-wide">
              Bringing the authentic taste of Osaka's street food culture to your community
            </p>
          </div>
        </div>
      </section>

      <section className="story-section">
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="story-timeline">
            {/* The Center Line */}
            <div className="timeline-track"></div>

            {storyBeats.map((beat) => (
              <div key={beat.id} className="story-row">
                
                {/* The Content Side */}
                <div className="story-content">
                  <div className="story-card">
                    <span className="story-tag">{beat.tag}</span>
                    <h3 className="story-title">{beat.title}</h3>
                    <p className="story-desc">{beat.description}</p>
                  </div>
                </div>

                {/* The Center Marker */}
                <div className="story-marker">
                  <div className="marker-dot"></div>
                </div>

                {/* The Polaroid Side */}
                <div className="story-visual">
                  <div className={`polaroid-frame ${beat.rotation}`}>
                    {/* The Tape Effect */}
                    <div className="tape-strip"></div>
                    
                    <div className="polaroid-inner">
                      <ImageWithFallback 
                        src={beat.image} 
                        alt={beat.title} 
                        className="polaroid-img" 
                      />
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="values-special-font">Our Values</h2>
            <div className="h-1.5 w-24 bg-[#FBD612] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              What drives us every day to create the perfect takoyaki experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-[#FBD612] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Award className="text-[#70080B]" size={36} strokeWidth={2.5} />
              </div>
              <h3 className="text-[#70080B] text-xl font-bold mb-3">Quality First</h3>
              <p className="text-gray-600">We never compromise on ingredients or preparation methods.</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#FBD612] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="text-[#70080B]" size={36} strokeWidth={2.5} />
              </div>
              <h3 className="text-[#70080B] text-xl font-bold mb-3">Community</h3>
              <p className="text-gray-600">Building connections through shared love of great food.</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#FBD612] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Sparkles className="text-[#70080B]" size={36} strokeWidth={2.5} />
              </div>
              <h3 className="text-[#70080B] text-xl font-bold mb-3">Authenticity</h3>
              <p className="text-gray-600">Staying true to traditional Japanese recipes and techniques.</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#FBD612] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target className="text-[#70080B]" size={36} strokeWidth={2.5} />
              </div>
              <h3 className="text-[#70080B] text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">Striving for perfection in every single ball we make.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* SECTION: FRANCHISE ANNOUNCEMENT */}
      <section className="franchise-section-themed">
        {/* Background Texture (Subtle Japanese Pattern) */}
        <div className="franchise-bg-pattern"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: The Pitch */}
            <div className="text-left space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
                Now We're <span className="franchising-special-font">Franchising!</span>
              </h2>
              
              <div className="h-1.5 w-24 bg-[#FBD612] rounded-full mb-6"></div>

              <div className="text-white/90 space-y-5 text-lg font-light leading-relaxed">
                <p>
                  <strong>We’re not stopping there.</strong> Over the past year, we’ve worked closely with <span className="text-[#FBD612] font-bold">Francorp</span>, one of the leading franchise consultants, to build a solid foundation for aspiring entrepreneurs like you. We’ve invested time and resources into refining our operations, ensuring that the <strong>Go Takoyaki</strong> system you inherit is efficient, profitable, and authentic.
                </p>
                
                {/* Highlight Box */}
                <div className="franchise-highlight-box">
                  <p className="italic font-medium text-[#FFF8E7]">
                    "With 3 branches already established, we’re just getting started. Maybe the next branch is coming to your neighborhood?"
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <button className="franchise-ticket-btn"
                  onClick={() => onNavigate('franchise')}
                >
                  <span className="btn-text">Franchise with Us</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
