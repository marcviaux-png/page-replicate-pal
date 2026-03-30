import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, ChevronDown, Users, Shield, Target, Layers, Sparkles, TrendingUp, Award, GraduationCap, BadgeCheck, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import teamCollaboration from '@/assets/team-collaboration.jpg';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const capabilitySlugMap: Record<string, string> = {
  "Discovery & Research": "discovery-research",
  "Strategy & Planning": "strategy-planning",
  "CX & UX Design": "cx-ux-design",
  "Accessibility & Inclusive Design": "accessibility-inclusive-design",
  "AI & Automation": "ai-automation",
  "Implementation & Delivery": "implementation-delivery",
  "Change & Adoption": "change-adoption",
  "Marketing & Communications": "marketing-communications",
  "Brand & Experience Identity": "brand-experience-identity",
};

const coreAreas = [
  {
    title: "Strategy & Advisory",
    headline: "Turn complexity into clarity.",
    paragraphs: [
      "We work with leadership teams to define vision, prioritize investments, and develop actionable roadmaps for growth and transformation — guided by design thinking and user-centered discovery.",
      "Our advisory services ensure organizations move forward with clear direction and measurable outcomes."
    ],
    capabilities: ["Discovery & Research", "Strategy & Planning", "Implementation & Delivery", "Change & Adoption"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Customer Experience & Service Design",
    headline: "Design experiences that customers value and teams can deliver.",
    paragraphs: [
      "We help organizations understand their customers, identify experience gaps, and design services that deliver intuitive UX across digital and physical channels.",
      "Our work blends research, strategy, and human-centered design to create experiences that drive engagement, satisfaction, and long-term loyalty."
    ],
    capabilities: ["Discovery & Research", "CX & UX Design", "Accessibility & Inclusive Design", "Implementation & Delivery", "Brand & Experience Identity"],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Digital & Technology Transformation",
    headline: "Align technology investments with real business and customer outcomes.",
    paragraphs: [
      "We support organizations in evaluating digital opportunities, selecting the right technologies, and implementing scalable solutions that improve operations and experiences.",
      "Our approach ensures technology supports strategy—not the other way around."
    ],
    capabilities: ["Discovery & Research", "Strategy & Planning", "Accessibility & Inclusive Design", "AI & Automation", "Implementation & Delivery"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Innovation & Product Strategy",
    headline: "Identify opportunities and bring new ideas to life.",
    paragraphs: [
      "We help organizations explore emerging opportunities, validate concepts, and design products or services that deliver meaningful value to customers and stakeholders."
    ],
    capabilities: ["Discovery & Research", "Strategy & Planning", "CX & UX Design", "AI & Automation"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Organizational Change & Adoption",
    headline: "Transformation only succeeds when people adopt it.",
    paragraphs: [
      "We help organizations navigate change by aligning leadership, preparing teams, and implementing structured change management approaches that drive engagement and long-term success.",
      "From transformation programs to technology implementations, we ensure initiatives are understood, embraced, and sustained."
    ],
    capabilities: ["Strategy & Planning", "Implementation & Delivery", "Change & Adoption", "Marketing & Communications"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Operations & Service Delivery",
    headline: "Improve efficiency, governance, and operational effectiveness.",
    paragraphs: [
      "We help organizations streamline processes, strengthen governance models, and optimize how services and operations are delivered. This often includes improving procurement, vendor management, and sourcing practices as part of broader operational improvements that increase efficiency, transparency, and performance."
    ],
    capabilities: ["Strategy & Planning", "Implementation & Delivery", "Change & Adoption"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
  }
];

const Services = () => {
  const howWeWork = [
    {
      title: "Client-centric engagement",
      description: "We put your context, systems, and realities first"
    },
    {
      title: "Outcome-focused solutions",
      description: "Clear goals, measurable outcomes, and decisions guided by evidence."
    },
    {
      title: "Collaborative delivery",
      description: "A true partnership from planning through execution, working with your team, not around it."
    }
  ];

  return (
    <div className="animate-in bg-leap-light">
      {/* Hero Section */}
      <section className="relative bg-leap-black text-leap-white pt-48 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2000" 
            alt="Strategic Consulting Background" 
            className="w-full h-full object-cover hero-image"
          />
          <div className="absolute inset-0 image-overlay"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-8">Services</h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              Our services are structured around the most common transformation challenges organizations face today—from improving customer experiences to navigating complex organizational change.
            </p>
          </div>
        </div>
      </section>

      {/* Story Introduction - What We Do */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-leap-black mb-6">What We Do</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                At LeapUX, we partner with organizations to solve their most strategic challenges — from business model optimization and digital transformation to operational alignment and innovation strategy.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our approach is collaborative, data-driven, and tailored to your goals. Whether you're launching a new initiative, scaling an existing team, or navigating change, our consulting services are designed to drive impact where it matters most.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <img 
                  src={teamCollaboration}
                  alt="Team collaboration and strategy session" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-leap-orange/20 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Areas of Consulting Support */}
      <section className="py-24 bg-[#F6F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <p className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4">What We Do</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-leap-black mb-6">Core Service Areas</h2>
          </div>

          <div className="space-y-8">
            {coreAreas.map((area, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100"
                >
                  <div className={`grid lg:grid-cols-12 ${isEven ? '' : 'direction-rtl'}`}>
                    {/* Image */}
                    <div className={`lg:col-span-4 relative overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="aspect-[4/3] lg:aspect-auto lg:absolute lg:inset-0">
                        <img
                          src={area.image}
                          alt={area.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-leap-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                      </div>
                      {/* Number overlay */}
                      <span className="absolute top-4 left-4 text-6xl font-black text-white/20 group-hover:text-leap-orange/40 transition-colors duration-500 select-none">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Content */}
                    <div className={`lg:col-span-8 p-8 sm:p-10 lg:p-12 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <h3 className="text-xl sm:text-2xl font-bold text-leap-black mb-2 group-hover:text-leap-orange transition-colors duration-300">
                        {area.title}
                      </h3>
                      <p className="text-leap-orange font-semibold mb-5 italic">
                        {area.headline}
                      </p>
                      <div className="space-y-3 mb-6">
                        {area.paragraphs.map((p, i) => (
                          <p key={i} className="text-slate-600 leading-relaxed">{p}</p>
                        ))}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Supporting capabilities</p>
                        <div className="flex flex-wrap gap-2">
                          {area.capabilities.map((cap, i) => {
                            const slug = capabilitySlugMap[cap];
                            return slug ? (
                              <Link
                                key={i}
                                to={`/capabilities#${slug}`}
                                className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600 bg-slate-100 rounded-full group-hover:bg-leap-orange/10 group-hover:text-leap-orange transition-colors duration-300 hover:!bg-leap-orange hover:!text-white"
                              >
                                {cap}
                              </Link>
                            ) : (
                              <span
                                key={i}
                                className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600 bg-slate-100 rounded-full group-hover:bg-leap-orange/10 group-hover:text-leap-orange transition-colors duration-300"
                              >
                                {cap}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Accreditation, Certifications & Education */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header — editorial style */}
          <div className="grid lg:grid-cols-5 gap-8 mb-20">
            <div className="lg:col-span-2">
              <p className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4">Our Credentials</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-leap-black leading-[1.1]">
                Depth of expertise, grounded in practice.
              </h2>
            </div>
            <div className="lg:col-span-3 flex items-end">
              <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
                Our team brings professional certifications, academic training, and real-world experience across user experience, digital strategy, development, and delivery.
              </p>
            </div>
          </div>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-slate-200">
            {/* Certifications */}
            <div className="relative p-10 lg:p-12 bg-slate-50 group">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-leap-orange/10 flex items-center justify-center">
                  <BadgeCheck className="w-5 h-5 text-leap-orange" />
                </div>
                <h3 className="text-lg font-bold text-leap-black">Certifications</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Akendi UX Certified",
                  "Nielsen Norman Group UX Certified",
                  "Google Certified Professionals",
                  "UX Land Certified",
                  "Hootsuite Social Media Certified",
                  "Project Management Professional (PMP)®",
                  "AWS Partner",
                  "Google AI Professional Certificate",
                ].map((cert, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-leap-orange shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div className="relative p-10 lg:p-12 bg-white border-x border-slate-200 group">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-leap-orange/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-leap-orange" />
                </div>
                <h3 className="text-lg font-bold text-leap-black">Education</h3>
              </div>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                Our team's backgrounds span design, technology, and business — a strong foundation for complex digital work.
              </p>
              <ul className="space-y-4">
                {[
                  "UX/UI Design & Digital Strategy",
                  "Applied Arts & Interactive Media",
                  "Commerce & Business Administration",
                  "Computer Engineering & Software Development",
                  "AI Certifications & Applied Experience",
                ].map((edu, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-leap-orange shrink-0" />
                    {edu}
                  </li>
                ))}
              </ul>
            </div>

            {/* Awards & Recognition */}
            <div className="relative p-10 lg:p-12 bg-slate-50 group">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-leap-orange/10 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-leap-orange" />
                </div>
                <h3 className="text-lg font-bold text-leap-black">Awards & Recognition</h3>
              </div>
              <div className="space-y-6">
                <div className="pb-6 border-b border-slate-200">
                  <p className="text-2xl font-bold text-leap-black mb-1">Top Consultant</p>
                  <p className="text-sm text-slate-500">Ottawa, 2022</p>
                </div>
                <div className="pb-6 border-b border-slate-200">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Featured in the <span className="font-semibold text-leap-black">Ottawa Business Journal</span> for digital transformation work with St. John Ambulance.
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Ongoing contributions to UX research, design, and industry thought leadership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-we-work" className="py-24 bg-leap-black text-leap-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">How We Work</h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-4">
                Every service we offer follows a proven delivery model, grounded in evidence, shaped by collaboration, and built for lasting impact.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-10">
                We start every engagement with discovery and analysis, then co-create approaches that fit your resources, timelines, and strategic priorities. Our aim is to build confidence, clarity, and capability inside your organization.
              </p>
              <div className="space-y-6">
                {howWeWork.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-leap-orange flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-slate-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="/capabilities#delivery-model" className="inline-flex items-center gap-2 text-leap-orange hover:text-white transition-colors mt-8 font-semibold group">
                <span>→</span> Explore our delivery model
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" 
                  alt="Collaborative team meeting" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-leap-orange rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Partner With */}
      <section className="py-32 bg-[#F6F7F9] text-foreground overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4">Who We Partner With</h2>
            <h3 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
              Collaborative, adaptive, grounded in shared ownership
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We work alongside the teams responsible for setting direction, delivering change, and sustaining services.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 rounded-[2rem] overflow-hidden border border-slate-200">
            {[
              { icon: Users, title: "Executive leadership", desc: "C-suite, directors, and senior decision-makers driving organizational vision" },
              { icon: Shield, title: "Policy and regulatory teams", desc: "Teams navigating compliance, governance, and legislative requirements" },
              { icon: Target, title: "Service owners and product leaders", desc: "Leaders accountable for service outcomes and product direction" },
              { icon: Layers, title: "IT and digital delivery", desc: "Technical teams building, integrating, and maintaining platforms" },
              { icon: Sparkles, title: "Communications and engagement", desc: "Teams shaping messaging, outreach, and stakeholder relationships" },
              { icon: TrendingUp, title: "Operations and frontline staff", desc: "The people closest to service delivery and day-to-day impact" }
            ].map((partner, i) => (
              <div key={i} className="bg-white p-10 flex flex-col gap-4 group hover:bg-leap-orange/[0.03] transition-colors">
                <div className="w-12 h-12 rounded-full bg-leap-orange/10 flex items-center justify-center">
                  <partner.icon className="w-5 h-5 text-leap-orange" />
                </div>
                <h4 className="text-lg font-bold text-foreground">{partner.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{partner.desc}</p>
              </div>
            ))}
          </div>

          {/* Partners & Collaborators */}
          <div className="mt-24 pt-20 border-t border-slate-200">
            <div className="text-center mb-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Partners & Collaborators</h3>
              <p className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
                Working with the right people to deliver the right outcomes. We collaborate with trusted partners across technology, talent, and innovation.
              </p>
            </div>

            <div className="space-y-12 mt-14">
              {/* Technology & Platforms */}
              <div>
                <p className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] text-center mb-6">Technology & Platforms</p>
                <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
                  {[
                    { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
                    { name: "Adobe", logo: "https://logo.clearbit.com/adobe.com" },
                    { name: "Google", logo: "https://logo.clearbit.com/google.com" },
                    { name: "Figma", logo: "https://logo.clearbit.com/figma.com" },
                    { name: "Trymata", logo: "https://logo.clearbit.com/trymata.com" },
                    { name: "Shopify", logo: "https://logo.clearbit.com/shopify.com" },
                    { name: "AWS", logo: "https://logo.clearbit.com/aws.amazon.com" },
                  ].map((p) => (
                    <div key={p.name} className="flex items-center gap-2.5 group">
                      <img src={p.logo} alt={p.name} className="w-7 h-7 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                      <span className="text-sm font-medium text-slate-500 group-hover:text-foreground transition-colors">{p.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Funding & Acceleration */}
              <div>
                <p className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] text-center mb-6">Funding & Acceleration</p>
                <div className="flex items-center justify-center">
                  <span className="text-sm font-medium text-slate-500">Arctech Accelerate</span>
                </div>
              </div>

              {/* Talent & Delivery Partners */}
              <div>
                <p className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] text-center mb-6">Talent & Delivery Partners</p>
                <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
                  {[
                    { name: "SI Systems", logo: "https://logo.clearbit.com/sisystems.com" },
                    { name: "Altis Recruitment", logo: "https://logo.clearbit.com/altisrecruitment.com" },
                    { name: "Deloitte", logo: "https://logo.clearbit.com/deloitte.com" },
                    { name: "Procom", logo: "https://logo.clearbit.com/procom.ca" },
                  ].map((p) => (
                    <div key={p.name} className="flex items-center gap-2.5 group">
                      <img src={p.logo} alt={p.name} className="w-7 h-7 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                      <span className="text-sm font-medium text-slate-500 group-hover:text-foreground transition-colors">{p.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Capabilities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" 
                  alt="Team planning session" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-leap-black mb-6">Explore Our Capabilities</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Our capabilities represent the tools, expertise, and methodologies we apply across every engagement.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Explore how we deliver value across strategy, design, technology, and transformation.
              </p>
              <Link to="/capabilities">
                <Button className="bg-leap-orange hover:bg-leap-red text-white px-10 py-6 text-sm font-bold uppercase tracking-widest rounded-full">
                  View Our Capabilities
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gradient-to-br from-leap-orange to-leap-red text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-white/90 mb-10">
            Whether you need a strategy session, a full consulting engagement, or targeted support, we're here to help you take the next step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white hover:bg-slate-100 text-leap-black px-12 py-6 text-sm font-bold uppercase tracking-widest rounded-full">
                Contact Us
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-leap-black px-12 py-6 text-sm font-bold uppercase tracking-widest rounded-full">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
