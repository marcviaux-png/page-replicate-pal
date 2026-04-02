import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Landmark, MapPin, Building, Heart, BookOpen, BadgeCheck, GraduationCap, Trophy, Compass, Palette, Monitor, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';

const Services = () => {
  const [activeStep, setActiveStep] = useState(0);

  const whatWeDoItems = [
    {
      icon: Compass,
      label: "Strategic advisory",
      headline: "Set direction before you build.",
      body: "We work with leadership teams to make sense of complexity, align stakeholders, and build a clear case for change. This is the work that happens before a solution is designed: understanding the landscape, defining the right problem, and establishing a shared direction that holds up under scrutiny.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    },
    {
      icon: Palette,
      label: "Service & experience design",
      headline: "Design services that work for people.",
      body: "We research, design, and validate services that meet real user needs and that your team can actually deliver. Our work blends evidence-based discovery with human-centred design to create experiences that are intuitive, accessible, and built around how people actually behave, not how we assume they do.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=800",
    },
    {
      icon: Monitor,
      label: "Digital & technology transformation",
      headline: "Align technology with real outcomes.",
      body: "We help organizations evaluate digital opportunities, modernize legacy systems, and make technology investments that serve a clear strategic purpose. Our role is to ensure technology supports your service and organizational goals, not the other way around.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    },
    {
      icon: Rocket,
      label: "Delivery & adoption",
      headline: "Make change stick.",
      body: "Transformation only succeeds when people understand, trust, and adopt what's been built. We support organizations through implementation, change management, and stakeholder engagement, and we stay focused on building your team's capability to sustain the work long after we're gone.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const howWeWorkSteps = [
    {
      num: "01",
      title: "Start with what's real",
      body: "We take time to understand your users, constraints, systems, and organizational context before designing anything. Assumptions get tested early. Evidence drives what comes next.",
    },
    {
      num: "02",
      title: "Let insights lead",
      body: "We surface the patterns, risks, and opportunities buried in what we find. Every strategic and design decision that follows is more confident because of this work.",
    },
    {
      num: "03",
      title: "Strategize with intent",
      body: "We align actions to your goals, governance frameworks, and organizational capacity, not just to industry best practice. Direction is only useful if it's achievable in your context.",
    },
    {
      num: "04",
      title: "Design for reality",
      body: "We build for how things actually work, technically, operationally, and humanly. Solutions that don't account for real-world constraints don't survive contact with them.",
    },
    {
      num: "05",
      title: "Leave teams stronger",
      body: "We deliver capability and continuity, not just deliverables. Every project is structured so your team finishes with more clarity, confidence, and ownership than when we started.",
    },
  ];

  const sectors = [
    { icon: Building2, title: "Enterprise & professional services", desc: "Helping organizations improve operations, automation, and client experience." },
    { icon: Landmark, title: "Federal & provincial government", desc: "Modernizing services for citizens, businesses, and public sector teams." },
    { icon: MapPin, title: "Municipal & regional government", desc: "Improving digital services, engagement, and operational efficiency." },
    { icon: Building, title: "Crown corporations", desc: "Supporting public mandates with modern platforms, data systems, and governance-aligned services." },
    { icon: Heart, title: "Non-profit & mission-driven organizations", desc: "Strengthening platforms and tools that support communities and social impact." },
    { icon: BookOpen, title: "Education & research", desc: "Modernizing learning platforms, research infrastructure, and institutional services." },
  ];

  return (
    <div className="animate-in bg-leap-light">
      {/* Hero */}
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
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-8">
              Services that work in the real world.
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              We help governments and mission-driven organizations understand real needs, navigate complexity, and deliver services that actually work, for the people using them and the teams responsible for them.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-20">
              <p className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4">What we do</p>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl">
                Whether you need strategic direction, hands-on design, technology guidance, or help managing change, we scope our work around what you actually need to move forward.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {whatWeDoItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group relative rounded-2xl border border-border bg-white hover:border-leap-orange/30 transition-all duration-500 overflow-hidden h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-leap-orange" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-leap-orange transition-colors duration-300">{item.label}</h3>
                    <p className="text-sm font-semibold text-leap-orange/80 italic mb-4">{item.headline}</p>
                    <p className="text-slate-600 leading-relaxed text-[15px]">{item.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-16">
              <Link
                to="/capabilities"
                className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-leap-orange hover:text-leap-red transition-colors group"
              >
                See our full capabilities
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How We Work */}
      <section id="how-we-work" className="py-32 bg-leap-black text-leap-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <ScrollReveal>
            <div className="max-w-3xl mb-24">
              <p className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4">How we work</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] mb-8">
                We don't start by designing. We start by understanding.
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                Every project follows the same progression, grounded in evidence, shaped by collaboration, and built so your team can sustain it long after we're gone. We bring rigour to complex problems without losing sight of what has to work in practice.
              </p>
            </div>
          </ScrollReveal>

          {/* Interactive Steps — Desktop: tabs + detail panel with image */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-0 rounded-2xl overflow-hidden border border-white/[0.08]">
            {/* Left: step selector */}
            <div className="lg:col-span-5 bg-white/[0.02]">
              {howWeWorkSteps.map((step, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`w-full text-left px-8 py-7 flex items-center gap-6 border-b border-white/[0.06] transition-all duration-300 group cursor-pointer ${
                    activeStep === i
                      ? 'bg-white/[0.06]'
                      : 'hover:bg-white/[0.03]'
                  }`}
                >
                  <span className={`text-2xl font-black transition-colors duration-300 ${
                    activeStep === i ? 'text-leap-orange' : 'text-white/20 group-hover:text-white/40'
                  }`}>
                    {step.num}
                  </span>
                  <span className={`text-lg font-bold transition-colors duration-300 ${
                    activeStep === i ? 'text-white' : 'text-white/50 group-hover:text-white/70'
                  }`}>
                    {step.title}
                  </span>
                  <ArrowRight className={`w-4 h-4 ml-auto transition-all duration-300 ${
                    activeStep === i ? 'text-leap-orange opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                  }`} />
                </button>
              ))}
            </div>

            {/* Right: detail panel with contextual image */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={howWeWorkSteps[activeStep].image}
                  alt={howWeWorkSteps[activeStep].title}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-leap-black via-leap-black/40 to-transparent" />
                <span className="absolute bottom-4 right-6 text-[5rem] font-black leading-none text-white/[0.08] select-none">
                  {howWeWorkSteps[activeStep].num}
                </span>
              </div>
              <div className="p-12 flex-1 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-white mb-6">
                  {howWeWorkSteps[activeStep].title}
                </h3>
                <p className="text-xl text-slate-300 leading-relaxed">
                  {howWeWorkSteps[activeStep].body}
                </p>
              </div>
            </div>
          </div>

          {/* Mobile: stacked cards */}
          <div className="lg:hidden space-y-4">
            {howWeWorkSteps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="relative p-8 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                  <span className="text-5xl font-black text-leap-orange/15 select-none absolute top-4 right-6">
                    {step.num}
                  </span>
                  <div className="relative">
                    <span className="text-sm font-black text-leap-orange mb-2 block">{step.num}</span>
                    <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Credentials — preserved exactly */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Sectors We Work In */}
      <section className="py-32 bg-[#F6F7F9] text-foreground overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4">Sectors we work in</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                We work in environments where the stakes are high, the constraints are real, and the margin for error is low.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 rounded-[2rem] overflow-hidden border border-slate-200">
            {sectors.map((sector, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="bg-white p-10 flex flex-col gap-4 group hover:bg-leap-orange/[0.03] transition-colors h-full">
                  <div className="w-12 h-12 rounded-full bg-leap-orange/10 flex items-center justify-center">
                    <sector.icon className="w-5 h-5 text-leap-orange" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground">{sector.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{sector.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gradient-to-br from-leap-orange to-leap-red text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-white/70 mb-4">Work with us</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-lg text-white/90 mb-10">
            Tell us about your challenge and we'll set up a conversation about how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white hover:bg-slate-100 text-leap-black px-12 py-6 text-sm font-bold uppercase tracking-widest rounded-full">
                Book a Consultation
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-leap-black px-12 py-6 text-sm font-bold uppercase tracking-widest rounded-full">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
