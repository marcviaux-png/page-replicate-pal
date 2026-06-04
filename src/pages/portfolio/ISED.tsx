import CaseStudyLayout from './CaseStudyLayout';
import isedImg from '@/assets/portfolio/ised-hero.jpg';

const ISED = () => (
  <CaseStudyLayout
    client="Innovation, Science and Economic Development Canada"
    headline="Improving digital identity, accessibility, and service delivery"
    intro="LeapUX partnered with ISED to modernize digital identity services, streamline internal support tools, and improve accessibility across key public-facing platforms. The work focused on making essential government services easier to access, easier to support, and easier to scale."
    challenge="ISED needed to strengthen authentication experiences, reduce friction for users, support regulatory compliance, and improve the usability of internal tools used by service teams. Accessibility and bilingual delivery were critical throughout."
    whatWeDid="LeapUX supported the modernization of identity and service systems by helping design a secure and scalable authentication experience, improving account management and sign-in journeys, redesigning internal administration tools based on UX research, optimizing navigation and content structure, and supporting accessibility and compliance requirements across major digital services."
    impact="The work improved usability for both the public and internal teams, reduced support barriers, and created a stronger foundation for accessible and efficient digital service delivery. It also supported more effective regulatory reporting and strengthened trust in public-facing digital tools."
    services={['UX research', 'Service design', 'Accessibility', 'Interface design', 'Content strategy', 'Compliance support', 'Digital transformation']}
    heroImage={isedImg}
    prevProject={{ name: 'PSPC', path: '/portfolio/pspc' }}
    nextProject={{ name: 'St. John Ambulance', path: '/portfolio/st-john-ambulance' }}
  />
);

export default ISED;
