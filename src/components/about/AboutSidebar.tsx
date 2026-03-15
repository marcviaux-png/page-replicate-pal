const AboutSidebar = () => (
  <aside className="lg:col-span-4 space-y-10">
    <div className="bg-card p-10 border border-border rounded-3xl shadow-sm">
      <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-8">Capabilities</h3>
      <ul className="space-y-6">
        <li className="flex flex-col">
          <span className="text-4xl font-bold text-foreground">15+</span>
          <span className="text-xs text-muted-foreground font-bold uppercase tracking-widest mt-1">Years Experience</span>
        </li>
        <li className="flex flex-col">
          <span className="text-4xl font-bold text-foreground">2012</span>
          <span className="text-xs text-muted-foreground font-bold uppercase tracking-widest mt-1">Founded</span>
        </li>
        <li className="flex flex-col">
          <span className="text-4xl font-bold text-foreground">EN / FR</span>
          <span className="text-xs text-muted-foreground font-bold uppercase tracking-widest mt-1">Fully Bilingual Delivery</span>
        </li>
      </ul>
    </div>

    <div className="bg-[hsl(var(--leap-brand))] text-primary-foreground p-10 rounded-3xl shadow-lg">
      <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">LeapUX Philosophy</div>
    </div>
  </aside>
);

export default AboutSidebar;
