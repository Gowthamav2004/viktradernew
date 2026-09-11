"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ScrollContent() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [selectedCombo, setSelectedCombo] = useState<{ name: string; price: string; img: string } | null>(null);
  const [selectedProductIndex, setSelectedProductIndex] = useState<number | null>(null);

  const ownProducts = Array.from({ length: 22 }, (_, i) => ({
    id: i + 1,
    name: `Our Product #${i + 1}`,
    img: `/images/${i + 1}.jpeg`
  }));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCombo(null);
        setSelectedProductIndex(null);
      } else if (e.key === "ArrowLeft") {
        setSelectedProductIndex((prev) => (prev !== null ? (prev > 0 ? prev - 1 : ownProducts.length - 1) : null));
      } else if (e.key === "ArrowRight") {
        setSelectedProductIndex((prev) => (prev !== null ? (prev < ownProducts.length - 1 ? prev + 1 : 0) : null));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [ownProducts.length]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let autoScroll = setInterval(scrollNext, 3000);

    function scrollNext() {
      if (!slider) return;
      const firstChild = slider.firstElementChild;
      if (!firstChild) return;
      
      // Calculate width of one card + gap (which is 24px or 1.5rem for gap-6)
      const cardWidth = firstChild.clientWidth + 24; 
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      
      if (slider.scrollLeft >= maxScroll - 10) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slider.scrollTo({ left: slider.scrollLeft + cardWidth, behavior: 'smooth' });
      }
    }

    const pause = () => clearInterval(autoScroll);
    const resume = () => {
      clearInterval(autoScroll);
      autoScroll = setInterval(scrollNext, 3000);
    };

    slider.addEventListener('mouseenter', pause);
    slider.addEventListener('mouseleave', resume);
    slider.addEventListener('touchstart', pause, { passive: true });
    slider.addEventListener('touchend', resume, { passive: true });

    return () => {
      clearInterval(autoScroll);
      slider.removeEventListener('mouseenter', pause);
      slider.removeEventListener('mouseleave', resume);
      slider.removeEventListener('touchstart', pause);
      slider.removeEventListener('touchend', resume);
    };
  }, []);


  const giftBoxes = [
    { name: "Mega Box", price: "₹4,000", img: "https://delightful-sunflower-64e073.netlify.app/images/WhatsApp%20Image%202026-08-12%20at%203.59.13%20PM.jpeg" },
    { name: "Jumbo Box", price: "₹4,500", img: "https://delightful-sunflower-64e073.netlify.app/images/WhatsApp%20Image%202026-08-12%20at%203.59.12%20PM.jpeg" },
    { name: "Platinum Box", price: "₹5,000", img: "https://delightful-sunflower-64e073.netlify.app/images/WhatsApp%20Image%202026-08-12%20at%203.59.12%20PM%20(1).jpeg" }
  ];

    const categories = [
    { name: "ONE SOUND CRACKERS", img: "https://delightful-sunflower-64e073.netlify.app/images/oe%20sound%20crackers.jpg" },
    { name: "BIJILI CRACKERS", img: "https://delightful-sunflower-64e073.netlify.app/images/bijli.jpg" },
    { name: "GROUND CHAKKARS", img: "https://delightful-sunflower-64e073.netlify.app/images/ground%20chakkar.jpg" },
    { name: "WHEELS", img: "https://delightful-sunflower-64e073.netlify.app/images/wheels.jpg" },
    { name: "FLOWER POTS", img: "https://delightful-sunflower-64e073.netlify.app/images/flower%20pot.jpg" },
    { name: "ROCKETS", img: "https://delightful-sunflower-64e073.netlify.app/images/sky%20rocket.jpg" },
  ];

  return (
    <div className="relative z-20 pointer-events-none overflow-hidden font-sans">
      
      {/* SECTION: HERO */}
      <section id="home" className="flex flex-col items-center justify-start px-6 text-center pt-[18vh] pb-12 min-h-[75vh]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="pointer-events-auto max-w-5xl"
        >
          <div className="inline-flex items-center gap-2 border border-[#cca052]/40 rounded-full px-4 py-1.5 mb-8 bg-[#cca052]/10 backdrop-blur-md">
             <span className="text-[#cca052] text-sm font-bold tracking-widest uppercase">✨ Genuine Sivakasi Manufacturers</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-6xl leading-tight">
            Light up this festival <br/>
            <span className="text-[#cca052]">at up to 80% off factory prices</span>
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-base text-white/80 md:text-lg leading-relaxed">
            Retail and wholesale fireworks shipped straight from Sivakasi. Build your estimate in minutes, order over WhatsApp, and pay with confidence.
          </p>
          <div className="flex justify-center mb-12">
            <a href="https://mybillbook.in/store/vikramtrader" target="_blank" rel="noopener noreferrer" className="bg-[#cca052] px-8 py-4 text-lg font-bold text-black rounded transition-all hover:bg-white uppercase flex items-center gap-2 shadow-[0_0_20px_rgba(204,160,82,0.4)]">
              <span>🛍️</span> Order Now
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-6 md:gap-16 pt-6 border-t border-white/10 w-full">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#cca052] mb-1">10+</div>
              <div className="text-xs text-white/60 tracking-widest uppercase font-semibold">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#cca052] mb-1">200+</div>
              <div className="text-xs text-white/60 tracking-widest uppercase font-semibold">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#cca052] mb-1">80%</div>
              <div className="text-xs text-white/60 tracking-widest uppercase font-semibold">Max Discount</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#cca052] mb-1">24hr</div>
              <div className="text-xs text-white/60 tracking-widest uppercase font-semibold">Dispatch</div>
            </div>
          </div>
        </motion.div>
      </section>

            {/* SECTION: ABOUT */}
      <section id="about" className="flex min-h-screen items-center px-6 py-24 md:px-24">
        <div className="pointer-events-auto w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="border-l-4 border-[#cca052] pl-8"
          >
            <h3 className="mb-6 text-4xl font-bold text-white">
              Why Choose Us?
            </h3>
            <p className="mb-8 text-xl text-white/80 leading-relaxed">
              We are one of the leading fireworks dealers in Sivakasi. We provide 100% genuine products directly from the manufacturers to your doorstep.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div>
                <h4 className="mb-2 text-xl font-bold text-[#cca052] uppercase">Best Quality</h4>
                <p className="text-base text-white/70">All our crackers are tested for safety and performance.</p>
              </div>
              <div>
                <h4 className="mb-2 text-xl font-bold text-[#cca052] uppercase">Lowest Prices</h4>
                <p className="text-base text-white/70">We offer wholesale factory prices for everyone.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            <div className="bg-[#111] border border-[#333] rounded-xl p-8 text-center transition-all hover:border-[#cca052]">
              <div className="text-4xl font-bold text-[#cca052] mb-3">25+</div>
              <div className="text-sm text-white/70 uppercase tracking-wide">Years in<br/>Sivakasi</div>
            </div>
            <div className="bg-[#111] border border-[#333] rounded-xl p-8 text-center transition-all hover:border-[#cca052]">
              <div className="text-4xl font-bold text-[#cca052] mb-3">50k+</div>
              <div className="text-sm text-white/70 uppercase tracking-wide">Orders<br/>Shipped</div>
            </div>
            <div className="bg-[#111] border border-[#333] rounded-xl p-8 text-center transition-all hover:border-[#cca052]">
              <div className="text-4xl font-bold text-[#cca052] mb-3">10</div>
              <div className="text-sm text-white/70 uppercase tracking-wide">Product<br/>Categories</div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION: GRAND DIWALI COMBO */}
      <section id="gift-boxes" className="flex min-h-screen flex-col justify-center px-6 py-24 md:px-24 bg-black/60 backdrop-blur-md border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="pointer-events-auto w-full max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h3 className="mb-4 text-4xl font-bold text-white uppercase tracking-wider">
              Grand Diwali Combo
            </h3>
            <p className="text-lg text-white/70">Our special combo boxes for all your celebration needs. Click to view combo details.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {giftBoxes.map((box, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedCombo(box)}
                className="group flex flex-col bg-[#111] border border-[#333] rounded-lg transition-all hover:border-[#cca052] cursor-pointer overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(204,160,82,0.2)]"
              >
                <div className="relative h-80 w-full overflow-hidden bg-white flex items-center justify-center p-4">
                  <img 
                    src={box.img} 
                    alt={box.name} 
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-[#cca052] text-black font-bold px-4 py-2 rounded shadow-md text-sm uppercase tracking-wider">🔍 Click to View</span>
                  </div>
                </div>
                <div className="p-6 text-center flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-4">{box.name}</h4>
                  </div>
                  <div>
                    <p className="text-[#cca052] font-bold text-2xl mb-6">{box.price}</p>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCombo(box);
                      }}
                      className="w-full bg-[#cca052] py-3 text-lg font-bold text-black rounded hover:bg-white transition-colors uppercase tracking-wider flex items-center justify-center gap-2"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                      View Combo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SECTION: OUR OWN PRODUCTS GRID */}
      <section id="our-products" className="flex flex-col justify-center px-6 py-24 bg-black/60 backdrop-blur-md border-t border-white/10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="pointer-events-auto w-full max-w-7xl mx-auto"
        >
          <div className="mb-12">
            <h3 className="flex flex-col">
              <span className="text-2xl md:text-3xl font-light text-white mb-1">Our</span>
              <span className="text-4xl md:text-5xl font-extrabold text-[#cca052] uppercase tracking-wider">
                Own Products
              </span>
            </h3>
          </div>

          {/* Grid Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ownProducts.map((prod, idx) => (
              <div 
                key={prod.id} 
                onClick={() => setSelectedProductIndex(idx)}
                className="group flex flex-col bg-[#111] border border-[#333] hover:border-[#cca052] rounded-xl transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(204,160,82,0.25)] p-6 relative overflow-hidden"
              >
                {/* Image Box */}
                <div className="h-40 w-full bg-white rounded-lg flex items-center justify-center p-4 mb-5 relative">
                  <img 
                    src={prod.img} 
                    alt={prod.name} 
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                    <span className="bg-[#cca052] text-black font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                      </svg>
                      View
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="text-center">
                  <h4 className="text-sm md:text-base font-medium text-white/80 group-hover:text-[#cca052] transition-colors">
                    {prod.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SECTION: CATEGORIES SLIDER */}
      <section id="categories" className="flex flex-col justify-center px-6 py-24 bg-black/40 backdrop-blur-sm border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="pointer-events-auto w-full max-w-7xl mx-auto overflow-hidden"
        >
          <div className="text-center mb-12">
            <p className="text-[#cca052] font-bold text-sm uppercase mb-2">Browse By Type</p>
            <h3 className="mb-4 text-4xl font-bold text-white uppercase">
              Featured Categories
            </h3>
            <p className="text-lg text-white/70">All Sivakasi product families, ready for your order.</p>
          </div>
          
          <div ref={sliderRef} className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {categories.map((cat, idx) => (
              <div key={idx} className="snap-start shrink-0 w-64 md:w-80 group flex flex-col bg-[#111] border border-[#333] rounded-xl transition-all hover:border-[#cca052] cursor-pointer overflow-hidden">
                <div className="h-64 w-full bg-white flex items-center justify-center p-4">
                  {/* We use object-contain so we don't crop images */}
                  <img 
                    src={cat.img} 
                    alt={cat.name} 
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://placehold.co/400x400/222/cca052?text=" + cat.name.replace(/ /g, '+');
                    }}
                  />
                </div>
                <div className="p-4 text-center bg-[#111]">
                  <h4 className="text-lg font-bold text-white">{cat.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      
      {/* SECTION: PAYMENT METHODS */}
      <section id="payment" className="flex flex-col justify-center px-6 py-24 bg-black/50 backdrop-blur-sm border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="pointer-events-auto w-full max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h3 className="mb-4 text-4xl font-bold text-white uppercase">
              Payment Methods
            </h3>
            <p className="text-lg text-white/70">Pay securely, then share your screenshot with us on WhatsApp to confirm your order.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* UPI Card */}
            <div className="bg-[#111] border border-[#333] rounded-xl p-8 transition-all hover:border-[#cca052]">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-[#cca052]">📱</span> UPI / GPay / PhonePe / Paytm
              </h4>
              <div className="w-full bg-white flex items-center justify-center mb-8 p-4 rounded-xl overflow-hidden">
                <img src="/images/qr-code.png" alt="Payment QR Code" className="max-h-48 object-contain" />
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-white/60">UPI ID</span>
                  <span className="text-white font-medium">gowtham4murugan@oksbi</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-white/60">Payee Name</span>
                  <span className="text-white font-medium">A V Gowtham</span>
                </div>
              </div>
              
              <p className="mt-6 text-sm text-white/50 leading-relaxed">
                Scan the QR code or pay to the UPI ID above using any UPI app, then send us your payment screenshot on WhatsApp along with your order list.
              </p>
            </div>

            {/* Bank Transfer Card */}
            <div className="bg-[#111] border border-[#333] rounded-xl p-8 transition-all hover:border-[#cca052] flex flex-col">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-[#cca052]">🏦</span> Bank Transfer (NEFT / RTGS)
              </h4>
              
              <div className="space-y-4 flex-1">
                <div className="flex justify-between border-b border-white/10 pb-4 mt-4">
                  <span className="text-white/60">Account Name</span>
                  <span className="text-white font-medium text-right">A V Gowtham</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-white/60">Account Number</span>
                  <span className="text-white font-medium text-right">39584113931</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-white/60">IFSC Code</span>
                  <span className="text-white font-medium text-right">SBIN0016492</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-white/60">Branch</span>
                  <span className="text-white font-medium text-right">THERKKUVASAL</span>
                </div>
              </div>

              <p className="mt-6 text-sm text-white/50 leading-relaxed mb-6">
                After transferring, please share the transaction reference and a screenshot with us on WhatsApp so we can confirm and process your order right away.
              </p>

              <button className="w-full bg-[#cca052] py-4 text-black font-bold rounded flex items-center justify-center gap-2 hover:bg-white transition-colors">
                <span>💬</span> Send Payment Screenshot on WhatsApp
              </button>
            </div>

          </div>
        </motion.div>
      </section>

      
      {/* SECTION: SAFETY TIPS */}
      <section id="safety" className="flex flex-col justify-center px-6 py-24 bg-black/40 backdrop-blur-sm border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="pointer-events-auto w-full max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h3 className="mb-4 text-4xl font-bold text-white uppercase">
              Safety Tips
            </h3>
            <p className="text-lg text-white/70">Enjoy the festival responsibly — a few precautions go a long way.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: '💧', title: 'Keep water nearby', desc: "Always keep a bucket of water or a hose close to where you're bursting crackers." },
              { icon: '🌤️', title: 'Burst outdoors, in the open', desc: "Use a large open area away from buildings, dry leaves, and parked vehicles." },
              { icon: '👀', title: 'Supervise children', desc: "Children should only handle fireworks under direct adult supervision." },
              { icon: '👕', title: 'Wear cotton clothing', desc: "Avoid synthetic fabrics, which catch fire more easily than cotton." },
              { icon: '🧯', title: 'Light one at a time', desc: "Never hold lit fireworks in your hand, and light one item at a time, at arm's length." },
              { icon: '🚫', title: 'Never relight a dud', desc: "If a cracker fails to go off, don't approach it — soak it in water instead." },
              { icon: '📦', title: 'Store safely', desc: "Keep fireworks in a cool, dry place away from open flames until you're ready to use them." },
              { icon: '🩹', title: 'Keep a first-aid kit ready', desc: "Have basic burn-care supplies on hand, and know your nearest hospital." }
            ].map((tip, idx) => (
              <div key={idx} className="bg-[#111] border border-[#333] rounded-xl p-6 flex items-start gap-5 transition-all hover:border-[#cca052]">
                <div className="bg-[#1a1a1a] p-3 rounded-lg text-2xl">{tip.icon}</div>
                <div>
                  <h4 className="text-lg font-bold text-[#cca052] mb-2">{tip.title}</h4>
                  <p className="text-sm text-white/60 leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SECTION: FOOTER */}
      <section id="contact" className="flex flex-col items-center justify-center px-6 py-32 text-center pointer-events-auto bg-black/50 backdrop-blur-sm border-t border-white/10">
        <h3 className="mb-6 text-4xl font-bold text-white uppercase">
          Ready to Order?
        </h3>
        <p className="mb-10 text-xl text-white/70">
          Message us on WhatsApp for fast dispatch and delivery.
        </p>
        <a href="https://wa.me/919655656041" target="_blank" rel="noopener noreferrer" className="relative z-50 pointer-events-auto bg-[#25D366] px-6 md:px-10 py-3 md:py-4 text-base md:text-lg w-full max-w-xs md:max-w-none md:w-auto font-bold text-white rounded transition-all hover:bg-[#128C7E] flex items-center gap-2 mx-auto inline-flex justify-center items-center">
          WhatsApp Us
        </a>
        
        <div className="mt-32 w-full max-w-5xl border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between text-sm text-white/50">
          <p>© 2026 Vikram Traders. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Safety Rules</a>
          </div>
        </div>
      </section>


      {/* FULLSCREEN COMBO IMAGE MODAL */}
      {selectedCombo && (
        <div 
          className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-md flex flex-col items-center justify-between p-4 md:p-8 pointer-events-auto animate-in fade-in duration-200"
          onClick={() => setSelectedCombo(null)}
        >
          {/* Header Bar */}
          <div 
            className="w-full max-w-6xl flex items-center justify-between py-3 px-4 border-b border-white/20 bg-black/40 rounded-t-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="text-[#cca052] font-bold text-xl md:text-3xl tracking-wide">{selectedCombo.name}</span>
              <span className="bg-[#cca052]/20 text-[#cca052] px-3 py-1 rounded-full font-bold text-sm md:text-lg border border-[#cca052]/40">
                {selectedCombo.price}
              </span>
            </div>
            
            <button 
              onClick={() => setSelectedCombo(null)}
              className="flex items-center gap-2 bg-[#cca052] hover:bg-white text-black font-bold px-4 py-2 rounded-lg transition-all text-sm md:text-base shadow-lg cursor-pointer"
              title="Close Fullscreen View"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              Close
            </button>
          </div>

          {/* Image Container */}
          <div 
            className="relative flex-1 w-full max-w-6xl my-4 flex items-center justify-center overflow-auto p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedCombo.img} 
              alt={selectedCombo.name} 
              className="max-w-full max-h-[75vh] md:max-h-[80vh] object-contain rounded-lg shadow-[0_0_40px_rgba(204,160,82,0.3)] border border-[#cca052]/40"
            />
          </div>

          {/* Footer Bar */}
          <div 
            className="w-full max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 py-3 px-4 border-t border-white/20 bg-black/40 rounded-b-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-white/70 text-xs md:text-sm text-center sm:text-left">
              💡 Tip: Click anywhere outside the box or press Esc to return to website.
            </p>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
              <a 
                href="https://mybillbook.in/store/vikramtrader" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#cca052] hover:bg-white text-black font-bold px-6 py-2.5 rounded-lg transition-all text-sm md:text-base flex items-center justify-center gap-2 shadow-md uppercase tracking-wider"
              >
                Order This Combo
              </a>
              <button 
                onClick={() => setSelectedCombo(null)}
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-2.5 rounded-lg transition-all text-sm md:text-base border border-white/20 uppercase tracking-wider cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FULLSCREEN PRODUCT LIGHTBOX MODAL */}
      {selectedProductIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-md flex flex-col items-center justify-between p-4 md:p-8 pointer-events-auto animate-in fade-in duration-200"
          onClick={() => setSelectedProductIndex(null)}
        >
          {/* Header Bar */}
          <div 
            className="w-full max-w-6xl flex items-center justify-between py-3 px-4 border-b border-white/20 bg-black/40 rounded-t-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="text-[#cca052] font-bold text-xl md:text-3xl tracking-wide">
                Our Product #{selectedProductIndex + 1}
              </span>
              <span className="bg-[#cca052]/20 text-[#cca052] px-3 py-1 rounded-full font-bold text-xs md:text-sm border border-[#cca052]/40 uppercase tracking-wider">
                Item {selectedProductIndex + 1} of {ownProducts.length}
              </span>
            </div>
            
            <button 
              onClick={() => setSelectedProductIndex(null)}
              className="flex items-center gap-2 bg-[#cca052] hover:bg-white text-black font-bold px-4 py-2 rounded-lg transition-all text-sm md:text-base shadow-lg cursor-pointer"
              title="Close Fullscreen View"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              Close
            </button>
          </div>

          {/* Image Container with Prev/Next Overlay Buttons */}
          <div 
            className="relative flex-1 w-full max-w-6xl my-4 flex items-center justify-between overflow-hidden p-2 gap-2 md:gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedProductIndex(selectedProductIndex > 0 ? selectedProductIndex - 1 : ownProducts.length - 1);
              }}
              className="z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/80 border border-[#cca052]/60 text-[#cca052] hover:bg-[#cca052] hover:text-black transition-all flex items-center justify-center shadow-2xl shrink-0 cursor-pointer active:scale-95"
              title="Previous Product (Left Arrow)"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <div className="flex-1 flex items-center justify-center px-2 md:px-4 max-h-[70vh] md:max-h-[78vh]">
              <img 
                src={`/images/${selectedProductIndex + 1}.jpeg`} 
                alt={`Product #${selectedProductIndex + 1}`} 
                className="max-w-full max-h-[70vh] md:max-h-[78vh] object-contain rounded-lg shadow-[0_0_40px_rgba(204,160,82,0.35)] border border-[#cca052]/40"
              />
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedProductIndex(selectedProductIndex < ownProducts.length - 1 ? selectedProductIndex + 1 : 0);
              }}
              className="z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/80 border border-[#cca052]/60 text-[#cca052] hover:bg-[#cca052] hover:text-black transition-all flex items-center justify-center shadow-2xl shrink-0 cursor-pointer active:scale-95"
              title="Next Product (Right Arrow)"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          {/* Footer Bar */}
          <div 
            className="w-full max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 py-3 px-4 border-t border-white/20 bg-black/40 rounded-b-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-white/70 text-xs md:text-sm text-center sm:text-left">
              💡 Tip: Use Left / Right arrow keys to switch images, Esc or Click outside to close.
            </p>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
              <a 
                href="https://mybillbook.in/store/vikramtrader" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#cca052] hover:bg-white text-black font-bold px-6 py-2.5 rounded-lg transition-all text-sm md:text-base flex items-center justify-center gap-2 shadow-md uppercase tracking-wider"
              >
                Order This Product
              </a>
              <button 
                onClick={() => setSelectedProductIndex(null)}
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-2.5 rounded-lg transition-all text-sm md:text-base border border-white/20 uppercase tracking-wider cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}