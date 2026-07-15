import React, { useState, useEffect } from 'react';
import { Dumbbell, Shield, Award, Clock, Star, MapPin, Phone, Mail, Check, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Template1() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 font-sans antialiased selection:bg-amber-500 selection:text-black">
      <Header />
      <HeroSection />
      <WhyChooseUs />
      <SpecialFacilities />
      <PricingPlans />
      <LocationAndFooter />
    </div>
  );
}

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-neutral-900 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 font-black text-lg tracking-wider text-white">
          <Dumbbell className="w-5 h-5 text-amber-500" />
          <span>SAMPLE<span className="text-amber-500">GYM</span></span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wider text-neutral-300">
          {['Home', 'About Us', 'Classes', 'Membership', 'Contact Us'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-amber-500 transition-colors duration-200">
              {item}
            </a>
          ))}
        </nav>
        <a href="#membership" className="border border-neutral-700 hover:border-white text-white text-xs font-semibold px-5 py-2 rounded-full transition-all duration-200">
          Join Us
        </a>
      </div>
    </header>
  );
}

function HeroSection() {
  const slides = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920",
    "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1920"
  ];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const internalTimer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(internalTimer);
  }, [slides.length]);

  return (
    <section id="home" className="relative h-screen min-h-screen w-full flex flex-col justify-center transition-all duration-700 bg-cover bg-center overflow-hidden"
             style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(10,10,10,1)), url(${slides[activeSlide]})` }}>
      
      <div className="max-w-7xl w-full mx-auto px-6 flex flex-col justify-center h-full">
        {/* Dynamic Big Typography Heading */}
        <h1 className="text-4xl md:text-8xl font-black tracking-tight text-white uppercase leading-none mb-4">
          YOUR FITNESS JOURNEY <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-400">STARTS WITH US</span>
        </h1>

        <p className="text-xs md:text-base text-neutral-400 max-w-lg leading-relaxed mb-10 font-light">
          No more waiting. No more excuses. Join a community that pushes you to become your strongest self — physically and mentally.
        </p>

        <div>
          <a href="#membership" className="inline-flex items-center gap-2 bg-white hover:bg-neutral-200 text-black font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-200 shadow-lg">
            <span>🚀 Let's Be Fit</span>
          </a>
        </div>
      </div>

      {/* Manual Slider Controls */}
      <div className="absolute bottom-12 right-6 md:right-12 flex gap-3 z-10">
        <button onClick={() => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)} className="p-3 border border-neutral-800 rounded-full bg-black/60 text-white hover:bg-amber-500 hover:text-black transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)} className="p-3 border border-neutral-800 rounded-full bg-black/60 text-white hover:bg-amber-500 hover:text-black transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const features = [
    { icon: <Dumbbell className="w-5 h-5 text-amber-600" />, title: "Best Equipment", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing." },
    { icon: <Award className="w-5 h-5 text-amber-600" />, title: "Top Performance", desc: "Quisque id eros malesuada, eleifend justo ac ames." },
    { icon: <Shield className="w-5 h-5 text-amber-600" />, title: "Reliable Support", desc: "Phasellus interdum, nulla eget efficitur volutpat." },
    { icon: <Clock className="w-5 h-5 text-amber-600" />, title: "Innovative Technology", desc: "Curabitur euismod felis id erat molestie malesuada." }
  ];

  return (
    <section id="about-us" className="bg-white text-neutral-900 py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Why We're Not Just <br />Another Gym.
          </h2>
          <p className="text-sm md:text-base text-neutral-500 leading-relaxed font-light">
            From science-backed training plans to supportive coaches and next-gen equipment, everything here is built for results — yours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((item, idx) => (
            <div key={idx} className="flex flex-col items-start transition-transform duration-300 hover:-translate-y-1">
              <div className="mb-5 p-3 bg-amber-50 rounded-lg">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold tracking-tight text-neutral-900 mb-2">{item.title}</h3>
              <p className="text-xs md:text-sm text-neutral-500 leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpecialFacilities() {
  const tracks = [
    { title: "Strength Training", img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=400" },
    { title: "Yoga Classes", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=400" },
    { title: "Weight Loss Program", img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=400" },
    { title: "Rehabilitation Program", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=400" }
  ];

  return (
    <section id="classes" className="bg-[#111111] text-white py-28 px-6 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4">
            Plans That Fit You — Not the <br />Other Way Around
          </h2>
          <p className="text-xs md:text-sm text-neutral-400 max-w-md font-light leading-relaxed">
            Whether you're just getting started or leveling up, we've got a plan that meets your goals and your schedule.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tracks.map((track, idx) => (
            <div key={idx} className="group relative rounded-xl overflow-hidden h-80 bg-neutral-950 border border-neutral-900">
              <img src={track.img} alt={track.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black via-black/50 to-transparent">
                <h3 className="text-xs font-bold tracking-wide uppercase text-white">{track.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingPlans() {
  const structures = [
    { name: "Beginner Plan", price: "$100", active: false, btnText: "I am Getting Started" },
    { name: "Pro Plan", price: "$300", active: true, btnText: "Let's Train Like a Pro" },
    { name: "Intermediate Plan", price: "$230", active: false, btnText: "Ready To Go Harder" }
  ];

  return (
    <section id="membership" className="bg-[#0a0a0a] text-white py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-3">
            Let's Find the Plan That Works <br />for You
          </h2>
          <p className="text-xs md:text-sm text-neutral-400 max-w-md font-light">
            Whether you're easing into fitness or pushing for peak performance, we've got a membership that fits your goals, time, and lifestyle.
          </p>
        </div>

        {/* Updated grid layout to wide-spread across the full max-w-7xl container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch w-full">
          {structures.map((tier, idx) => (
            <div key={idx} className={`p-10 rounded-2xl flex flex-col justify-between border w-full transition-all duration-300 hover:border-neutral-700 ${tier.active ? 'bg-[#161616] border-amber-500/50 shadow-2xl scale-[1.02] z-10' : 'bg-[#111111] border-neutral-900'}`}>
              <div>
                <h3 className="text-base font-bold text-white tracking-tight mb-1">{tier.name}</h3>
                <span className="text-[10px] text-neutral-500 uppercase tracking-widest block mb-6">Billed Monthly</span>
                
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-black text-white">{tier.price}</span>
                  <span className="text-sm text-neutral-500 ml-1.5">/Month</span>
                </div>

                <div className="w-full h-[1px] bg-neutral-800 mb-8" />

                <ul className="space-y-5 mb-10">
                  {[
                    { text: "Group Classes (3 per week)", check: true },
                    { text: "Nutrition Coaching (Basic tips)", check: true },
                    { text: "Gym Access (Only Limited)", check: true },
                    { text: "Personal Training Sessions", check: tier.active },
                    { text: "Recovery Zone Access", check: tier.active }
                  ].map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-xs md:text-sm">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${feat.check ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className={feat.check ? 'text-neutral-300' : 'text-neutral-600'}>{feat.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-4 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 ${tier.active ? 'bg-amber-500 text-black hover:bg-amber-400' : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'}`}>
                {tier.btnText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationAndFooter() {
  return (
    <section id="contact-us" className="bg-[#0e0e0e] text-neutral-400 border-t border-neutral-900">
      <div className="w-full h-[400px] relative">
        <iframe 
          title="Sample Gym Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.895740536413!2d90.3905953!3d23.7511111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bd55555555%3A0x5734a5d4872f23cf!2sDhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd" 
          className="w-full h-full grayscale opacity-40 contrast-125 border-none"
          allowFullScreen="" loading="lazy" 
        />
        <div className="absolute top-6 left-6 bg-black/90 border border-neutral-800 p-5 rounded-xl max-w-xs text-xs pointer-events-none">
          <h4 className="font-bold text-white mb-1 uppercase tracking-wide">HQ Facility</h4>
          <p className="text-neutral-400">123 Premium Fitness Avenue, Banani, Dhaka</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10 text-xs border-t border-neutral-900">
        <div>
          <div className="flex items-center gap-2 font-black tracking-wider text-white mb-4">
            <Dumbbell className="w-4 h-4 text-amber-500" />
            <span>SAMPLE<span className="text-amber-500">GYM</span></span>
          </div>
          <p className="leading-relaxed text-neutral-500 font-light">Elite conditioning space engineered for performance.</p>
        </div>
        <div>
          <h4 className="text-white font-bold tracking-wider uppercase mb-4">Communications</h4>
          <ul className="space-y-2 text-neutral-400">
            <li className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-amber-500" /> +880 1234-567890</li>
            <li className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-amber-500" /> support@samplegym.com</li>
          </ul>
        </div>
        <div className="md:text-right flex flex-col justify-between">
          <span className="text-neutral-600">&copy; {new Date().getFullYear()} Sample Gym Inc.</span>
        </div>
      </div>
    </section>
  );
}
