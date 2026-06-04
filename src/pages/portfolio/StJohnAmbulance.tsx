import CaseStudyLayout from './CaseStudyLayout';
import sjaImg from '@/assets/portfolio/sja-hero.jpg';

const StJohnAmbulance = () => (
  <CaseStudyLayout
    client="St. John Ambulance"
    headline="Expanding reach through digital transformation"
    intro="St. John Ambulance partnered with LeapUX to improve its digital ecosystem, strengthen national outreach, and make programs and training more accessible. From website modernization to campaign support and analytics, the work helped unify and scale digital efforts across the organization."
    challenge="SJA needed a more flexible platform, stronger visibility for key programs, better operational workflows, and more effective ways to track campaign and enrollment performance across audiences and regions."
    whatWeDid="LeapUX supported St. John Ambulance through website and user experience improvements, SEO and content optimization, analytics dashboards and performance reporting, digital campaign support for training and community programs, workflow automation, and key system integrations that improved efficiency behind the scenes."
    impact="The organization gained a stronger digital foundation, improved discoverability, and more efficient internal workflows. Users could more easily find resources and training, while teams benefited from better tools, better data, and better support for future growth."
    services={['Website strategy', 'UX design', 'SEO', 'Analytics', 'Digital campaigns', 'System integration', 'Automation']}
    heroImage={sjaImg}
    prevProject={{ name: 'ISED', path: '/portfolio/ised' }}
    nextProject={{ name: 'IJC', path: '/portfolio/ijc' }}
  />
);

export default StJohnAmbulance;
