import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface CaseStudyProps {
  client: string;
  headline: string;
  intro: string;
  challenge: string;
  whatWeDid: string;
  impact: string;
  services: string[];
  heroImage?: string;
  nextProject?: { name: string; path: string };
  prevProject?: { name: string; path: string };
}

const CaseStudyLayout = ({
  client,
  headline,
  intro,
  challenge,
  whatWeDid,
  impact,
  services,
  heroImage,
  nextProject,
  prevProject,
}: CaseStudyProps) => {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative bg-leap-black text-leap-white pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm text-leap-orange hover:text-leap-orange/80 transition-colors mb-12 group">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
          <p className="text-leap-orange text-sm font-bold uppercase tracking-[0.2em] mb-6">{client}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">{headline}</h1>
        </div>
      </section>

      {/* Hero Image */}
      {heroImage && (
        <section className="relative -mt-1">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-border">
              <img
                src={heroImage}
                alt={`${client} project showcase`}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Intro */}
      <section className={`py-20 border-b border-border ${heroImage ? 'pt-16' : ''}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">{intro}</p>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-leap-orange" />
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-leap-orange">The Challenge</h2>
          </div>
          <p className="text-lg text-foreground leading-relaxed">{challenge}</p>
        </div>
      </section>

      {/* What We Did */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-leap-orange" />
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-leap-orange">What We Did</h2>
          </div>
          <p className="text-lg text-foreground leading-relaxed">{whatWeDid}</p>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-leap-orange" />
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-leap-orange">Impact</h2>
          </div>
          <p className="text-lg text-foreground leading-relaxed">{impact}</p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">Services Delivered</h3>
          <div className="flex flex-wrap gap-3">
            {services.map((service) => (
              <span key={service} className="px-4 py-2 text-sm font-medium bg-muted rounded-full text-foreground">
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2">
            {prevProject ? (
              <Link to={prevProject.path} className="py-12 pr-8 group hover:bg-muted/30 transition-colors border-r border-border">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mb-2">Previous</p>
                <p className="text-lg font-bold text-foreground group-hover:text-leap-orange transition-colors flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  {prevProject.name}
                </p>
              </Link>
            ) : <div className="border-r border-border" />}
            {nextProject ? (
              <Link to={nextProject.path} className="py-12 pl-8 text-right group hover:bg-muted/30 transition-colors">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mb-2">Next</p>
                <p className="text-lg font-bold text-foreground group-hover:text-leap-orange transition-colors flex items-center justify-end gap-2">
                  {nextProject.name}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </p>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-leap-black text-leap-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Have a project in mind?</h2>
          <p className="text-lg text-white/70 mb-10">Let's talk about how we can help your organization deliver better outcomes.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-leap-orange text-leap-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:brightness-110 transition-all"
          >
            Start a conversation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyLayout;
