import { Link } from 'react-router-dom';
import { Users, Clock, Target, Languages, Award, CheckCircle, SearchCheck, Crosshair } from 'lucide-react';

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
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We combine evidence, discipline, and accountability to help organizations move from uncertainty to real-world results.
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                icon: SearchCheck,
                title: "Evidence Over Opinion",
                description: "Many consulting and design engagements rely on opinion, hierarchy, or presentation-driven decisions. LeapUX takes a different approach. We ground decisions in evidence, through research, testing, operational data, and real user feedback.",
                points: ["Reduce risk early", "Avoid costly rework", "Make confident decisions faster", "Deliver services that actually work"]
              },
              {
                icon: Users,
                title: "Senior-Led, Hands-On Delivery",
                description: "LeapUX is a senior-led team with deep expertise across delivery, UX, and architecture. The people you meet at the start stay involved through design, build, and adoption. We scale thoughtfully as needs evolve—filling capacity gaps without the overhead or handoffs of a traditional agency.",
                points: ["Senior expertise from start to finish", "Proven delivery approach reduces rework", "Weekly demos, clear ownership, transparent communication"]
              },
              {
                icon: Clock,
                title: "Discipline, Transparency, and Follow-Through",
                description: "We operate with rigor and transparency because trust is earned through execution. Time is tracked to tasks, shared regularly, and tied directly to delivered outputs. We work with agreed cadences, burn visibility, and clear change control.",
                points: ["Time tracked to tasks and deliverables", "Risks raised early, decisions documented", "Issues followed through to closure with defined owners"]
              },
              {
                icon: Target,
                title: "Built for Complex Delivery",
                description: "Our work spans discovery through implementation and long-term operation, with clear artifacts, defined acceptance criteria, and shared ownership at every stage. We align on outcomes first, define success metrics early, and revisit them throughout delivery.",
                points: ["Clear artifacts and acceptance criteria", "Shared ownership at every stage", "Services move to adoption, not stall after launch"]
              },
              {
                icon: Languages,
                title: "Bilingual and National by Design",
                description: "As a Canadian firm, LeapUX delivers fully bilingually in English and French, including stakeholder workshops, formal deliverables, and national program alignment. Our work reflects the linguistic, accessibility, and policy realities of delivering services for all Canadians.",
                points: ["Full bilingual delivery in English and French", "Stakeholder workshops and formal deliverables", "Aligned with Canadian accessibility and policy requirements"]
              },
              {
                icon: Award,
                title: "Outcomes That Last",
                description: "Above all, we care about outcomes—not just launches. We show this through thorough documentation, clear handover, operational support, and plans for post-launch evolution. We help organizations succeed after go-live, with services that are maintainable, adopted, and able to improve over time.",
                points: ["Thorough documentation and clear handover", "Operational support post-launch", "Plans for continuous improvement"]
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 lg:p-10 rounded-2xl border border-slate-200">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-leap-orange/10 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-leap-orange" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-leap-black mb-3">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed mb-6">{item.description}</p>
                    <ul className="space-y-3">
                      {item.points.map((point, j) => (
                        <li key={j} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-leap-orange shrink-0" />
                          <span className="text-slate-700 font-medium">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-32 bg-[#F6F7F9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4">Who We Work With</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-leap-black mb-6 leading-tight">
            Partners in complex, high-impact delivery
          </h3>
          <p className="text-lg text-slate-600">
            We partner with organizations delivering complex, high-impact services, including governments, regulated industries, and mission-driven organizations.
          </p>
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
