import { Link } from 'react-router-dom';
import { CheckCircle, Target, Languages, Award } from 'lucide-react';
import AboutHero from '@/components/about/AboutHero';
import AboutContentSection from '@/components/about/AboutContentSection';
import AboutSectorExperience from '@/components/about/AboutSectorExperience';
import AboutSidebar from '@/components/about/AboutSidebar';

const About = () => {
  return (
    <div className="animate-in">
      <AboutHero />

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8 space-y-24">

            <AboutContentSection barColor="brand" title="Built for Complexity">
              <p>With over 15 years of industry experience and continuous operation since 2012, LeapUX delivers production work across government, enterprise, and regulated environments, where quality, security, and accountability are non-negotiable.</p>
              <p>Our work spans discovery through implementation and long-term operation, with clear artifacts, defined acceptance criteria, and shared ownership at every stage. We align on outcomes first and define success metrics early.</p>
              <p className="font-semibold text-foreground">Complex environments require more than ideas, they require disciplined delivery.</p>
            </AboutContentSection>

            <AboutContentSection barColor="orange" title="Why We Do This">
              <p>We started LeapUX because too many important decisions were being made without evidence.</p>
              <p>Organizations were investing heavily in digital platforms, services, and transformation initiatives, yet too often those initiatives were built on assumptions instead of insight.</p>
              <p className="font-semibold text-foreground">The result was predictable:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>systems that didn't match real needs</li>
                <li>services that were difficult to adopt</li>
                <li>expensive projects that failed to deliver lasting value</li>
              </ul>
              <p className="font-semibold text-foreground">LeapUX exists to close that gap.</p>
              <p>We help organizations replace uncertainty with evidence, and transform complex ideas into services that work in the real world.</p>
            </AboutContentSection>

            <AboutContentSection barColor="brand" title="Evidence Over Opinion">
              <p>Many consulting and design engagements rely on opinion, hierarchy, or presentation-driven decisions.</p>
              <p className="font-semibold text-foreground">LeapUX takes a different approach.</p>
              <p>We ground decisions in evidence, through research, testing, operational data, and real user feedback.</p>
              <p>This allows teams to:</p>
              <ul className="space-y-2">
                {["Reduce risk early", "Avoid costly rework", "Make confident decisions faster", "Deliver services that actually work"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-semibold text-foreground italic">Evidence replaces debate. Progress replaces assumption.</p>
            </AboutContentSection>

            <AboutContentSection barColor="orange" title="Senior-Led, Owner-Led Delivery">
              <p>LeapUX is a senior-led and owner-led practice.</p>
              <p>The people you meet at the beginning remain involved throughout the engagement, from discovery to implementation and adoption.</p>
              <p>This ensures:</p>
              <ul className="space-y-2">
                {["Clear ownership and accountability", "Continuity of knowledge across phases", "Faster decision making", "Fewer handoffs and less rework"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>We scale thoughtfully as projects grow, bringing in additional expertise where needed, but leadership stays hands-on.</p>
            </AboutContentSection>

            <AboutContentSection barColor="brand" title="Problem Solvers Who Follow Through">
              <p>Complex projects rarely succeed through process alone.</p>
              <p>They succeed because teams stay persistent, address problems directly, and follow issues through to resolution.</p>
              <p>LeapUX works with organizations facing difficult delivery challenges, where constraints, policy, technology, and real-world operations intersect.</p>
              <p>We are known for:</p>
              <ul className="space-y-2">
                {["Asking difficult questions early", "Navigating complexity with discipline", "Working collaboratively across teams", "Finishing what we start"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-semibold text-foreground">Our focus is simple: make the service work.</p>
            </AboutContentSection>

            {/* Discipline & Transparency - special card treatment */}
            <section className="bg-secondary p-12 lg:p-16 rounded-3xl border-l-8 border-primary shadow-sm">
              <h2 className="text-3xl font-bold text-foreground mb-6 italic">Discipline & Transparency</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p className="font-semibold text-foreground" style={{ fontStyle: 'normal' }}>Trust is earned through execution.</p>
                <p>We operate with rigor and transparency so partners always understand progress, risks, and outcomes.</p>
                <p>Time is tracked to tasks and tied directly to deliverables. Work is shared regularly through demos and documentation.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-primary font-bold uppercase tracking-widest text-xs mt-8">
                <div>• Risks raised early</div>
                <div>• Decisions documented</div>
                <div>• Issues followed to closure</div>
                <div>• Clear owners and timelines</div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mt-6">Transparency reduces surprises and keeps delivery moving forward.</p>
            </section>

          </div>

          <AboutSidebar />
        </div>
      </div>

      {/* Sector Experience */}
      <AboutSectorExperience />

      {/* How We Work */}
      <section className="py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-4">How We Work</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
              Evidence-driven. Senior-led. Built for the real world.
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine evidence, discipline, and accountability to help organizations move from uncertainty to real-world results.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: Target,
                title: "Built for Complex Delivery",
                description: "Our work spans discovery through implementation and long-term operation.",
                preamble: "We ensure:",
                points: ["Clear artifacts and acceptance criteria", "Shared ownership across teams", "Services that move to adoption—not stall after launch"],
                footer: "Success is measured by outcomes, not presentations."
              },
              {
                icon: Languages,
                title: "Bilingual and National by Design",
                description: "As a Canadian firm, LeapUX delivers fully bilingually in English and French, including stakeholder workshops, formal deliverables, and national program alignment.",
                points: [],
                footer: "Our work reflects the linguistic, accessibility, and policy realities of delivering services for all Canadians."
              },
              {
                icon: Award,
                title: "Outcomes That Last",
                description: "We care about what happens after launch.",
                preamble: "Every engagement includes:",
                points: ["Thorough documentation and knowledge transfer", "Operational support during adoption", "Plans for continuous improvement"],
                footer: "We help organizations deliver services that are maintainable, adopted, and able to evolve over time."
              }
            ].map((item, i) => (
              <div key={i} className="bg-card p-8 lg:p-10 rounded-2xl border border-border">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground mb-3">{item.title}</h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                    {item.preamble && <p className="text-foreground font-medium mb-3">{item.preamble}</p>}
                    {item.points.length > 0 && (
                      <ul className="space-y-3 mb-4">
                        {item.points.map((point, j) => (
                          <li key={j} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                            <span className="text-muted-foreground font-medium">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {item.footer && <p className="text-muted-foreground leading-relaxed italic">{item.footer}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why LeapUX */}
      <section className="py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-4">Why LeapUX</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
            Because delivery matters.
          </h3>
          <p className="text-lg text-muted-foreground">
            We combine evidence, discipline, and accountability to help organizations move from uncertainty to real-world results.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-secondary text-center border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10 leading-tight text-balance">Ready to Work With a Partner Built for Complex Delivery?</h2>
          <Link
            to="/contact"
            className="inline-flex justify-center items-center px-12 py-5 text-sm font-bold uppercase tracking-widest rounded-full bg-primary text-primary-foreground hover:bg-destructive transition-all shadow-xl"
          >
            Talk to LeapUX
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
