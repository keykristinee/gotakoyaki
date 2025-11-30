import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  BookOpen, 
  HeadphonesIcon, 
  Award,
  DollarSign,
  MapPin,
  Target,
  Rocket,
  Mail,
  Phone,
  Building2,
  Calendar
} from 'lucide-react';
import { useState } from 'react';
import '../styles/FranchisePage.css';

export default function FranchisePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you within 48 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const steps = [
    {
      number: '01',
      title: 'Choose a Franchise with a Proven System',
      description: 'A clear, tested business model ensures your success.Go Takoyaki partners with Francorp to give you a reliable system and support.',
    },
    {
      number: '02',
      title: 'Training and Support Are Essential',
      description: 'Make sure your franchisor provides proper training and ongoing marketing help. We guide you every step of the way.',
    },
    {
      number: '03',
      title: 'Location and Format Matter',
      description: 'Pick a store format that fits your space and budget—kiosk or cart options available.',
    },
    {
      number: '04',
      title: 'Quality Attracts Customers',
      description: 'Offering premium ingredients and a unique recipe builds customer loyalty.',
    },
    {
      number: '05',
      title: 'Understand Your Investment',
      description: 'Look for transparent fees and what’s included—equipment, marketing, and training. Go Takoyaki offers all-in packages plus and discounts for early franchisees.',
    }
  ];

  const benefits = [
    {
      icon: <Award className="text-[#FBD612]" size={32} />,
      title: 'Proven Brand',
      description: 'Join a recognized brand with a loyal customer base and strong market presence.',
    },
    {
      icon: <BookOpen className="text-[#FBD612]" size={32} />,
      title: 'Comprehensive Training',
      description: 'Training covering operations, recipes, and business management.',
    },
    {
      icon: <HeadphonesIcon className="text-[#FBD612]" size={32} />,
      title: 'Ongoing Support',
      description: 'Dedicated support team available 24/7 to help you succeed.',
    },
    {
      icon: <TrendingUp className="text-[#FBD612]" size={32} />,
      title: 'Marketing Assistance',
      description: 'Marketing campaigns to drive customers to your location.',
    },
    {
      icon: <Users className="text-[#FBD612]" size={32} />,
      title: 'Exclusive Territory',
      description: 'Protected territory rights to ensure your market is your own.',
    },
    {
      icon: <Target className="text-[#FBD612]" size={32} />,
      title: 'Site Selection Help',
      description: 'Expert guidance in choosing the optimal location for your franchise.',
    },
  ];


  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#FFF8E7]">
      {/* Hero Section with background image */}
      <section className="relative bg-gradient-to-br from-[#70080B] via-[#8a0a0e] to-[#70080B] text-white py-24 overflow-hidden">
        {/* Hero background image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/franchise_bg.png"
            alt="Franchise Hero Background"
            className="object-cover w-full h-full"
            style={{ objectPosition: 'center', opacity: 0.45 }}
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <div className="hero-badge-modern"> Franchise Today! </div>
            <h1 className="text-5xl md:text-6xl mb-6 text-white">
              Own Your Own
              <br />
              <span className="hero-script-title">GoTakoyaki Franchise</span>
            </h1>
            <p className="hero-desc-modern max-w-3xl mx-auto">
              Join our growing family of successful franchisees and bring the authentic taste 
              of GoTakoyaki cheesebombs to your community.
            </p>
            <Button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-hero-primary mx-auto"
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="content-script-title">Why Choose GoTakoyaki?</h2>
            <div className="h-1.5 w-24 bg-[#FBD612] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Partner with a proven brand that provides everything you need to succeed
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border-t-4 border-[#FBD612]"
              >
                <div className="bg-[#70080B] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-[#70080B] mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-banner-section">
        <div className="stats-bg-pattern"></div>
        <div className="kiosk-wrapper">
          <div className="kiosk-glow"></div>
          <img src="/kiosk.png" alt="Kiosk" className="kiosk-img" />
        </div>

        <div className="relative max-w-7xl mx-auto h-full flex items-center">
          <div className="stats-content-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

              <div className="stat-item">
                <div className="stat-icon-wrapper">
                  <MapPin size={32} strokeWidth={1.5} />
                </div>
                <div className="stat-number">3+</div>
                <p className="stat-label">Franchise Locations</p>
              </div>

              <div className="stat-item">
                <div className="stat-icon-wrapper">
                  <Users size={32} strokeWidth={1.5} />
                </div>
                <div className="stat-number">99%</div>
                <p className="stat-label">Franchisee Satisfaction</p>
              </div>

              <div className="stat-item">
                <div className="stat-icon-wrapper">
                  <Calendar size={32} strokeWidth={1.5} />
                </div>
                <div className="stat-number">5 Years</div>
                <p className="stat-label">Industry Experience</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* To Know When You're Franchising */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="content-script-title">5 Things You Should Know When You’re Franchising</h2>
            <div className="h-1.5 w-24 bg-[#FBD612] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our simple 5-step guide to get you from inquiry to opening day
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-number-badge">
                  {step.number}
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Provide Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="content-script-title">What We Provide</h2>
              <div className="h-1.5 w-24 bg-[#FBD612] mx-auto rounded-full mb-6"></div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#70080B] p-2 rounded-full flex-shrink-0">
                    <CheckCircle2 className="text-[#FBD612]" size={20} />
                  </div>
                  <div>
                    <h3 className="text-[#70080B] mb-1">Complete Training Program</h3>
                    <p className="text-gray-600">Hands on training at your location</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#70080B] p-2 rounded-full flex-shrink-0">
                    <CheckCircle2 className="text-[#FBD612]" size={20} />
                  </div>
                  <div>
                    <h3 className="text-[#70080B] mb-1">Equipment & Supplies</h3>
                    <p className="text-gray-600">All specialized takoyaki equipment and initial supply inventory</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#70080B] p-2 rounded-full flex-shrink-0">
                    <CheckCircle2 className="text-[#FBD612]" size={20} />
                  </div>
                  <div>
                    <h3 className="text-[#70080B] mb-1">Marketing Materials</h3>
                    <p className="text-gray-600">Branded signage, menus, promotional materials, and digital assets</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#70080B] p-2 rounded-full flex-shrink-0">
                    <CheckCircle2 className="text-[#FBD612]" size={20} />
                  </div>
                  <div>
                    <h3 className="text-[#70080B] mb-1">Operations Manual</h3>
                    <p className="text-gray-600">Comprehensive guide covering all aspects of running your franchise</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#70080B] p-2 rounded-full flex-shrink-0">
                    <CheckCircle2 className="text-[#FBD612]" size={20} />
                  </div>
                  <div>
                    <h3 className="text-[#70080B] mb-1">Grand Opening Support</h3>
                    <p className="text-gray-600">On-site assistance during your launch to ensure a successful start</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <ImageWithFallback
                src="/franchise.png"
                alt="Successful business team"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#FBD612] rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Contact Section (no form) */}
      <section id="contact-form" className="py-20 bg-[#FFF8E7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="content-script-title">Start Your Franchise Journey</h2>
            <div className="h-1.5 w-24 bg-[#FBD612] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-700 text-lg mb-8">
              Email us and our franchise development team will get back to you as soon as possible.
            </p>
            <div className="flex justify-center">
              <a
                href="mailto:franchise.gotakoyaki@gmail.com"
                className="inline-flex items-center gap-3 bg-[#70080B] text-white text-lg font-semibold px-8 py-4 rounded-md shadow hover:bg-[#8a0a0e] transition-all"
                style={{ minWidth: '350px', justifyContent: 'center' }}
              >
                <Mail className="mr-2" size={22} />
                franchise.gotakoyaki@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
