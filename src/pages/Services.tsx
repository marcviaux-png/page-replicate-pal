import { Lightbulb, TrendingUp, Target, Layers, Sparkles } from 'lucide-react';

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
          <p className="text-slate-600 text-lg leading-relaxed">{description}</p>
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
      title: "Strategy & Transformation Planning",
      tagline: "Set direction before you invest.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      description: "Define a clear vision for change and translate it into actionable, evidence-based plans. We align high-level objectives with governance, policy, and operational realities to ensure your transformation has a clear path to success from day one.",
      includes: ["Vision and future-state definition", "Stakeholder & governance analysis", "Transformation roadmaps", "Business case development", "Operating model alignment"],
      bestFor: ["Early-stage transformation", "Pre-RFP planning", "Enterprise and program modernization"]
    },
    {
      title: "User Research & Service Discovery",
      tagline: "Build clarity before committing to build.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
      description: "Uncover real user needs, behaviors, and constraints to help teams make informed decisions. We move past assumptions to surface the risks and opportunities that inform design and technical specifications, de-risking complex initiatives early.",
      includes: ["User and stakeholder research", "Service and journey mapping", "Accessibility and risk scanning", "Opportunity framing", "Evidence-based recommendations"],
      bestFor: ["Complex or stalled initiatives", "Discovery and validation phases", "High-visibility public services"]
    },
    {
      title: "UX & Service Design",
      tagline: "Design services that are ready to deliver.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      description: "Design end-to-end services that work across channels, systems, and organizational boundaries. We combine user-centered design with continuous testing and validation to produce implementation-ready artifacts that respect real-world constraints.",
      includes: ["End-to-end service design", "UX architecture and UI design", "Prototyping & concept validation", "Usability testing", "Implementation-ready design systems"],
      bestFor: ["Programs preparing for build", "Executive or Treasury Board approvals", "Multi-vendor delivery environments"]
    },
    {
      title: "Accessibility by Design",
      tagline: "Accessibility is a baseline, not a retrofit.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800",
      description: "Embed inclusive design from the start to meet regulatory requirements while improving usability for everyone. We help organizations navigate WCAG standards and build accessible practices into their core delivery teams.",
      includes: ["WCAG and standards-aligned audits", "Inclusive design patterns", "Remediation strategies", "Validation with users with disabilities", "Accessibility QA for delivery"],
      bestFor: ["Public sector environments", "Legacy platform modernization", "Compliance-driven initiatives"]
    },
    {
      title: "AI & Automation Readiness",
      tagline: "Apply AI where it adds real value.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      description: "Identify responsible, practical opportunities for automation and AI. We analyze service workflows to find where technology can improve efficiency while respecting policy, privacy, and risk constraints of regulated environments.",
      includes: ["Service and workflow analysis", "AI opportunity identification", "Ethics, risk, and governance assessment", "Concept prototyping", "Implementation recommendations"],
      bestFor: ["Organizations exploring AI/ML", "Regulated or policy-constrained sectors", "Operational efficiency initiatives"]
    },
    {
      title: "Implementation & Delivery Support",
      tagline: "Protect design intent through delivery.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800",
      description: "Ensure that design vision is correctly translated into code. We work alongside engineering teams to implement secure, scalable, and accessible solutions, providing the continuity needed between the design phase and live operation.",
      includes: ["Design system alignment", "Developer collaboration & UX QA", "Handover documentation", "Digital adoption strategies", "Post-launch continuous improvement"],
      bestFor: ["Multi-vendor programs", "In-flight delivery", "Complex platforms and ecosystems"]
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
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-8">Designed for Complex Delivery</h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              We partner with teams to move from uncertainty to confident delivery — reducing risk, improving adoption, and building digital services that work in the real world.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4">Service Areas</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-leap-black leading-tight">
            Comprehensive support across the service lifecycle
          </h3>
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

      <section className="py-32 bg-leap-white text-center border-t border-border">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-leap-black mb-8">Ready to design a service that works?</h2>
          <a
            href="mailto:hello@leapux.com"
            className="inline-flex justify-center items-center px-12 py-5 text-sm font-bold uppercase tracking-widest rounded-full bg-leap-orange text-leap-white hover:bg-leap-red transition-all shadow-xl"
          >
            Talk to LeapUX
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
