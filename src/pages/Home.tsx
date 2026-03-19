import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Compass, Users, Paintbrush, Accessibility, Cpu, Rocket, Landmark, Cross, Building2, Heart } from 'lucide-react';
import heroImage from '@/assets/hero-ux-design.jpg';
import teamCollaboration from '@/assets/team-collaboration.jpg';

const Home = () => {
  const approachPoints = [
    "Evidence before opinions",
    "Accessibility as a baseline, not an add-on",
    "Collaboration across disciplines",
    "Decisions informed by real user insight"
  ];

  const services = [
    {
      icon: Compass,
      title: "Strategy & Transformation",
      description: "Define a clear vision for change and translate it into actionable, evidence-based plans."
    },
    {
      icon: Users,
      title: "User Research & Discovery",
      description: "Uncover real user needs to help teams make informed decisions and de-risk initiatives."
    },
    {
      icon: Paintbrush,
      title: "UX & Service Design",
      description: "Design end-to-end services that work across channels, systems, and organizational boundaries."
    },
    {
      icon: Accessibility,
      title: "Accessibility by Design",
      description: "Embed inclusive design from the start to meet regulatory requirements and improve usability."
    },
    {
      icon: Cpu,
      title: "AI & Automation Readiness",
      description: "Identify responsible, practical opportunities for automation and AI in your workflows."
    },
    {
      icon: Rocket,
      title: "Implementation Support",
      description: "Ensure design vision is correctly translated into code alongside engineering teams."
    }
  ];

  return (
    <div className="animate-in">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-leap-black">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="UX Design Workspace" 
            className="w-full h-full object-cover hero-image"
          />
          <div className="absolute inset-0 image-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-leap-orange/10 border border-leap-orange/30 text-leap-orange text-[10px] font-black uppercase tracking-[0.3em] mb-12 rounded-full">
              Senior-Led Digital Consultancy
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-leap-white mb-8 leading-[0.95] text-balance">
              Designing services for <span className="text-leap-orange">real-world delivery.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 mb-12 leading-relaxed font-light max-w-xl">
              UX and service design for complex environments. We combine evidence, discipline, and accountability to deliver results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
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
                className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-xs font-black text-leap-brand uppercase tracking-[0.2em] mb-4 italic">The Problem</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-leap-black mb-8 leading-tight">Digital services often struggle because they are designed around systems, not people.</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                We help organizations understand real needs, align teams, and deliver services that actually work—in the real world.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { label: "Evidence-Led", iconColor: "bg-leap-brand" },
                  { label: "People-First", iconColor: "bg-leap-orange" },
                  { label: "Accountable Delivery", iconColor: "bg-leap-red" },
                  { label: "Built for Reality", iconColor: "bg-leap-black" }
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

      {/* Our Approach */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4">Our Approach</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-leap-black mb-8 leading-tight">
                Research, design, and validation — from discovery to delivery.
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                We support teams from early discovery through delivery by combining research, design, and validation.
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
                  "Good design is not about aesthetics — it's about clarity, risk reduction, and trust."
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
              End-to-end design and delivery support
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From strategy through implementation, we partner with teams to build digital services that work in the real world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              className="inline-flex items-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-widest text-leap-orange hover:text-leap-brand transition-colors group"
            >
              View all services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4">Who We Work With</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-leap-black mb-6 leading-tight">
              Partners in complex, high-impact delivery
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We partner with organizations delivering complex, high-impact services, including governments, regulated industries, and mission-driven organizations.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12 md:gap-16 lg:gap-20">
            <div className="flex items-center gap-3 text-slate-400">
              <Landmark className="w-6 h-6" />
              <span className="text-sm font-semibold uppercase tracking-widest">Federal</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400">
              <Cross className="w-6 h-6" />
              <span className="text-sm font-semibold uppercase tracking-widest">Healthtech</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400">
              <Landmark className="w-6 h-6" />
              <span className="text-sm font-semibold uppercase tracking-widest">Finserv</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400">
              <Building2 className="w-6 h-6" />
              <span className="text-sm font-semibold uppercase tracking-widest">Enterprise</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400">
              <Heart className="w-6 h-6" />
              <span className="text-sm font-semibold uppercase tracking-widest">Nonprofit</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative py-40 bg-leap-orange text-leap-white text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 grayscale mix-blend-multiply">
          <img 
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 leading-tight text-balance tracking-tight">
            Ready to improve how your service works in the real world?
          </h2>
          <Link
            to="/contact"
            className="inline-flex justify-center items-center px-14 py-6 text-sm font-bold uppercase tracking-[0.3em] rounded-full bg-leap-black text-leap-white hover:brightness-125 transition-all shadow-[0_15px_35px_rgba(0,0,0,0.25)] active:scale-95"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
