import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Landmark, Heart, Building2, Cross } from 'lucide-react';

type Category = 'all' | 'government' | 'nonprofit' | 'business' | 'health';

interface FeaturedProject {
  client: string;
  headline: string;
  summary: string;
  services: string[];
  path: string;
  category: Category;
}

interface SecondaryProject {
  client: string;
  description: string;
  category: Category;
  externalUrl?: string;
}

const featured: FeaturedProject[] = [
  {
    client: 'Public Services and Procurement Canada',
    headline: 'Modernizing public engagement and research accessibility',
    summary: 'We helped PSPC redesign research workflows and digital tools—improving transparency, discoverability, and long-term usability for researchers, policymakers, and the public.',
    services: ['UX strategy', 'Workflow design', 'Information architecture', 'Accessibility'],
    path: '/portfolio/pspc',
    category: 'government',
  },
  {
    client: 'Innovation, Science and Economic Development Canada',
    headline: 'Improving digital identity, accessibility, and service delivery',
    summary: 'We modernized identity management, regulatory tools, and internal support workflows—strengthening usability, reducing barriers, and improving service delivery at scale.',
    services: ['UX research', 'Service design', 'Accessibility', 'Compliance support'],
    path: '/portfolio/ised',
    category: 'government',
  },
  {
    client: 'St. John Ambulance',
    headline: 'Expanding reach through digital transformation',
    summary: 'We strengthened SJA\'s digital presence, improved operations, and expanded access to training and community programs through website modernization, SEO, analytics, and workflow automation.',
    services: ['Website strategy', 'UX design', 'SEO', 'System integration'],
    path: '/portfolio/st-john-ambulance',
    category: 'nonprofit',
  },
  {
    client: 'International Joint Commission',
    headline: 'Creating a roadmap for a more usable and accessible research platform',
    summary: 'Through stakeholder engagement, user research, and content analysis, we developed a clear roadmap to improve discoverability of environmental and regulatory content.',
    services: ['UX research', 'Usability testing', 'Content audit', 'Accessibility strategy'],
    path: '/portfolio/ijc',
    category: 'government',
  },
  {
    client: 'Soldiers Helping Soldiers',
    headline: 'Designing a purpose-driven platform for veterans',
    summary: 'We created a bilingual, accessible digital platform that helps veterans, volunteers, donors, and community members connect with vital support services across Canada.',
    services: ['Website design', 'Bilingual UX', 'Accessibility', 'Content strategy'],
    path: '/portfolio/soldiers-helping-soldiers',
    category: 'nonprofit',
  },
  {
    client: 'Beneva',
    headline: 'Unifying brand and experience after a major merger',
    summary: 'Following the merger of La Capitale and SSQ Insurance, we helped Beneva align its brand and user experience across apps, websites, service portals, and internal communications.',
    services: ['Design systems', 'Brand integration', 'Enterprise UX', 'Governance'],
    path: '/portfolio/beneva',
    category: 'business',
  },
];

const secondary: SecondaryProject[] = [
  { client: 'Transport Canada', description: 'Transportation policy and program work, including drone registration and pilot certification systems.', category: 'government' },
  { client: 'Financial Consumer Agency of Canada', description: 'Federal consumer protection and financial regulation digital services.', category: 'government' },
  { client: 'Employment and Social Development Canada', description: 'Federal social programs and labour market initiatives.', category: 'government' },
  { client: 'Office of the Superintendent of Bankruptcy', description: 'Federal regulatory and supervisory body within ISED.', category: 'government' },
  { client: 'Canada Gazette', description: 'Official newspaper of the Government of Canada for regulations, board decisions, and public notices.', category: 'government' },
  { client: 'Tereposky & DeRose', description: 'Law firm specializing in domestic and international trade law with federal government counsel experience.', category: 'business' },
  { client: 'Omniscient Wellness', description: 'Healthcare and wellness organization offering a broad range of services and professional training.', category: 'health' },
  { client: 'Arctech Accelerate', description: 'Grant writing, business development, and lobbying organization.', category: 'business' },
  { client: 'Auto Agents', description: 'Online car dealership with personalized car-buying support.', category: 'business' },
  { client: 'NorthLend Financial', description: 'Secured mortgage agreement management for partners.', category: 'business' },
  { client: 'Drive Thru Finance', description: 'Vehicle financing support for Canadians with varied financial situations.', category: 'business' },
  { client: 'Selmar Group', description: 'Ottawa real estate firm focused on military, RCMP, and government relocation.', category: 'business' },
  { client: 'Rob\'s Quality Roofing', description: 'Residential roofing services.', category: 'business' },
  { client: 'Tourangeau Mechanical', description: 'Commercial plumbing services in Ottawa.', category: 'business' },
  { client: 'Co-Auto', description: 'Used car dealership and car loan financing in Ottawa.', category: 'business' },
  { client: 'Franco Langues', description: 'French tutoring and federal public service language training.', category: 'business' },
  { client: 'Wind Concerns Ontario', description: 'Information resource on industrial-scale wind power impacts.', category: 'nonprofit' },
];

