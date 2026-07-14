import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Compass, Palette, Monitor, Rocket } from 'lucide-react';
import heroImage from '@/assets/hero-ux-design.jpg';
import teamCollaboration from '@/assets/team-collaboration.jpg';
import logoSJA from '@/assets/logo-sja.png';
import logoIJC from '@/assets/logo-ijc.png';
import logoBeneva from '@/assets/logo-beneva.png';
import logoGoC from '@/assets/logo-goc.png';
import logoSHS from '@/assets/logo-shs.png';
import GeoFeatureSection from '@/components/home/GeoFeatureSection';
import Seo from '@/components/Seo';

const Home = () => {
  const approachPoints = [
    "Start with what's real",
    "Let insights lead",
    "Strategize with intent",
    "Design for reality",
    "Leave teams stronger"
  ];

  const services = [
    {
      icon: Compass,
      title: "Strategic Advisory",
      description: "We work with leadership to make sense of complexity, align stakeholders, and build a clear case for change before solutions are designed."
    },
    {
      icon: Palette,
      title: "Service & Experience Design",
      description: "We research, design, and validate services that meet real user needs — grounded in accessibility, evidence-based discovery, and human-centred design."
    },
    {
      icon: Monitor,
      title: "Digital & Technology Transformation",
      description: "We help organizations evaluate digital opportunities, modernize systems, and align technology investments with clear strategic outcomes."
    },
    {
      icon: Rocket,
      title: "Delivery & Adoption",
      description: "We support implementation, change management, and stakeholder engagement — building your team's capability to sustain transformation."
    }
  ];

  return (
    <div className="animate-in">
      <Seo
        title='Service Design & Digital Transformation Consulting Ottawa | LeapUX'
        description='LeapUX is a senior-led consultancy delivering service design, UX, and digital transformation for governments, public agencies, and mission-driven organizations across Canada.'
        path='/'
        ogDescription='Senior-led consultancy delivering UX, service design, and complex digital delivery for governments and mission-driven organizations across Canada.'
      />
      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-screen flex items-center overflow-hidden bg-leap-black">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Senior LeapUX consultants collaborating on a government service design project in Ottawa, Canada"
            width={1920}
            height={1080}
            loading="eager"
            className="w-full h-full object-cover hero-image"
          />
          <div className="absolute inset-0 image-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 sm:pt-20 pb-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-leap-orange/10 border border-leap-orange/30 text-leap-orange text-[10px] font-black uppercase tracking-[0.3em] mb-6 sm:mb-12 rounded-full">
              Senior-Led Digital Consultancy
            </div>
            <h1 className="text-4xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-leap-white mb-6 sm:mb-8 leading-[0.95] text-balance">
              Senior-Led Service Design & <span className="text-leap-orange">Digital Transformation Consulting</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 mb-8 sm:mb-12 leading-relaxed font-light max-w-xl">
              We help organizations understand real needs and deliver services that work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex justify-center items-center px-10 py-5 text-sm font-bold uppercase tracking-widest rounded-full bg-leap-orange text-leap-white hover:brightness-110 transition-all shadow-xl"
              >
                Start a conversation
              </Link>
              <Link
                to="/services"
                className="inline-flex justify-center items-center px-10 py-5 text-sm font-bold uppercase tracking-widest rounded-full border border-leap-white/20 text-leap-white hover:bg-leap-white/10 transition-all"
              >
                Our services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-32 bg-leap-light border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-leap-brand/5 rounded-3xl -z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
                alt="Strategy Planning"
                width={1200}
                height={800}
                loading="lazy"
                className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-xs font-black text-leap-brand uppercase tracking-[0.2em] mb-4 italic">How We Think</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-leap-black mb-8 leading-tight">Build it right. Build it for the right people.</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                Great digital services balance business goals, operational realities, and real human needs. We help organizations bring these together to create services that are effective, usable, and built to perform in the real world.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { label: "Grounded in real user and organizational needs", iconColor: "bg-leap-brand" },
                  { label: "Driven by evidence, not assumptions", iconColor: "bg-leap-orange" },
                  { label: "Designed for real-world conditions", iconColor: "bg-leap-red" },
                  { label: "Focused on outcomes and measurable impact", iconColor: "bg-leap-black" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className={`w-1.5 h-12 ${item.iconColor} shrink-0 rounded-full`}></div>
                    <div className="flex items-center">
                      <h4 className="font-bold text-leap-black uppercase tracking-wider text-sm">{item.label}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4">How We Work</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-leap-black mb-8 leading-tight">
                From understanding to real-world outcomes.
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                Our delivery model moves from insight to strategy, design, and execution, grounded in evidence, shaped by collaboration, and built to deliver lasting impact.
              </p>
              <ul className="space-y-5">
                {approachPoints.map((point, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-leap-orange shrink-0" strokeWidth={2} />
                    <span className="text-leap-black font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative group">
              <img 
                src={teamCollaboration} 
                alt="Team collaboration on UX design" 
                className="rounded-3xl shadow-2xl w-full grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute bottom-6 right-6 left-6 sm:left-auto sm:max-w-xs bg-leap-white p-6 rounded-2xl shadow-xl">
                <p className="text-leap-black font-medium leading-relaxed italic">
                  "Good strategy means nothing without the ability to deliver it in the real world."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 bg-[#F6F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4">What We Do</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-leap-black mb-6 leading-tight">
              Consulting services for every stage of transformation
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From strategy and user experience to technology, operations, and change management — we help organizations deliver with clarity and confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div 
                key={i} 
                className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-leap-orange/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-leap-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-leap-orange/20 transition-colors">
                  <service.icon className="w-6 h-6 text-leap-orange" />
                </div>
                <h4 className="text-xl font-bold text-leap-black mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 px-12 py-5 text-sm font-bold uppercase tracking-widest rounded-full bg-leap-orange text-leap-white hover:bg-leap-red transition-colors group"
            >
              View services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* GEO Feature Section */}
      <GeoFeatureSection />

      {/* Who We Work With */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4">Who We Work With</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-leap-black mb-6 leading-tight">
              Helping Organizations Deliver Services That Work
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We partner with governments, regulated industries, and mission-driven organizations to build and improve critical services for the people they serve.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-20">
            <img src={logoGoC} alt="Government of Canada" loading="lazy" className="h-32 md:h-40 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
            <img src={logoSJA} alt="St. John Ambulance" loading="lazy" className="h-32 md:h-40 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
            <img src={logoIJC} alt="International Joint Commission" loading="lazy" className="h-32 md:h-40 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
            <img src={logoBeneva} alt="Beneva" loading="lazy" className="h-28 md:h-32 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
            <img src={logoSHS} alt="Soldiers Helping Soldiers" loading="lazy" className="h-28 md:h-32 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 bg-gradient-to-br from-leap-orange to-leap-red text-leap-white text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-white/70 mb-4">Work with us</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight text-balance tracking-tight">
            Ready to improve how your service works in the real world?
          </h2>
          <p className="text-lg text-white/90 mb-10">
            Tell us about your challenge and we'll set up a conversation about how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex justify-center items-center px-12 py-6 text-sm font-bold uppercase tracking-widest rounded-full bg-white text-leap-black hover:bg-slate-100 transition-all"
            >
              Book a Consultation
            </Link>
            <Link
              to="/contact"
              className="inline-flex justify-center items-center px-12 py-6 text-sm font-bold uppercase tracking-widest rounded-full border-2 border-white text-white hover:bg-white hover:text-leap-black transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;