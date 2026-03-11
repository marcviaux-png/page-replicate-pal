import { Link } from 'react-router-dom';
import { Lightbulb, TrendingUp, Target, Layers, Sparkles, CheckCircle, Search, Building, Shield, Users, Rocket } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  tagline: string;
  description: string;
  includes: string[];
  bestFor: string[];
  image: string;
}

const ServiceCard = ({ title, tagline, description, includes, bestFor, image }: ServiceCardProps) => (
  <div className="group bg-leap-white border border-border rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all mb-16">
    <div className="grid grid-cols-1 lg:grid-cols-12">
      <div className="lg:col-span-5 h-72 lg:h-auto relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-1000" 
        />
        <div className="absolute inset-0 bg-leap-brand/10"></div>
      </div>
      <div className="lg:col-span-7 flex flex-col">
        <div className="p-10 lg:p-14 border-b border-border flex-grow text-balance">
          <h3 className="text-2xl sm:text-3xl font-bold text-leap-black mb-3">{title}</h3>
          <p className="text-leap-brand font-black text-xs mb-8 uppercase tracking-[0.2em]">{tagline}</p>
          {description.split('\n\n').map((para, i) => (
            <p key={i} className="text-slate-600 text-lg leading-relaxed mb-3 last:mb-0">{para}</p>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 bg-slate-50/80">
          <div className="p-10 border-b sm:border-b-0 sm:border-r border-border">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">What's Included</h4>
            <ul className="space-y-3">
              {includes.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                  <div className="w-2 h-2 bg-leap-brand mt-1.5 shrink-0 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-10">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">When to use</h4>
            <ul className="space-y-3">
              {bestFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                  <div className="w-2 h-2 bg-leap-orange mt-1.5 shrink-0 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Services = () => {
  const serviceAreas = [
    {
      title: "Discovery & Research",
      tagline: "Understand the problem before designing the solution.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
      description: "We help organizations uncover the real needs, constraints, and opportunities behind complex initiatives. Through structured research and discovery, we generate the insights required to guide strategy, design, and implementation decisions with confidence.\n\nBy grounding transformation efforts in evidence, we reduce risk and ensure solutions address real user and organizational needs.",
      includes: ["User and stakeholder research", "Service and journey mapping", "Experience audits", "Opportunity and risk identification", "Evidence-based insights and recommendations"],
      bestFor: ["Early-stage transformation initiatives", "Digital service redesign", "Complex or unclear problem spaces", "Public sector or high-impact services"]
    },
    {
      title: "Strategy & Planning",
      tagline: "Turn insights into clear direction and actionable plans.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      description: "We work with leadership teams to translate research and organizational goals into strategic direction. Our approach aligns stakeholders, prioritizes initiatives, and creates practical roadmaps for transformation.\n\nThe result is a shared understanding of priorities, investments, and measurable outcomes.",
      includes: ["Strategic planning and alignment", "Transformation roadmaps", "Governance and decision frameworks", "Initiative prioritization", "Program and delivery planning"],
      bestFor: ["Organizational transformation initiatives", "Digital modernization programs", "Multi-team or multi-department projects", "Strategic planning cycles"]
    },
    {
      title: "CX & UX Design",
      tagline: "Design experiences that work for people and organizations.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      description: "We create customer and user experiences that are intuitive, accessible, and aligned with business objectives. By combining human-centered design with service thinking, we ensure solutions support both user needs and operational realities.\n\nOur design approach improves usability, engagement, and service effectiveness across digital and service channels.",
      includes: ["User experience design", "Customer journey mapping", "Service design", "Interaction and interface design", "Usability testing and validation"],
      bestFor: ["Digital service redesign", "New product or platform development", "Experience improvement initiatives", "Complex service ecosystems"]
    },
    {
      title: "Accessibility & Inclusive Design",
      tagline: "Ensure services are usable by everyone.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800",
      description: "Accessibility is not just compliance—it's about creating equitable experiences for all users. We help organizations design and deliver digital services that meet accessibility standards while improving usability for diverse audiences.\n\nOur work supports regulatory compliance while strengthening trust, reach, and service effectiveness.",
      includes: ["Accessibility audits and assessments", "WCAG compliance guidance", "Inclusive design practices", "Accessible UX design", "Accessibility remediation strategies"],
      bestFor: ["Public sector digital services", "Regulatory compliance initiatives", "Website or platform redesigns", "Accessibility remediation programs"]
    },
    {
      title: "AI & Automation",
      tagline: "Improve efficiency and insight through intelligent systems.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      description: "We help organizations identify opportunities to apply AI and automation in ways that enhance services, streamline operations, and support better decision-making.\n\nOur approach focuses on practical implementation—ensuring emerging technologies create real value rather than unnecessary complexity.",
      includes: ["AI opportunity assessments", "Process automation strategies", "Intelligent workflow design", "Operational optimization", "AI governance and responsible use guidance"],
      bestFor: ["Operational efficiency initiatives", "Digital modernization programs", "Data-driven service improvements", "Emerging technology exploration"]
    },
    {
      title: "Implementation & Delivery",
      tagline: "Turn strategy and design into working solutions.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800",
      description: "Successful transformation requires disciplined execution. We support organizations through implementation and delivery to ensure solutions are built effectively, integrated into existing systems, and capable of scaling.\n\nOur approach bridges strategy, design, and technical delivery to move initiatives from concept to impact.",
      includes: ["Agile program delivery", "Digital implementation support", "Cross-team coordination", "Solution integration", "Performance monitoring and optimization"],
      bestFor: ["Platform or service implementation", "Multi-vendor delivery environments", "Complex digital programs", "Technology transformation initiatives"]
    },
    {
      title: "Change & Adoption",
      tagline: "Help people successfully adopt new ways of working.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
      description: "Transformation succeeds when people understand, support, and adopt new systems and processes. We help organizations manage change by aligning leadership, engaging stakeholders, and enabling teams to adapt confidently.\n\nOur change management approach supports both organizational readiness and long-term sustainability.",
      includes: ["Organizational change management", "Stakeholder engagement strategies", "Training and adoption planning", "Change readiness assessments", "Transformation communications"],
      bestFor: ["Large transformation initiatives", "Technology implementations", "Organizational restructuring", "Culture or process change programs"]
    },
    {
      title: "Marketing & Communications",
      tagline: "Communicate transformation clearly and effectively.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
      description: "Clear communication is essential for building understanding, trust, and engagement. We help organizations develop communication strategies that support transformation initiatives and strengthen connections with internal and external audiences.",
      includes: ["Communications strategy", "Stakeholder messaging", "Campaign planning", "Internal engagement programs", "Content and narrative development"],
      bestFor: ["Organizational change initiatives", "Public sector service launches", "Stakeholder engagement programs", "Transformation communications"]
    },
    {
      title: "Brand & Experience Identity",
      tagline: "Align brand, service, and experience.",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800",
      description: "We help organizations develop brand and experience systems that ensure consistency across digital products, services, and communications.\n\nBy aligning brand with strategy and user experience, organizations strengthen recognition, trust, and long-term engagement.",
      includes: ["Brand strategy", "Identity systems", "Experience guidelines", "Design systems", "Cross-channel experience alignment"],
      bestFor: ["Organizational rebranding", "Digital ecosystem redesign", "Service modernization initiatives", "Experience consistency challenges"]
    }
  ];

  return (
    <div className="animate-in bg-leap-light">
      <section className="relative bg-leap-black text-leap-white pt-48 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="Consultancy Background" 
            className="w-full h-full object-cover hero-image"
          />
          <div className="absolute inset-0 image-overlay"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-8">Our Capabilities</h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              From strategy to delivery, we bring the expertise your team needs to design and build services that work in the real world.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl sm:text-4xl font-bold text-leap-black leading-tight mb-6">
            How Our Capabilities Work Together
          </h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our capabilities work together to turn insight into strategy, design into solutions, and transformation into measurable impact.
          </p>
        </div>
        <div className="space-y-12">
          {serviceAreas.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </section>

      {/* Our Delivery Model */}
      <section className="py-32 bg-[#F6F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4">Our Delivery Model</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-leap-black mb-6 leading-tight">
              A disciplined, insight-driven progression
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every engagement follows a proven approach that moves from understanding to action.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: Lightbulb,
                step: 1,
                title: "Start with what's real",
                description: "Understand users, constraints, systems, and context"
              },
              {
                icon: TrendingUp,
                step: 2,
                title: "Let insights lead",
                description: "Surface patterns, risks, and opportunities that inform decisions"
              },
              {
                icon: Target,
                step: 3,
                title: "Strategize with intent",
                description: "Align actions to goals, capacity, and governance"
              },
              {
                icon: Layers,
                step: 4,
                title: "Design for reality",
                description: "Build for how things actually work — technically, operationally, and humanly"
              },
              {
                icon: Sparkles,
                step: 5,
                title: "Leave teams stronger",
                description: "Deliver clarity, capability, and continuity beyond the engagement"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 text-center">
                <div className="w-14 h-14 bg-leap-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-6 h-6 text-leap-orange" />
                </div>
                <span className="text-xs font-black text-leap-orange uppercase tracking-widest">Step {item.step}</span>
                <h4 className="text-lg font-bold text-leap-black mt-3 mb-3">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Partner With */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4">Who We Partner With</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-leap-black mb-6 leading-tight">
                Collaborative, adaptive, grounded in shared ownership
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                We work alongside the teams responsible for setting direction, delivering change, and sustaining services.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Executive leadership",
                "Policy and regulatory teams",
                "Service owners and product leaders",
                "IT and digital delivery",
                "Communications and engagement teams",
                "Operations and frontline staff"
              ].map((partner, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-xl border border-slate-200">
                  <CheckCircle className="w-5 h-5 text-leap-orange shrink-0" />
                  <span className="text-leap-black font-medium">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why LeapUX */}
      <section className="py-32 bg-[#F6F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4">Why LeapUX</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-leap-black mb-6 leading-tight">
                Evidence, discipline, and real-world impact
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                We bring rigour and clarity to complex challenges, helping teams move from uncertainty to confident delivery.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: Search, text: "Research-driven by default — evidence before assumptions" },
                { icon: Building, text: "Strategy and execution under one roof" },
                { icon: Shield, text: "Proven delivery in complex, high-stakes environments" },
                { icon: Users, text: "Senior-led, cross-disciplinary teams" },
                { icon: Rocket, text: "Focused on adoption and long-term impact" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-xl border border-slate-200">
                  <item.icon className="w-5 h-5 text-leap-orange shrink-0" />
                  <span className="text-leap-black font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-leap-white text-center border-t border-border">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-leap-black mb-8">Ready to design a service that works?</h2>
          <Link
            to="/contact"
            className="inline-flex justify-center items-center px-12 py-5 text-sm font-bold uppercase tracking-widest rounded-full bg-leap-orange text-leap-white hover:bg-leap-red transition-all shadow-xl"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
