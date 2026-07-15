import React, { useState, useRef } from 'react';
import { ArrowRight, ArrowLeft, Star, Layers, Activity, Compass, Check } from 'lucide-react';

export default function Template3() {
  const scrollRef = useRef(null);

  const galleryItems = [
    { title: "KINETIC ENGINE ROOM", tags: ["STRENGTH", "METABOLIC"], img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800", subtitle: "Designed strictly for raw iron velocity." },
    { title: "BIO-MECHANIC FLUIDITY", tags: ["YOGA", "MOBILITY"], img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800", subtitle: "High-density restoration workspace paths." },
    { title: "COMBAT METABOLICS", tags: ["BOXING", "CARDIO"], img: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800", subtitle: "High-velocity explosive conditioning." },
    { title: "OLYMPIC PLATFORMS", tags: ["POWERTILL", "STEEL"], img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800", subtitle: "Calibrated structural competition plates." },
    { title: "HYPERBARIC MATRIX", tags: ["RECOVERY", "THERMAL"], img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800", subtitle: "Advanced multi-tier recovery configurations." }
  ];

  const handleHorizontalScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    /* 
      👉 SCROLL SNAP CONTAINER: 
      'h-screen overflow-y-scroll snap-y snap-mandatory' creates the full-screen window constraint
    */
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-[#08080a] text-neutral-100 font-sans antialiased selection:bg-orange-500 selection:text-black tracking-tight">
      
      {/* BRAND NAVIGATION HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 py-6 px-8 border-b border-neutral-900/40 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 font-black text-lg uppercase tracking-widest text-white">
            <span className="w-2.5 h-2.5 bg-orange-500 rounded-full animate-ping"></span>
            <span>SQUAT<span className="text-orange-500">LAB</span></span>
          </div>
          <nav className="hidden nav-menu items-center gap-10 text-[11px] font-bold uppercase tracking-widest text-neutral-400">
            <a href="#concept" className="hover:text-white transition-colors">Concept</a>
            <a href="#gallery-track" className="hover:text-white transition-colors">Gallery Track</a>
            <a href="#why-squat" className="hover:text-white transition-colors">Why Squat</a>
            <a href="#pass-deck" className="hover:text-white transition-colors">Pass Deck</a>
          </nav>
          <button className="text-[10px] font-black uppercase tracking-widest bg-white text-black px-6 py-3 rounded-none hover:bg-orange-500 hover:text-white transition-all duration-300">
            Book Evaluation
          </button>
        </div>
      </header>

      {/* SECTION 1: HERO (snap-start h-screen ensures it locks entirely on scroll) */}
      <section id="concept" className="h-screen w-full pt-36 pb-20 px-8 flex flex-col justify-between relative overflow-hidden border-b border-neutral-900 snap-start shrink-0">
        <div className="absolute top-1/4 right-[-10%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[160px] pointer-events-none"></div>
        <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-12 gap-12 items-start mt-12">
          <div className="lg:col-span-8">
            <span className="text-orange-500 text-xs font-bold tracking-widest uppercase block mb-4">// BRAND DIRECTIVE PROJECT-2</span>
            <h1 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
              WE SHAPE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-500 to-neutral-800">PHYSICAL</span> <br />
              IDENTITY.
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pt-8 border-l border-neutral-800 pl-6">
            <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6">
              SquatLab operates at the intersection of heavy load volume and pristine geometric layout aesthetics. We engineer high-density commercial frameworks built to completely reconfigure your athletic boundaries.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-orange-500 transition-colors cursor-pointer">
              <span>Explore Studio Blueprint</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
        <div className="max-w-7xl w-full mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-t border-neutral-900 pt-8 text-xs text-neutral-500 uppercase tracking-widest font-semibold">
          <div className="flex items-center gap-6">
            <span>[ LATENCY: EXCELLENCE 12Y ]</span>
            <span>[ CAPACITY: 27K NETWORK ]</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
            <span>4.9 RATED PREMIUM PHYSICAL SPACE</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: HORIZONTAL GALLERY DISPLAY */}
      <section id="gallery-track" className="min-h-screen w-full bg-[#0c0d12] py-24 flex flex-col justify-center border-b border-neutral-900 relative snap-start shrink-0">
        <div className="max-w-7xl mx-auto w-full px-8 flex justify-between items-end mb-8">
          <div>
            <span className="text-orange-500 text-xs font-bold tracking-widest uppercase block mb-2">// CAPTURED SYSTEMS</span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">EXHIBITION SPACE DISPLAY</h2>
          </div>
          <div className="flex gap-2">
            <button onClick={() => handleHorizontalScroll('left')} className="p-4 border border-neutral-800 bg-neutral-950/40 text-white hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-all">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button onClick={() => handleHorizontalScroll('right')} className="p-4 border border-neutral-800 bg-neutral-950/40 text-white hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-all">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div ref={scrollRef} className="w-full overflow-x-auto flex gallery-container gap-6 px-8 scrollbar-none snap-x snap-mandatory">
          {galleryItems.map((item, index) => (
            <div key={index} className="w-[300px] gallery-card shrink-0 snap-start group relative">
              <div className="w-full h-[420px] overflow-hidden bg-neutral-950 border border-neutral-900 relative">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-40 group-hover:opacity-75 group-hover:scale-102 transition-all duration-700 ease-out grayscale group-hover:grayscale-0" />
                <div className="absolute top-6 left-6 flex flex-wrap gap-1.5">
                  {item.tags.map((t, idx) => (
                    <span key={idx} className="text-[9px] font-bold bg-black/90 tracking-widest uppercase text-neutral-400 px-2.5 py-1 border border-neutral-800">{t}</span>
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/40 to-transparent">
                  <span className="text-[10px] font-mono tracking-widest text-orange-500 block mb-1">0{index + 1} // GRID SYSTEM</span>
                  <h3 className="text-lg font-black text-white uppercase mb-1 tracking-tight group-hover:text-orange-500 transition-colors">{item.title}</h3>
                  <p className="text-xs text-neutral-400 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-xs">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: MODULAR ASYMMETRIC BLOCKS */}
      <section id="why-squat" className="min-h-screen w-full py-24 px-8 flex flex-col justify-center bg-[#08080a] border-b border-neutral-900 snap-start shrink-0">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-6">
              <span className="text-orange-500 text-xs font-bold tracking-widest uppercase block mb-2">// STRUCTURAL CAPABILITIES</span>
              <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                BUILT OUTSIDE THE STANDARD CONFIGURATION BOX.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:pt-4">
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                We design environments that demand focus. Stripping away the generic commercial noise to present a hyper-focused structural footprint engineered for maximum progressive performance variables.
              </p>
            </div>
          </div>
          <div className="grid why-squat-grid gap-6">
            {[
              { icon: <Layers className="w-5 h-5 text-orange-500" />, title: "Structural Rig Integration", desc: "Custom solid-steel frame layouts built to withstand dynamic metabolic loading." },
              { icon: <Activity className="w-5 h-5 text-orange-500" />, title: "Calibrated Calculations", desc: "Every metric, plate weight, and training parameter is precisely managed for tracking." },
              { icon: <Compass className="w-5 h-5 text-orange-500" />, title: "Biomechanical Strategy", desc: "Coaching built strictly on pure vector dynamics to preserve longevity." }
            ].map((block, idx) => (
              <div key={idx} className="p-8 bg-[#0c0d12]/60 border border-neutral-900 rounded-none hover:border-neutral-700 transition-colors flex flex-col justify-between h-64">
                <div className="p-3 bg-neutral-950 border border-neutral-800 w-fit">{block.icon}</div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-2">{block.title}</h3>
                  <p className="text-xs text-neutral-500 font-light leading-relaxed">{block.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: PRICING PASS DECK */}
      <section id="pass-deck" className="min-h-screen w-full bg-[#0c0d12] py-24 px-8 flex flex-col justify-center border-b border-neutral-900 snap-start shrink-0">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-12 text-center lg:text-left">
            <span className="text-orange-500 text-xs font-bold tracking-widest uppercase block mb-2">// ACCESS CONFIGURATION</span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">MEMBERSHIP DECK MATRIX</h2>
          </div>
          <div className="grid grid-cols-1 membership-grid gap-8 items-stretch w-full">
            {[
              { name: "IRON PROTOCOL", price: "$30", active: false },
              { name: "KINETIC MATRIX", price: "$50", active: true },
              { name: "ULTRA ELITE DOCK", price: "$75", active: false }
            ].map((tier, idx) => (
              <div key={idx} className={`p-8 rounded-none flex flex-col justify-between border w-full transition-all duration-300 ${tier.active ? 'bg-gradient-to-b from-[#161822] to-[#0c0d12] border-orange-500 shadow-2xl scale-[1.01] z-10' : 'bg-neutral-900/20 border-neutral-900'}`}>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-black tracking-widest text-white uppercase">{tier.name}</h3>
                    {tier.active && <span className="text-[8px] font-black tracking-widest bg-orange-500 text-black px-2 py-0.5 uppercase">RECOMMENDED</span>}
                  </div>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-black text-white tracking-tighter">{tier.price}</span>
                    <span className="text-xs text-neutral-500 ml-1.5 uppercase tracking-wider">/Month</span>
                  </div>
                  <div className="w-full h-[1px] bg-neutral-800/60 mb-4" />
                  <ul className="space-y-3 text-xs mb-6">
                    {["Full access to floor network iron", "Calibrated plate tracking configurations", "Digital evaluation deck tokens", "Advanced hyperbaric thermal passes"].map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                        <span className="text-neutral-400 font-light">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className={`w-full py-3.5 text-[10px] font-black uppercase tracking-widest rounded-none transition-all duration-300 ${tier.active ? 'bg-orange-500 text-black hover:bg-orange-600 hover:text-white' : 'bg-neutral-950 border border-neutral-800 text-neutral-300 hover:bg-neutral-900'}`}>
                  Activate Pass Terminal
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: GEOMETRIC BLUEPRINT & MAP */}
      <section id="location-map" className="min-h-[600px] w-full bg-[#08080a] py-24 px-8 border-b border-neutral-900 snap-start shrink-0 relative flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full grid map-grid gap-12 items-center">
          <div className="map-text-col">
            <span className="text-orange-500 text-xs font-bold tracking-widest uppercase block mb-2">// COORD: 40.7128° N, 74.0060° W</span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">THE SQUATLAB HQ</h2>
            <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6">
              Located in the heart of Manhattan's industrial district. Our facility is engineered for elite biomechanical performance. Stop by for a structural evaluation or schedule a consultation session with our head strength architects.
            </p>
            <div className="space-y-3 text-xs text-neutral-300">
              <p><strong>ADDRESS:</strong> 142 Ironworks Lane, New York, NY 10013</p>
              <p><strong>HOURS:</strong> 05:00 - 23:00 EST // Mon - Sun</p>
              <p><strong>CONTACT:</strong> hq@squatlab.com // +1 (212) 555-0190</p>
            </div>
          </div>
          <div className="map-iframe-col h-[400px] bg-neutral-950 border border-neutral-900 relative overflow-hidden group">
            <iframe 
              title="SquatLab HQ Location Map"
              src="https://maps.google.com/maps?q=New%20York%20Manhattan%20Broadway&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              className="w-full h-full border-none filter grayscale invert opacity-60 contrast-125 brightness-90 group-hover:opacity-80 transition-opacity duration-500"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center">
              <span className="w-4 h-4 bg-orange-500 rounded-full border-2 border-white animate-ping absolute"></span>
              <span className="w-4 h-4 bg-orange-500 rounded-full border-2 border-white relative"></span>
              <span className="mt-2 bg-black/90 text-[10px] font-black text-white px-2 py-1 uppercase tracking-wider border border-neutral-800">SQUATLAB HQ</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#050507] py-16 px-8 border-t border-neutral-900 snap-start shrink-0 text-xs text-neutral-500">
        <div className="max-w-7xl mx-auto grid footer-grid gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 font-black text-base uppercase tracking-widest text-white mb-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span>SQUAT<span className="text-orange-500">LAB</span></span>
            </div>
            <p className="text-neutral-400 font-light leading-relaxed mb-4">
              Calibrated strength space engineering. Built to reconfigure physical identity.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] font-black text-white uppercase tracking-widest mb-4">PLATFORM MAP</h4>
            <ul className="space-y-2">
              <li><a href="#concept" className="hover:text-orange-500 transition-colors">Concept Blueprint</a></li>
              <li><a href="#gallery-track" className="hover:text-orange-500 transition-colors">Exhibition Track</a></li>
              <li><a href="#why-squat" className="hover:text-orange-500 transition-colors">Structural Rig</a></li>
              <li><a href="#pass-deck" className="hover:text-orange-500 transition-colors">Pass Deck Matrix</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-black text-white uppercase tracking-widest mb-4">COMMUNICATION TERMINAL</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Book Evaluation</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Careers & Internship</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Developer API Docs</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">System Status: ACTIVE</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-black text-white uppercase tracking-widest mb-4">DIRECTIVE NEWSLETTER</h4>
            <p className="text-neutral-400 font-light mb-4">Subscribe to receive system directives and biomechanical logs.</p>
            <div className="flex">
              <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-[#0c0d12] border border-neutral-900 px-4 py-2.5 text-white font-mono text-[10px] uppercase focus:outline-none focus:border-orange-500 transition-colors rounded-none" />
              <button className="bg-white text-black px-4 py-2.5 hover:bg-orange-500 hover:text-white transition-colors duration-300 font-bold rounded-none">JOIN</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-neutral-900/60 pt-8 flex flex-col footer-bottom justify-between items-center gap-4">
          <p>© 2026 SQUATLAB TERMINAL. ALL RIGHTS ENGINEERED. DEPLOYED TO NODE_3000.</p>
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Protocol</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Operations</a>
          </div>
        </div>
      </footer>

    </div>
  );
}