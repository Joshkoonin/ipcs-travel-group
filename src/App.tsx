import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Facebook, Linkedin, Globe, Shield, Star, ArrowRight, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Components
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-ipcs-bg/80 backdrop-blur-md border-b border-ipcs-ink/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-xl font-serif font-bold tracking-tight text-ipcs-ink group">
          IPCS <span className="font-light opacity-60 transition-opacity group-hover:opacity-100">TRAVEL GROUP</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/about" className={cn("text-sm font-medium transition-colors hover:text-ipcs-accent", location.pathname === '/about' && "text-ipcs-accent")}>About</Link>
          <div className="flex items-center gap-6 border-l border-ipcs-ink/10 pl-6">
            <Link to="/brand/pizazz" className="text-sm font-medium hover:text-pizazz-primary transition-colors">Pizazz Israel Tours</Link>
            <Link to="/brand/ourtribe" className="text-sm font-medium hover:text-ourtribe-primary transition-colors">Our Tribe Jewish Heritage Journeys</Link>
            <Link to="/brand/geopolitical" className="text-sm font-medium hover:text-geo-primary transition-colors">Geopolitical Journeys</Link>
          </div>
          <Link to="/contact" className="ml-4 px-5 py-2.5 bg-ipcs-ink text-white rounded-full text-sm font-medium hover:bg-ipcs-accent transition-all shadow-sm">
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 -z-10"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className="md:hidden absolute top-20 right-0 w-64 h-screen bg-white shadow-2xl p-8 flex flex-col gap-6"
            >
              <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-medium border-b border-ipcs-ink/5 pb-2">Home</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium border-b border-ipcs-ink/5 pb-2">About</Link>
              <div className="flex flex-col gap-4 mt-2">
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Our Brands</span>
                <Link to="/brand/pizazz" onClick={() => setIsOpen(false)} className="text-pizazz-primary font-medium">Pizazz Israel Tours</Link>
                <Link to="/brand/ourtribe" onClick={() => setIsOpen(false)} className="text-ourtribe-primary font-medium text-sm">Our Tribe Jewish Heritage Journeys</Link>
                <Link to="/brand/geopolitical" onClick={() => setIsOpen(false)} className="text-geo-primary font-medium">Geopolitical Journeys</Link>
              </div>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-4 px-6 py-4 bg-ipcs-ink text-white rounded-xl text-center font-medium shadow-lg hover:bg-ipcs-accent transition-colors">
                Request a Quote
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Simple Footer
const Footer = () => (
  <footer className="bg-ipcs-ink text-white section-padding">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <h2 className="text-2xl font-serif mb-6">IPCS Travel Group</h2>
        <p className="text-white/60 max-w-sm mb-8">
          The global umbrella for premium, specialized travel experiences. 
          Expertise, credibility, and meticulous attention to detail.
        </p>
        <div className="flex gap-4">
          <Instagram className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer" />
          <Facebook className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer" />
          <Linkedin className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer" />
        </div>
      </div>
      <div>
        <h3 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-40">Brands</h3>
        <ul className="space-y-4 text-sm text-white/80">
          <li><Link to="/brand/pizazz">Pizazz Israel Tours</Link></li>
          <li><Link to="/brand/ourtribe">Our Tribe Tours</Link></li>
          <li><Link to="/brand/geopolitical">Geopolitical Journeys</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-40">Resources</h3>
        <ul className="space-y-4 text-sm text-white/80">
          <li><Link to="/about">About Joshua Koonin</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/admin">Admin Access</Link></li>
          <li><a href="#" className="opacity-40">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 text-xs text-white/30 flex justify-between">
      <p>© 2026 IPCS Travel Group. All rights reserved.</p>
      <p>Meticulously crafted by IPCS Travel Group.</p>
    </div>
  </footer>
);

import { useParams, useNavigate } from 'react-router-dom';
import { INITIAL_CONTENT } from './lib/constants';

// About Page
const About = () => {
  const { about } = INITIAL_CONTENT;
  return (
    <div className="pt-20">
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl"
            >
              <img src={about.founderImage} alt={about.founderName} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 border-[24px] border-white/10 pointer-events-none" />
            </motion.div>
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-ipcs-accent mb-4 block">The Founder's Story</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8">{about.founderName}</h1>
            <p className="text-xl leading-relaxed text-ipcs-ink/80 mb-8 border-l-4 border-ipcs-accent pl-6 italic">
              {about.founderBio}
            </p>
            <div className="space-y-6 text-ipcs-ink/70 leading-relaxed">
              <p>
                From his early years in South Africa and Australia, Joshua was captivated by the rich tapestry of Jewish history and the complex dynamics of global politics. This passion was driven by a deep desire to understand how historical narratives shape our modern world.
              </p>
              <p>
                Today, IPCS Travel Group is the realization of that lifelong commitment. Joshua and his team of seasoned professionals have built a reputation for institutional-grade travel that balances the emotional weight of heritage with the rigorous analysis of current affairs.
              </p>
              <p>
                "At IPCS, we don't just show you places; we provide the context, the nuance, and the meticulous care that turns a trip into a defining life experience."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Credibility section */}
      <section className="bg-ipcs-bg section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">A Team of Seasoned Professionals</h2>
            <p className="text-ipcs-ink/60">Decades of combined experience in institutional and high-detail travel.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Institutional Expertise", desc: "Leading travel partner for world-class organizations." },
              { title: "Meticulous Detail", desc: "Every logistical thread is woven with absolute precision." },
              { title: "Authoritative Insight", desc: "Access to speakers, analysts, and policy-makers." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-2xl border border-ipcs-ink/5 shadow-sm">
                <h3 className="text-xl font-serif mb-4">{item.title}</h3>
                <p className="text-sm text-ipcs-ink/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Brand Page
const BrandPage = () => {
  const { id } = useParams();
  const brand = INITIAL_CONTENT.brands.find(b => b.id === id);
  if (!brand) return <div className="pt-32 px-6">Brand not found</div>;

  return (
    <div className="pt-20">
      <header className="relative h-[70vh] md:h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={brand.heroImage} 
            className="w-full h-full object-cover object-bottom" 
            alt={brand.name} 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-60">Part of the IPCS Travel Group</span>
              <div className="w-8 h-px bg-white/20" />
            </div>
            {brand.id !== 'geopolitical' && (
              <span className="text-sm font-bold uppercase tracking-[0.4em] mb-4 block opacity-80 uppercase">{brand.tagline}</span>
            )}
            <h1 className="text-6xl md:text-8xl font-serif leading-tight mb-8 max-w-3xl">{brand.name}</h1>
            <div className="flex gap-4">
              <button className={cn("px-8 py-4 rounded-full font-serif text-lg text-white shadow-xl transition-transform hover:scale-105", 
                brand.id === 'pizazz' ? 'bg-pizazz-primary' : 
                brand.id === 'ourtribe' ? 'bg-ourtribe-primary' : 'bg-geo-primary'
              )}>
                Explore Journeys
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-serif mb-8 text-ipcs-ink">
              {brand.id === 'ourtribe' ? 'Jewish Heritage Journeys' : 
              brand.id === 'pizazz' ? 'Redefining Luxury and service' : 
              brand.id === 'geopolitical' ? 'What is a Geopolitical Journey' : `Redefining ${brand.name}`}
            </h2>
            <div className="space-y-6">
              <p className="text-xl leading-relaxed text-ipcs-ink/70">
                {brand.id === 'ourtribe' ? 
                  'Join Our Tribe on a profound journey tracing the resilience of the Jewish people. From the historic streets of Prague and Budapest to the poignant shtetls of Poland, we evoke traditions once lost but never forgotten. From the silence of Auschwitz to the rebirth of life in Warsaw and Kraków, our tours offer a powerful reflection on an enduring spirit.' : 
                  brand.id === 'geopolitical' ?
                  'Geopolitical Journeys are tours for those who are fascinated by global and international relations. Travel is one of the most powerful ways to understand the forces shaping our world. We offer immersive, expertly guided experiences that explore the political, social, and historical dynamics behind today’s global headlines. Meet with leaders, journalists, policy makers and security experts, and go behind the headlines. Every geopolitical journey is unique and we can arrange tours for just one person, or for large groups. Start planning today.' :
                  brand.description
                }
              </p>
              
              <ul className="space-y-4 pt-4">
                {brand.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm font-medium">
                    <div className={cn("w-2 h-2 rounded-full",
                      brand.id === 'pizazz' ? 'bg-pizazz-primary' : 
                      brand.id === 'ourtribe' ? 'bg-ourtribe-primary' : 'bg-geo-primary'
                    )} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 mt-12 md:mt-0">
            <img 
              src={
                brand.id === 'pizazz' ? '/allie.jpg' : 
                brand.id === 'ourtribe' ? '/haboeuropeai.png' : 
                brand.id === 'geopolitical' ? '/Washingtonmonumentai.png' : 
                `https://picsum.photos/seed/${brand.id}-1/600/800`
              } 
              className="rounded-2xl shadow-lg border border-ipcs-ink/5 object-cover h-[300px] md:h-[400px] w-full" 
              referrerPolicy="no-referrer" 
            />
            <img 
              src={
                brand.id === 'pizazz' ? '/Ein-Gedi.jpg' : 
                brand.id === 'ourtribe' ? '/Poland.jpg' : 
                brand.id === 'geopolitical' ? '/Soweto.png' : 
                `https://picsum.photos/seed/${brand.id}-2/600/800`
              } 
              className="rounded-2xl shadow-lg mt-0 md:mt-12 border border-ipcs-ink/5 object-cover object-bottom h-[300px] md:h-[400px] w-full" 
              referrerPolicy="no-referrer" 
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-ipcs-ink text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-[0.4em] opacity-40 mb-8 block">Tailored with Precision</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-12">Every institutional or private <br/> journey is unique.</h2>
          <Link to="/contact" className={cn("inline-flex items-center gap-4 px-12 py-6 rounded-full font-bold text-sm uppercase tracking-widest transition-all shadow-2xl hover:-translate-y-1 active:scale-95",
            brand.id === 'pizazz' ? 'bg-pizazz-primary' : 
            brand.id === 'ourtribe' ? 'bg-ourtribe-primary' : 'bg-geo-primary'
          )}>
            Request Your Custom Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        {/* Decorative background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-full opacity-5 pointer-events-none flex items-center justify-center">
          <span className="text-[15vw] font-serif whitespace-nowrap">{brand.name}</span>
        </div>
      </section>

      {/* Partners Section for Pizazz Israel */}

      {brand.id !== 'geopolitical' && (
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-ipcs-accent mb-4 block">Our Expertise</span>
                <h2 className="text-4xl md:text-5xl font-serif leading-tight">Curating travel for every community and mission.</h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { id: 'educational', title: brand.id === 'geopolitical' ? "Understanding the Arab - Israeli conflict" : "Educational Tours", image: "/Knessetai.png", description: "Bespoke curricula for schools and universities." },
                { id: 'communal', title: "Communal Organizations", image: "/YV.jpg", description: "Strategic missions for federations and nonprofits." },
                { id: 'religious', title: "Religious Congregations", image: "/Religious.jpg", description: "Spiritual journeys and heritage explorations." },
                { id: 'family', title: "Family, Friends and Individuals", image: "/dead%20sea%20group.jpg", description: "Multi-generational private luxury travel." }
              ].filter(item => brand.id === 'pizazz' || item.id !== 'religious').map((item: any, idx) => {
                const isOurTribeTarget = brand.id === 'ourtribe' && (item.id === 'educational' || item.id === 'communal' || item.id === 'family');
                const showImage = brand.id === 'pizazz' || isOurTribeTarget;
                
                let displayImage = item.image;
                if (brand.id === 'ourtribe') {
                  if (item.id === 'educational') displayImage = "/haboeuropeai.png";
                  if (item.id === 'communal') displayImage = "/Habo%20parliament%20ai.png";
                  if (item.id === 'family') displayImage = "/Altneuai.png";
                }

                return (
                  <Link to={`/brand/${brand.id}/segment/${item.id}`} key={idx} className={cn("block group relative h-[300px] md:h-[400px] rounded-[32px] overflow-hidden shadow-xl", !showImage && "bg-ipcs-bg border border-ipcs-ink/5")}>
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="h-full w-full"
                    >
                      {showImage ? (
                        <>
                          <img 
                            src={displayImage} 
                            alt={item.title} 
                            className={cn("w-full h-full object-cover transition-transform duration-700 group-hover:scale-110", item.position || "object-center")} 
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-ipcs-ink/90 via-ipcs-ink/20 to-transparent" />
                        </>
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-t from-ipcs-ink/5 to-transparent transition-colors group-hover:bg-white" />
                      )}
                      <div className="absolute inset-0 p-10 flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-2">
                        <h3 className={cn("text-3xl font-serif mb-3", showImage ? "text-white" : "text-ipcs-ink")}>{item.title}</h3>
                        <p className={cn("text-sm font-medium tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0", showImage ? "text-white/60" : "text-ipcs-ink/60")}>
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-ipcs-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-ipcs-accent mb-4 block">Proven Concepts</span>
            <h2 className="text-5xl md:text-6xl font-serif">Sample Itineraries</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {INITIAL_CONTENT.itineraries.filter(item => !item.brandIds || item.brandIds.length === 0 || item.brandIds.includes(brand.id)).map((item, idx) => (
              <Link 
                to={`/brand/${brand.id}/itinerary/${item.id}`} 
                key={idx} 
                className="block"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative h-[400px] md:h-[600px] rounded-[40px] overflow-hidden cursor-pointer shadow-lg"
                >
                  <img 
                    src={item.heroImage} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-ipcs-ink/10 group-hover:bg-ipcs-ink/30 transition-colors duration-500" />
                  <div className="absolute inset-x-0 bottom-0 p-10 pt-32 bg-gradient-to-t from-ipcs-ink/90 via-ipcs-ink/40 to-transparent">
                    {item.label && (
                      <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-ipcs-accent mb-3 block opacity-80">{item.label}</span>
                    )}
            <h3 className="text-2xl font-serif text-white leading-tight">
              {item.id === 'educational' && brand.id === 'geopolitical' 
                ? 'Understanding the Arab - Israeli Conflict' 
                : item.title}
            </h3>
                    <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const SegmentPage = () => {
  const { id, brandId } = useParams();
  const segment = INITIAL_CONTENT.segments.find(s => s.id === id);
  const brand = INITIAL_CONTENT.brands.find(b => b.id === brandId);
  
  if (!segment) return <div className="pt-32 px-6 text-center h-[50vh] flex items-center justify-center font-serif text-2xl opacity-40 uppercase tracking-widest">Expertise segment not found</div>;

  const isEducationalPizazz = (id === 'educational' && brandId === 'pizazz');
  const isEducationalOurTribe = (id === 'educational' && brandId === 'ourtribe');
  const isCommunalPizazz = (id === 'communal' && brandId === 'pizazz');
  const isCommunalOurTribe = (id === 'communal' && brandId === 'ourtribe');
  const isFamilyOurTribe = (id === 'family' && brandId === 'ourtribe');

  return (
    <div className="pt-20">
      <header className="relative h-[70vh] md:h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={segment.heroImage} 
            className="w-full h-full object-cover object-bottom" 
            alt={segment.title} 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.4em] mb-4 block opacity-60">Targeted Expertise</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              {id === 'educational' && brandId === 'geopolitical' ? "Understanding the Arab - Israeli conflict" : 
               id === 'educational' ? "Educational Tours" : segment.title}
            </h1>
            <p className="text-xl md:text-2xl font-light italic opacity-80 max-w-2xl">{segment.tagline}</p>
          </motion.div>
        </div>
      </header>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-serif mb-8 text-ipcs-ink">Specialized for {segment.title}</h2>
            <div className="text-xl leading-relaxed text-ipcs-ink/70 mb-12 space-y-6">
              {isEducationalPizazz ? (
                <>
                  <p>
                    Pizazz Israel Tours creates once in a life time Israel experiences for student leaders, activists, and youth movements. Our custom programs build context, connection, and confidence.
                  </p>
                  <p className="text-base text-ipcs-ink/50 italic leading-snug">
                    We work with leading student organizations including the Australasian Union of Jewish Students, the South African Union of Jewish Students, the Israeli Union of Students, Habonim Dror, Young Judea, The University of New South Wales, The Hebrew University of Jerusalem and more.
                  </p>
                </>
              ) : isEducationalOurTribe ? (
                <p>
                  At Our Tribe Tours, we design immersive, curriculum-aligned journeys that bring Jewish history, heritage, and identity to life. We work with schools, youth movements and gap year programs to craft bespoke itineraries and make each journey one of discovery and connection.
                </p>
              ) : isCommunalPizazz ? (
                <>
                  <p>
                    Pizazz Israel Tours partners with Jewish Federations, advocacy groups, and community groups to design and deliver impact-driven Israel journeys that educate, inspire, and build identity.
                  </p>
                  <p>
                    We work with the leadership of each organization to build strategic, goal-focused itineraries, provide top guides and experts, and run our tours with exceptional attention to detail. Whether the objective is leadership development, advocacy, philanthropy, or community engagement, our tours will meet your needs.
                  </p>
                  <p className="text-base text-ipcs-ink/50 italic leading-snug">
                    With maximum flexibility on the ground and seamless logistical support, we ensure your delegation can focus on mission, messaging, and meaningful engagement – while we take care of everything else.
                  </p>
                </>
              ) : isCommunalOurTribe ? (
                <>
                  <p>
                    {segment.description}
                  </p>
                  <p>
                    We craft meaningful journeys that deepen connection to Jewish history, strengthen communal identity, and confront antisemitism through firsthand experience. Our programs are thoughtfully designed to support advocacy, remembrance, and education in powerful, lasting ways.
                  </p>
                </>
              ) : isFamilyOurTribe ? (
                <p>
                  Private luxury travel curated for the most important people in your life. Explore your heritage and identity with those you love while we handle every detail so you can focus on your journey.
                </p>
              ) : (
                <p>{segment.description}</p>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {segment.details.map((detail, i) => (
                <div key={i} className="p-6 bg-ipcs-bg rounded-2xl border border-ipcs-ink/5">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mb-4 text-ipcs-accent font-bold text-xs border border-ipcs-ink/5 shadow-sm">
                    {i + 1}
                  </div>
                  <p className="font-bold text-sm tracking-tight">
                    {isCommunalOurTribe && detail === 'Policy Briefings' ? 'Expert Historic Briefings and testimony' : 
                     isFamilyOurTribe && detail === 'Private Access' ? 'top experts and guides' :
                     detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            {isEducationalPizazz ? (
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 auto-rows-min">
                 {[
                   { name: 'AUJS', img: '/aujs.png' },
                   { name: 'SAUJS', img: '/SAUJS.png' },
                   { name: 'Habonim', img: '/Habonim.png' },
                   { name: 'Young Judea', img: '/Young%20Judea.png' },
                   { name: 'Hebrew Uni', img: '/Logo-Hebrew-University.jpg' },
                   { name: 'UNSW', img: '/unsw%20updated.png' },
                   { name: 'WUJS', img: '/WUJS%20logo.png' }
                 ].map((logo, i) => (
                   <div key={i} className="aspect-square bg-ipcs-bg rounded-2xl p-4 flex items-center justify-center border border-ipcs-ink/5 grayscale hover:grayscale-0 transition-all duration-500">
                     <img src={logo.img} alt={logo.name} className="max-w-full max-h-full object-contain" referrerPolicy="no-referrer" />
                   </div>
                 ))}
               </div>
            ) : (
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
                <img 
                  src={(isCommunalPizazz ? "/YV.jpg" : isEducationalOurTribe ? "/haboeuropeai.png" : isCommunalOurTribe ? "/Habo%20parliament%20ai.png" : isFamilyOurTribe ? "/Altneuai.png" : segment.detailImage) || `https://picsum.photos/seed/${segment.id}-detail/1000/1250`} 
                  className="w-full h-full object-cover object-bottom" 
                  referrerPolicy="no-referrer" 
                  alt={`${segment.title} detail`}
                />
              </div>
            )}
            {/* Action Card */}
            <div className="absolute -bottom-10 -left-10 bg-ipcs-ink text-white p-10 rounded-[40px] shadow-2xl max-w-xs hidden lg:block">
              <h4 className="text-xl font-serif mb-4">Start your custom project.</h4>
              <Link to="/contact" className="text-xs font-bold uppercase tracking-widest text-ipcs-accent flex items-center gap-2">
                Request a Quote <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-ipcs-bg border-y border-ipcs-ink/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-2xl md:text-4xl font-serif mb-10">Experience {segment.title} with {brand?.name || 'IPCS'}.</h3>
            <Link to="/contact" className="inline-block px-12 py-5 bg-ipcs-ink text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-ipcs-accent transition-all shadow-xl">
              Inquire Now
            </Link>
        </div>
      </section>
    </div>
  );
};

const ItineraryPage = () => {
  const { id, brandId } = useParams();
  const itinerary = INITIAL_CONTENT.itineraries.find(i => i.id === id);
  if (!itinerary) return <div className="pt-32 px-6 text-center h-[50vh] flex items-center justify-center font-serif text-2xl opacity-40 uppercase tracking-widest">Sample itinerary not found</div>;

  const displayTitle = (itinerary.id === 'educational' && brandId === 'geopolitical') 
    ? 'Understanding the Arab - Israeli Conflict' 
    : (itinerary.id === 'educational' ? 'Educational Tours' : itinerary.title);

  return (
    <div className="pt-20">
      <header className="relative min-h-[70vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden py-32">
        <div className="absolute inset-0">
          <img 
            src={itinerary.heroImage} 
            className="w-full h-full object-cover object-top" 
            alt={itinerary.title} 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {itinerary.label && (
              <span className="text-xs font-bold uppercase tracking-[0.6em] mb-4 block opacity-60">{itinerary.label}</span>
            )}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-8 leading-tight max-w-4xl">
              {displayTitle}
            </h1>
          </motion.div>
        </div>
      </header>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-serif mb-8 text-ipcs-ink">Journey Overview</h2>
            <p className="text-2xl leading-relaxed text-ipcs-ink/80 font-light italic mb-12">
              {itinerary.description}
            </p>

            <div className="mb-20 p-10 bg-ipcs-bg rounded-[40px] border border-ipcs-ink/5 relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-ipcs-accent mb-6">
                  {itinerary.brandIds?.includes('geopolitical') ? 'The Geopolitical Lens' : itinerary.brandIds?.includes('ourtribe') ? 'The Our Tribe Philosophy' : 'The Pizazz Experience'}
                </h3>
                <p className="text-xl md:text-2xl font-serif text-ipcs-ink leading-relaxed mb-6">
                  {itinerary.brandIds?.includes('geopolitical')
                    ? 'Geopolitical Journeys offers a unique, analyst-led window into the forces that shape our global reality, providing context far beyond the daily headlines.'
                    : itinerary.brandIds?.includes('ourtribe') 
                    ? 'Our Tribe is dedicated to the profound exploration of Jewish identity, connecting the deep roots of our past with the vibrant reality of our future.'
                    : 'What makes a journey with Pizazz truly special is the fusion of high-level intellectual depth and infectious, vibrant energy.'}
                </p>
                <p className="text-lg text-ipcs-ink/60 leading-relaxed max-w-2xl">
                  {itinerary.brandIds?.includes('geopolitical')
                    ? 'We provide more than just travel; we offer a strategic education on the ground. Through high-level briefings, expert-led analysis, and access to decision-makers, we transform complex news cycles into lived experience and profound understanding.'
                    : itinerary.brandIds?.includes('ourtribe')
                    ? 'We don\'t just visit historical sites; we facilitate a reconnection with the narrative of our people. Through privileged access to archives, experts, and community leaders, we provide a context that is both academically rigorous and deeply personal.'
                    : 'We don\'t just show you the sites; we connect you to the heartbeat of the land. By doing it with Pizazz, you gain access to our exclusive network of experts, storytellers, and hidden locations, all delivered with the meticulous attention to detail and warm, personal touch that has become our institutional hallmark.'}
                </p>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-ipcs-accent/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-ipcs-accent/10 transition-colors" />
            </div>
            
            {itinerary.subItineraries.length > 1 ? (
              <div className="mb-16">
                <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-ipcs-accent mb-10 block">Select a Tour Profile</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {itinerary.subItineraries.map((sub, i) => (
                    <Link 
                      key={i} 
                      to={sub.externalLink || `/itinerary/${id}/variant/${sub.id}`}
                      className="group block p-8 bg-ipcs-bg rounded-3xl border border-ipcs-ink/5 hover:bg-ipcs-ink hover:text-white transition-all duration-500 shadow-sm hover:shadow-2xl"
                    >
                      <div className="flex flex-col h-full">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-6 text-ipcs-accent font-bold text-xs border border-ipcs-ink/5 shadow-sm group-hover:scale-110 transition-transform">
                          {i + 1}
                        </div>
                        <h4 className="text-xl font-serif mb-4 group-hover:text-ipcs-accent transition-colors">{sub.title}</h4>
                        <p className={cn("text-xs leading-relaxed opacity-60 line-clamp-2 mb-6 group-hover:opacity-80")}>
                          {sub.description}
                        </p>
                        <div className="mt-auto flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-ipcs-accent opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                          {sub.title.toLowerCase().includes('day tour') ? 'View Itineraries' : 'View Itinerary'} <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mb-16">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] text-ipcs-accent mb-8">The IPCS Signature</h3>
                    <p className="text-2xl font-serif text-ipcs-ink italic leading-relaxed text-pretty">
                      "We curate transitions of the soul, combining academic rigor with the vibrant, life-affirming heartbeat of modern reality."
                    </p>
                    <div className="mt-8 w-12 h-px bg-ipcs-accent/30 mx-auto" />
                </div>

                <span className="text-xs font-bold uppercase tracking-[0.4em] text-ipcs-accent mb-12 block text-center">
                  Proposed Journey Path
                </span>
                <div className="space-y-0">
                  {itinerary.subItineraries[0].schedule.map((day, i) => (
                    <div key={i} className="relative pl-12 md:pl-24 border-l border-ipcs-ink/10 pb-20 last:pb-0">
                      <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-ipcs-accent shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
                      <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                        <span className="text-xs font-bold uppercase tracking-widest text-ipcs-ink/30 shrink-0 md:w-24">{day.day}</span>
                        <div className="flex-1">
                          <h4 className="text-2xl md:text-3xl font-serif leading-snug mb-3">{day.activity}</h4>
                          {day.description && (
                            <p className="text-ipcs-ink/60 text-lg leading-relaxed max-w-2xl">{day.description}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="lg:sticky lg:top-32 h-fit">
            <div className="p-10 bg-ipcs-ink text-white rounded-[40px] shadow-2xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-ipcs-accent mb-6 block">Tailor this Mission</span>
              <h3 className="text-3xl font-serif mb-8 leading-tight">Every community has a different story to tell.</h3>
              <p className="text-white/60 mb-10 text-sm leading-relaxed text-pretty">
                These samples provide a snapshot of what's possible. We build every journey from the ground up to match your specific institutional goals or family dynamics.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-4 px-10 py-5 bg-white text-ipcs-ink rounded-full font-bold text-xs uppercase tracking-widest hover:bg-ipcs-accent hover:text-white transition-all w-full justify-center">
                Refine Your Itinerary <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-ipcs-ink/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 p-16 bg-ipcs-bg rounded-[60px] relative overflow-hidden">
             <div className="relative z-10">
               <h3 className="text-3xl md:text-4xl font-serif mb-4">Inspired by this journey?</h3>
               <p className="text-ipcs-ink/60 max-w-md">Let's discuss how to bring these itineraries to life for your group.</p>
             </div>
             <Link to="/contact" className="relative z-10 px-12 py-6 bg-ipcs-ink text-white rounded-full font-bold text-sm uppercase tracking-widest shadow-2xl transform transition hover:-translate-y-1">
               Get in Touch
             </Link>
             <div className="absolute top-0 right-0 w-64 h-64 bg-ipcs-accent/5 rounded-full blur-3xl -mr-32 -mt-32" />
          </div>
        </div>
      </section>
    </div>
  );
};

const SubItineraryPage = () => {
  const { parentId, variantId } = useParams();
  const itinerary = INITIAL_CONTENT.itineraries.find(i => i.id === parentId);
  const variant = itinerary?.subItineraries.find(s => s.id === variantId);

  if (!itinerary || !variant) return <div className="pt-32 px-6 text-center h-[50vh] flex items-center justify-center font-serif text-2xl opacity-40 uppercase tracking-widest">Details not found</div>;

  return (
    <div className="pt-20">
      <header className="relative min-h-[60vh] md:min-h-[75vh] flex items-center overflow-hidden py-32">
        <div className="absolute inset-0">
          <img 
            src={itinerary.heroImage} 
            className="w-full h-full object-cover object-center" 
            alt={variant.title} 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white w-full">
          <Link to={`/itinerary/${parentId}`} className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-ipcs-accent mb-12 hover:text-white transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to {itinerary.title}
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif leading-tight max-w-4xl mb-6">{variant.title}</h1>
            <p className="text-xl md:text-2xl font-light italic opacity-80 max-w-2xl">{variant.description}</p>
          </motion.div>
        </div>
      </header>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-24 text-center max-w-3xl mx-auto">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] text-ipcs-accent mb-8">The Pizazz Touch</h3>
            <p className="text-2xl md:text-3xl font-serif text-ipcs-ink italic leading-relaxed text-pretty">
              "We don't just plan travel; we curate transitions of the soul, combining academic rigor with the vibrant, life-affirming heartbeat of modern reality."
            </p>
            <div className="mt-8 w-12 h-px bg-ipcs-accent/30 mx-auto" />
          </div>

          <div className="mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-ipcs-accent mb-12 block text-center">
              {variant.id.toLowerCase().includes('day-tour') ? 'Curated Day Tour Options' : 'Proposed Journey Path'}
            </span>
            <div className="space-y-0">
              {variant.schedule.map((day, i) => (
                <div key={i} className="relative pl-12 md:pl-24 border-l border-ipcs-ink/10 pb-20 last:pb-0">
                  <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-ipcs-accent shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
                  <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-ipcs-ink/30 shrink-0 md:w-24">{day.day}</span>
                    <div className="flex-1">
                      <h4 className="text-2xl md:text-3xl font-serif leading-snug mb-3">{day.activity}</h4>
                      {day.description && (
                        <p className="text-ipcs-ink/60 text-lg leading-relaxed max-w-2xl">{day.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-16 bg-ipcs-bg rounded-[60px] text-center border border-ipcs-ink/5">
            <h3 className="text-3xl font-serif mb-6">Ready to customize this journey?</h3>
            <p className="text-ipcs-ink/60 mb-10 max-w-lg mx-auto">This represents one possible configuration. We modify every detail based on your preferred pace and specific focus areas.</p>
            <Link to="/contact" className="px-12 py-5 bg-ipcs-ink text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-ipcs-accent transition-colors shadow-xl inline-block">
              Request Your Custom Proposal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Contact Page
const Contact = () => {
  return (
    <div className="pt-20">
      <section className="section-padding bg-white max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">Begin Your <br/> <span className="italic">Journey.</span></h1>
          <p className="text-xl text-ipcs-ink/60 mb-12 max-w-md leading-relaxed">
            Whether you are an institutional client seeking custom programming or a private group looking for depth, let's start a conversation.
          </p>
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-ipcs-bg flex items-center justify-center border border-ipcs-ink/5 text-ipcs-accent">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-40">Headquarters</h4>
                <p className="text-sm font-medium">Jerusalem, Israel</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-ipcs-bg flex items-center justify-center border border-ipcs-ink/5 text-ipcs-accent">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-40">Email Enquiries</h4>
                <a href="mailto:josh@pizazzisrael.com" className="text-sm font-medium hover:text-ipcs-accent transition-colors">josh@pizazzisrael.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 bg-ipcs-bg p-8 md:p-12 rounded-[40px] shadow-sm border border-ipcs-ink/5">
          <form className="space-y-8" onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const data = Object.fromEntries(formData.entries());
            const subject = encodeURIComponent(`IPCS Inquiry: ${data.brand || 'General'}`);
            const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\nTravel Dates: ${data.dates}\nTotal Travelers: ${data.travelers}\nVision: ${data.vision}`);
            window.location.href = `mailto:josh@pizazzisrael.com?subject=${subject}&body=${body}`;
          }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Name</label>
                <input name="name" type="text" required className="w-full bg-transparent border-b border-ipcs-ink/10 focus:border-ipcs-accent outline-none py-2 transition-colors text-ipcs-ink placeholder:text-ipcs-ink/20" placeholder="Jane Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Email</label>
                <input name="email" type="email" required className="w-full bg-transparent border-b border-ipcs-ink/10 focus:border-ipcs-accent outline-none py-2 transition-colors text-ipcs-ink placeholder:text-ipcs-ink/20" placeholder="jane@example.com" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Travel Dates</label>
                <input name="dates" type="text" className="w-full bg-transparent border-b border-ipcs-ink/10 focus:border-ipcs-accent outline-none py-2 transition-colors text-ipcs-ink placeholder:text-ipcs-ink/20" placeholder="e.g. June 2026" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Total Travelers</label>
                <input name="travelers" type="number" className="w-full bg-transparent border-b border-ipcs-ink/10 focus:border-ipcs-accent outline-none py-2 transition-colors text-ipcs-ink placeholder:text-ipcs-ink/20" placeholder="1-10" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Brand of Interest</label>
              <select name="brand" className="w-full bg-transparent border-b border-ipcs-ink/10 focus:border-ipcs-accent outline-none py-2 transition-colors appearance-none text-ipcs-ink">
                <option value="">Select a Program</option>
                <option value="Pizazz Israel Tours">Pizazz Israel Tours</option>
                <option value="Our Tribe Tours">Our Tribe Tours</option>
                <option value="Geopolitical Journeys">Geopolitical Journeys</option>
                <option value="General Institutional Inquiry">General Institutional Inquiry</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Your Vision</label>
              <textarea name="vision" rows={4} className="w-full bg-transparent border-b border-ipcs-ink/10 focus:border-ipcs-accent outline-none py-2 transition-colors resize-none text-ipcs-ink placeholder:text-ipcs-ink/20" placeholder="Tell us about your specific interests or institutional requirements..."></textarea>
            </div>
            
            <button type="submit" className="w-full py-4 bg-ipcs-ink text-white rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-ipcs-accent transition-all shadow-xl active:scale-95">
              Send Enquiry to Josh
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

// Admin Section
const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pass, setPass] = useState("");
  const [content, setContent] = useState(INITIAL_CONTENT);

  if (!isLoggedIn) {
    return (
      <div className="h-screen flex items-center justify-center p-6 bg-ipcs-bg">
        <div className="w-full max-w-sm bg-white p-8 rounded-3xl shadow-xl border border-ipcs-ink/5">
          <h2 className="text-2xl font-serif mb-6 text-center">Admin Access</h2>
          <input 
            type="password" 
            placeholder="Enter Security Key" 
            className="w-full p-4 rounded-xl border border-ipcs-ink/10 mb-4 focus:border-ipcs-ink outline-none"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <button 
            onClick={() => { if(pass === "ipcs2026") setIsLoggedIn(true); }}
            className="w-full py-4 bg-ipcs-ink text-white rounded-xl font-bold uppercase tracking-widest text-sm shadow-lg active:scale-95"
          >
            Authenticate
          </button>
          <p className="text-center text-[10px] opacity-40 mt-6 uppercase tracking-widest">Authorized Personnel Only • Key: ipcs2026</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12 border-b border-ipcs-ink/10 pb-8">
        <div>
          <h1 className="text-4xl font-serif">Content Management</h1>
          <p className="text-ipcs-ink/40 text-sm mt-2 uppercase tracking-widest">System Dashboard • V1.0</p>
        </div>
        <button onClick={() => setIsLoggedIn(false)} className="text-xs uppercase font-bold text-red-500 tracking-widest hover:opacity-70">Logout</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-6">
          <div className="p-6 bg-white rounded-2xl border border-ipcs-ink/5 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-widest opacity-40 mb-6">Home Hero</h3>
            <div className="space-y-4">
              <input 
                className="w-full p-3 bg-ipcs-bg rounded-lg border border-ipcs-ink/5 text-sm" 
                value={content.homeHero.title} 
                onChange={(e) => setContent({...content, homeHero: {...content.homeHero, title: e.target.value}})}
              />
              <textarea 
                className="w-full p-3 bg-ipcs-bg rounded-lg border border-ipcs-ink/5 text-sm" 
                rows={3}
                value={content.homeHero.subtitle}
                onChange={(e) => setContent({...content, homeHero: {...content.homeHero, subtitle: e.target.value}})}
              />
            </div>
          </div>
          <button className="w-full py-4 bg-green-600 text-white rounded-xl font-bold uppercase tracking-widest text-sm shadow-lg hover:bg-green-700 transition-colors">
            Deploy Live Changes
          </button>
        </div>

        <div className="lg:col-span-2 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-ipcs-ink text-white rounded-[40px] shadow-inner">
              <h4 className="text-[10px] uppercase tracking-widest opacity-40 mb-2">Total Inquiries</h4>
              <span className="text-5xl font-serif">142</span>
            </div>
            <div className="p-8 bg-ipcs-accent text-white rounded-[40px] shadow-inner">
              <h4 className="text-[10px] uppercase tracking-widest opacity-40 mb-2">Page Views</h4>
              <span className="text-5xl font-serif">3.2k</span>
            </div>
          </div>
          
          <div className="bg-white rounded-[40px] border border-ipcs-ink/5 overflow-hidden shadow-sm">
            <div className="p-8 border-b border-ipcs-ink/5 flex justify-between items-center">
              <h3 className="font-serif text-xl">Recent Inquiries</h3>
              <span className="text-xs text-ipcs-accent font-bold uppercase tracking-widest cursor-pointer hover:opacity-70">View All</span>
            </div>
            <div>
              {[
                { name: "Jessica R.", email: "jess@uni.edu", brand: "Our Tribe", date: "2h ago" },
                { name: "Robert K.", email: "robert@gov.uk", brand: "Geo-Political", date: "5h ago" },
                { name: "Ami W.", email: "ami@pizazz.com", brand: "Pizazz", date: "1d ago" }
              ].map((row, idx) => (
                <div key={idx} className="p-6 border-b border-ipcs-ink/10 last:border-0 flex items-center justify-between hover:bg-ipcs-bg transition-colors">
                  <div>
                    <p className="font-bold text-sm tracking-tight">{row.name}</p>
                    <p className="text-xs opacity-40 tracking-tight">{row.email}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-ipcs-ink/5 px-2 py-1 rounded inline-block">{row.brand}</span>
                    <p className="text-[10px] opacity-20 mt-1 uppercase font-bold">{row.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Page Components (Drafts)
const Home = () => {
  return (
    <div className="pt-20">
      {/* Prestigious Gallery Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[90vh] flex flex-col justify-center bg-white overflow-hidden py-12 md:py-0">
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="text-center pt-12 md:pt-20 mb-16 md:mb-24"
          >
            <span className="text-sm md:text-lg font-bold uppercase tracking-[0.7em] text-ipcs-accent mb-8 block">IPCS Travel Group</span>
            <h1 className="text-5xl md:text-8xl font-serif text-ipcs-ink leading-[1.1] tracking-tight mb-12">
              Curating Legacies. <br />
              <span className="italic font-light opacity-60">Defining Journeys.</span>
            </h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Link to="/contact" className="inline-block px-12 py-5 bg-ipcs-ink text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-ipcs-accent transition-all shadow-2xl hover:-translate-y-1 active:scale-95">
                Request a Custom Quote
              </Link>
            </motion.div>
          </motion.div>

          {/* Floating Brand Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
            {/* Pizazz Israel */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/brand/pizazz" className="group cursor-pointer block">
                <div className="relative aspect-[3/4] rounded-full overflow-hidden border border-ipcs-ink/5 shadow-2xl transition-transform duration-500 group-hover:-translate-y-4">
                  <img src="/Kotel%20AI.png" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-pizazz-primary/10 mix-blend-multiply transition-opacity group-hover:opacity-0" />
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-xl font-serif mb-2 transition-colors group-hover:text-pizazz-primary">Pizazz Israel Tours</h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-ipcs-ink/40">bespoke Israel tours</span>
                </div>
              </Link>
            </motion.div>

            {/* Our Tribe - Elevated */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link to="/brand/ourtribe" className="group cursor-pointer block">
                <div className="relative aspect-[3/4] rounded-full overflow-hidden border border-ipcs-ink/5 shadow-2xl transition-transform duration-500 group-hover:-translate-y-4">
                  <img src="/Tree%20of%20life.jpg" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-ourtribe-primary/10 mix-blend-multiply transition-opacity group-hover:opacity-0" />
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-xl font-serif mb-2 transition-colors group-hover:text-ourtribe-primary">Our Tribe Tours</h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-ipcs-ink/40">Jewish Heritage and Identity tours</span>
                </div>
              </Link>
            </motion.div>

            {/* Geo-Political */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/brand/geopolitical" className="group cursor-pointer block">
                <div className="relative aspect-[3/4] rounded-full overflow-hidden border border-ipcs-ink/5 shadow-2xl transition-transform duration-500 group-hover:-translate-y-4">
                  <img src="/congress%20ai2.png" className="w-full h-full object-cover object-bottom" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-geo-primary/10 mix-blend-multiply transition-opacity group-hover:opacity-0" />
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-xl font-serif mb-2 transition-colors group-hover:text-geo-primary">Geopolitical Journeys</h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-ipcs-ink/40">Witness Global Events</span>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-1/4 right-12 vertical-text opacity-20 hidden lg:block tracking-[0.4em]">Est. Since 2006</div>
      </section>

      {/* Strategic Explanation Section */}
      <section className="bg-ipcs-bg section-padding border-y border-ipcs-ink/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-8 text-ipcs-ink">More Than A Single Journey.</h2>
            <p className="text-xl text-ipcs-ink/70 leading-relaxed mb-10">
              Many our of clients first discover us through a single brand—be it <span className="text-pizazz-primary font-bold italic">Pizazz Israel Tours</span> (Tours in Israel), <span className="text-ourtribe-primary font-bold italic">Our Tribe Tours</span> (Jewish heritage tours globally), or <span className="text-geo-primary font-bold italic">Geopolitical Journeys</span> (Tours focused on current affairs globally).
            </p>
            <p className="text-lg text-ipcs-ink/60 leading-relaxed">
              What they quickly realize is that each is a specialized pillar of the <span className="font-bold text-ipcs-ink">IPCS Travel Group</span>. While their focus differs, every journey is unified by the same institutional-grade planning, security, and meticulous attention to detail that defines our legacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Gateway */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Our Distinct Brands</h2>
              <p className="text-lg text-ipcs-ink/60">
                Each of our brands is independently lead and focused, yet unified by the IPCS commitment to meticulous detail and institutional excellence.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Pizazz */}
            <div className="group block">
              <Link to="/brand/pizazz" className="block">
                <div className="relative aspect-[4/5] mb-8 overflow-hidden rounded-2xl">
                  <img 
                    src="/Kotel%20AI.png" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    alt="Pizazz Israel Tours"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pizazz-primary/80 to-transparent flex flex-col justify-end p-8 text-white">
                    <span className="text-xs font-bold uppercase tracking-widest mb-2">Vibrant • Energetic</span>
                    <h3 className="text-3xl font-serif">Pizazz Israel Tours</h3>
                  </div>
                </div>
                <p className="text-ipcs-ink/70 leading-relaxed mb-6">
                  Experience the warmth and energy of Israel through immersive, expert-led cultural tours.
                </p>
              </Link>
              <Link to="/contact" className="text-xs font-bold uppercase tracking-widest text-pizazz-primary hover:text-ipcs-ink flex items-center gap-2 transition-colors">
                Inquire About Pizazz Israel <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Our Tribe */}
            <div className="group block">
              <Link to="/brand/ourtribe" className="block">
                <div className="relative aspect-[4/5] mb-8 overflow-hidden rounded-2xl">
                  <img 
                    src="/Tree%20of%20life.jpg" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    alt="Our Tribe Tours"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ourtribe-primary/80 to-transparent flex flex-col justify-end p-8 text-white">
                    <span className="text-xs font-bold uppercase tracking-widest mb-2">Heritage • Identity</span>
                    <h3 className="text-3xl font-serif">Our Tribe Tours</h3>
                  </div>
                </div>
                <p className="text-ipcs-ink/70 leading-relaxed mb-6">
                  Connect with Jewish history and culture on a global scale. Journeys of identity and depth.
                </p>
              </Link>
              <Link to="/contact" className="text-xs font-bold uppercase tracking-widest text-ourtribe-primary hover:text-ipcs-ink flex items-center gap-2 transition-colors">
                Inquire about Our Tribe <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Geo-Political */}
            <div className="group block">
              <Link to="/brand/geopolitical" className="block">
                <div className="relative aspect-[4/5] mb-8 overflow-hidden rounded-2xl">
                  <img 
                    src="/congress%20ai2.png" 
                    className="w-full h-full object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    alt="Geopolitical Journeys"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-geo-primary/80 to-transparent flex flex-col justify-end p-8 text-white">
                    <span className="text-xs font-bold uppercase tracking-widest mb-2">Expert-Led • Serious</span>
                    <h3 className="text-3xl font-serif">Geopolitical <br/> Journeys</h3>
                  </div>
                </div>
                <p className="text-ipcs-ink/70 leading-relaxed mb-6">
                  Serious analyst-led insights into the world's most complex political landscapes.
                </p>
              </Link>
              <Link to="/contact" className="text-xs font-bold uppercase tracking-widest text-geo-primary hover:text-ipcs-ink flex items-center gap-2 transition-colors">
                inquire about Geopolitical Journeys <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility / Institutional section */}
      <section className="bg-ipcs-ink text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <Shield className="w-12 h-12 mx-auto mb-8 text-ipcs-accent" />
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Institutional Trust</h2>
          <p className="text-xl font-light opacity-60 max-w-2xl mx-auto mb-8 leading-relaxed">
            We are the preferred travel partner for international organizations, academic institutions, and government bodies who require absolute precision and reliability.
          </p>
        </div>
      </section>

      {/* Meticulous Details Section */}
      <section className="bg-white section-padding border-y border-ipcs-ink/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Meticulous Detail. <br/> <span className="italic">Absolute Credibility.</span></h2>
            <p className="text-xl text-ipcs-ink/60 mb-8 leading-relaxed">
              At IPCS, we believe that the difference between a trip and a transformation lies in the details. From high-security clearances for Geo-Political briefings to the perfect boutique stay in Jerusalem, our meticulous approach ensures every moment is optimized for depth and discovery.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-serif mb-2">20+ Years</h4>
                <p className="text-xs opacity-50 uppercase tracking-widest font-bold">Of Professional Experience</p>
              </div>
              <div>
                <h4 className="text-lg font-serif mb-2">Institutional-Grade</h4>
                <p className="text-xs opacity-50 uppercase tracking-widest font-bold">Planning & Execution</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-full">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="rounded-[40px] overflow-hidden aspect-[4/5] shadow-2xl border-8 border-white relative group"
              >
                <img 
                  src="/haboeuropeai.png" 
                  alt="Our Philosophy" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute inset-0 bg-ipcs-ink/30 hidden md:flex items-center justify-center">
                  <span className="text-white text-xs font-bold uppercase tracking-[0.5em] drop-shadow-xl">Our Philosophy</span>
                </div>
              </motion.div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-ipcs-accent/10 rounded-full blur-[100px] -z-10" />
          </div>
        </div>
      </section>

      {/* Testimonials / TripAdvisor */}
      <section className="section-padding bg-ipcs-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif mb-4 italic">Proof in Perspective</h2>
            <div className="flex justify-center items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-pizazz-secondary text-pizazz-secondary" />)}
            </div>
            <p className="text-sm font-medium opacity-60">Highly Rated on TripAdvisor</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { author: "D. Gordon", text: "Our solidarity mission with Pizazz was unparalleled. The depth of expertise and the care taken with every logistical detail allowed us to focus entirely on the mission's purpose.", rating: 5 },
              { author: "J. Levin", text: "A fantastic tour of the Shomron. Pizazz organizers are truly outstanding—informative, professional, and deeply committed to providing a class-above experience.", rating: 5 }
            ].map((t, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-ipcs-ink/5">
                <p className="text-lg italic leading-relaxed mb-6 font-serif">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-ipcs-accent/20 flex items-center justify-center font-bold text-ipcs-accent">
                    {t.author[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{t.author}</h4>
                    <span className="text-xs opacity-50">Verified Tripadvisor Review</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Conversion CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto bg-ipcs-ink rounded-[60px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-ipcs-accent/20 rounded-full blur-[120px] -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-ipcs-accent/10 rounded-full blur-[120px] -ml-32 -mb-32" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Ready to Define Your <br /> <span className="italic font-light">Next Journey</span></h2>
            <p className="text-xl opacity-60 max-w-2xl mx-auto mb-12">
              Our experts are ready to curate your institutional or private journey with absolute precision.
            </p>
            <Link to="/contact" className="group inline-flex items-center gap-4 px-12 py-6 bg-white text-ipcs-ink rounded-full font-bold text-sm uppercase tracking-widest hover:bg-ipcs-accent hover:text-white transition-all shadow-2xl hover:-translate-y-1">
              Get Your Custom Quote <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Cookie Banner Component
const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96 bg-ipcs-ink text-white p-6 rounded-3xl shadow-2xl z-[60] border border-white/10"
        >
          <p className="text-sm mb-4 opacity-80 leading-relaxed">
            We use cookies to ensure you get the best experience on our website, in compliance with EU regulations.
          </p>
          <div className="flex gap-4">
            <button onClick={accept} className="flex-1 py-2 bg-white text-ipcs-ink rounded-full text-xs font-bold uppercase tracking-widest hover:bg-ipcs-accent hover:text-white transition-colors">
              Accept
            </button>
            <button onClick={() => setIsVisible(false)} className="flex-1 py-2 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Scroll to Top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/brand/:id" element={<BrandPage />} />
          <Route path="/segment/:id" element={<SegmentPage />} />
          <Route path="/brand/:brandId/segment/:id" element={<SegmentPage />} />
          <Route path="/itinerary/:id" element={<ItineraryPage />} />
          <Route path="/brand/:brandId/itinerary/:id" element={<ItineraryPage />} />
          <Route path="/itinerary/:parentId/variant/:variantId" element={<SubItineraryPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
        <CookieBanner />
      </div>
    </Router>
  );
}
