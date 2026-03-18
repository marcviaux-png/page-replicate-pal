import { Link } from 'react-router-dom';
import { Users, Clock, Target, Languages, Award, CheckCircle, SearchCheck, Crosshair } from 'lucide-react';

const About = () => {
  const howWeWork = [
    {
      icon: SearchCheck,
      title: "Evidence Over Opinion",
      description: "Many consulting and design engagements rely on opinion, hierarchy, or presentation-driven decisions. LeapUX takes a different approach. We ground decisions in evidence, through research, testing, operational data, and real user feedback.",
      points: ["Reduce risk early", "Avoid costly rework", "Make confident decisions faster", "Deliver services that actually work"],
      accent: "brand" as const,
    },
    {
      icon: Users,
      title: "Senior-Led, Hands-On Delivery",
      description: "LeapUX is a senior-led team with deep expertise across delivery, UX, and architecture. The people you meet at the start stay involved through design, build, and adoption. We scale thoughtfully as needs evolve—filling capacity gaps without the overhead or handoffs of a traditional agency.",
      points: ["Senior expertise from start to finish", "Proven delivery approach reduces rework", "Weekly demos, clear ownership, transparent communication"],
      accent: "orange" as const,
    },
    {
      icon: Clock,
      title: "Discipline & Transparency",
      description: "Trust is earned through execution. We operate with rigor and transparency so partners always understand progress, risks, and outcomes. Time is tracked to tasks and tied directly to deliverables. Work is shared regularly through demos and documentation.",
      points: ["Risks raised early", "Decisions documented", "Issues followed to closure", "Clear owners and timelines"],
      accent: "brand" as const,
    },
    {
      icon: Target,
      title: "Built for Complex Delivery",
      description: "Our work spans discovery through implementation and long-term operation, with clear artifacts, defined acceptance criteria, and shared ownership at every stage. We align on outcomes first, define success metrics early, and revisit them throughout delivery.",
      points: ["Clear artifacts and acceptance criteria", "Shared ownership at every stage", "Services move to adoption, not stall after launch"],
      accent: "orange" as const,
    },
    {
      icon: Crosshair,
      title: "Problem Solvers Who Follow Through",
      description: "Complex projects rarely succeed through process alone. They succeed because teams stay persistent, address problems directly, and follow issues through to resolution. LeapUX works with organizations facing difficult delivery challenges, where constraints, policy, technology, and real-world operations intersect.",
      points: ["Asking difficult questions early", "Navigating complexity with discipline", "Working collaboratively across teams", "Finishing what we start"],
      accent: "brand" as const,
    },
    {
      icon: Languages,
      title: "Bilingual and National by Design",
      description: "As a Canadian firm, LeapUX delivers fully bilingually in English and French, including stakeholder workshops, formal deliverables, and national program alignment. Our work reflects the linguistic, accessibility, and policy realities of delivering services for all Canadians.",
      points: ["Full bilingual delivery in English and French", "Stakeholder workshops and formal deliverables", "Aligned with Canadian accessibility and policy requirements"],
      accent: "orange" as const,
    },
    {
      icon: Award,
      title: "Outcomes That Last",
      description: "Above all, we care about outcomes—not just launches. We show this through thorough documentation, clear handover, operational support, and plans for post-launch evolution. We help organizations succeed after go-live, with services that are maintainable, adopted, and able to improve over time.",
      points: ["Thorough documentation and clear handover", "Operational support post-launch", "Plans for continuous improvement"],
      accent: "brand" as const,
    }
  ];

  return (
    <div className="animate-in">
      {/* Hero — unchanged */}
      <section className="relative bg-leap-black text-leap-white pt-48 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" 
            alt="Office Environment" 
            className="w-full h-full object-cover hero-image"
          />
          <div className="absolute inset-0 image-overlay"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-8">About Us</h1>
          <p className="text-xl text-slate-300 max-w-3xl font-light leading-relaxed">
            LeapUX is a senior-led digital consultancy helping organizations design, build, and deliver end-to-end services that work in the real world.
          </p>
        </div>
      </section>

      {/* Story — two columns with pull quote */}
      {/* Our Story — cinematic opening */}
      <section className="pt-24 lg:pt-32 pb-12 lg:pb-16 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">
            {/* Left — big headline + story */}
            <div className="lg:col-span-7 lg:pr-20">
              <h2 className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-6">Our Story</h2>
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] mb-10">
                Built for<br />
                <span className="text-leap-orange">Complexity.</span>
              </h3>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  With over 15 years of industry experience and continuous operation since 2012, LeapUX delivers production work across government, enterprise, and regulated environments, where quality, security, and accountability are non-negotiable.
                </p>
                <p>
                  Our work spans discovery through implementation and long-term operation, with clear artifacts, defined acceptance criteria, and shared ownership at every stage. We align on outcomes first and define success metrics early.
                </p>
                <p className="font-semibold text-foreground">
                  Complex environments require more than ideas, they require disciplined delivery.
                </p>
              </div>
            </div>

            {/* Right — stats as bold visual anchors */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {[
                { value: "15+", label: "Years of Industry Experience", color: "border-leap-orange" },
                { value: "2012", label: "Founded & Delivering Ever Since", color: "border-leap-brand" },
                { value: "EN/FR", label: "Fully Bilingual Delivery", color: "border-leap-orange" },
              ].map((stat, i) => (
                <div key={i} className={`border-l-4 ${stat.color} pl-8 py-4`}>
                  <div className="text-4xl lg:text-5xl font-black text-foreground">{stat.value}</div>
                  <div className="text-sm font-medium text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why We Do This — problem/solution tension layout */}
      <section className="pt-12 lg:pt-16 pb-24 lg:pb-32 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-16 text-center">Why We Do This</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-border">
            {/* The Problem — dark side */}
            <div className="bg-leap-black text-leap-white p-10 lg:p-14 flex flex-col justify-center">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-leap-orange mb-6">The Reality</div>
              <p className="text-lg leading-relaxed text-slate-300 mb-8">
                Organizations invest heavily in digital platforms, services, and transformation, yet these efforts are often built on assumptions instead of real insight.
              </p>
              <div className="space-y-4">
                {[
                  "Systems that don't match real needs",
                  "Services that are difficult to adopt",
                  "Projects that fail to deliver lasting value",
                ].map((line, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-leap-red shrink-0" />
                    <span className="text-sm font-medium">{line}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* The Answer — bright side */}
            <div className="bg-[#F6F7F9] p-10 lg:p-14 flex flex-col justify-center">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-leap-brand mb-6">Our Response</div>
              <p className="text-2xl lg:text-3xl font-black text-foreground leading-tight mb-8">
                LeapUX exists to<br />close that gap.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We care deeply about helping organizations get important services right. Our team is motivated by solving complex problems, grounding decisions in evidence, and turning ambitious ideas into services that work in the real world.
              </p>
              <div className="w-16 h-1 bg-leap-orange" />
            </div>
          </div>

          {/* Philosophy — large typographic moment */}
          <div className="mt-24 max-w-4xl mx-auto relative">
            <div className="absolute -top-8 -left-4 text-[120px] lg:text-[180px] font-black text-leap-orange/[0.07] leading-none select-none pointer-events-none">"</div>
            <div className="relative pl-8 lg:pl-12 border-l-4 border-leap-orange">
              <p className="text-xl lg:text-2xl font-bold text-foreground leading-relaxed mb-4 italic">
                Because delivery matters. We combine evidence, discipline, and accountability to help organizations move from uncertainty to real-world results.
              </p>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">LeapUX Philosophy</div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work — alternating layout with numbered steps and bold accent bars */}
      <section className="relative overflow-hidden">
        {/* Dark intro band */}
        {/* Dark intro band + cards as one continuous section */}
        <div className="bg-[#F6F7F9] pt-24 lg:pt-32 pb-20 lg:pb-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
            <h2 className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4">How We Work</h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Evidence-driven, senior-led,<br className="hidden sm:block" /> built for the real world
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine evidence, discipline, and accountability to help organizations move from uncertainty to real-world results.
            </p>
          </div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {howWeWork.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative bg-background rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300`}
                >
                  {/* Accent bar */}
                  <div className={`absolute top-0 bottom-0 left-0 w-1.5 ${item.accent === "brand" ? "bg-leap-brand" : "bg-leap-orange"}`} />

                  <div className="pl-8 pr-8 lg:pr-10 py-8 lg:py-10">
                    <div className={`flex flex-col lg:flex-row gap-6 lg:gap-10 ${isEven ? "" : "lg:flex-row-reverse"}`}>
                      {/* Number + icon */}
                      <div className="flex lg:flex-col items-center lg:items-center gap-4 lg:gap-3 shrink-0 lg:w-20">
                        <span className={`text-5xl lg:text-6xl font-black ${item.accent === "brand" ? "text-leap-brand/20" : "text-leap-orange/20"}`}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.accent === "brand" ? "bg-leap-brand/10" : "bg-leap-orange/10"}`}>
                          <item.icon className={`w-6 h-6 ${item.accent === "brand" ? "text-leap-brand" : "text-leap-orange"}`} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xl lg:text-2xl font-bold text-foreground mb-3">{item.title}</h4>
                        <p className="text-muted-foreground leading-relaxed mb-6">{item.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {item.points.map((point, j) => (
                            <div key={j} className="flex items-start gap-2.5">
                              <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${item.accent === "brand" ? "text-leap-brand" : "text-leap-orange"}`} />
                              <span className="text-sm font-medium text-foreground">{point}</span>
                            </div>
                          ))}
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

      {/* Sector Experience */}
      <section className="py-24 lg:py-32 bg-leap-black text-leap-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4">Sector Experience</h2>
            <h3 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              LeapUX supports organizations delivering complex services across Canada.
            </h3>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Our work spans multiple sectors, including:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Enterprise & Professional Services", desc: "Helping organizations improve operations, automation, and client experience." },
              { title: "Federal & Provincial Government", desc: "Modernizing services for citizens, businesses, and public sector teams." },
              { title: "Municipal & Regional Government", desc: "Improving digital services, engagement, and operational efficiency." },
              { title: "Crown Corporations", desc: "Supporting public mandates with modern platforms, data systems, and governance-aligned services." },
              { title: "Non-Profit & Mission-Driven Organizations", desc: "Strengthening platforms and tools that support communities and social impact." },
              { title: "Education & Research", desc: "Modernizing learning platforms, research infrastructure, and institutional services." },
            ].map((sector, i) => (
              <div key={i} className="group relative bg-white/10 p-8 rounded-2xl border border-white/10 hover:border-leap-orange/40 transition-colors duration-300">
                <div className="w-8 h-1 bg-leap-orange mb-5 group-hover:w-12 transition-all duration-300" />
                <h4 className="text-lg font-bold text-leap-white mb-3">{sector.title}</h4>
                <p className="text-slate-400 leading-relaxed">{sector.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-slate-400 text-center mt-12 max-w-3xl mx-auto">
            Across sectors, our focus remains the same: deliver services that are secure, accessible, and built to last.
          </p>

          {/* Select Clients */}
          <div className="mt-20">
            <h4 className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] text-center mb-10">Select Clients</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                "Beneva",
                "St. John Ambulance",
                "Tereposky & DeRose",
                "Soldiers Helping Soldiers",
                "Innovation, Science & Economic Development Canada (ISED)",
                "Public Services and Procurement Canada (PSPC)",
                "Canada Gazette",
                "International Joint Commission",
              ].map((client, i) => (
                <div key={i} className="bg-white/10 border border-white/10 rounded-xl px-5 py-4 text-center flex items-center justify-center min-h-[72px] hover:border-leap-orange/40 transition-colors duration-300">
                  <span className="text-sm font-semibold text-leap-white leading-tight">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#F6F7F9] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10 leading-tight text-balance">Ready to work with a partner built for complex delivery?</h2>
          <Link
            to="/contact"
            className="inline-flex justify-center items-center px-12 py-5 text-sm font-bold uppercase tracking-widest rounded-full bg-leap-orange text-leap-white hover:bg-leap-red transition-all shadow-xl"
          >
            Talk to LeapUX
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
