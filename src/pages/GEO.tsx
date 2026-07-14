import { Helmet } from 'react-helmet-async';
import { ArrowRight, Search, Bot, Target, BarChart3, Shield, Zap, CheckCircle, Eye, TrendingUp, Award, Clock } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import heroGeo from '@/assets/hero-geo.jpg';
import Seo from '@/components/Seo';
import { sendFormSubmission } from '@/lib/sendFormSubmission';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const GEO = () => {
  const { toast } = useToast();
  const [geoSubmitting, setGeoSubmitting] = useState(false);
  return (
    <div>
      <Seo
        title='Generative Engine Optimization (GEO) Services Canada | LeapUX'
        description='LeapUX GEO services help Canadian organizations get cited by ChatGPT, Perplexity, and Gemini. AI visibility strategy, structured data, and content optimization for AI search.'
        path='/geo'
        ogTitle='GEO Services Canada — Get Cited by ChatGPT, Perplexity & Gemini | LeapUX'
        ogDescription='LeapUX helps Canadian businesses and government organizations appear in AI-generated answers. Structured data, AI visibility files, and content strategy for AI search.'
      />
      <Helmet>
        <script type="application/ld+json">{`{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Generative Engine Optimization (GEO)",
      "provider": { "@type": "Organization", "name": "LeapUX", "url": "https://leapux.com" },
      "description": "GEO services to make Canadian organizations visible and citable in AI search engines including ChatGPT, Perplexity, and Gemini.",
      "areaServed": "Canada",
      "url": "https://leapux.com/geo"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Generative Engine Optimization (GEO)?",
          "acceptedAnswer": { "@type": "Answer", "text": "Generative Engine Optimization (GEO) is the practice of structuring website content so AI engines like ChatGPT, Perplexity, and Gemini cite your brand when answering questions in your industry." }
        },
        {
          "@type": "Question",
          "name": "How is GEO different from SEO?",
          "acceptedAnswer": { "@type": "Answer", "text": "Traditional SEO optimizes for Google rankings and click-throughs. GEO optimizes for AI citation — ensuring your brand appears in AI-generated answers, not just search result lists." }
        },
        {
          "@type": "Question",
          "name": "Who offers GEO services in Canada?",
          "acceptedAnswer": { "@type": "Answer", "text": "LeapUX is a Canadian consultancy in Ottawa offering Generative Engine Optimization services for government, public sector, and mission-driven organizations across Canada." }
        },
        {
          "@type": "Question",
          "name": "How long does GEO take to show results?",
          "acceptedAnswer": { "@type": "Answer", "text": "Most organizations see measurable AI citation improvements within 60 to 90 days of implementing GEO content and structured data changes." }
        }
      ]
    }
  ]
}`}</script>
      </Helmet>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-leap-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroGeo}
            alt="Person searching with AI on laptop"
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(1) contrast(1.1) brightness(0.45)' }}
          />
          <div className="absolute inset-0 image-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-leap-orange/10 border border-leap-orange/30 text-leap-orange text-[10px] font-black uppercase tracking-[0.3em] mb-10 rounded-full">
                Generative Engine Optimization
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-leap-white mb-8 leading-[0.95]">
                Be the answer AI{' '}
                <span className="text-leap-orange">recommends.</span>
              </h1>

              <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl font-light">
                Traditional search is giving way to AI-powered discovery. Generative Engine Optimization (GEO) makes your brand the one that ChatGPT, Gemini, and Perplexity cite, trust, and recommend.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex justify-center items-center px-10 py-5 text-sm font-bold uppercase tracking-widest rounded-full bg-leap-orange text-leap-white hover:brightness-110 transition-all shadow-xl"
                >
                  Get a Free GEO Audit
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex justify-center items-center px-10 py-5 text-sm font-bold uppercase tracking-widest rounded-full border border-leap-white/20 text-leap-white hover:bg-leap-white/10 transition-all"
                >
                  How It Works
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Hero Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 pt-16 border-t border-white/10">
            {[
              { value: '527%', label: 'Growth in AI search traffic in 2025' },
              { value: '65%', label: 'Google searches ending with zero clicks' },
              { value: '84%', label: 'Businesses not tracking AI visibility' },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={0.1 + i * 0.15} direction="up">
                <div>
                  <div className="text-4xl sm:text-5xl font-bold text-leap-orange mb-3">{stat.value}</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-32 bg-leap-light border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4">The Shift</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-leap-black mb-6 leading-tight max-w-3xl mx-auto">
                Search has changed. Most strategies haven't.
              </h3>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Users are no longer clicking through 10 blue links. They're asking AI for a single, trusted answer. If you're not the answer, you're invisible.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ScrollReveal delay={0.1} direction="left">
              <div className="bg-background p-10 rounded-2xl border border-slate-200 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                    <Search className="w-5 h-5 text-slate-400" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-400 uppercase tracking-wider">Traditional SEO</h4>
                </div>
                <ul className="space-y-4">
                  {[
                    'User types a keyword into Google',
                    'Sees a page of ranked links',
                    'Clicks through to multiple websites',
                    'You compete for every single click',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-500">
                      <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-xs font-bold text-slate-400 mt-0.5">{i + 1}</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <p className="text-sm text-slate-400 italic">Declining relevance as AI-first search grows</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25} direction="right">
              <div className="bg-leap-black p-10 rounded-2xl border border-leap-orange/20 relative overflow-hidden h-full">
                <div className="absolute top-4 right-4 px-3 py-1 bg-leap-orange/20 text-leap-orange text-[10px] font-black uppercase tracking-widest rounded-full">
                  The Future
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-leap-orange/10 rounded-xl flex items-center justify-center">
                    <Bot className="w-5 h-5 text-leap-orange" />
                  </div>
                  <h4 className="text-lg font-bold text-leap-orange uppercase tracking-wider">GEO</h4>
                </div>
                <ul className="space-y-4">
                  {[
                    'User asks AI a question in natural language',
                    'AI synthesizes one authoritative answer',
                    'Cites 2–3 trusted sources',
                    'If you\'re not cited, you don\'t exist',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <span className="w-6 h-6 rounded-full bg-leap-orange/20 flex items-center justify-center shrink-0 text-xs font-bold text-leap-orange mt-0.5">{i + 1}</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-sm text-leap-orange font-medium">The brands AI trusts today compound authority tomorrow</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What is GEO */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-xs font-black text-leap-brand uppercase tracking-[0.2em] mb-4">What is GEO</h2>
                <h3 className="text-3xl sm:text-4xl font-bold text-leap-black mb-8 leading-tight">
                  GEO is the new SEO — built for the AI era.
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Generative Engine Optimization is the practice of making your content discoverable, citable, and authoritative to AI-powered search engines. While traditional SEO optimizes for ranking in link-based results, GEO optimizes for <strong>being the answer</strong>.
                </p>
                <div className="space-y-5">
                  {[
                    'Structured, authoritative content that AI trusts',
                    'Optimized for citation across ChatGPT, Gemini, Perplexity',
                    'Schema markup and semantic clarity AI models prefer',
                    'Ongoing monitoring of AI search presence',
                  ].map((point, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <CheckCircle className="w-6 h-6 text-leap-orange shrink-0" strokeWidth={2} />
                      <span className="text-leap-black font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Eye, title: 'Visibility', desc: 'Be seen when AI answers industry questions' },
                { icon: Shield, title: 'Authority', desc: 'Build trust signals AI engines prioritize' },
                { icon: TrendingUp, title: 'Growth', desc: 'Compound citations over time' },
                { icon: Target, title: 'Precision', desc: 'Target the queries that matter most' },
              ].map((card, i) => (
                <ScrollReveal key={i} delay={0.1 + i * 0.1} direction="up">
                  <div className="bg-[#F6F7F9] p-6 rounded-2xl border border-slate-200 hover:border-leap-orange/30 hover:shadow-lg transition-all group h-full">
                    <div className="w-10 h-10 bg-leap-orange/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-leap-orange/20 transition-colors">
                      <card.icon className="w-5 h-5 text-leap-orange" />
                    </div>
                    <h4 className="font-bold text-leap-black mb-1">{card.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{card.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-32 bg-leap-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4">How It Works</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-leap-white mb-6 leading-tight">
                Three steps to AI visibility
              </h3>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Our proven framework moves you from invisible to indispensable across every major AI platform.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                icon: BarChart3,
                title: 'Audit Your AI Presence',
                description: 'We scan ChatGPT, Perplexity, Gemini, and Google AI Overviews to measure if and how your brand appears when people ask about your industry.',
              },
              {
                step: '02',
                icon: Target,
                title: 'Identify the Gap',
                description: 'We reveal which competitors are being recommended instead of you — and why. You see exactly where the opportunity is.',
              },
              {
                step: '03',
                icon: Zap,
                title: 'Make You Citable',
                description: 'We create structured, authoritative content that AI platforms trust and cite. Schema markup, semantic depth, and strategic positioning — all calibrated for AI discovery.',
              },
            ].map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.15} direction="up">
                <div className="relative group">
                  <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-leap-orange/20 transition-all h-full">
                    <div className="text-6xl font-black text-leap-orange/10 mb-4">{step.step}</div>
                    <div className="w-12 h-12 bg-leap-orange/10 rounded-xl flex items-center justify-center mb-6">
                      <step.icon className="w-6 h-6 text-leap-orange" />
                    </div>
                    <h4 className="text-xl font-bold text-leap-white mb-3">{step.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                  {i < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-leap-orange/30" />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* Benefits */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4">Why GEO</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-leap-black mb-6 leading-tight">
                The outcomes that matter
              </h3>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Eye,
                title: 'AI Citations',
                description: 'Your brand appears when AI answers questions in your space.',
              },
              {
                icon: Award,
                title: 'Brand Authority',
                description: 'Being cited by AI signals trust to your entire market.',
              },
              {
                icon: Clock,
                title: 'Early-Mover Advantage',
                description: 'Authority in AI search compounds. Starting early means staying ahead.',
              },
              {
                icon: TrendingUp,
                title: 'Compounding Returns',
                description: 'Each citation strengthens the next. Your visibility grows exponentially.',
              },
            ].map((benefit, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <div className="group p-8 rounded-2xl border border-slate-200 hover:border-leap-orange/30 hover:shadow-lg transition-all bg-[#F6F7F9] h-full">
                  <div className="w-12 h-12 bg-leap-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-leap-orange/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-leap-orange" />
                  </div>
                  <h4 className="text-lg font-bold text-leap-black mb-2">{benefit.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* Lead Generation CTA */}
      <section id="contact" className="py-32 bg-[#F6F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4">Get Started</h2>
                <h3 className="text-3xl sm:text-4xl font-bold text-leap-black mb-6 leading-tight">
                  Get your free AI visibility audit.
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-10">
                  Find out how visible your brand is across AI platforms — and where the biggest opportunities are. No commitment, no cost. Just clarity.
                </p>
                <div className="space-y-6">
                  {[
                    'AI Visibility Score across 4 major platforms',
                    'Competitor citation comparison',
                    'Actionable recommendations to increase visibility',
                    'Delivered within 48 hours',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <CheckCircle className="w-5 h-5 text-leap-orange shrink-0" strokeWidth={2} />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} direction="right">
              <div className="bg-background p-10 rounded-2xl border border-slate-200 shadow-lg">
                <h4 className="text-xl font-bold text-leap-black mb-2">Request Your Free Audit</h4>
                <p className="text-sm text-slate-500 mb-8">Takes 30 seconds. No obligation.</p>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const name = (form.elements.namedItem('geo-name') as HTMLInputElement)?.value || '';
                    const email = (form.elements.namedItem('geo-email') as HTMLInputElement)?.value || '';
                    const website = (form.elements.namedItem('geo-website') as HTMLInputElement)?.value || '';
                    setGeoSubmitting(true);
                    try {
                      await sendFormSubmission('Free GEO Audit request', [
                        { label: 'Name', value: name },
                        { label: 'Email', value: email },
                        { label: 'Website', value: website },
                      ]);
                      toast({
                        title: 'Request received',
                        description: "Thanks! We'll deliver your audit within 48 hours.",
                      });
                      form.reset();
                    } catch (err) {
                      console.error('GEO form submission failed', err);
                      toast({
                        title: 'Something went wrong',
                        description: 'Please try again or email contact@leapux.com directly.',
                        variant: 'destructive',
                      });
                    } finally {
                      setGeoSubmitting(false);
                    }
                  }}
                  className="space-y-5"
                >
                  <div>
                    <label htmlFor="geo-name" className="block text-sm font-medium text-leap-black mb-1.5">Full Name</label>
                    <input
                      id="geo-name"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-background text-foreground focus:ring-2 focus:ring-leap-orange focus:border-transparent outline-none transition-all text-sm"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="geo-email" className="block text-sm font-medium text-leap-black mb-1.5">Work Email</label>
                    <input
                      id="geo-email"
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-background text-foreground focus:ring-2 focus:ring-leap-orange focus:border-transparent outline-none transition-all text-sm"
                      placeholder="jane@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="geo-website" className="block text-sm font-medium text-leap-black mb-1.5">Website URL</label>
                    <input
                      id="geo-website"
                      type="text"
                      inputMode="url"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-background text-foreground focus:ring-2 focus:ring-leap-orange focus:border-transparent outline-none transition-all text-sm"
                      placeholder="yourcompany.com"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={geoSubmitting}
                    className="w-full px-10 py-4 text-sm font-bold uppercase tracking-widest rounded-full bg-leap-orange text-leap-white hover:brightness-110 transition-all shadow-xl disabled:opacity-70"
                  >
                    {geoSubmitting ? 'Sending…' : 'Get My Free Audit'}
                  </button>
                  <p className="text-xs text-slate-400 text-center">No credit card required. Results within 48 hours.</p>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-40 bg-leap-orange text-leap-white text-center overflow-hidden">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight text-balance tracking-tight">
              Every month you wait, your competitors get stronger in AI search.
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              AI platforms are learning right now. The brands that get cited today build compounding authority. Don't start from zero in 6 months.
            </p>
            <a
              href="#contact"
              className="inline-flex justify-center items-center px-14 py-6 text-sm font-bold uppercase tracking-[0.3em] rounded-full bg-leap-black text-leap-white hover:brightness-125 transition-all shadow-[0_15px_35px_rgba(0,0,0,0.25)] active:scale-95"
            >
              Start Your GEO Strategy
            </a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default GEO;