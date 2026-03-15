import { ReactNode } from 'react';

interface AboutContentSectionProps {
  barColor: 'brand' | 'orange';
  title: string;
  children: ReactNode;
}

const AboutContentSection = ({ barColor, title, children }: AboutContentSectionProps) => (
  <section>
    <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-4">
      <span className={`w-12 h-1 ${barColor === 'brand' ? 'bg-[hsl(var(--leap-brand))]' : 'bg-primary'}`}></span>
      {title}
    </h2>
    <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
      {children}
    </div>
  </section>
);

export default AboutContentSection;
