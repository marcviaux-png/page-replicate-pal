import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { 
  Brain, 
  Lightbulb, 
  Target, 
  Wrench, 
  Code, 
  Shield, 
  Users, 
  TrendingUp,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { z } from 'zod';
import heroAiTraining from '@/assets/hero-ai-training.jpg';

const leadSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100),
  jobTitle: z.string().trim().min(1, "Job title is required").max(100),
  workEmail: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(20).optional(),
  organizationName: z.string().trim().min(1, "Organization name is required").max(100),
  industry: z.string().trim().min(1, "Industry is required").max(100),
  organizationSize: z.string().min(1, "Organization size is required"),
  location: z.string().trim().min(1, "Location is required").max(200),
  primaryChallenge: z.string().trim().min(1, "Primary challenge is required").max(1000),
  aiAdoptionLevel: z.string().min(1, "AI adoption level is required"),
  teamsToTrain: z.string().trim().min(1, "Teams to train is required").max(500),
  timeline: z.string().optional(),
  fundingInterest: z.string().min(1, "Please select an option"),
  budgetRange: z.string().optional(),
  consent: z.boolean().refine(val => val === true, "You must agree to be contacted")
});

type LeadFormData = z.infer<typeof leadSchema>;

const AITraining = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    jobTitle: '',
    workEmail: '',
    phone: '',
    organizationName: '',
    industry: '',
    organizationSize: '',
    location: '',
    primaryChallenge: '',
    aiAdoptionLevel: '',
    teamsToTrain: '',
    timeline: '',
    fundingInterest: '',
    budgetRange: '',
    consent: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name as keyof LeadFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const result = leadSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof LeadFormData, string>> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof LeadFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Request submitted successfully!",
      description: "An AI training specialist will contact you within 1-2 business days.",
    });
    
    setFormData({
      fullName: '',
      jobTitle: '',
      workEmail: '',
      phone: '',
      organizationName: '',
      industry: '',
      organizationSize: '',
      location: '',
      primaryChallenge: '',
      aiAdoptionLevel: '',
      teamsToTrain: '',
      timeline: '',
      fundingInterest: '',
      budgetRange: '',
      consent: false
    });
    setIsSubmitting(false);
  };

  const programs = [
    {
      icon: Lightbulb,
      title: "AI Foundations: Understanding AI Today and Tomorrow",
      subtitle: "Learn how AI works—and how to think about it strategically",
      description: "This foundational training demystifies AI for non-technical and technical audiences alike.",
      learnings: [
        "What AI is (and isn't): machine learning, generative AI, automation",
        "How AI systems learn, reason, and generate outputs",
        "Current capabilities and limitations",
        "Ethical, legal, and UX implications of AI",
        "How AI is expected to evolve in the next 3–5 years"
      ],
      value: "Builds AI literacy across your organization so teams can make informed decisions, ask better questions, and reduce risk."
    },
    {
      icon: Target,
      title: "AI Strategy & Readiness Assessment",
      subtitle: "Identify the right AI strategy for your organization",
      description: "Not every business needs the same AI solutions. We assess where AI makes sense—and where it doesn't.",
      assessments: [
        "Business goals and operational challenges",
        "Data maturity and infrastructure",
        "User and customer experience opportunities",
        "Risk, compliance, and governance considerations",
        "Organizational readiness and skill gaps"
      ],
      outputs: [
        "AI opportunity map",
        "Prioritized use cases",
        "Recommended tools, platforms, and approaches",
        "A realistic AI adoption roadmap"
      ],
      value: "Avoids wasted investment and ensures AI initiatives are aligned to real business and user needs."
    },
    {
      icon: Wrench,
      title: "Applied AI Tools Training",
      subtitle: "Hands-on training with the tools that matter most",
      description: "Based on your assessment, we deliver practical training on the AI tools your teams will actually use.",
      areas: [
        "Generative AI tools (e.g., copilots, content generation, research)",
        "Workflow automation and no-code/low-code AI platforms",
        "AI for design, research, and UX optimization",
        "AI for analytics, insights, and decision support"
      ],
      value: "Accelerates adoption, increases productivity, and ensures tools are used responsibly and effectively."
    },
    {
      icon: Code,
      title: "Building Your Own AI-Powered Applications",
      subtitle: "From idea to working prototype",
      description: "For teams ready to go deeper, we offer training on building custom AI-enabled solutions.",
      learnings: [
        "Designing AI-powered user experiences",
        "Prompt engineering and model interaction",
        "Using APIs and platforms to integrate AI",
        "Prototyping and testing AI features",
        "Governance, monitoring, and continuous improvement"
      ],
      formats: ["Workshops", "Team-based labs", "Guided pilots"],
      value: "Empowers internal teams to innovate faster while maintaining control over data, UX, and outcomes."
    },
    {
      icon: Shield,
      title: "Responsible & Ethical AI by Design",
      subtitle: "Build trust into every AI experience",
      description: "AI changes how users experience transparency, fairness, and control. We help teams design responsibly.",
      topics: [
        "Bias and fairness in AI systems",
        "Explainability and transparency",
        "Human-in-the-loop design",
        "Accessibility and inclusive AI",
        "Governance and accountability models"
      ],
      value: "Reduces risk, strengthens trust, and aligns AI use with organizational values and regulations."
    }
  ];

  const whyMatters = [
    "Making faster, more informed decisions",
    "Designing better digital experiences for customers and employees",
    "Automating low-value work while augmenting human expertise",
    "Attracting and retaining top talent",
    "Staying competitive as markets and expectations shift"
  ];

  const approach = [
    "Role-based (executives, managers, designers, developers, operations)",
    "Experience-driven (rooted in UX and service design principles)",
    "Strategic and practical (from vision to execution)",
    "Tool-agnostic (focused on outcomes, not vendors)"
  ];

  const audiences = [
    "Executives and leadership teams",
    "Digital, innovation, and transformation leaders",
    "UX, product, and design teams",
    "IT and engineering teams",
    "Operations, HR, marketing, and policy teams"
  ];

  const whyInvest = [
    "Get ahead of change instead of reacting to it",
    "Augment human skills, not replace them",
    "Increase ROI on digital and AI investments",
    "Reduce risk through better understanding and governance",
    "Design better experiences for customers and employees"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroAiTraining})` }}
        />
        <div className="absolute inset-0 bg-leap-black/45" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-leap-orange/10 border border-leap-orange/30 rounded-full px-4 py-2 mb-6">
              <Brain className="w-5 h-5 text-leap-orange" />
              <span className="text-leap-orange font-medium">AI Training & Enablement</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Training & Enablement for Modern Organizations
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Design, Strategy, and AI—Working Better Together
            </p>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-10">
              Artificial Intelligence is no longer a future concept—it's a present-day capability reshaping how organizations design services, make decisions, and deliver value. At LeapUX, we help businesses move beyond AI hype and into practical, human-centered AI adoption.
            </p>
            <Button asChild size="lg" className="bg-leap-orange hover:bg-leap-red text-white px-8 py-6 text-lg">
              <a href="#get-started">Talk to a Specialist</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Statement */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-slate-700 leading-relaxed">
              Our AI training programs are built at the intersection of <strong className="text-leap-black">UX, digital transformation, and applied AI</strong>—so your teams don't just learn tools, they learn how to think, design, and work differently.
            </p>
          </div>
        </div>
      </section>

      {/* Why AI Training Matters */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-leap-black mb-4">
                Why AI Training Matters Now
              </h2>
              <p className="text-lg text-slate-600">
                Organizations that invest in AI capability today are:
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {whyMatters.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-5 bg-slate-50 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-leap-orange shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-leap-orange/10 to-leap-red/10 border border-leap-orange/20 rounded-2xl p-8 text-center">
              <p className="text-lg text-slate-700 mb-4">
                Those that don't risk falling behind—not because AI replaces people, but because <strong>people using AI will outperform those who don't.</strong>
              </p>
              <p className="text-xl font-bold text-leap-black">
                AI training is no longer optional. It's a core digital competency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-leap-black mb-6">
                  Our Approach: Human-Centered AI Enablement
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  Unlike generic AI courses, our training is:
                </p>
                <div className="space-y-4">
                  {approach.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-leap-orange shrink-0 mt-1" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg">
                <p className="text-xl text-slate-700 leading-relaxed">
                  We help teams understand not just <strong className="text-leap-black">how</strong> to use AI—but <strong className="text-leap-black">when</strong>, <strong className="text-leap-black">why</strong>, and <strong className="text-leap-black">where</strong> it creates real value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-leap-black mb-4">
                AI Training Programs We Offer
              </h2>
            </div>
            <div className="space-y-12">
              {programs.map((program, index) => (
                <div key={index} className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-200">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-leap-orange/10 rounded-xl flex items-center justify-center shrink-0">
                      <program.icon className="w-7 h-7 text-leap-orange" />
                    </div>
                    <div>
                      <span className="text-leap-orange font-semibold text-sm">Program {index + 1}</span>
                      <h3 className="text-2xl font-bold text-leap-black">{program.title}</h3>
                    </div>
                  </div>
                  <p className="text-lg font-medium text-slate-700 mb-2">{program.subtitle}</p>
                  <p className="text-slate-600 mb-6">{program.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {program.learnings && (
                      <div>
                        <h4 className="font-semibold text-leap-black mb-3">What participants learn:</h4>
                        <ul className="space-y-2">
                          {program.learnings.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-600">
                              <ArrowRight className="w-4 h-4 text-leap-orange shrink-0 mt-1" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {program.assessments && (
                      <div>
                        <h4 className="font-semibold text-leap-black mb-3">What we assess:</h4>
                        <ul className="space-y-2">
                          {program.assessments.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-600">
                              <ArrowRight className="w-4 h-4 text-leap-orange shrink-0 mt-1" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {program.outputs && (
                      <div>
                        <h4 className="font-semibold text-leap-black mb-3">Outputs:</h4>
                        <ul className="space-y-2">
                          {program.outputs.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-600">
                              <ArrowRight className="w-4 h-4 text-leap-orange shrink-0 mt-1" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {program.areas && (
                      <div className="md:col-span-2">
                        <h4 className="font-semibold text-leap-black mb-3">Common areas include:</h4>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {program.areas.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-600">
                              <ArrowRight className="w-4 h-4 text-leap-orange shrink-0 mt-1" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {program.topics && (
                      <div className="md:col-span-2">
                        <h4 className="font-semibold text-leap-black mb-3">Topics include:</h4>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {program.topics.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-600">
                              <ArrowRight className="w-4 h-4 text-leap-orange shrink-0 mt-1" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  {program.formats && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-leap-black mb-2">Formats:</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.formats.map((format, i) => (
                          <span key={i} className="bg-leap-orange/10 text-leap-orange px-3 py-1 rounded-full text-sm font-medium">
                            {format}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="bg-white p-4 rounded-xl border border-leap-orange/20">
                    <p className="text-slate-700">
                      <strong className="text-leap-black">Value: </strong>{program.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-leap-black mb-4">
                Who This Training Is For
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {audiences.map((audience, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200">
                  <Users className="w-5 h-5 text-leap-orange shrink-0" />
                  <span className="text-slate-700">{audience}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-600 italic">
              Programs are customized for private sector, public sector, and non-profit organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="py-20 bg-leap-black">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Invest in AI Training with LeapUX
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {whyInvest.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white/5 border border-white/10 p-5 rounded-xl">
                  <TrendingUp className="w-5 h-5 text-leap-orange shrink-0 mt-0.5" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-xl text-white">
              AI success isn't about technology alone—it's about <strong className="text-leap-orange">people, processes, and experiences</strong> working together.
            </p>
          </div>
        </div>
      </section>

      {/* Funding Section */}
      <section className="py-20 bg-gradient-to-r from-leap-orange to-leap-red">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <DollarSign className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Funding & Grants May Be Available
            </h2>
            <p className="text-xl text-white/90 mb-6">
              Did you know that provincial and federal grants may help cover the cost of AI training?
            </p>
            <p className="text-lg text-white/80 mb-8">
              Many organizations qualify for workforce development, innovation, and digital adoption funding programs.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-left max-w-xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-4">We can help:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-white/90">
                  <CheckCircle className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span>Assess your eligibility</span>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <CheckCircle className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span>Align training with funding criteria</span>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <CheckCircle className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span>Support documentation and justification</span>
                </li>
              </ul>
            </div>
            <p className="text-white/90 mt-8 text-lg">
              Get in touch with us to see how your AI training investment could be funded.
            </p>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="get-started" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-leap-black mb-4">
                Get Started: Talk to an AI Training Specialist
              </h2>
              <p className="text-lg text-slate-600">
                Fill out the form below and we'll contact you to discuss your goals, challenges, and next steps.
              </p>
              <p className="text-sm text-slate-500 mt-2">Required fields are marked with *</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-200">
              {/* Contact Information */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-leap-black mb-6 pb-2 border-b border-slate-200">
                  Contact Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-leap-black mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.fullName ? 'border-red-500' : 'border-slate-300'} focus:ring-2 focus:ring-leap-orange focus:border-transparent`}
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                  </div>
                  <div>
                    <label htmlFor="jobTitle" className="block text-sm font-medium text-leap-black mb-2">
                      Job Title *
                    </label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.jobTitle ? 'border-red-500' : 'border-slate-300'} focus:ring-2 focus:ring-leap-orange focus:border-transparent`}
                    />
                    {errors.jobTitle && <p className="text-red-500 text-sm mt-1">{errors.jobTitle}</p>}
                  </div>
                  <div>
                    <label htmlFor="workEmail" className="block text-sm font-medium text-leap-black mb-2">
                      Work Email Address *
                    </label>
                    <input
                      type="email"
                      id="workEmail"
                      name="workEmail"
                      value={formData.workEmail}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.workEmail ? 'border-red-500' : 'border-slate-300'} focus:ring-2 focus:ring-leap-orange focus:border-transparent`}
                    />
                    {errors.workEmail && <p className="text-red-500 text-sm mt-1">{errors.workEmail}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-leap-black mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-leap-orange focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Organization Information */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-leap-black mb-6 pb-2 border-b border-slate-200">
                  Organization Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="organizationName" className="block text-sm font-medium text-leap-black mb-2">
                      Organization Name *
                    </label>
                    <input
                      type="text"
                      id="organizationName"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.organizationName ? 'border-red-500' : 'border-slate-300'} focus:ring-2 focus:ring-leap-orange focus:border-transparent`}
                    />
                    {errors.organizationName && <p className="text-red-500 text-sm mt-1">{errors.organizationName}</p>}
                  </div>
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-leap-black mb-2">
                      Industry / Sector *
                    </label>
                    <input
                      type="text"
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.industry ? 'border-red-500' : 'border-slate-300'} focus:ring-2 focus:ring-leap-orange focus:border-transparent`}
                    />
                    {errors.industry && <p className="text-red-500 text-sm mt-1">{errors.industry}</p>}
                  </div>
                  <div>
                    <label htmlFor="organizationSize" className="block text-sm font-medium text-leap-black mb-2">
                      Organization Size *
                    </label>
                    <select
                      id="organizationSize"
                      name="organizationSize"
                      value={formData.organizationSize}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.organizationSize ? 'border-red-500' : 'border-slate-300'} focus:ring-2 focus:ring-leap-orange focus:border-transparent bg-white`}
                    >
                      <option value="">Select size</option>
                      <option value="1-10">1–10</option>
                      <option value="11-50">11–50</option>
                      <option value="51-200">51–200</option>
                      <option value="200+">200+</option>
                    </select>
                    {errors.organizationSize && <p className="text-red-500 text-sm mt-1">{errors.organizationSize}</p>}
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-leap-black mb-2">
                      Location (City, Province/State, Country) *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.location ? 'border-red-500' : 'border-slate-300'} focus:ring-2 focus:ring-leap-orange focus:border-transparent`}
                    />
                    {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                  </div>
                </div>
              </div>

              {/* AI & Training Needs */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-leap-black mb-6 pb-2 border-b border-slate-200">
                  AI & Training Needs
                </h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="primaryChallenge" className="block text-sm font-medium text-leap-black mb-2">
                      Primary challenge or opportunity you want to address with AI *
                    </label>
                    <textarea
                      id="primaryChallenge"
                      name="primaryChallenge"
                      value={formData.primaryChallenge}
                      onChange={handleChange}
                      rows={3}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.primaryChallenge ? 'border-red-500' : 'border-slate-300'} focus:ring-2 focus:ring-leap-orange focus:border-transparent resize-none`}
                    />
                    {errors.primaryChallenge && <p className="text-red-500 text-sm mt-1">{errors.primaryChallenge}</p>}
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="aiAdoptionLevel" className="block text-sm font-medium text-leap-black mb-2">
                        Current level of AI adoption *
                      </label>
                      <select
                        id="aiAdoptionLevel"
                        name="aiAdoptionLevel"
                        value={formData.aiAdoptionLevel}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.aiAdoptionLevel ? 'border-red-500' : 'border-slate-300'} focus:ring-2 focus:ring-leap-orange focus:border-transparent bg-white`}
                      >
                        <option value="">Select level</option>
                        <option value="None">None</option>
                        <option value="Exploring">Exploring</option>
                        <option value="Piloting">Piloting</option>
                        <option value="Actively Using">Actively Using</option>
                      </select>
                      {errors.aiAdoptionLevel && <p className="text-red-500 text-sm mt-1">{errors.aiAdoptionLevel}</p>}
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-leap-black mb-2">
                        Desired timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-leap-orange focus:border-transparent bg-white"
                      >
                        <option value="">Select timeline</option>
                        <option value="Immediate">Immediate</option>
                        <option value="3-6 months">3–6 months</option>
                        <option value="6-12 months">6–12 months</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="teamsToTrain" className="block text-sm font-medium text-leap-black mb-2">
                      Teams or roles you want trained *
                    </label>
                    <input
                      type="text"
                      id="teamsToTrain"
                      name="teamsToTrain"
                      value={formData.teamsToTrain}
                      onChange={handleChange}
                      placeholder="e.g., Leadership, IT, Marketing, Product Design"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.teamsToTrain ? 'border-red-500' : 'border-slate-300'} focus:ring-2 focus:ring-leap-orange focus:border-transparent`}
                    />
                    {errors.teamsToTrain && <p className="text-red-500 text-sm mt-1">{errors.teamsToTrain}</p>}
                  </div>
                </div>
              </div>

              {/* Funding & Budget */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-leap-black mb-6 pb-2 border-b border-slate-200">
                  Funding & Budget
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fundingInterest" className="block text-sm font-medium text-leap-black mb-2">
                      Are you interested in exploring grants or funding options? *
                    </label>
                    <select
                      id="fundingInterest"
                      name="fundingInterest"
                      value={formData.fundingInterest}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.fundingInterest ? 'border-red-500' : 'border-slate-300'} focus:ring-2 focus:ring-leap-orange focus:border-transparent bg-white`}
                    >
                      <option value="">Select option</option>
                      <option value="Yes">Yes</option>
                      <option value="Not sure">Not sure</option>
                      <option value="No">No</option>
                    </select>
                    {errors.fundingInterest && <p className="text-red-500 text-sm mt-1">{errors.fundingInterest}</p>}
                  </div>
                  <div>
                    <label htmlFor="budgetRange" className="block text-sm font-medium text-leap-black mb-2">
                      Estimated training budget range (Optional)
                    </label>
                    <input
                      type="text"
                      id="budgetRange"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      placeholder="e.g., $5,000 - $15,000"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-leap-orange focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Consent */}
              <div className="mb-8">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 rounded border-slate-300 text-leap-orange focus:ring-leap-orange"
                  />
                  <span className="text-slate-700">
                    I agree to be contacted by LeapUX regarding AI training and related services *
                  </span>
                </label>
                {errors.consent && <p className="text-red-500 text-sm mt-1">{errors.consent}</p>}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-leap-orange hover:bg-leap-red text-white py-4 text-lg font-semibold"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-leap-black mb-6">
              Let's Build Your AI Capability—Together
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              AI is reshaping how organizations operate, design, and compete. With the right training, your teams can lead that change with confidence.
            </p>
            <Button asChild size="lg" className="bg-leap-orange hover:bg-leap-red text-white px-8">
              <Link to="/contact">Contact LeapUX Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AITraining;
