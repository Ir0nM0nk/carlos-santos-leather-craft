import heroImage from "@/assets/gallery/work-4.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Produção de cortantes industriais"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Desde 1994
          </p>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-tight mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Precisão em
            <br />
            <span className="text-gradient-copper">Cada Corte</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            Mestres artesãos na produção de cortantes para as mais prestigiadas 
            marcas mundiais de calçado. Tradição, inovação e excelência há mais de 30 anos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <Button asChild size="lg" cut="right" className="px-8 py-4 tracking-wider uppercase text-sm">
              <a href="#contacto">Solicitar Orçamento</a>
            </Button>
            <Button asChild variant="outline" size="lg" cut="left" className="px-8 py-4 tracking-wider uppercase text-sm">
              <a href="#galeria">Ver Portfolio</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
