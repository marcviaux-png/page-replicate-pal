import { Link } from 'react-router-dom';

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
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-8">Built for Trust & Complex Delivery</h1>
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
                  With over 15 years of industry experience and continuous operation since 2012, we deliver production work every year across government, enterprise, and regulated environments—where quality, security, and accountability are non‑negotiable.
                </p>
                <p>
                  Our work spans discovery through implementation and long-term operation, with clear artifacts, defined acceptance criteria, and shared ownership at every stage. We align on outcomes first and define success metrics early.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-leap-black mb-8 flex items-center gap-4">
                <span className="w-12 h-1 bg-leap-orange"></span>
                Senior-Led Delivery
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  LeapUX is a senior-led team with deep expertise across delivery, UX, and architecture. The people you meet at the start stay involved through design, build, and adoption.
                </p>
                <p>
                  Our proven delivery approach reduces rework, clarifies scope early, and keeps decisions moving. We ship consistently through weekly demos and transparent communication.
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

      <section className="py-32 bg-leap-light text-center border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-leap-black mb-10 leading-tight text-balance">Ready to work with a partner built for complex delivery?</h2>
          <Link
            to="/services"
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
