import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="animate-in">
      {/* ═══════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════ */}
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
            We started LeapUX because we knew there was a better way to do this work.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          OUR STORY — cinematic two-column (user loves this design)
      ═══════════════════════════════════════════════════════════ */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-20 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">
            {/* Left — headline + narrative */}
            <div className="lg:col-span-7 lg:pr-20">
              <h2 className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-6">Our Story</h2>
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] mb-10">
                Built for<br />
                <span className="text-leap-orange">Complexity.</span>
              </h3>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Early on, we worked with small businesses making critical digital decisions—often without the guidance or support they actually needed. The stakes were real. The margin for error was small.
                </p>
                <p>
                  As we grew, so did the complexity of the work. Today, we partner with government and enterprise organizations to design and deliver systems at scale.
                </p>
                <p className="font-semibold text-foreground">
                  But our perspective hasn't changed.
                </p>
                <p>
                  We still see the people behind the work—the teams responsible for delivery, the users relying on these systems, and the real-world impact when things don't go as planned.
                </p>
              </div>
            </div>

            {/* Right — stats */}
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

      {/* ═══════════════════════════════════════════════════════════
          WHY WE EXIST — emotional tension, dark immersive
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative bg-leap-black text-leap-white py-24 lg:py-32 overflow-hidden">
        {/* Decorative oversized text */}
        <div className="absolute top-8 right-0 text-[12rem] lg:text-[20rem] font-black text-white/[0.02] leading-none select-none pointer-events-none tracking-tighter">
          WHY
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-6">Why We Exist</h2>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.15] mb-12">
            Because too much of this work<br className="hidden sm:block" />
            <span className="text-leap-orange">still misses the mark.</span>
          </p>

          <p className="text-lg text-slate-400 leading-relaxed mb-10">
            We've seen what happens when projects are built on assumptions.
          </p>

          {/* Staggered pain points — indented, building tension */}
          <div className="space-y-4 mb-16 pl-4 border-l-2 border-white/10">
            {[
              "Systems that don't reflect real needs.",
              "Services that are difficult to use.",
              "Teams left managing the fallout of decisions they didn't fully control.",
            ].map((line, i) => (
              <p key={i} className="text-slate-300 text-lg lg:text-xl font-medium">
                {line}
              </p>
            ))}
          </div>

          <p className="text-lg text-slate-400 leading-relaxed mb-6">
            There's often a gap between what's promised—and what actually works.
          </p>

          {/* The resolution — big, bold */}
          <div className="mt-12 pt-12 border-t border-white/10">
            <p className="text-2xl lg:text-3xl font-black text-leap-white leading-tight">
              We exist to close that gap.
            </p>
            <div className="w-16 h-1 bg-leap-orange mt-6" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHAT WE BELIEVE — typographic triptych on light bg
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-6">What We Believe</h2>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground leading-tight max-w-3xl mx-auto">
              Start with people.<br />
              Prove it with evidence.<br />
              <span className="text-leap-orange">Deliver it properly.</span>
            </p>
          </div>

          {/* Three belief pillars — clean, airy cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 max-w-5xl mx-auto">
            {[
              {
                number: "01",
                heading: "Understand",
                body: "Good work comes from understanding real needs—not guessing.",
              },
              {
                number: "02",
                heading: "Prove",
                body: "Making decisions based on evidence—not opinion.",
              },
              {
                number: "03",
                heading: "Deliver",
                body: "Following through—not stopping at strategy.",
              },
            ].map((belief, i) => (
              <div
                key={i}
                className={`p-8 lg:p-10 ${i < 2 ? "md:border-r border-b md:border-b-0 border-border" : ""}`}
              >
                <span className="text-5xl font-black text-leap-orange/20 block mb-4">{belief.number}</span>
                <h4 className="text-xl font-bold text-foreground mb-3">{belief.heading}</h4>
                <p className="text-muted-foreground leading-relaxed">{belief.body}</p>
              </div>
            ))}
          </div>

          {/* Closing thought */}
          <div className="max-w-2xl mx-auto mt-16 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Because in complex environments, ideas aren't enough.
            </p>
            <p className="text-xl font-bold text-foreground mt-2">
              Execution is what creates impact.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          HOW WE WORK — clean horizontal rhythm
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-muted overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left — sticky-ish headline */}
            <div className="lg:sticky lg:top-32">
              <h2 className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-6">How We Work</h2>
              <h3 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-6">
                Clear, accountable,<br />
                and <span className="text-leap-orange">built to last.</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 15 years of experience, our work spans from discovery through to long-term operation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                We focus on clarity from the start.
              </p>
            </div>

            {/* Right — principles as clean list */}
            <div className="space-y-0">
              {[
                {
                  title: "Defining outcomes early",
                  desc: "We align on what success looks like before the first sprint begins.",
                },
                {
                  title: "Aligning on what success looks like",
                  desc: "Shared understanding prevents misalignment and costly rework.",
                },
                {
                  title: "Taking shared ownership throughout",
                  desc: "Your project is our project. We stay accountable from start to finish.",
                },
              ].map((item, i) => (
                <div key={i} className="group py-8 border-b border-border last:border-b-0">
                  <div className="flex items-start gap-5">
                    <span className="text-3xl font-black text-leap-orange/30 shrink-0 mt-[-4px]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Emphatic close */}
              <div className="pt-10">
                <p className="text-lg font-bold text-foreground leading-relaxed">
                  No ambiguity. No disappearing after delivery.
                </p>
                <p className="text-muted-foreground mt-1">
                  Just work that holds up in the real world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHAT MAKES US DIFFERENT — personal, intimate tone
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-background overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-6">What Makes Us Different</h2>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left — empathy-led narrative */}
            <div className="lg:col-span-3">
              <p className="text-2xl sm:text-3xl font-black text-foreground leading-tight mb-8">
                We care—about the work,<br />
                and about the people<br />
                <span className="text-leap-orange">responsible for it.</span>
              </p>
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We know what it feels like to be accountable for a high-stakes project. To navigate competing priorities. To be expected to deliver—no matter what.
                </p>
                <p>
                  That's why we approach our work differently.
                </p>
              </div>
            </div>

            {/* Right — commitments as vertical list */}
            <div className="lg:col-span-2 flex flex-col justify-center">
              <div className="space-y-6">
                {[
                  "We're honest, even when it's uncomfortable.",
                  "We recommend what's right, not what's easy to sell.",
                  "We stay involved until things are working as they should.",
                ].map((commitment, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-leap-orange shrink-0 mt-2.5" />
                    <p className="text-foreground font-medium leading-relaxed">{commitment}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-muted-foreground italic">
                  We're not here to hand off deliverables.
                </p>
                <p className="text-foreground font-bold mt-1">
                  We're here to help make things work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          COMMUNITY — warm, human, distinct visual treatment
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-muted overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-leap-orange/10 mb-6">
              <Heart className="w-7 h-7 text-leap-orange" />
            </div>
            <h2 className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-6">Community</h2>
            <h3 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4">
              Supporting people<br />beyond the work.
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our focus on people doesn't stop at our projects. We support organizations making a real difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Shelter Movers Ottawa",
                mission: "Helping women and children safely leave violence.",
              },
              {
                name: "Paint Jam Charity Events",
                mission: "Supporting children's health and community initiatives.",
              },
              {
                name: "St. John Ambulance",
                mission: "Empowering Canadians to save lives through first aid.",
              },
            ].map((org, i) => (
              <div
                key={i}
                className="relative bg-background rounded-2xl p-8 border border-border hover:border-leap-orange/40 transition-colors duration-300"
              >
                <div className="w-10 h-1 bg-leap-orange mb-6 rounded-full" />
                <h4 className="text-lg font-bold text-foreground mb-3">{org.name}</h4>
                <p className="text-muted-foreground leading-relaxed">{org.mission}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHY IT MATTERS — closing cinematic statement
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative py-28 lg:py-40 bg-background overflow-hidden">
        {/* Large decorative orange accent */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-leap-orange via-leap-orange/60 to-transparent" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-leap-orange/[0.04] blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-8">Why It Matters</h2>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-[1.15] mb-8">
            Because this work affects<br />
            <span className="text-leap-orange">real people.</span>
          </p>
          <div className="max-w-2xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Organizations invest heavily in digital transformation. But too often, those efforts don't translate into meaningful outcomes.
            </p>
            <p className="text-foreground font-semibold">We believe they should.</p>
            <p>
              By combining evidence, discipline, and accountability, we help turn complex initiatives into systems that actually work—for the people who rely on them.
            </p>
          </div>

          {/* Final two lines — typographic punch */}
          <div className="mt-12 pt-10 border-t border-border inline-block">
            <p className="text-muted-foreground text-lg">Not just in theory.</p>
            <p className="text-2xl font-black text-foreground mt-1">In practice.</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTOR EXPERIENCE — dark grid matching screenshot reference
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-leap-black text-leap-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-6">Sector Experience</h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6 max-w-4xl mx-auto">
              LeapUX supports organizations delivering complex services across Canada.
            </h3>
            <p className="text-lg text-slate-400">Our work spans multiple sectors, including:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[
              { title: "Enterprise & Professional Services", desc: "Helping organizations improve operations, automation, and client experience." },
              { title: "Federal & Provincial Government", desc: "Modernizing services for citizens, businesses, and public sector teams." },
              { title: "Municipal & Regional Government", desc: "Improving digital services, engagement, and operational efficiency." },
              { title: "Crown Corporations", desc: "Supporting public mandates with modern platforms, data systems, and governance-aligned services." },
              { title: "Non-Profit & Mission-Driven Organizations", desc: "Strengthening platforms and tools that support communities and social impact." },
              { title: "Education & Research", desc: "Modernizing learning platforms, research infrastructure, and institutional services." },
            ].map((sector, i) => (
              <div
                key={i}
                className="rounded-xl bg-white/[0.04] border border-white/[0.08] p-8 hover:border-leap-orange/30 transition-colors duration-300"
              >
                <div className="w-8 h-1 bg-leap-orange rounded-full mb-6" />
                <h4 className="text-lg font-bold text-leap-white mb-3">{sector.title}</h4>
                <p className="text-slate-400 leading-relaxed text-sm">{sector.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-400 text-lg italic max-w-3xl mx-auto">
            Across sectors, our focus remains the same: deliver services that are secure, accessible, and built to last.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SELECT CLIENTS — agency-style logo showcase
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-muted overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4">Select Clients</h2>
            <p className="text-muted-foreground text-lg">Organizations that trust LeapUX to deliver.</p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-border my-12" />

          {/* Logo grid — clean, generous spacing */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
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
              <div
                key={i}
                className="bg-background flex flex-col items-center justify-center p-8 lg:p-10 group hover:bg-leap-orange/[0.03] transition-colors duration-300"
              >
                {/* Logo placeholder */}
                <div className="w-28 h-14 rounded-lg bg-muted border border-border flex items-center justify-center mb-4 group-hover:border-leap-orange/30 transition-colors duration-300">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">Logo</span>
                </div>
                <span className="text-sm font-medium text-foreground text-center leading-snug">{client}</span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-border mt-0" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-muted text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10 leading-tight text-balance">
            Ready to work with a team that cares about getting it right?
          </h2>
          <Link
            to="/contact"
            className="group inline-flex justify-center items-center gap-3 px-12 py-5 text-sm font-bold uppercase tracking-widest rounded-full bg-leap-orange text-leap-white hover:bg-leap-red transition-all shadow-xl"
          >
            Talk to LeapUX
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
