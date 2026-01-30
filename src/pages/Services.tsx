import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import teamCollaboration from '@/assets/team-collaboration.jpg';
import coreStrategicPlanning from '@/assets/core-strategic-planning.jpg';
import coreDigitalStrategy from '@/assets/core-digital-strategy.jpg';
import coreProcessOptimization from '@/assets/core-process-optimization.jpg';
import coreInnovationStrategy from '@/assets/core-innovation-strategy.jpg';
import coreChangeLeadership from '@/assets/core-change-leadership.jpg';

const Services = () => {
  const coreAreas = [
    {
      headline: "Define the path forward.",
      title: "Strategic Advisory & Planning",
      description: "We work with leadership to define vision, refine strategic priorities, and develop execution roadmaps that align with business objectives and market realities.",
      image: coreStrategicPlanning
    },
    {
      headline: "Transform with purpose.",
      title: "Digital & Technology Strategy",
      description: "From digital transformation to technology alignment, we help you identify and leverage the right solutions that deliver value-driven outcomes with scalability and efficiency.",
      image: coreDigitalStrategy
    },
    {
      headline: "Efficiency in motion.",
      title: "Business Process Optimization",
      description: "Improve performance, reduce friction, and unlock operational excellence with optimized processes tailored to how your teams work and grow.",
      image: coreProcessOptimization
    },
    {
      headline: "Ideas that scale.",
      title: "Innovation & Product Strategy",
      description: "We guide organizations in identifying new opportunities, validating ideas, and aligning product strategies with customer needs and business goals.",
      image: coreInnovationStrategy
    },
    {
      headline: "Lead the change.",
      title: "Change Leadership & Organizational Effectiveness",
      description: "Transitions are complex. Our consulting supports cultural readiness, capability building, and change execution to ensure adoption and long-term success.",
      image: coreChangeLeadership
    }
  ];

  const howWeWork = [
    {
      title: "Client-centric engagement",
      description: "We put your context first"
    },
    {
      title: "Outcome-focused solutions",
      description: "Clear goals with measurable success criteria"
    },
    {
      title: "Collaborative delivery",
      description: "Partnership throughout planning and execution"
    }
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
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-8">Strategic Consulting for Growth & Transformation</h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              We partner with teams to move from uncertainty to confident delivery — reducing risk, improving adoption, and building digital services that work in the real world.
            </p>
          </div>
        </div>
      </section>

      {/* Story Introduction - What We Do */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-leap-black mb-6">What We Do</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                At LeapUX, we partner with organizations to solve their most strategic challenges — from business model optimization and digital transformation to operational alignment and innovation strategy.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our approach is collaborative, data-driven, and tailored to your goals. Whether you're launching a new initiative, scaling an existing team, or navigating change, our consulting services are designed to drive impact where it matters most.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <img 
                  src={teamCollaboration}
                  alt="Team collaboration and strategy session" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-leap-orange/20 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Areas - Immersive Dark Sections */}
      <section>
        <div className="text-center py-20 px-4 bg-leap-black">
          <h2 className="text-3xl sm:text-4xl font-bold text-leap-white mb-4">Core Areas of Consulting Support</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            We bring expertise across five interconnected disciplines to help you navigate complexity and achieve sustainable growth.
          </p>
        </div>

        {/* Individual Core Area Sections - Full Bleed Dark Style */}
        {coreAreas.map((area, index) => (
          <div 
            key={index} 
            className="relative min-h-[80vh] flex items-center"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={area.image}
                alt={area.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
            </div>
            
            {/* Content Overlay */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
              <div className="max-w-xl">
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-leap-white mb-6 leading-tight">
                  {area.headline}
                </h3>
                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-4">
                  <span className="text-leap-orange font-semibold">{area.title}.</span> {area.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* How We Work - Visual Cards */}
      <section className="py-24 bg-leap-black text-leap-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">How We Work</h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-10">
                We start every engagement with discovery and analysis, then co-create approaches that fit your resources, timelines, and strategic priorities. Our aim is to build confidence, clarity, and capability inside your organization.
              </p>
              <div className="space-y-6">
                {howWeWork.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-leap-orange flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-slate-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" 
                  alt="Collaborative team meeting" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-leap-orange rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Capabilities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" 
                  alt="Team planning session" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gradient-to-br from-leap-orange to-leap-red text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-white/90 mb-10">
            Whether you need a strategy session, a full consulting engagement, or targeted support, we're here to help you take the next step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white hover:bg-slate-100 text-leap-black px-12 py-6 text-sm font-bold uppercase tracking-widest rounded-full">
                Contact Us
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-leap-black px-12 py-6 text-sm font-bold uppercase tracking-widest rounded-full">
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
