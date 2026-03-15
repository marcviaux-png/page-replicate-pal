const AboutHero = () => (
  <section className="relative bg-foreground text-primary-foreground pt-48 pb-32 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000"
        alt="Office Environment"
        className="w-full h-full object-cover hero-image"
      />
      <div className="absolute inset-0 image-overlay"></div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-8">About LeapUX</h1>
      <p className="text-xl text-slate-300 max-w-3xl font-light leading-relaxed">
        LeapUX is a senior-led digital consultancy helping organizations design, build, and deliver end-to-end services that work in the real world.
      </p>
    </div>
  </section>
);

export default AboutHero;
