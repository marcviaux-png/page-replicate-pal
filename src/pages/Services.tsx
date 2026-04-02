import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Landmark, MapPin, Building, Heart, BookOpen, BadgeCheck, GraduationCap, Trophy, Compass, Lightbulb, Cpu, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';

const Services = () => {
  const whatWeDoItems = [
    {
      icon: Compass,
      label: "Strategic advisory",
      headline: "Set direction before you build.",
      body: "We work with leadership teams to make sense of complexity, align stakeholders, and build a clear case for change. This is the work that happens before a solution is designed: understanding the landscape, defining the right problem, and establishing a shared direction that holds up under scrutiny.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    },
    {
      icon: Lightbulb,
      label: "Service & experience design",
      headline: "Design services that work for people.",
      body: "We research, design, and validate services that meet real user needs and that your team can actually deliver. Our work blends evidence-based discovery with human-centred design to create experiences that are intuitive, accessible, and built around how people actually behave, not how we assume they do.",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800",
    },
    {
      icon: Cpu,
      label: "Digital & technology transformation",
      headline: "Align technology with real outcomes.",
      body: "We help organizations evaluate digital opportunities, modernize legacy systems, and make technology investments that serve a clear strategic purpose. Our role is to ensure technology supports your service and organizational goals, not the other way around.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    },
    {
      icon: Users,
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
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    },
    {
      num: "02",
      title: "Let insights lead",
      body: "We surface the patterns, risks, and opportunities buried in what we find. Every strategic and design decision that follows is more confident because of this work.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    },
    {
      num: "03",
      title: "Strategize with intent",
      body: "We align actions to your goals, governance frameworks, and organizational capacity, not just to industry best practice. Direction is only useful if it's achievable in your context.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    },
    {
      num: "04",
      title: "Design for reality",
      body: "We build for how things actually work, technically, operationally, and humanly. Solutions that don't account for real-world constraints don't survive contact with them.",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800",
    },
    {
      num: "05",
      title: "Leave teams stronger",
      body: "We deliver capability and continuity, not just deliverables. Every project is structured so your team finishes with more clarity, confidence, and ownership than when we started.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
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

      {/* What We Do — Editorial alternating layout */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-20">
              <p className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4">What we do</p>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                Whether you need strategic direction, hands-on design, technology guidance, or help managing change, we scope our work around what you actually need to move forward.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-24">
            {whatWeDoItems.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <ScrollReveal key={i} delay={0.1}>
                  <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? 'lg:[direction:rtl]' : ''}`}>
                    {/* Image */}
                    <div className={`relative ${!isEven ? 'lg:[direction:ltr]' : ''}`}>
                      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                        <img
                          src={item.image}
                          alt={item.label}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        {/* Floating number badge */}
                        <div className="absolute top-6 left-6 w-14 h-14 rounded-full bg-leap-orange flex items-center justify-center">
                          <span className="text-lg font-black text-white">{String(i + 1).padStart(2, '0')}</span>
                        </div>
                      </div>
                      {/* Decorative element */}
                      <div className={`absolute -z-10 w-32 h-32 rounded-2xl bg-leap-orange/10 ${isEven ? '-bottom-4 -right-4' : '-bottom-4 -left-4'}`} />
                    </div>

                    {/* Content */}
                    <div className={`${!isEven ? 'lg:[direction:ltr]' : ''}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-leap-orange/10 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-leap-orange" />
                        </div>
                        <p className="text-xs font-black text-leap-orange uppercase tracking-[0.2em]">{item.label}</p>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 leading-tight">
                        {item.headline}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={0.2}>
            <div className="mt-20 text-center">
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

      {/* How We Work — Immersive cards with imagery */}
      <section id="how-we-work" className="py-32 bg-leap-black text-leap-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-20">
              <p className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4">How we work</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] mb-8">
                We don't start by designing. We start by understanding.
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                Every project follows the same progression, grounded in evidence, shaped by collaboration, and built so your team can sustain it long after we're gone. We bring rigour to complex problems without losing sight of what has to work in practice.
              </p>
            </div>
          </ScrollReveal>

          {/* Featured first step — hero-style */}
          <ScrollReveal>
            <div className="relative rounded-2xl overflow-hidden mb-6 group">
              <img
                src={howWeWorkSteps[0].image}
                alt={howWeWorkSteps[0].title}
                className="w-full h-[420px] object-cover brightness-[0.35] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex items-center p-10 sm:p-16">
                <div className="max-w-xl">
                  <span className="text-6xl sm:text-8xl font-black text-leap-orange/30 leading-none block mb-4">
                    {howWeWorkSteps[0].num}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    {howWeWorkSteps[0].title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    {howWeWorkSteps[0].body}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Steps 2-3 — two-column */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {howWeWorkSteps.slice(1, 3).map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="relative rounded-2xl overflow-hidden group h-full">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-[360px] object-cover brightness-[0.3] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
                    <span className="text-5xl sm:text-7xl font-black text-leap-orange/25 leading-none block mb-3">
                      {step.num}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Steps 4-5 — two-column */}
          <div className="grid md:grid-cols-2 gap-6">
            {howWeWorkSteps.slice(3, 5).map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="relative rounded-2xl overflow-hidden group h-full">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-[360px] object-cover brightness-[0.3] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
                    <span className="text-5xl sm:text-7xl font-black text-leap-orange/25 leading-none block mb-3">
                      {step.num}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {step.body}
                    </p>
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
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Our team brings professional certifications, academic training, and real-world experience across user experience, digital strategy, development, and delivery.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-border">
            {/* Certifications */}
            <div className="relative p-10 lg:p-12 bg-muted group">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-leap-orange/10 flex items-center justify-center">
                  <BadgeCheck className="w-5 h-5 text-leap-orange" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Certifications</h3>
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
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-leap-orange shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div className="relative p-10 lg:p-12 bg-card border-x border-border group">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-leap-orange/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-leap-orange" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Education</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
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
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-leap-orange shrink-0" />
                    {edu}
                  </li>
                ))}
              </ul>
            </div>

            {/* Awards & Recognition */}
            <div className="relative p-10 lg:p-12 bg-muted group">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-leap-orange/10 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-leap-orange" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Awards & Recognition</h3>
              </div>
              <div className="space-y-6">
                <div className="pb-6 border-b border-border">
                  <p className="text-2xl font-bold text-foreground mb-1">Top Consultant</p>
                  <p className="text-sm text-muted-foreground">Ottawa, 2022</p>
                </div>
                <div className="pb-6 border-b border-border">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Featured in the <span className="font-semibold text-foreground">Ottawa Business Journal</span> for digital transformation work with St. John Ambulance.
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Ongoing contributions to UX research, design, and industry thought leadership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors We Work In */}
      <section className="py-32 bg-muted text-foreground overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4">Sectors we work in</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We work in environments where the stakes are high, the constraints are real, and the margin for error is low.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-[2rem] overflow-hidden border border-border">
            {sectors.map((sector, i) => (
              <div key={i} className="bg-card p-10 flex flex-col gap-4 group hover:bg-leap-orange/[0.03] transition-colors">
                <div className="w-12 h-12 rounded-full bg-leap-orange/10 flex items-center justify-center">
                  <sector.icon className="w-5 h-5 text-leap-orange" />
                </div>
                <h4 className="text-lg font-bold text-foreground">{sector.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{sector.desc}</p>
              </div>
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
              <Button className="bg-white hover:bg-white/90 text-foreground px-12 py-6 text-sm font-bold uppercase tracking-widest rounded-full">
                Book a Consultation
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-foreground px-12 py-6 text-sm font-bold uppercase tracking-widest rounded-full">
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
