const Partners = () => {
  const partners = [
    "BIRKENSTOCK",
    "LOUIS VUITTON",
    "GUCCI",
    "PRADA",
    "HERMÈS",
    "CHANEL",
  ];

  return (
    <section id="parceiros" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Parceiros de Excelência
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">
            Marcas que <span className="text-gradient-copper">Confiam</span> em Nós
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-24 px-6 border border-border/50 bg-card/50 hover:border-primary/50 transition-colors duration-300 group"
            >
              <span className="font-display text-lg md:text-xl tracking-widest text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {partner}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12 text-sm">
          E muitas outras marcas de prestígio que confiam na nossa qualidade e profissionalismo.
        </p>
      </div>
    </section>
  );
};

export default Partners;