const filters: { label: string; value: Category; icon: React.ElementType }[] = [
  { label: 'All Work', value: 'all', icon: Building2 },
  { label: 'Government', value: 'government', icon: Landmark },
  { label: 'Nonprofit', value: 'nonprofit', icon: Heart },
  { label: 'Business', value: 'business', icon: Building2 },
  { label: 'Health & Wellness', value: 'health', icon: Cross },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<Category>('all');

  const filteredFeatured = activeFilter === 'all' ? featured : featured.filter(p => p.category === activeFilter);
  const filteredSecondary = activeFilter === 'all' ? secondary : secondary.filter(p => p.category === activeFilter);

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative bg-leap-black text-leap-white pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.06]">
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse at 70% 30%, hsl(27 81% 55% / 0.4), transparent 60%)'
          }} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-leap-orange text-sm font-bold uppercase tracking-[0.3em] mb-6">Portfolio</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight max-w-4xl mb-8">
            Work that moves <br className="hidden md:block" />
            <span className="text-leap-orange">organizations forward</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed mb-10">
            We help organizations modernize how they serve, communicate, and grow through accessible, bilingual, and scalable digital experiences.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-leap-orange text-leap-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:brightness-110 transition-all"
          >
            Let's talk
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[72px] z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-4 -mx-4 px-4 scrollbar-hide">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                  activeFilter === filter.value
                    ? 'bg-leap-black text-leap-white'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      {filteredFeatured.length > 0 && (
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-leap-orange mb-3">Featured Work</p>
              <h2 className="text-3xl md:text-4xl font-black text-foreground">Case Studies</h2>
            </div>

            <div className="space-y-8">
              {filteredFeatured.map((project, i) => (
                <Link
                  key={project.client}
                  to={project.path}
                  className="group block"
                >
                  <div className={`relative rounded-2xl border border-border overflow-hidden transition-all duration-500 hover:border-leap-orange/30 hover:shadow-xl hover:shadow-leap-orange/5 ${
                    i % 2 === 0 ? 'bg-background' : 'bg-muted/20'
                  }`}>
                    <div className="absolute top-0 left-0 w-1 h-full bg-leap-orange/0 group-hover:bg-leap-orange transition-all duration-500" />
                    <div className="p-8 md:p-12">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                        <div className="flex-1 max-w-2xl">
                          <p className="text-xs font-bold uppercase tracking-[0.2em] text-leap-orange mb-4">{project.client}</p>
                          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight group-hover:text-leap-orange transition-colors">
                            {project.headline}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-6">{project.summary}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.services.map((s) => (
                              <span key={s} className="px-3 py-1 text-xs font-medium bg-muted rounded-full text-muted-foreground">
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-bold text-leap-orange group-hover:gap-3 transition-all self-start md:self-center shrink-0">
                          View case study
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Additional Experience */}
      {filteredSecondary.length > 0 && (
        <section className="py-24 bg-muted/30 border-t border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-leap-orange mb-3">Additional Experience</p>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">More Organizations We've Worked With</h2>
              <p className="text-muted-foreground max-w-2xl">
                A broader look at the organizations we've supported across government, business, health, and community sectors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSecondary.map((project) => (
                <div
                  key={project.client}
                  className="group bg-background rounded-xl border border-border p-6 hover:border-leap-orange/20 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-foreground leading-snug">{project.client}</h3>
                    {project.externalUrl && (
                      <a href={project.externalUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-leap-orange transition-colors shrink-0 ml-2">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-muted rounded-full text-muted-foreground">
                      {project.category === 'health' ? 'Health & Wellness' : project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="relative py-28 bg-leap-black text-leap-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-leap-orange text-sm font-bold uppercase tracking-[0.3em] mb-6">Ready to start?</p>
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Let's build something<br />that actually works</h2>
          <p className="text-lg text-white/50 mb-10 max-w-lg mx-auto">
            Whether you're modernizing a service, launching a platform, or tackling a complex challenge—we're here to help.
          </p>
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

export default Portfolio;
