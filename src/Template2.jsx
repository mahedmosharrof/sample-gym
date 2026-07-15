import React, { useState, useEffect } from 'react';
import { Dumbbell, Play, Star, ChevronDown, ChevronRight, Check, MapPin, Phone, Mail, Globe, ArrowRight } from 'lucide-react';

export default function Template2() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openIndex, setOpenIndex] = useState(1);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tags = ["Personal Training", "Strength", "Group Classes", "Bootcamp", "Flexible Equipment", "Functional Mechanics"];
  const stats = [
    { number: "12+", label: "Years of Excellence" },
    { number: "27K+", label: "Members" },
    { number: "60+", label: "Weekly Classes" },
    { number: "117+", label: "Expert Trainers" }
  ];
  const services = [
    { title: "Personal Training", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600" },
    { title: "Fitness Classes", img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600" },
    { title: "Boxing Training", img: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=600" }
  ];
  const accordions = [
    { title: "State-of-the-Art Equipment", content: "Access heavy structural steel platforms, custom calibrated barbell plates, and computer synchronized digital resistance metrics." },
    { title: "Expert Trainers", content: "Our certified coaches construct templates focused precisely around bio-mechanic trajectories and safe path performance indicators." },
    { title: "Wide Range of Classes", content: "From multi-density metabolic high-intensity protocols to foundational deep restorative physical yoga systems." },
    { title: "Welcoming Community", content: "A high-performance ecosystem designed to surround you with driven peers focused layout metrics." }
  ];
  const structures = [
    { name: "Basic", price: "$25", active: false, btn: "Get Started" },
    { name: "Standard", price: "$35", active: true, btn: "Get Started" },
    { name: "Premium", price: "$45", active: false, btn: "Get Started" }
  ];

  return (
    <div className="min-h-screen bg-[#0b0c10] text-neutral-200 font-sans antialiased selection:bg-orange-500 selection:text-black">
      {/* HEADER */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0b0c10]/95 backdrop-blur-md border-b border-neutral-900 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 font-black text-xl tracking-tighter text-white">
            <span className="bg-gradient-to-r from-orange-500 to-amber-600 w-3 h-6 rounded-sm block"></span>
            <span>FIT<span className="text-orange-500">LAB</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest text-neutral-400 uppercase">
            {['About Us', 'Services', 'Project', 'FAQ'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-orange-500 transition-colors duration-200">{item}</a>
            ))}
          </nav>
          <a href="#membership" className="bg-gradient-to-r from-orange-500 to-amber-600 text-white text-xs font-bold px-6 py-2.5 rounded-full transition-all duration-200 uppercase tracking-wider">Free Trial</a>
        </div>
      </header>

      {/* HERO */}
      <section id="about-us" className="relative h-screen min-h-screen w-full flex flex-col justify-center bg-cover bg-center overflow-hidden"
               style={{ backgroundImage: `linear-gradient(to right, rgba(11,12,16,0.95) 40%, rgba(11,12,16,0.3) 70%, rgba(11,12,16,0.95)), url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1920')` }}>
        <div className="max-w-7xl w-full mx-auto px-6 grid lg:grid-cols-12 gap-8 items-center h-full pt-16">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-5xl md:text-8xl font-black tracking-tight text-white uppercase leading-none mb-6">
              PUSH YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">LIMITS WITH US</span>
            </h1>
            <p className="text-sm md:text-base text-neutral-400 max-w-lg leading-relaxed mb-10 font-light">
              From beginner to advanced, customized workspace paths designed to help you optimize performance and achieve your physical potential.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a href="#membership" className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-200 flex items-center gap-2">
                <span>Join Better</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button className="flex items-center gap-3 group text-white text-xs font-bold uppercase tracking-widest pl-4">
                <span className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center bg-neutral-900/60 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300">
                  <Play className="w-4 h-4 fill-white ml-0.5" />
                </span>
                <span>Watch Video</span>
              </button>
            </div>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border-2 border-[#0b0c10] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" alt="R1" />
                <img className="w-8 h-8 rounded-full border-2 border-[#0b0c10] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="R2" />
                <img className="w-8 h-8 rounded-full border-2 border-[#0b0c10] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="R3" />
              </div>
              <div>
                <div className="flex text-orange-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-orange-500 text-orange-500" />)}
                </div>
                <span className="text-[11px] text-neutral-400 font-medium tracking-wide">Trusted by 20k+ Members</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 max-w-xl">
              {tags.map((tag, idx) => (
                <span key={idx} className="text-[11px] bg-neutral-900/80 border border-neutral-800 text-neutral-400 px-3 py-1.5 rounded-md uppercase font-medium tracking-wider">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="bg-[#0b0c10] py-24 px-6 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-orange-500 text-xs font-bold tracking-widest uppercase block mb-2">// INTRODUCING</span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
              YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">FITNESS</span> JOURNEY STARTS HERE
            </h2>
            <p className="text-sm text-neutral-400 max-w-3xl mt-4 leading-relaxed font-light">
              At FitLab, we are dedicated to helping you unlock your full performance capacity. Built with premium structural systems and science-grounded layouts.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, i) => (
              <div key={i} className="p-8 bg-neutral-900/30 border border-neutral-900 rounded-xl">
                <div className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-1">{stat.number}</div>
                <div className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="w-full h-96 rounded-2xl bg-cover bg-center overflow-hidden relative border border-neutral-800 group flex items-center justify-center"
               style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200')` }}>
            <button className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-xl transform transition-transform duration-300 group-hover:scale-110">
              <Play className="w-6 h-6 fill-white ml-1" />
            </button>
            <div className="absolute bottom-6 left-6 text-left">
              <span className="text-xs font-bold tracking-widest uppercase text-orange-500">// THE LIFESTYLE MACHINE</span>
              <h4 className="text-lg font-bold text-white uppercase tracking-tight mt-1">Take an Internal Digital Tour</h4>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[#111217] py-28 px-6 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-16">
            <div>
              <span className="text-orange-500 text-xs font-bold tracking-widest uppercase block mb-2">// OUR MODULES</span>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
                UNLEASH YOUR POTENTIAL: <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">PREMIUM SERVICE</span>
              </h2>
            </div>
            <p className="text-xs md:text-sm text-neutral-400 max-w-sm mt-4 lg:mt-0 font-light leading-relaxed">
              At FitLab, we offer personalized structural fitness programs. From nutrition layouts to performance testing templates.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {services.map((srv, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden h-96 bg-neutral-950 border border-neutral-900 transition-all duration-300 hover:border-orange-500/40">
                <img src={srv.img} alt={srv.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/60 to-transparent flex justify-between items-end">
                  <div>
                    <h3 className="text-sm font-bold tracking-widest uppercase text-white mb-1">{srv.title}</h3>
                    <span className="text-[10px] text-neutral-500 uppercase tracking-wider">High Density Tier</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-neutral-900/80 border border-neutral-800 flex items-center justify-center text-white group-hover:bg-orange-500 group-hover:text-black transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-[#0b0c10] py-28 px-6 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative h-[500px] rounded-2xl overflow-hidden border border-neutral-800">
            <img src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800" alt="Athlete" className="w-full h-full object-cover opacity-60 grayscale" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent" />
          </div>
          <div className="lg:col-span-7 w-full">
            <div className="mb-10">
              <span className="text-orange-500 text-xs font-bold tracking-widest uppercase block mb-2">// WHY US</span>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
                WHY CHOOSE US FOR YOUR <span className="text-orange-500">FITNESS JOURNEY</span>
              </h2>
            </div>
            <div className="space-y-4 w-full">
              {accordions.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className={`border rounded-xl transition-all duration-300 w-full overflow-hidden ${isOpen ? 'bg-neutral-900/40 border-orange-500/30' : 'bg-neutral-900/10 border-neutral-900'}`}>
                    <button onClick={() => setOpenIndex(isOpen ? -1 : index)} className="w-full px-6 py-5 flex justify-between items-center text-left">
                      <span className={`text-sm md:text-base font-bold uppercase tracking-tight ${isOpen ? 'text-orange-500' : 'text-white'}`}>{item.title}</span>
                      <div className={`w-6 h-6 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 transform transition-transform ${isOpen ? 'rotate-180 text-orange-500' : ''}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>
                    <div className={`transition-all duration-300 ${isOpen ? 'max-h-40 opacity-100 border-t border-neutral-900' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                      <p className="p-6 text-xs md:text-sm text-neutral-400 leading-relaxed font-light">{item.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="project" className="bg-[#111217] py-28 px-6 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-orange-500 text-xs font-bold tracking-widest uppercase block mb-2">// COST MATRIX</span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
              FLEXIBLE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">PLANS</span> FOR EVERY GOAL
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch w-full">
            {structures.map((tier, idx) => (
              <div key={idx} className={`p-10 rounded-2xl flex flex-col justify-between border w-full transition-all duration-300 hover:border-neutral-700 ${tier.active ? 'bg-[#1a1b23] border-orange-500/50 shadow-2xl scale-[1.02] z-10' : 'bg-neutral-900/40 border-neutral-900'}`}>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight mb-1">{tier.name}</h3>
                  <span className="text-[10px] text-neutral-500 uppercase tracking-widest block mb-6">Billed Monthly</span>
                  <div className="flex items-baseline mb-8">
                    <span className="text-4xl font-black text-white">{tier.price}</span>
                    <span className="text-sm text-neutral-500 ml-1.5">/Month</span>
                  </div>
                  <div className="w-full h-[1px] bg-neutral-800 mb-8" />
                  <ul className="space-y-5 mb-10">
                    {[
                      { text: "Calibrated access to floor iron", check: true },
                      { text: "Free group fitness blocks", check: true },
                      { text: "Locker room system keys", check: true },
                      { text: "Custom programmer adjustments", check: tier.active },
                      { text: "Recovery room thermal access", check: tier.active }
                    ].map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-xs md:text-sm">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${feat.check ? 'bg-orange-500/10 text-orange-500' : 'bg-neutral-800 text-neutral-600'}`}>
                          <Check className="w-3 h-3" />
                        </div>
                        <span className={feat.check ? 'text-neutral-300' : 'text-neutral-600'}>{feat.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className={`w-full py-4 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 ${tier.active ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white hover:from-orange-600 hover:to-amber-700' : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'}`}>
                  {tier.btn}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section id="faq" className="bg-[#0b0c10] py-28 px-6 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
            <div className="lg:col-span-7">
              <span className="text-orange-500 text-xs font-bold tracking-widest uppercase block mb-2">// TERMINAL LOCATIONS</span>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
                OUR GLOBAL PRESENCE: <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">FITNESS CENTERS</span> AROUND THE WORLD
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-6">
              <div className="text-3xl font-black text-white tracking-tighter mb-1">23+</div>
              <div className="text-[11px] text-neutral-500 uppercase tracking-widest font-semibold mb-4">Countries Connected</div>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                No matter where journey configuration positions you, gain immediate cross-access passes.
              </p>
            </div>
          </div>
          <div className="w-full h-80 md:h-[450px] bg-neutral-900/20 border border-neutral-900 rounded-2xl relative overflow-hidden flex items-center justify-center p-6">
            <iframe 
              title="FitLab Center Terminal Locations"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.895740536413!2d90.3905953!3d23.7511111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bd55555555%3A0x5734a5d4872f23cf!2sDhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd" 
              className="w-full h-full grayscale opacity-20 contrast-125 saturate-50 border-none rounded-xl"
              allowFullScreen="" loading="lazy" 
            />
            <div className="absolute bottom-6 right-6 bg-black/90 border border-neutral-800 p-5 rounded-xl max-w-xs text-xs">
              <div className="flex items-center gap-2 text-orange-500 font-bold mb-1 uppercase tracking-wider">
                <Globe className="w-4 h-4" />
                <span>MAIN NETWORK DOCK</span>
              </div>
              <p className="text-neutral-400">123 Fitness Avenue, Banani, Dhaka</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-[#111217] to-[#0b0c10] py-32 px-6 text-center border-b border-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">READY TO GROW?</h2>
          <p className="text-sm md:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed mb-10 font-light">
            Take the first diagnostic steps to a stronger, engineered version of yourself.
          </p>
          <a href="#membership" className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-xs uppercase tracking-widest px-10 py-4 rounded-full transition-all duration-200 inline-block shadow-xl">
            Get Started 🔥
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact-us" className="bg-[#0b0c10] text-neutral-500 text-xs py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-b border-neutral-900 pb-10 mb-10">
          <div className="flex items-center gap-2 font-black text-lg tracking-tighter text-white">
            <span className="bg-gradient-to-r from-orange-500 to-amber-600 w-2 h-5 rounded-sm block"></span>
            <span>FIT<span className="text-orange-500">LAB</span></span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 font-medium uppercase tracking-widest text-[11px] text-neutral-400">
            <a href="#services" className="hover:text-orange-500 transition-colors">Services</a>
            <a href="#project" className="hover:text-orange-500 transition-colors">Project</a>
            <a href="#about-us" className="hover:text-orange-500 transition-colors">About Us</a>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6 text-neutral-400">
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-orange-500" /> +880 1234-567890</span>
            <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-orange-500" /> info@fitlab.com</span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-neutral-600">
          <span>&copy; {new Date().getFullYear()} FITLAB INC. ALL RIGHTS RESERVED.</span>
          <span>DHAKA, BANGLADESH</span>
        </div>
      </footer>
    </div>
  );
}