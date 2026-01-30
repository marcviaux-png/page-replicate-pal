import { Link } from 'react-router-dom';
import { Target, Cpu, Settings, Lightbulb, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const coreAreas = [
    {
      icon: Target,
      title: "Strategic Advisory & Planning",
      description: "We work with leadership to define vision, refine strategic priorities, and develop execution roadmaps that align with business objectives and market realities."
    },
    {
      icon: Cpu,
      title: "Digital & Technology Strategy",
      description: "From digital transformation to technology alignment, we help you identify and leverage the right solutions that deliver value-driven outcomes with scalability and efficiency."
    },
    {
      icon: Settings,
      title: "Business Process Optimization",
      description: "Improve performance, reduce friction, and unlock operational excellence with optimized processes tailored to how your teams work and grow."
    },
    {
      icon: Lightbulb,
      title: "Innovation & Product Strategy",
      description: "We guide organizations in identifying new opportunities, validating ideas, and aligning product strategies with customer needs and business goals."
    },
    {
      icon: Users,
      title: "Change Leadership & Organizational Effectiveness",
      description: "Transitions are complex. Our consulting supports cultural readiness, capability building, and change execution to ensure adoption and long-term success."
    }
  ];

  const howWeWork = [
    "Client-centric engagement — we put your context first",
    "Outcome-focused solutions — clear goals with measurable success criteria",
    "Collaborative delivery — partnership throughout planning and execution"
  ];

  return (
    <div className="animate-in bg-leap-light">
      {/* Hero Section */}
      <section className="relative bg-leap-black text-leap-white pt-48 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2000" 
            alt="Strategic Consulting Background" 
            className="w-full h-full object-cover hero-image"
          />
          <div className="absolute inset-0 image-overlay"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-leap-orange font-bold text-sm uppercase tracking-[0.2em] mb-4">Services</p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-8">Strategic Consulting for Growth & Transformation</h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              We partner with teams to move from uncertainty to confident delivery — reducing risk, improving adoption, and building digital services that work in the real world.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-leap-black mb-6">What We Do</h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                At LeapUX, we partner with organizations to solve their most strategic challenges — from business model optimization and digital transformation to operational alignment and innovation strategy.
              </p>
              <p>
                Our approach is collaborative, data-driven, and tailored to your goals. We help leaders clarify direction, streamline execution, and build sustainable systems that accelerate growth and deliver measurable results.
              </p>
              <p>
                Whether you're launching a new initiative, scaling an existing team, or navigating change, our consulting services are designed to drive impact where it matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Areas */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-leap-black mb-4">Core Areas of Consulting Support</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreAreas.map((area, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-leap-orange/10 rounded-xl flex items-center justify-center mb-6">
                  <area.icon className="w-7 h-7 text-leap-orange" />
                </div>
                <h3 className="text-xl font-bold text-leap-black mb-4">{area.title}</h3>
                <p className="text-slate-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-leap-black mb-10 text-center">How We Work</h2>
            <div className="space-y-4 mb-10">
              {howWeWork.map((item, index) => (
                <div key={index} className="flex items-start gap-4 bg-slate-50 p-5 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-leap-orange shrink-0 mt-0.5" />
                  <span className="text-lg text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-slate-600 leading-relaxed text-center">
              We start every engagement with discovery and analysis, then co-create approaches that fit your resources, timelines, and strategic priorities. Our aim is to build confidence, clarity, and capability inside your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Explore Capabilities */}
      <section className="py-24 bg-gradient-to-r from-leap-orange/10 to-leap-red/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-leap-black mb-6">Explore Our Detailed Capabilities</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              For a deeper look at specific services, methodologies, and the full range of expertise we bring to engagements, explore our capabilities. This links you directly into tailored descriptions of how we deliver value in each domain.
            </p>
            <Link to="/capabilities">
              <Button className="bg-leap-orange hover:bg-leap-red text-white px-10 py-6 text-sm font-bold uppercase tracking-widest rounded-full">
                View Our Capabilities
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-leap-white text-center border-t border-border">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-leap-black mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-slate-600 mb-10">
            Whether you need a strategy session, a full consulting engagement, or targeted support, we're here to help you take the next step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-leap-orange hover:bg-leap-red text-white px-12 py-6 text-sm font-bold uppercase tracking-widest rounded-full">
                Contact Us
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-2 border-leap-black text-leap-black hover:bg-leap-black hover:text-white px-12 py-6 text-sm font-bold uppercase tracking-widest rounded-full">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
