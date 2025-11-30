import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { Flame, Layers, Sparkles } from 'lucide-react';
import '../styles/MenuPage.css';

export default function MenuPage() {
  const menuItems = [
    {
      id: 1,
      name: 'Octobits',
      description: 'Classic Japanese street-style balls with tender bits of octopus inside. Golden and crisp on the outside, soft and creamy at the center.',
      image: '/src/products/octobits16.png',
      isBestSeller: false,
    },
    {
      id: 2,
      name: 'Nobashi',
      description: 'Topped with whole shrimp, tail on. Juicy, sweet, and strikingly crisp against the soft batter.',
      image: '/src/products/nobashi16.png',
      isBestSeller: true,
    },
    {
      id: 3,
      name: 'Kani',
      description: 'Generous kani layered over our signature takoyaki, drizzled with sauces that highlight the sweet and savory flavor of crab.',
      image: '/src/products/kani16.png',
      isBestSeller: false,
    },
    {
      id: 4,
      name: 'Ebiyaki with Quail Egg',
      description: 'A filling mix of shrimp and quail egg inside. Rich, smooth, and perfectly balanced every bite gives both the snap of ebi and the creaminess of egg.',
      image: '/src/products/ebiyakiwithquailegg16.png',
      isBestSeller: true,
    },
    {
      id: 5,
      name: 'Baby Octopus',
      description: 'Each piece crowned with a whole baby octopus. Tender, chewy, and full of bold seafood flavor.',
      image: '/src/products/babyoctopus16.png',
      isBestSeller: true,
    },
     {
      id: 6,
      name: '5-IN-1',
      description: 'Five flavors in one box — Octobits, Nobashi, Kani, Baby Octopus, and Ebiyaki. A variety set that lets you enjoy the full Go Takoyaki experience.',
      image: '/src/products/5in1.png',
      isBestSeller: false,
      customSizes: 'Available in 6pcs and 30pcs only.'
    }
  ];

  const fillings = [
    "Baby Octopus", "Cabbage", "Benishoga", "Cheese", 
    "Tenkasu (Crunch)", "Spring Onion", "Secret Batter Mix"
  ];

  const toppings = [
    "Bonito Flakes", "Aonori", "Pork Floss", "Chili Pepper", 
    "Secret Takoyaki Sauce", "Cheese Sauce", "Sliced Cheese", "Japanese Mayo"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#FFF8E7]">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/menu_bg.png" 
            alt="Menu Background" 
            className="hero-blur" 
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="hero-script-title mb-6">Our Menu</h1>
          </div>
        </div>
      </section>

      {/* Menu Items Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="menu-script-title mb-2">The Best of the Best</h2>
            <div className="h-1.5 w-24 bg-[#FBD612] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our takoyaki cheesebombs are made fresh with premium ingredients.
            </p>
          </div>

          {/* Menu Grid */}
          <div className="menu-grid-pop">
            {menuItems.map((item) => (
              // The main outer card wrapper (transparent, allows overflow)
              <div key={item.id} className="menu-card-wrapper">
                
                {/* The actual white card background */}
                <div className="menu-card-bg">

                  {/* Badge (positioned relative to the wrapper) */}
                  {item.isBestSeller && (
                    <div className="menu-badge-pop">Best Seller</div>
                  )}

                  {/* Image Area - Popping Out */}
                  <div className="menu-image-pop-wrapper">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="menu-image-pop"
                    />
                  </div>

                  {/* Content Area */}
                  <div className="menu-content-pop">
                    <div className="menu-text-group">
                      <h3 className="menu-title-pop">{item.name}</h3>
                      <p className="menu-desc-pop">{item.description}</p>
                    </div>

                    {/* New Footer with Sizes text */}
                    <div className="menu-footer-text">
                      {/* If the item has customSizes, use that. Otherwise, use the default. */}
                      {item.customSizes ? item.customSizes : "Available in 3pcs, 6pcs, 16pcs."}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anatomy Section */}
      <section className="py-24 bg-[#FFFDF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="anatomy-script-title mb-2">What Goes Inside?</h2>
            <div className="h-1.5 w-24 bg-[#FBD612] mx-auto rounded-full mb-6"></div>
             <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Crispy on the outside, creamy on the inside, and packed with flavor. Discover 7 fillings and 8 toppings that go into crafting the ultimate Takoyaki cheesebombs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            
            {/* LEFT COLUMN: FILLINGS */}
            <div className="ingredient-col col-left">
              <h3 className="simple-header text-red">The Core</h3>
              <ul className="simple-list">
                {fillings.map((item, i) => (
                  <li key={i}>
                    <span className="text">{item}</span>
                    <span className="dot dot-red"></span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CENTER: IMAGE */}
            <div className="flex justify-center order-first lg:order-none mb-8 lg:mb-0">
              <div className="relative w-[280px] lg:w-[350px]">
                {/* Simple circle bg */}
                <div className="absolute inset-0 bg-[#FBD612]/10 rounded-full scale-90"></div>
                <img 
                  src="/anatomy.png" 
                  alt="Takoyaki Ingredients" 
                  className="relative z-10 w-full h-auto drop-shadow-xl"
                />
              </div>
            </div>

            {/* RIGHT COLUMN: TOPPINGS */}
            <div className="ingredient-col col-right">
              <h3 className="simple-header text-gold">The Crown</h3>
              <ul className="simple-list">
                {toppings.map((item, i) => (
                  <li key={i}>
                    <span className="dot dot-gold"></span>
                    <span className="text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
