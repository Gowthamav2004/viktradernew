"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ScrollContent() {
  const sliderRef = useRef<HTMLDivElement>(null);

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

      {/* SECTION: GIFT BOXES */}
      <section id="gift-boxes" className="flex min-h-screen flex-col justify-center px-6 py-24 md:px-24 bg-black/60 backdrop-blur-md border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="pointer-events-auto w-full max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h3 className="mb-4 text-4xl font-bold text-white uppercase">
              Gift Boxes
            </h3>
            <p className="text-lg text-white/70">Our special combo boxes for all your celebration needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {giftBoxes.map((box, idx) => (
              <div key={idx} className="group flex flex-col bg-[#111] border border-[#333] rounded-lg transition-all hover:border-[#cca052] cursor-pointer overflow-hidden">
                <div className="relative h-80 w-full overflow-hidden bg-white flex items-center justify-center p-4">
                  <img 
                    src={box.img} 
                    alt={box.name} 
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-4">{box.name}</h4>
                  </div>
                  <div>
                    <p className="text-[#cca052] font-bold text-2xl mb-6">{box.price}</p>
                    <button className="w-full bg-[#cca052] py-3 text-lg font-bold text-black rounded hover:bg-white transition-colors">
                      Add to Cart
                    </button>
                  </div>
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

    </div>
  );
}
