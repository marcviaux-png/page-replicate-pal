import { Link } from 'react-router-dom';
import { Search, Users, Wrench, Shield, Building2, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="animate-in">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8 space-y-24">
            
            <section>
              <h2 className="text-3xl font-bold text-leap-black mb-8 flex items-center gap-4">
                <span className="w-12 h-1 bg-leap-brand"></span>
                Built for Complexity
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  With over 15 years of industry experience and continuous operation since 2012, LeapUX delivers production work across government, enterprise, and regulated environments, where quality, security, and accountability are non-negotiable.
                </p>
                <p>
                  Our work spans discovery through implementation and long-term operation, with clear artifacts, defined acceptance criteria, and shared ownership at every stage. We align on outcomes first and define success metrics early.
                </p>
                <p>
                  Complex environments require more than ideas, they require disciplined delivery.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-leap-black mb-8 flex items-center gap-4">
                <span className="w-12 h-1 bg-leap-orange"></span>
                Why We Do This
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  We started LeapUX because too many important decisions were being made without evidence.
                </p>
                <p>
                  Organizations were investing heavily in digital platforms, services, and transformation initiatives—yet too often those initiatives were built on assumptions instead of insight.
                </p>
                <p>The result was predictable:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>systems that didn't match real needs</li>
                  <li>services that were difficult to adopt</li>
                  <li>expensive projects that failed to deliver lasting value</li>
                </ul>
                <p>LeapUX exists to close that gap.</p>
                <p>
                  We help organizations replace uncertainty with evidence, and transform complex ideas into services that work in the real world.
                </p>
              </div>
            </section>

            <section className="bg-leap-light p-12 lg:p-16 rounded-3xl border-l-8 border-leap-brand shadow-sm">
              <h2 className="text-3xl font-bold text-leap-black mb-6 italic">Discipline & Transparency</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                We operate with rigor because trust is earned through execution. Time is tracked to tasks, shared regularly, and tied directly to delivered outputs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-leap-orange font-bold uppercase tracking-widest text-xs">
                <div>• Risks raised early</div>
                <div>• Decisions documented</div>
                <div>• Issues followed to closure</div>
                <div>• Clear owners and timelines</div>
              </div>
            </section>

          </div>

          <aside className="lg:col-span-4 space-y-10">
            <div className="bg-leap-white p-10 border border-border rounded-3xl shadow-sm">
              <h3 className="text-[10px] font-black text-leap-brand uppercase tracking-[0.3em] mb-8">Capabilities</h3>
              <ul className="space-y-6">
                <li className="flex flex-col">
                  <span className="text-4xl font-bold text-leap-black">15+</span>
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Years Experience</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-4xl font-bold text-leap-black">2012</span>
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Founded</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-4xl font-bold text-leap-black">EN/FR</span>
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Fully Bilingual</span>
                </li>
              </ul>
            </div>

            <div className="bg-leap-brand text-leap-white p-10 rounded-3xl shadow-lg">
              <p className="text-xl font-bold leading-tight mb-6 italic">
                "Because delivery matters. We combine evidence, discipline, and accountability."
              </p>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">LeapUX Philosophy</div>
            </div>
          </aside>
        </div>
      </div>

      {/* How We Work */}
      <section className="py-32 bg-[#F6F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4">How We Work</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-leap-black mb-6 leading-tight">
              Evidence-driven, senior-led, built for the real world
            </h3>
          </div>
          
          <div className="space-y-6">
            {/* Evidence Over Opinion */}
            <div className="bg-white p-8 lg:p-10 rounded-2xl border border-slate-200">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-leap-orange/10 rounded-xl flex items-center justify-center shrink-0">
                  <Search className="w-6 h-6 text-leap-orange" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-leap-black mb-3">Evidence Over Opinion</h4>
                  <div className="text-slate-600 leading-relaxed space-y-4 mb-6">
                    <p>Many consulting and design engagements rely on opinion, hierarchy, or presentation-driven decisions.</p>
                    <p>LeapUX takes a different approach.</p>
                    <p>We ground decisions in evidence—through research, testing, operational data, and real user feedback.</p>
                    <p>This allows teams to:</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {["Reduce risk early", "Avoid costly rework", "Make confident decisions faster", "Deliver services that actually work"].map((point, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-leap-orange shrink-0" />
                        <span className="text-slate-700 font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-600 leading-relaxed italic">Evidence replaces debate. Progress replaces assumption.</p>
                </div>
              </div>
            </div>

            {/* Senior-Led, Owner-Led Delivery */}
            <div className="bg-white p-8 lg:p-10 rounded-2xl border border-slate-200">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-leap-orange/10 rounded-xl flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-leap-orange" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-leap-black mb-3">Senior-Led, Owner-Led Delivery</h4>
                  <div className="text-slate-600 leading-relaxed space-y-4 mb-6">
                    <p>LeapUX is a senior-led and owner-led practice.</p>
                    <p>The people you meet at the beginning remain involved throughout the engagement—from discovery to implementation and adoption.</p>
                    <p>This ensures:</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {["Clear ownership and accountability", "Continuity of knowledge across phases", "Faster decision making", "Fewer handoffs and less rework"].map((point, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-leap-orange shrink-0" />
                        <span className="text-slate-700 font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-600 leading-relaxed italic">We scale thoughtfully as projects grow, bringing in additional expertise where needed—but leadership stays hands-on.</p>
                </div>
              </div>
            </div>

            {/* Problem Solvers Who Follow Through */}
            <div className="bg-white p-8 lg:p-10 rounded-2xl border border-slate-200">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-leap-orange/10 rounded-xl flex items-center justify-center shrink-0">
                  <Wrench className="w-6 h-6 text-leap-orange" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-leap-black mb-3">Problem Solvers Who Follow Through</h4>
                  <div className="text-slate-600 leading-relaxed space-y-4 mb-6">
                    <p>Complex projects rarely succeed through process alone.</p>
                    <p>They succeed because teams stay persistent, address problems directly, and follow issues through to resolution.</p>
                    <p>LeapUX works with organizations facing difficult delivery challenges—where constraints, policy, technology, and real-world operations intersect.</p>
                    <p>We are known for:</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {["Asking difficult questions early", "Navigating complexity with discipline", "Working collaboratively across teams", "Finishing what we start"].map((point, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-leap-orange shrink-0" />
                        <span className="text-slate-700 font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-600 leading-relaxed italic">Our focus is simple: make the service work.</p>
                </div>
              </div>
            </div>

            {/* Discipline & Transparency */}
            <div className="bg-white p-8 lg:p-10 rounded-2xl border border-slate-200">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-leap-orange/10 rounded-xl flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-leap-orange" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-leap-black mb-3">Discipline & Transparency</h4>
                  <div className="text-slate-600 leading-relaxed space-y-4 mb-6">
                    <p>Trust is earned through execution.</p>
                    <p>We operate with rigor and transparency so partners always understand progress, risks, and outcomes.</p>
                    <p>Time is tracked to tasks and tied directly to deliverables. Work is shared regularly through demos and documentation.</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {["Risks raised early", "Decisions documented", "Issues followed to closure", "Clear owners and timelines"].map((point, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-leap-orange shrink-0" />
                        <span className="text-slate-700 font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-600 leading-relaxed italic">Transparency reduces surprises and keeps delivery moving forward.</p>
                </div>
              </div>
            </div>

            {/* Sector Experience */}
            <div className="bg-white p-8 lg:p-10 rounded-2xl border border-slate-200">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-leap-orange/10 rounded-xl flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6 text-leap-orange" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-leap-black mb-3">Sector Experience</h4>
                  <p className="text-slate-600 leading-relaxed mb-6">LeapUX supports organizations delivering complex services across Canada.</p>
                  <p className="text-slate-600 leading-relaxed mb-6">Our work spans multiple sectors, including:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { title: "Federal & Provincial Government", desc: "Modernizing services for citizens, businesses, and public sector teams." },
                      { title: "Municipal & Regional Government", desc: "Improving digital services, engagement, and operational efficiency." },
                      { title: "Crown Corporations", desc: "Supporting public mandates with modern platforms, data systems, and governance-aligned services." },
                      { title: "Non-Profit & Mission-Driven Organizations", desc: "Strengthening platforms and tools that support communities and social impact." },
                      { title: "Enterprise & Professional Services", desc: "Helping organizations improve operations, automation, and client experience." },
                    ].map((sector, j) => (
                      <div key={j} className="space-y-1">
                        <h5 className="font-bold text-leap-black">{sector.title}</h5>
                        <p className="text-sm text-slate-500 leading-relaxed">{sector.desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-slate-600 leading-relaxed mt-6 italic">Across sectors, our focus remains the same: deliver services that are secure, accessible, and built to last.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why LeapUX */}
      <section className="py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4">Why LeapUX</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-leap-black mb-6 leading-tight">
            Because delivery matters
          </h3>
          <p className="text-lg text-slate-600">
            We combine evidence, discipline, and accountability to help organizations move from uncertainty to real-world results.
          </p>
        </div>
      </section>

      <section className="py-32 bg-leap-light text-center border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-leap-black mb-10 leading-tight text-balance">Ready to work with a partner built for complex delivery?</h2>
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
