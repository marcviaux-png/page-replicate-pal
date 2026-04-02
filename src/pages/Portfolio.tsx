import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Landmark, Heart, Building2, Cross } from 'lucide-react';

const pspcImg = 'https://leapux.com/wp-content/uploads/elementor/thumbs/PSPC-scaled-r82pyyj9n9qr5ofu4yfm8elrgl316gs1jpeqo4noio.png';
const isedImg = 'https://leapux.com/wp-content/uploads/elementor/thumbs/ISED-1-scaled-r82pytu2p3kbjmmnweehdxsghnq73z9dv25b9qunds.png';
const sjaImg = 'https://leapux.com/wp-content/uploads/2021/09/SJA-scaled.png';
const ijcImg = 'https://leapux.com/wp-content/uploads/elementor/thumbs/IJC-scaled-r82pywnl9lo6igikfxmd3f2u9tcar2kkvg3rpkqgv4.png';
const shsImg = 'https://leapux.com/wp-content/uploads/elementor/thumbs/SHS-scaled-r82pz46as9yh3c7n80vdnd6j0wb8gnefkhbnjsfbhc.png';
const benevaImg = 'https://leapux.com/wp-content/uploads/2021/12/Beneva-1-scaled.png';

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
  { client: 'Transport Canada', description: 'Transportation policy and program work, including drone registration and pilot certification systems.', category: 'government', imageUrl: 'https://leapux.com/wp-content/uploads/elementor/thumbs/Transport-Canada-scaled-r82pyxlfgfpgu2h7ag0znwuav77nyrob7kr96up2ow.png' },
  { client: 'Financial Consumer Agency of Canada', description: 'Federal consumer protection and financial regulation digital services.', category: 'government', imageUrl: 'https://leapux.com/wp-content/uploads/elementor/thumbs/FCAC-scaled-r82pyzh3u3s1haegzgu8swd81yyee5vrvu285emacg.png' },
  { client: 'Employment and Social Development Canada', description: 'Federal social programs and labour market initiatives.', category: 'government', imageUrl: 'https://leapux.com/wp-content/uploads/elementor/thumbs/ESDC-scaled-r82pz0ey0xtbswd3tz8vde4onctrluzi7yppmokw68.png' },
  { client: 'Office of the Superintendent of Bankruptcy', description: 'Federal regulatory and supervisory body within ISED.', category: 'government', imageUrl: 'https://leapux.com/wp-content/uploads/elementor/thumbs/f17271ad71c629aebbd5bc72db38a0a1-scaled-r82pyurwvxllv8laqwt3yfjx31lkbod476ssr0t97k.png' },
  { client: 'Canada Gazette', description: 'Official newspaper of the Government of Canada for regulations, board decisions, and public notices.', category: 'government', imageUrl: 'https://leapux.com/wp-content/uploads/2021/12/CanadaGazette-scaled.png' },
  { client: 'Tereposky & DeRose', description: 'Law firm specializing in domestic and international trade law with federal government counsel experience.', category: 'business', imageUrl: 'https://leapux.com/wp-content/uploads/2021/12/TD-scaled.png' },
  { client: 'Omniscient Wellness', description: 'Healthcare and wellness organization offering a broad range of services and professional training.', category: 'health', imageUrl: 'https://leapux.com/wp-content/uploads/elementor/thumbs/OmniscientWellness-scaled-r82pz544z3zrey6a2ja07uxzma6loci5wlz512dxb4.png' },
  { client: 'Arctech Accelerate', description: 'Grant writing, business development, and lobbying organization.', category: 'business', imageUrl: 'https://leapux.com/wp-content/uploads/2021/12/Arctech-scaled.png' },
  { client: 'Auto Agents', description: 'Online car dealership with personalized car-buying support.', category: 'business', imageUrl: 'https://leapux.com/wp-content/uploads/elementor/thumbs/AutoAgents-1-scaled-r82pz7xnjm3mds26m2hvxc8defspbftcwzxlgw9qsg.png' },
  { client: 'NorthLend Financial', description: 'Secured mortgage agreement management for partners.', category: 'business', imageUrl: 'https://leapux.com/wp-content/uploads/elementor/thumbs/Northlend-scaled-r82pz8vhqg4wpe0tgkwihtztzto2j4x394l2y68cm8.png' },
  { client: 'Drive Thru Finance', description: 'Vehicle financing support for Canadians with varied financial situations.', category: 'business', imageUrl: 'https://leapux.com/wp-content/uploads/elementor/thumbs/DTF-scaled-r82pzar6447hcly35lprmtir6lesyj4jxdw1wq5k9s.png' },
  { client: 'Selmar Group', description: 'Ottawa real estate firm focused on military, RCMP, and government relocation.', category: 'business', imageUrl: 'https://leapux.com/wp-content/uploads/elementor/thumbs/SelmarGroup-scaled-r82pzcmuhsa1ztvcumj0rt1odd5jdxc0ln70va2rxc.png' },
  { client: 'Rob\'s Quality Roofing', description: 'Residential roofing services.', category: 'business', imageUrl: 'https://leapux.com/wp-content/uploads/elementor/thumbs/RobsQualityRoofing-scaled-r82pzeiivgcmn1smjnc9wsklk4w9tbjh9whzttzzkw.png' },
  { client: 'Tourangeau Mechanical', description: 'Commercial plumbing services in Ottawa.', category: 'business', imageUrl: 'https://leapux.com/wp-content/uploads/elementor/thumbs/Tourangeau-1-scaled-r82pzge794f7a9pw8o5j1s3iqwn08pqxy5sysdx78g.png' },
  { client: 'Co-Auto', description: 'Used car dealership and car loan financing in Ottawa.', category: 'business', imageUrl: 'https://leapux.com/wp-content/uploads/elementor/thumbs/CoAuto-scaled-r82pzi9vmshrxhn5xoys6rmfxodqo3yemf3xqxuew0.png' },
  { client: 'Franco Langues', description: 'French tutoring and federal public service language training.', category: 'business', imageUrl: 'https://leapux.com/wp-content/uploads/elementor/thumbs/FrancoLangues-scaled-r82pzj7ptmj293lss7der9dwj293vt24yjrf87t0ps.png' },
  { client: 'Wind Concerns Ontario', description: 'Information resource on industrial-scale wind power impacts.', category: 'nonprofit', imageUrl: 'https://leapux.com/wp-content/uploads/elementor/thumbs/WCO-scaled-r82pzm18e4mx7xhpbqlagqoab7v7iwdbyxpvo1ou74.png' },
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
