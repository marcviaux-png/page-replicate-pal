import { useState } from 'react';
import { Mail, Send, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50, "First name must be less than 50 characters"),
  lastName: z.string().trim().min(1, "Last name is required").max(50, "Last name must be less than 50 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  organization: z.string().trim().max(100, "Organization name must be less than 100 characters").optional(),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 1-2 business days.",
    });
    
    setFormData({ firstName: '', lastName: '', email: '', organization: '', message: '' });
    setIsSubmitting(false);
  };

  const nextSteps = [
    "We'll review your message and get back to you within 1-2 business days.",
    "We'll schedule a call to understand your needs and context.",
    "If there's a fit, we'll propose an approach tailored to your situation."
  ];

  return (
    <div className="animate-in">
      {/* Hero Section */}
      <section className="relative bg-leap-black text-leap-white pt-48 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2000" 
            alt="Contact Background" 
            className="w-full h-full object-cover hero-image"
          />
          <div className="absolute inset-0 image-overlay"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-8">Let's Talk</h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              Ready to deliver a service that works? Get in touch and let's discuss how we can help your organization deliver with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-leap-black mb-4 leading-tight">
                Tell us about your project
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                Share a few details and we'll reach out to schedule a conversation.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Your first name"
                      className={`bg-white border-slate-200 ${errors.firstName ? 'border-red-500' : ''}`}
                    />
                    {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Your last name"
                      className={`bg-white border-slate-200 ${errors.lastName ? 'border-red-500' : ''}`}
                    />
                    {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@organization.com"
                    className={`bg-white border-slate-200 ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="organization">Organization</Label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Your organization name"
                    className={`bg-white border-slate-200 ${errors.organization ? 'border-red-500' : ''}`}
                  />
                  {errors.organization && <p className="text-sm text-red-500">{errors.organization}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">How can we help?</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your challenge, project, or question..."
                    rows={6}
                    className={`bg-white border-slate-200 resize-y ${errors.message ? 'border-red-500' : ''}`}
                  />
                  {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-leap-orange hover:bg-leap-red text-white px-12 py-6 text-sm font-bold uppercase tracking-widest rounded-full"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Other ways to reach us */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <h4 className="text-xl font-bold text-leap-black mb-6">Other ways to reach us</h4>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-leap-orange/10 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-leap-orange" />
                    </div>
                    <div>
                      <p className="text-leap-black font-medium mb-1">Email us directly</p>
                      <a href="mailto:contact@leapux.com" className="text-leap-orange hover:text-leap-red transition-colors font-medium">
                        contact@leapux.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-leap-orange/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-leap-orange" />
                    </div>
                    <div>
                      <p className="text-leap-black font-medium mb-1">Call us</p>
                      <a href="tel:1-888-553-2789" className="text-leap-orange hover:text-leap-red transition-colors font-medium">
                        1-888-553-2789
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* What happens next */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <h4 className="text-xl font-bold text-leap-black mb-6">What happens next?</h4>
                <div className="space-y-5">
                  {nextSteps.map((step, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-7 h-7 bg-leap-orange/10 rounded-lg flex items-center justify-center shrink-0">
                        <span className="text-sm font-bold text-leap-orange">{i + 1}</span>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
