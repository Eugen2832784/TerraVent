
import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Leaf, 
  Droplets, 
  Wind, 
  BarChart3, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Phone,
  Mail,
  Menu,
  X,
  Plus
} from 'lucide-react';
import { BookingFormData, ServiceCardProps, FAQItem } from './types.ts';

// --- Helper Components ---

const NavItem: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-slate-600 hover:text-emerald-700 font-medium transition-colors duration-200"
  >
    {children}
  </a>
);

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, tag }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group">
    {tag && (
      <span className="absolute top-4 right-4 bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">
        {tag}
      </span>
    )}
    <div className="bg-emerald-50 w-14 h-14 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

const Step: React.FC<{ number: number; title: string; description: string; icon: React.ReactNode }> = ({ number, title, description, icon }) => (
  <div className="flex flex-col items-center text-center p-4">
    <div className="relative mb-6">
      <div className="w-16 h-16 bg-white border-2 border-emerald-500 rounded-full flex items-center justify-center text-emerald-600 shadow-lg z-10 relative">
        {icon}
      </div>
      <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
        {number}
      </div>
    </div>
    <h4 className="text-lg font-bold text-slate-900 mb-2">{title}</h4>
    <p className="text-slate-600 text-sm">{description}</p>
  </div>
);

const BenefitItem: React.FC<{ title: string; text: string }> = ({ title, text }) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 mt-1">
      <CheckCircle2 className="w-6 h-6 text-emerald-500" />
    </div>
    <div>
      <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
      <p className="text-slate-600">{text}</p>
    </div>
  </div>
);

