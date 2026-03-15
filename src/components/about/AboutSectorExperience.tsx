import { Building2, Landmark, Castle, Heart, Briefcase } from 'lucide-react';

const sectors = [
  {
    icon: Landmark,
    title: "Federal & Provincial Government",
    desc: "Modernizing services for citizens, businesses, and public sector teams.",
  },
  {
    icon: Building2,
    title: "Municipal & Regional Government",
    desc: "Improving digital services, engagement, and operational efficiency.",
  },
  {
    icon: Castle,
    title: "Crown Corporations",
    desc: "Supporting public mandates with modern platforms, data systems, and governance-aligned services.",
  },
  {
    icon: Heart,
    title: "Non-Profit & Mission-Driven Organizations",
    desc: "Strengthening platforms and tools that support communities and social impact.",
  },
  {
    icon: Briefcase,
    title: "Enterprise & Professional Services",
    desc: "Helping organizations improve operations, automation, and client experience.",
  },
];

const AboutSectorExperience = () => (
  <section className="py-32 bg-foreground text-primary-foreground">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-4">Sector Experience</h2>
        <h3 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
          LeapUX supports organizations delivering complex services across Canada.
        </h3>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">Our work spans multiple sectors, including:</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-[2rem] overflow-hidden border border-white/10">
        {sectors.map((sector, i) => (
          <div key={i} className="bg-foreground p-10 flex flex-col gap-4 group hover:bg-white/5 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center">
              <sector.icon className="w-5 h-5 text-primary" />
            </div>
            <h4 className="text-lg font-bold">{sector.title}</h4>
            <p className="text-sm text-slate-400 leading-relaxed">{sector.desc}</p>
          </div>
        ))}
        {/* Balance the grid */}
        <div className="bg-foreground p-10 flex items-center justify-center">
          <p className="text-sm text-slate-500 italic text-center leading-relaxed">
            Across sectors, our focus remains the same: deliver services that are secure, accessible, and built to last.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSectorExperience;
