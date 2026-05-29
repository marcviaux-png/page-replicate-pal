import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Eye, TrendingUp, Zap } from 'lucide-react';

const GeoFeatureSection = () => {
  return (
    <section className="relative py-32 bg-leap-black overflow-hidden">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--leap-orange)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--leap-orange)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow + Badge */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* Left: Content */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-leap-orange/10 border border-leap-orange/30 text-leap-orange text-[10px] font-black uppercase tracking-[0.3em] mb-8 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              New Service
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-leap-white mb-6 leading-[1.05] tracking-tight">
              Your next customer won't Google you.{' '}
              <span className="text-leap-orange">They'll ask AI.</span>
            </h2>

            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-lg">
              Generative Engine Optimization (GEO) ensures your brand is visible, trusted, and cited by AI platforms like ChatGPT, Gemini, and Perplexity — where your audience is already searching.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/geo"
                className="inline-flex justify-center items-center gap-3 px-10 py-5 text-sm font-bold uppercase tracking-widest rounded-full bg-leap-orange text-leap-white hover:brightness-110 transition-all shadow-xl group"
              >
                Explore GEO
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right: Stats + Feature Cards */}
          <div className="lg:w-1/2 space-y-6">
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: '527%', label: 'Growth in AI search traffic in 2025' },
                { value: '65%', label: 'Google searches ending with zero clicks' },
                { value: '84%', label: 'Businesses not tracking AI visibility' },
              ].map((stat, i) => (
                <div key={i} className="text-center p-4">
                  <div className="text-3xl sm:text-4xl font-bold text-leap-orange mb-2">{stat.value}</div>
                  <div className="text-xs text-slate-500 leading-relaxed uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Feature Cards */}
            <div className="space-y-4">
              {[
                {
                  icon: Eye,
                  title: 'AI Visibility',
                  description: 'Get your brand cited when AI answers questions in your industry.'
                },
                {
                  icon: TrendingUp,
                  title: 'Competitive Advantage',
                  description: 'Be the authority AI recommends — before your competitors are.'
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className={`group flex items-start gap-5 p-5 rounded-2xl border transition-all ${
                    feature.isMicro
                      ? 'border-leap-orange/20 bg-leap-orange/5 hover:border-leap-orange/40'
                      : 'border-white/5 bg-white/[0.02] hover:border-white/10'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    feature.isMicro ? 'bg-leap-orange/20' : 'bg-white/5'
                  }`}>
                    <feature.icon className={`w-5 h-5 ${feature.isMicro ? 'text-leap-orange' : 'text-slate-400'}`} />
                  </div>
                  <div>
                    <h4 className="font-bold text-leap-white mb-1">{feature.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeoFeatureSection;
