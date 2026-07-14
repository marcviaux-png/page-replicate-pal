import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { 
  Brain, 
  Zap,
  BarChart3,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Users,
  Target,
  Eye,
  Clock,
  DollarSign,
  Bot,
  MessageSquare,
  Calendar,
  FileText,
  Phone,
  LayoutDashboard,
  Shield
} from 'lucide-react';
import { z } from 'zod';
import heroAiServices from '@/assets/hero-ai-services.jpg';
import Seo from '@/components/Seo';
import { sendFormSubmission } from '@/lib/sendFormSubmission';

const leadSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100),
  workEmail: z.string().trim().email("Invalid email address").max(255),
  organization: z.string().trim().min(1, "Organization is required").max(100),
  role: z.string().trim().min(1, "Role is required").max(100),
  organizationType: z.string().min(1, "Organization type is required"),
  primaryGoals: z.array(z.string()).min(1, "Please select at least one goal"),
  serviceInterest: z.string().min(1, "Please select a service"),
  challenge: z.string().trim().max(1000).optional(),
  consent: z.boolean().refine(val => val === true, "You must agree to be contacted")
});

type LeadFormData = z.infer<typeof leadSchema>;

const AIServices = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    workEmail: '',
    organization: '',
    role: '',
    organizationType: '',
    primaryGoals: [],
    serviceInterest: '',
    challenge: '',
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

  const handleGoalChange = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      primaryGoals: prev.primaryGoals.includes(goal)
        ? prev.primaryGoals.filter(g => g !== goal)
        : [...prev.primaryGoals, goal]
    }));
    if (errors.primaryGoals) {
      setErrors(prev => ({ ...prev, primaryGoals: undefined }));
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

    const d = result.data;
    const subject = `AI Services enquiry from ${d.fullName}${d.organization ? ` (${d.organization})` : ''}`;
    const body = [
      `Name: ${d.fullName}`,
      `Work email: ${d.workEmail}`,
      `Organization: ${d.organization}`,
      `Role: ${d.role}`,
      `Organization type: ${d.organizationType}`,
      `Primary goals: ${d.primaryGoals.join(', ')}`,
      `Service interest: ${d.serviceInterest}`,
      '',
      'Challenge:',
      d.challenge || '—',
    ].join('\n');
    window.location.href = `mailto:contact@leapux.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    toast({
      title: "Opening your email app…",
      description: "Your request is pre-filled and ready to send to contact@leapux.com.",
    });
    
    setFormData({
      fullName: '',
      workEmail: '',
      organization: '',
      role: '',
      organizationType: '',
      primaryGoals: [],
      serviceInterest: '',
      challenge: '',
      consent: false
    });
    setIsSubmitting(false);
  };

  const howWeHelp = [
    "Identify usability issues before they impact adoption or revenue",
    "Automate high-friction workflows with AI-ready solutions",
    "Continuously improve digital experiences using real user data",
    "Introduce AI responsibly, transparently, and effectively"
  ];

  const productizedOffers = [
    {
      icon: Eye,
      name: "Usability Pulse™",
      tagline: "A High-Value UX Audit (7 Days)",
      description: "A fast, AI-assisted UX audit that finds the leaks before they cost you customers.",
      bestFor: "SaaS companies and enterprise teams with critical user flows (sign-up, checkout, submissions, onboarding).",
      whatWeReview: "One high-impact user journey where usability matters most.",
      howItWorks: [
        "AI-assisted heuristic evaluation",
        "5 remote user tests",
        "AI synthesis to identify patterns and friction points"
      ],
      whatYouGet: [
        "15–20 page findings deck",
        "10 prioritized UX fixes with impact estimates"
      ],
      timeline: "7 business days",
      investment: "$2,500 flat",
      cta: "Get a UX Pulse Assessment"
    },
    {
      icon: Zap,
      name: "FlowFix Blueprint™",
      tagline: "A Strategic AI & Automation Roadmap (2 Weeks)",
      description: "A clear, actionable roadmap to automate clunky workflows with AI—without guesswork.",
      bestFor: "Government and enterprise teams bogged down by manual, repetitive processes.",
      whatWeReview: "1–2 key workflows with high automation potential.",
      howItWorks: [
        "Stakeholder interviews",
        "AI-assisted workflow mapping",
        "Solution and feasibility evaluation"
      ],
      whatYouGet: [
        "Workflow maps highlighting bottlenecks",
        "Prioritized automation roadmap",
        "Estimated ROI and effort level"
      ],
      timeline: "2 weeks",
      investment: "$4,000 flat",
      cta: "Request a FlowFix Blueprint"
    },
    {
      icon: BarChart3,
      name: "UX Continuum™",
      tagline: "Always-On UX & AI Insights (Subscription)",
      description: "Ongoing usability monitoring, AI analysis, and actionable improvements—every month.",
      bestFor: "SaaS, public sector, or enterprise teams that want continuous UX improvement without hiring internally.",
      whatWeReview: "Top 3–5 user flows that drive adoption, efficiency, or revenue.",
      howItWorks: [
        "Monthly usability testing",
        "AI-powered sentiment analysis (support tickets, feedback, usage)",
        "Continuous insight synthesis"
      ],
      whatYouGet: [
        "Monthly UX Health Dashboard",
        "Short video summary with prioritized action items"
      ],
      timeline: "Rolling monthly",
      investment: "$3,500 / month",
      cta: "Start UX Continuum"
    }
  ];

  const bundledPlans = [
    {
      name: "Base AI Plan",
      price: "$49–$99 / month",
      features: ["AI Website Chatbot", "AI Lead Scoring", "Basic CRM Sync"]
    },
    {
      name: "Marketing AI Plan",
      price: "$149–$299 / month",
      features: ["AI Blog Strategy", "Social Media Auto-Posting", "Review Generation", "AI Nurture Emails"]
    },
    {
      name: "Growth Automation Plan",
      price: "$299–$699 / month",
      features: ["AI Appointment Setter", "AI Reporting Dashboard", "Advanced CRM Automations", "Document Generator"]
    },
    {
      name: "Full AI Ops Plan",
      price: "$899–$1,499 / month",
      features: ["Multi-system automations", "Custom LLM agents", "Full automation management"]
    }
  ];

  const individualAddOns = [
    { icon: Bot, name: "AI Website Chatbot", price: "$49 / month" },
    { icon: Target, name: "AI Lead Scoring", price: "$29 / month" },
    { icon: MessageSquare, name: "AI Smart Autoresponder", price: "$29 / month" },
    { icon: Sparkles, name: "AI Review Generator", price: "$49 / month" },
    { icon: TrendingUp, name: "AI Social Media Auto-Posting", price: "$129 / month" },
    { icon: FileText, name: "AI Blog & SEO Content Engine", price: "$199 / month" },
    { icon: Calendar, name: "AI Appointment Setter", price: "$99 / month" },
    { icon: Users, name: "AI CRM Updater", price: "$49 / month" },
    { icon: Phone, name: "AI Call Summaries", price: "$59 / month" },
    { icon: LayoutDashboard, name: "AI Analytics Dashboard", price: "$129 / month" }
  ];

  const whyWorkWithUs = [
    "UX-first, not tool-first",
    "Human-centered AI (ethical, explainable, practical)",
    "Fixed-scope offers with clear outcomes",
    "Designed for enterprise and public-sector realities"
  ];

  const goals = [
    "Improve usability",
    "Automate workflows",
    "Reduce manual effort",
    "Increase conversions",
    "Explore AI opportunities"
  ];

  const services = [
    "Usability Pulse™",
    "FlowFix Blueprint™",
    "UX Continuum™",
    "AI Add-Ons",
    "Not sure yet"
  ];

  return (
    <div className="animate-in bg-leap-light">
      <Seo title='AI Services | LeapUX' description='From AI strategy to implementation — LeapUX helps organizations design and deliver AI-powered services that work in the real world.' path='/ai-services' />
      {/* Hero Section */}
      <section className="relative bg-leap-black text-leap-white pt-48 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroAiServices} 
            alt="AI Services Background" 
            className="w-full h-full object-cover hero-image"
          />
          <div className="absolute inset-0 image-overlay"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-8">AI-Powered UX & Digital Transformation</h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light mb-8">
              Turn complexity into clarity. We help organizations improve usability, streamline workflows, and scale smarter using practical, human-centered AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#get-started">
                <Button size="lg" className="bg-leap-orange hover:brightness-110 text-white px-10 py-6 text-sm font-bold uppercase tracking-widest rounded-full shadow-lg transition-all">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a href="#offers">
                <Button size="lg" className="border border-white/20 bg-transparent hover:bg-white/10 text-white px-10 py-6 text-sm font-bold uppercase tracking-widest rounded-full">
                  View Services
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-leap-black mb-4">
                How We Help
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {howWeHelp.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <CheckCircle className="w-6 h-6 text-leap-orange shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-lg">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-leap-orange/10 to-leap-red/10 border border-leap-orange/20 rounded-2xl p-8 text-center">
              <p className="text-lg text-slate-700 mb-4">
                Ready to see how AI can transform your organization's digital experience?
              </p>
              <a href="#get-started">
                <Button className="bg-leap-orange hover:bg-leap-red text-white px-8 py-4 text-sm font-bold uppercase tracking-widest rounded-full">
                  Explore Your AI Opportunity
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Productized AI Offers */}
      <section id="offers" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4">Productized AI Offers</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-leap-black">
                Clear outcomes. Fixed scope. Fast results.
              </h3>
            </div>
            <div className="space-y-12">
              {productizedOffers.map((offer, index) => (
                <div key={index} className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-200">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-leap-orange/10 rounded-xl flex items-center justify-center shrink-0">
                      <offer.icon className="w-7 h-7 text-leap-orange" />
                    </div>
                    <div>
                      <span className="text-leap-orange font-semibold text-sm">{index + 1}.</span>
                      <h3 className="text-2xl font-bold text-leap-black">{offer.name}</h3>
                      <p className="text-slate-600 font-medium">{offer.tagline}</p>
                    </div>
                  </div>
                  <p className="text-lg text-slate-700 mb-6">{offer.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-leap-black mb-2 flex items-center gap-2">
                          <Users className="w-4 h-4 text-leap-orange" /> Best for
                        </h4>
                        <p className="text-slate-600">{offer.bestFor}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-leap-black mb-2 flex items-center gap-2">
                          <Target className="w-4 h-4 text-leap-orange" /> What we review
                        </h4>
                        <p className="text-slate-600">{offer.whatWeReview}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-leap-black mb-2">How it works</h4>
                        <ul className="space-y-1">
                          {offer.howItWorks.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-600">
                              <ArrowRight className="w-4 h-4 text-leap-orange shrink-0 mt-1" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-leap-black mb-2">What you get</h4>
                        <ul className="space-y-1">
                          {offer.whatYouGet.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-600">
                              <CheckCircle className="w-4 h-4 text-leap-orange shrink-0 mt-1" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-slate-400" />
                      <span className="text-slate-700 font-medium">{offer.timeline}</span>
                    </div>
                    <Button asChild className="ml-auto bg-leap-orange hover:bg-leap-red text-white">
                      <a href="#get-started">👉 {offer.cta}</a>
                    </Button>
                  </div>
                </div>
              ))}
              
              {/* CTA after Offers */}
              <div className="text-center pt-8">
                <p className="text-lg text-slate-600 mb-6">
                  Not sure which service is right for you? Let's find out together.
                </p>
                <a href="#get-started">
                  <Button size="lg" className="bg-leap-orange hover:bg-leap-red text-white px-10 py-5 text-sm font-bold uppercase tracking-widest rounded-full">
                    Find the Right Service
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Add-Ons */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4">AI Add-Ons</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-leap-black mb-4">
                Build Recurring Value, Only Where You Need It
              </h3>
              <p className="text-slate-600 text-lg">
                Choose individual AI capabilities or bundle them into plans for simplicity.
              </p>
            </div>

            {/* Bundled Plans */}
            <div className="mb-16">
              <h4 className="text-xl font-bold text-leap-black mb-6 text-center">Bundled AI Plans</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {bundledPlans.map((plan, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
                    <h5 className="font-bold text-leap-black mb-2">{plan.name}</h5>
                    <p className="text-leap-orange font-bold text-lg mb-4">{plan.price}</p>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-leap-orange shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Individual Add-Ons */}
            <div>
              <h4 className="text-xl font-bold text-leap-black mb-6 text-center">Individual AI Add-Ons</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {individualAddOns.map((addon, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <addon.icon className="w-5 h-5 text-leap-orange" />
                      <span className="font-medium text-leap-black text-sm">{addon.name}</span>
                    </div>
                    <p className="text-leap-orange font-bold">{addon.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h2 className="text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4">Why Work With Us</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-leap-black mb-6">
                  Practical AI that delivers real results
                </h3>
              </div>
              <div className="space-y-4">
                {whyWorkWithUs.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 bg-slate-50 p-5 rounded-xl border border-slate-200">
                    <Shield className="w-5 h-5 text-leap-orange shrink-0" />
                    <span className="text-leap-black font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <a href="#get-started">
                <Button className="bg-leap-black hover:bg-leap-black/90 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest rounded-full">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Generation Form */}
      <section id="get-started" className="py-20 bg-gradient-to-r from-leap-orange to-leap-red">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let's Talk About Your AI Opportunity
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.fullName ? 'border-red-500' : 'border-slate-300'} focus:ring-2 focus:ring-leap-orange focus:border-transparent`}
                    placeholder="Your name"
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Work Email *</label>
                  <input
                    type="email"
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.workEmail ? 'border-red-500' : 'border-slate-300'} focus:ring-2 focus:ring-leap-orange focus:border-transparent`}
                    placeholder="you@company.com"
                  />
                  {errors.workEmail && <p className="text-red-500 text-sm mt-1">{errors.workEmail}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Organization *</label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.organization ? 'border-red-500' : 'border-slate-300'} focus:ring-2 focus:ring-leap-orange focus:border-transparent`}
                    placeholder="Company name"
                  />
                  {errors.organization && <p className="text-red-500 text-sm mt-1">{errors.organization}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Role / Title *</label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.role ? 'border-red-500' : 'border-slate-300'} focus:ring-2 focus:ring-leap-orange focus:border-transparent`}
                    placeholder="Your role"
                  />
                  {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">Organization Type *</label>
                <select
                  name="organizationType"
                  value={formData.organizationType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.organizationType ? 'border-red-500' : 'border-slate-300'} focus:ring-2 focus:ring-leap-orange focus:border-transparent`}
                >
                  <option value="">Select type</option>
                  <option value="SaaS">SaaS</option>
                  <option value="Enterprise">Enterprise</option>
                  <option value="Government / Public Sector">Government / Public Sector</option>
                  <option value="Non-profit">Non-profit</option>
                </select>
                {errors.organizationType && <p className="text-red-500 text-sm mt-1">{errors.organizationType}</p>}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-3">Primary Goal (select all that apply) *</label>
                <div className="grid md:grid-cols-2 gap-3">
                  {goals.map((goal) => (
                    <label key={goal} className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 cursor-pointer hover:bg-slate-50">
                      <input
                        type="checkbox"
                        checked={formData.primaryGoals.includes(goal)}
                        onChange={() => handleGoalChange(goal)}
                        className="w-4 h-4 text-leap-orange rounded focus:ring-leap-orange"
                      />
                      <span className="text-slate-700">{goal}</span>
                    </label>
                  ))}
                </div>
                {errors.primaryGoals && <p className="text-red-500 text-sm mt-1">{errors.primaryGoals}</p>}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">Which service are you interested in? *</label>
                <select
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.serviceInterest ? 'border-red-500' : 'border-slate-300'} focus:ring-2 focus:ring-leap-orange focus:border-transparent`}
                >
                  <option value="">Select service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
                {errors.serviceInterest && <p className="text-red-500 text-sm mt-1">{errors.serviceInterest}</p>}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">Brief description of your challenge (optional)</label>
                <textarea
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-leap-orange focus:border-transparent"
                  placeholder="Tell us about your current challenges or goals..."
                />
              </div>

              <div className="mb-8">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="w-4 h-4 text-leap-orange rounded focus:ring-leap-orange mt-1"
                  />
                  <span className="text-sm text-slate-600">
                    I agree to be contacted about my inquiry. *
                  </span>
                </label>
                {errors.consent && <p className="text-red-500 text-sm mt-1">{errors.consent}</p>}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-leap-orange hover:bg-leap-red text-white py-6 text-lg font-bold"
              >
                {isSubmitting ? 'Submitting...' : '👉 Request a Consultation'}
              </Button>

              <p className="text-center text-sm text-slate-500 mt-4">
                No spam. No obligation. We'll review your needs and recommend the right next step.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServices;