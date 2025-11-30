import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import '../styles/Footer.css';

const TikTokIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 50 50"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M41 4H9C6.243 4 4 6.243 4 9v32c0 2.757 2.243 5 5 5h32c2.757 0 5-2.243 5-5V9c0-2.757-2.243-5-5-5zm-3.994 18.323c-.227.021-.457.035-.69.035-2.623 0-4.928-1.349-6.269-3.388v11.537c0 4.709-3.818 8.527-8.527 8.527s-8.527-3.818-8.527-8.527 3.818-8.527 8.527-8.527c.178 0 .352.016.527.027v4.202a4.278 4.278 0 0 0-.527-.053c-2.404 0-4.352 1.948-4.352 4.352s1.948 4.352 4.352 4.352 4.527-1.894 4.527-4.298c0-.095.042-19.594.042-19.594h4.016c.378 3.591 3.277 6.425 6.901 6.685z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#70080B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-[#FBD612]">GoTakoyaki</span>
            </div>
            <p className="text-white/80">
              Authentic Japanese takoyaki made fresh daily with premium ingredients and traditional recipes.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#FBD612] mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-[#FBD612]" />
                <span className="text-white/80">Henry's Building, 80 Ortigas Ave, San Juan City, 1502 Metro Manila</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-[#FBD612]" />
                <span className="text-white/80">0961-595-9864</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-[#FBD612]" />
                <span className="text-white/80">franchise.gotakoyaki@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="text-[#FBD612] mb-4">Hours</h3>
            <div className="space-y-2 mb-6">
              <p className="text-white/80">Monday - Friday: 11am - 10pm</p>
              <p className="text-white/80">Saturday - Sunday: 11am - 9pm</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/GoTakoyaki/" className="text-[#FBD612] hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/go_takoyaki/" className="text-[#FBD612] hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@gotakoyaki" className="text-[#FBD612] hover:text-white transition-colors">
                <TikTokIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#FBD612]/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2020 GoTakoyaki. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
