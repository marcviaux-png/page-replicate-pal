import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="animate-in">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-leap-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Corporate Architecture" 
            className="w-full h-full object-cover hero-image"
          />
          <div className="absolute inset-0 image-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-leap-orange/10 border border-leap-orange/30 text-leap-orange text-[10px] font-black uppercase tracking-[0.3em] mb-12 rounded-full">
              Senior-Led Digital Consultancy
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-leap-white mb-8 leading-[0.95] text-balance">
              Designing services for <span className="text-leap-orange">real-world delivery.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 mb-12 leading-relaxed font-light max-w-xl">
              UX and service design for complex environments. We combine evidence, discipline, and accountability to deliver results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="inline-flex justify-center items-center px-10 py-5 text-sm font-bold uppercase tracking-widest rounded-full bg-leap-orange text-leap-white hover:brightness-110 transition-all shadow-xl"
              >
                Start a conversation
              </Link>
              <Link
                to="/services"
                className="inline-flex justify-center items-center px-10 py-5 text-sm font-bold uppercase tracking-widest rounded-full border border-leap-white/20 text-leap-white hover:bg-leap-white/10 transition-all"
              >
                Our services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-32 bg-leap-light border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-leap-brand/5 rounded-3xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
                alt="Strategy Planning" 
                className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-xs font-black text-leap-brand uppercase tracking-[0.2em] mb-4 italic">The Problem</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-leap-black mb-8 leading-tight">Digital services often struggle because they are designed around systems, not people.</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                LeapUX helps organizations understand their users, align teams, and design services that work in practice, not just on paper. We prioritize clarity over marketing fluff.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { label: "Evidence-Led", iconColor: "bg-leap-brand" },
                  { label: "Accessibility", iconColor: "bg-leap-orange" },
                  { label: "Collaborative", iconColor: "bg-leap-red" },
                  { label: "Validated", iconColor: "bg-leap-black" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className={`w-1.5 h-12 ${item.iconColor} shrink-0 rounded-full`}></div>
                    <div className="flex items-center">
                      <h4 className="font-bold text-leap-black uppercase tracking-wider text-sm">{item.label}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative py-40 bg-leap-orange text-leap-white text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 grayscale mix-blend-multiply">
          <img 
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 leading-tight text-balance tracking-tight">
            Ready to improve how your service works in the real world?
          </h2>
          <Link
            to="/services"
            className="inline-flex justify-center items-center px-14 py-6 text-sm font-bold uppercase tracking-[0.3em] rounded-full bg-leap-black text-leap-white hover:brightness-125 transition-all shadow-[0_15px_35px_rgba(0,0,0,0.25)] active:scale-95"
          >
            Talk to LeapUX
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