// --- Sections ---

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setFormStatus('success');
  };

  const faqs: FAQItem[] = [
    {
      question: "What is PSF and how is it different from ploughing?",
      answer: "Pneumatic Soil Fracturing (PSF) uses high-pressure air bursts injected deep into the subsoil. Unlike ploughing, which turns over the top layer and can actually cause further compaction below, PSF creates a network of fissures throughout the soil profile without destroying its natural structure or ecosystem."
    },
    {
      question: "How long do the results last?",
      answer: "Because we address the root cause of deep compaction, a single treatment typically lasts 5–10 years, depending on your soil type and farm management practices."
    },
    {
      question: "Will it damage my existing crops or soil life?",
      answer: "No. PSF is non-destructive. The air injections are localized and do not disturb the surface roots or beneficial soil biology like traditional heavy tillage would."
    },
    {
      question: "When is the best season to perform PSF?",
      answer: "The best results are achieved when soil moisture is low to moderate (Late Summer to Autumn), as this allows for maximum fracturing. However, we can operate in various windows depending on your crop rotation."
    },
    {
      question: "Do I need to buy any special equipment?",
      answer: "Not at all. TerraVent is a service-based business. We bring our specialized machinery and expert operators to your farm, so you get the benefits without the high capital investment."
    },
    {
      question: "How do you know which areas of the field to treat?",
      answer: "We use advanced soil penetrometers and diagnostics to map your fields before treatment. This ensures we only apply PSF where it's actually needed, saving you time and cost."
    },
    {
      question: "Can we reschedule due to extreme weather?",
      answer: "Yes. Soil condition is critical for the effectiveness of PSF. If the ground is too saturated, we will work with you to find the next optimal window."
    },
    {
      question: "What information do you need before coming on-site?",
      answer: "Basic details like farm location, approximate field size, soil type (if known), and the specific symptoms you've noticed (e.g., standing water, stunted growth)."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
              <Leaf className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">TerraVent</span>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <NavItem href="#services">Services</NavItem>
            <NavItem href="#process">How it works</NavItem>
            <NavItem href="#benefits">Results</NavItem>
            <NavItem href="#about">About</NavItem>
            <NavItem href="#faq">FAQ</NavItem>
            <a 
              href="#booking" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              Book a consultation
            </a>
          </nav>

          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
            <NavItem href="#services" onClick={() => setIsMenuOpen(false)}>Services</NavItem>
            <NavItem href="#process" onClick={() => setIsMenuOpen(false)}>How it works</NavItem>
            <NavItem href="#benefits" onClick={() => setIsMenuOpen(false)}>Results</NavItem>
            <NavItem href="#about" onClick={() => setIsMenuOpen(false)}>About</NavItem>
            <NavItem href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</NavItem>
            <a href="#booking" onClick={() => setIsMenuOpen(false)} className="bg-emerald-600 text-white p-3 rounded-xl font-bold text-center">Book a consultation</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-emerald-50/50 rounded-bl-[200px] hidden lg:block"></div>
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Zap className="w-4 h-4" />
              <span>Sustainable Soil Restoration in Sweden</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-slate-900 mb-8">
              Compacted soil reduces drainage and yield. 
              <span className="text-emerald-700 block mt-2 italic">Give it a breath of fresh air.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Restore your soil structure without destructive repeated tillage. We bring Pneumatic Soil Fracturing (PSF) to Southern Sweden—a proven, service-based model for healthier roots and higher yields.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#booking" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg text-center transition-all shadow-lg hover:shadow-emerald-200 flex items-center justify-center gap-2">
                Book a consultation <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#process" className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold text-lg text-center hover:bg-slate-50 transition-all flex items-center justify-center">
                See how it works
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl relative">
              <img src="https://picsum.photos/seed/soil/800/600" alt="Farmer examining healthy soil" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:flex items-center gap-4 max-w-xs">
              <div className="bg-emerald-100 p-3 rounded-full text-emerald-600">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-slate-900">11.5% Average Yield Loss</p>
                <p className="text-sm text-slate-500">Recover lost profits by treating soil compaction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">The Hidden Cost of Compaction</h2>
            <p className="text-xl text-slate-600">Compacted soil is like a sponge that's been squeezed tight. It stops the essential flow of nutrients, air, and water that your crops depend on.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Droplets />, title: "Poor Infiltration", text: "Water stays on the surface, causing standing pools or rapid runoff that carries away valuable topsoil." },
              { icon: <Wind />, title: "Oxygen Starvation", text: "When soil pores close, microbial activity drops and roots literally suffocate, stunting plant growth." },
              { icon: <BarChart3 />, title: "Yield Plateau", text: "No matter how much fertilizer you add, compacted layers block root access to deep nutrients, capping your yields." }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section (PSF) */}
      <section id="process" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-1/2 translate-y-1/2 scale-150">
          <Leaf className="w-96 h-96" />
        </div>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Pneumatic Soil Fracturing (PSF): The Solution</h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                We use high-pressure air injection to physically break apart deep compacted layers. This creates a network of fissures that instantly restores drainage and allows roots to dive deep.
              </p>
              <ul className="space-y-6">
                {[
                  "Minimal surface disruption — no need to re-seed or re-till.",
                  "Long-term results — treatments last for years, not just one season.",
                  "Localized precision — we treat the problem, not the whole field if not needed.",
                  "Sustainable practice — restores soil health and reduces the need for aggressive tillage."
                ].map((point, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-200">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-12 bg-emerald-900/40 border border-emerald-800 p-6 rounded-2xl">
                <p className="italic text-emerald-200">"Proven globally, now adapted for the unique soil conditions of Sweden. TerraVent brings world-class technology to your local farm."</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/tractor1/400/500" alt="PSF Machinery" className="rounded-2xl shadow-xl mt-12" />
              <img src="https://picsum.photos/seed/tractor2/400/500" alt="Soil Analysis" className="rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold mb-4">Our Core Services</h2>
              <p className="text-xl text-slate-600">Comprehensive soil health management designed specifically for small and medium-sized farms.</p>
            </div>
            <a href="#booking" className="text-emerald-700 font-bold flex items-center gap-2 group">
              View all service details <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={<Calendar />} 
              title="Online Booking & Consultation" 
              description="Simple digital scheduling. Talk to an expert to assess your field needs before we even arrive."
            />
            <ServiceCard 
              icon={<MapPin />} 
              title="Soil Analysis & Targeted Mapping" 
              description="We use penetrometers to find exact compacted spots. You only pay for treating the areas that need it."
            />
            <ServiceCard 
              icon={<Wind />} 
              title="PSF Service Delivery" 
              description="Our experienced operators handle the pneumatic fracturing with precision and care."
            />
            <ServiceCard 
              icon={<BarChart3 />} 
              title="Monitoring & Follow-up" 
              description="Post-service soil health monitoring to track improvement and plan future maintenance cycles."
            />
            <ServiceCard 
              tag="Optional Add-on"
              icon={<ShieldCheck />} 
              title="Biochar Injection" 
              description="Directly inject biochar into fractured layers to lock in carbon and improve nutrient retention."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-emerald-50/30 border-y border-emerald-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">The Five-Step Process</h2>
          <div className="grid md:grid-cols-5 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-emerald-200 -translate-y-12"></div>
            
            <Step number={1} icon={<Calendar />} title="Book Consultation" description="Select a time online or give us a call to discuss your farm." />
            <Step number={2} icon={<MapPin />} title="Share Field Details" description="Provide location, hectares, and symptoms you've noticed." />
            <Step number={3} icon={<BarChart3 />} title="On-site Analysis" description="We measure compaction levels and map the treatment zones." />
            <Step number={4} icon={<Wind />} title="PSF Treatment" description="Our specialized equipment restores your soil structure." />
            <Step number={5} icon={<CheckCircle2 />} title="Results & Monitoring" description="Get feedback and optional long-term health monitoring." />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img src="https://picsum.photos/seed/harvest/800/800" alt="Bumper crop harvest" className="rounded-3xl shadow-2xl" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold mb-8">Why Thousands of Hectares Trust PSF</h2>
            <div className="space-y-8">
              <BenefitItem title="Dramatic Drainage Improvement" text="Eliminate standing water and reduce surface runoff within days of treatment." />
              <BenefitItem title="Healthier, Deeper Roots" text="Roots can finally reach water and nutrients in the subsoil layers previously blocked by compaction." />
              <BenefitItem title="No Equipment Investment" text="Get the latest ag-tech without the massive capital outlay or maintenance headaches." />
              <BenefitItem title="Less Fuel, Less Time" text="Reduced need for repeated deep tillage over time saves you money on every pass." />
              <BenefitItem title="Sustainability First" text="Better infiltration reduces nitrogen runoff and improves your farm's environmental footprint." />
            </div>
          </div>
        </div>
      </section>

      {/* Why TerraVent Section */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">The TerraVent Difference</h2>
              <p className="text-xl text-slate-600">We aren't just a machinery service. We are your partners in soil health.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <ShieldCheck className="text-emerald-600" />
                  First Mover in Sweden
                </h3>
                <p className="text-slate-600 leading-relaxed">We are the first to bring professional PSF services to the Swedish market, backed by years of success with this technology in the UK and Germany.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <BarChart3 className="text-emerald-600" />
                  Evidence-Driven
                </h3>
                <p className="text-slate-600 leading-relaxed">Our approach is scientific. We measure, treat, and monitor. You'll see the data behind every decision we make on your land.</p>
              </div>
            </div>

            <div className="bg-emerald-900 text-white p-12 rounded-[40px] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-20"><Wind className="w-32 h-32" /></div>
              <h3 className="text-3xl font-bold mb-6 italic">Our Mission</h3>
              <p className="text-xl text-emerald-100 leading-relaxed mb-8">
                Based in Borås, TerraVent was founded to enhance soil quality and farm profitability throughout Southern Sweden. We believe that sustainable agriculture starts with healthy soil, and our mission is to make advanced soil restoration accessible to every farm, regardless of their capital budget.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-emerald-800">
                {[
                  { label: "Safety", sub: "Priority #1" },
                  { label: "Performance", sub: "Proven Results" },
                  { label: "Environment", sub: "Positive Impact" },
                  { label: "Transparency", sub: "Fair Pricing" }
                ].map((val, i) => (
                  <div key={i}>
                    <p className="font-bold text-lg">{val.label}</p>
                    <p className="text-emerald-400 text-sm">{val.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Partners */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6">
          <p className="text-center text-slate-500 font-bold uppercase tracking-widest text-sm mb-12">Our Technology Partners & Suppliers</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale">
            {['Lister Wilder', 'Airter UK', 'SLU Sweden', 'Nycander AB', 'Jordbruksverket'].map((partner, i) => (
              <span key={i} className="text-2xl font-black text-slate-400">{partner}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Booking / Conversion Section */}
      <section id="booking" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-slate-900 rounded-[48px] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 text-white flex flex-col justify-center">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to restore your land?</h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Book a free initial consultation today. We'll discuss your soil concerns and show you how PSF can transform your fields.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Call us directly</p>
                    <p className="text-xl font-bold">+46 (0) 33 123 45 67</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email inquiries</p>
                    <p className="text-xl font-bold">contact@terravent.se</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-slate-800">
                <p className="text-slate-400 text-sm">Service Area: Southern Sweden (Västra Götaland, Skåne, Halland, Småland)</p>
              </div>
            </div>

            <div className="lg:w-1/2 bg-white p-12 lg:p-20 border-l border-slate-100">
              {formStatus === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in duration-500">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Request Received!</h3>
                  <p className="text-slate-600 mb-8">Thank you for your interest in TerraVent. One of our soil experts will contact you within 24 hours.</p>
                  <button onClick={() => setFormStatus('idle')} className="text-emerald-700 font-bold hover:underline">Send another request</button>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Request a Consultation</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                      <input type="text" required className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                      <input type="tel" required className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="+46 00 000 00 00" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input type="email" required className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="john@farm.se" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Farm Location</label>
                      <input type="text" className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="City / Region" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Approx. Hectares</label>
                      <input type="number" className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="e.g. 50" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Main Soil Concern</label>
                    <select className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all">
                      <option>Select an issue...</option>
                      <option>Standing Water / Drainage</option>
                      <option>Low Crop Yield</option>
                      <option>Severe Surface Runoff</option>
                      <option>Restricted Root Growth</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className={`w-full bg-emerald-600 text-white p-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-100 ${formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Request Free Consultation'}
                  </button>
                  <p className="text-xs text-slate-400 text-center">By submitting, you agree to our privacy policy and terms of service.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center group"
                >
                  <span className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{faq.question}</span>
                  <Plus className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${activeFaq === i ? 'rotate-45 text-emerald-600' : ''}`} />
                </button>
                {activeFaq === i && (
                  <div className="px-8 pb-8 animate-in slide-in-from-top-2 duration-300">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-20 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2 text-white mb-6">
                <Leaf className="w-8 h-8 text-emerald-500" />
                <span className="text-2xl font-bold">TerraVent</span>
              </div>
              <p className="leading-relaxed mb-6">Sustainable soil restoration service based in Borås, Sweden. Empowering farmers with next-gen technology.</p>
              <div className="flex gap-4">
                {/* Social Placeholders */}
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                    <div className="w-5 h-5 bg-slate-600 rounded-sm"></div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Navigation</h4>
              <ul className="space-y-4">
                <li><a href="#services" className="hover:text-emerald-400 transition-colors">Services</a></li>
                <li><a href="#process" className="hover:text-emerald-400 transition-colors">How it works</a></li>
                <li><a href="#benefits" className="hover:text-emerald-400 transition-colors">Results</a></li>
                <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Support</h4>
              <ul className="space-y-4">
                <li><a href="#faq" className="hover:text-emerald-400 transition-colors">FAQ</a></li>
                <li><a href="#booking" className="hover:text-emerald-400 transition-colors">Book Consultation</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <MapPin className="w-5 h-5 text-emerald-500" />
                  <span>Västgötagatan 12, 504 41 Borås, Sweden</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="w-5 h-5 text-emerald-500" />
                  <span>+46 (0) 33 123 45 67</span>
                </li>
                <li className="flex gap-3">
                  <Mail className="w-5 h-5 text-emerald-500" />
                  <span>info@terravent.se</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} TerraVent AB. All rights reserved. Registered in Borås, Sweden.</p>
          </div>
        </div>
      </footer>

      {/* Persistent CTA (Mobile only) */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
        <a href="#booking" className="bg-emerald-600 text-white w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-2xl active:scale-95 transition-all">
          <Calendar className="w-5 h-5" /> Book Consultation
        </a>
      </div>
    </div>
  );
};

export default App;
