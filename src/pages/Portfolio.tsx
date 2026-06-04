import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Landmark, Heart, Building2, Cross } from 'lucide-react';
import Seo from '@/components/Seo';

import pspcImg from '@/assets/portfolio/pspc-hero.jpg';
import isedImg from '@/assets/portfolio/ised-hero.jpg';
import sjaImg from '@/assets/portfolio/sja-hero.jpg';
import ijcImg from '@/assets/portfolio/ijc-hero.jpg';
import shsImg from '@/assets/portfolio/shs-hero.jpg';
import benevaImg from '@/assets/portfolio/beneva-hero.jpg';

type Category = 'all' | 'government' | 'nonprofit' | 'business' | 'health';

interface FeaturedProject {
  client: string;
  headline: string;
  summary: string;
  services: string[];
  path: string;
  category: Category;
  image: string;
}

interface SecondaryProject {
  client: string;
  description: string;
  category: Category;
  externalUrl?: string;
  imageUrl?: string;
}

const featured: FeaturedProject[] = [
  {
    client: 'Beneva',
    headline: 'Unifying brand and experience after a major merger',
    summary: 'Following the merger of La Capitale and SSQ Insurance, we helped Beneva align its brand and user experience across apps, websites, service portals, and internal communications.',
    services: ['Design systems', 'Brand integration', 'Enterprise UX', 'Governance'],
    path: '/portfolio/beneva',
    category: 'business',
    image: benevaImg,
  },
  {
    client: 'Innovation, Science and Economic Development Canada',
    headline: 'Improving digital identity, accessibility, and service delivery',
    summary: 'We modernized identity management, regulatory tools, and internal support workflows—strengthening usability, reducing barriers, and improving service delivery at scale.',
    services: ['UX research', 'Service design', 'Accessibility', 'Compliance support'],
    path: '/portfolio/ised',
    category: 'government',
    image: isedImg,
  },
  {
    client: 'International Joint Commission',
    headline: 'Creating a roadmap for a more usable and accessible platform',
    summary: 'Through stakeholder engagement, user research, and content analysis, we developed a clear roadmap to improve discoverability of environmental and regulatory content.',
    services: ['UX research', 'Usability testing', 'Content audit', 'Accessibility strategy'],
    path: '/portfolio/ijc',
    category: 'government',
    image: ijcImg,
  },
  {
    client: 'St. John Ambulance',
    headline: 'Expanding reach through digital transformation',
    summary: 'We strengthened SJA\'s digital presence, improved operations, and expanded access to training and community programs through website modernization, SEO, analytics, and workflow automation.',
    services: ['Website strategy', 'UX design', 'SEO', 'System integration'],
    path: '/portfolio/st-john-ambulance',
    category: 'nonprofit',
    image: sjaImg,
  },
  {
    client: 'Public Services and Procurement Canada',
    headline: 'Modernizing public engagement and research accessibility',
    summary: 'We helped PSPC redesign research workflows and digital tools—improving transparency, discoverability, and long-term usability for researchers, policymakers, and the public.',
    services: ['UX strategy', 'Workflow design', 'Information architecture', 'Accessibility'],
    path: '/portfolio/pspc',
    category: 'government',
    image: pspcImg,
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

const filters: { label: string; value: Category }[] = [
  { label: 'All Work', value: 'all' },
  { label: 'Government', value: 'government' },
  { label: 'Nonprofit', value: 'nonprofit' },
  { label: 'Business', value: 'business' },
  { label: 'Health & Wellness', value: 'health' },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<Category>('all');

  const filteredFeatured = activeFilter === 'all' ? featured : featured.filter(p => p.category === activeFilter);
  const filteredSecondary = activeFilter === 'all' ? secondary : secondary.filter(p => p.category === activeFilter);

  return (
    <div className="bg-background">
      <Seo title='Portfolio | LeapUX Case Studies' description='Selected case studies from LeapUX engagements with public-sector and private-sector clients across Canada.' path='/portfolio' />
      {/* Hero */}
      <section className="relative bg-leap-black text-leap-white pt-48 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000"
            alt="Team collaboration background"
            className="w-full h-full object-cover hero-image"
          />
          <div className="absolute inset-0 image-overlay"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-8">
              Our Work
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light mb-10">
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

            <div className="space-y-10">
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
                    <div className="flex flex-col lg:flex-row">
                      {/* Image */}
                      <div className={`relative lg:w-[42%] shrink-0 overflow-hidden ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                        <div className="aspect-[16/10] lg:aspect-auto lg:absolute lg:inset-0">
                          <img
                            src={project.image}
                            alt={`${project.client} project screenshot`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
                        </div>
                      </div>
                      {/* Content */}
                      <div className={`flex-1 p-8 md:p-10 lg:p-12 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-leap-orange mb-4">{project.client}</p>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight group-hover:text-leap-orange transition-colors">
                          {project.headline}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">{project.summary}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.services.map((s) => (
                            <span key={s} className="px-3 py-1 text-xs font-medium bg-muted rounded-full text-muted-foreground">
                              {s}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 text-sm font-bold text-leap-orange group-hover:gap-3 transition-all">
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
                  className="group bg-background rounded-xl border border-border overflow-hidden hover:border-leap-orange/20 transition-all duration-300 hover:shadow-md"
                >
                  {project.imageUrl && (
                    <div className="aspect-[16/9] overflow-hidden bg-muted">
                      <img
                        src={project.imageUrl}
                        alt={`${project.client} screenshot`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="p-6">
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