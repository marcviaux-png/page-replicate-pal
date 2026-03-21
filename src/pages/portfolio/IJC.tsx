import CaseStudyLayout from './CaseStudyLayout';
import heroImage from '@/assets/portfolio/ijc-hero.jpg';

const IJC = () => (
  <CaseStudyLayout
    client="International Joint Commission"
    headline="Creating a roadmap for a more usable and accessible research platform"
    intro="The International Joint Commission engaged LeapUX to assess the usability, structure, and accessibility of its digital platform. Serving policymakers, scientists, and the public, the site needed a clearer framework to support discovery, transparency, and future growth."
    challenge="The platform contained complex, research-heavy content that was difficult to navigate and search. IJC needed a research-backed strategy to improve usability, content organization, accessibility, and readiness for a future redesign."
    whatWeDid="LeapUX conducted a comprehensive discovery and planning engagement that included stakeholder interviews, usability testing, navigation and search analysis, content audits, accessibility recommendations, technical guidance, and a phased roadmap to support redesign and vendor selection."
    impact="The engagement gave IJC a clear strategic foundation for modernization. It improved understanding of user needs, highlighted opportunities for better information access, and equipped the organization to move confidently into implementation."
    services={['UX research', 'Usability testing', 'Information architecture', 'Accessibility strategy', 'Content audit', 'Digital roadmap']}
    heroImage={heroImage}
    prevProject={{ name: 'St. John Ambulance', path: '/portfolio/st-john-ambulance' }}
    nextProject={{ name: 'Soldiers Helping Soldiers', path: '/portfolio/soldiers-helping-soldiers' }}
  />
);

export default IJC;
