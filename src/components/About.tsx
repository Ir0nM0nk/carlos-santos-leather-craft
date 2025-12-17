import aboutImage from "@/assets/gallery/work-7.jpg";

const About = () => {
  const stats = [
    { value: "30+", label: "Anos de Experiência" },
    { value: "500+", label: "Clientes Satisfeitos" },
    { value: "50k+", label: "Cortantes Produzidos" },
    { value: "100%", label: "Compromisso" },
  ];

  return (
    <section id="sobre" className="section-padding metal-texture">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={aboutImage}
                alt="Artesão a trabalhar num cortante"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary/30 -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Sobre Nós
            </p>
            
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-8 leading-tight">
              Tradição e Inovação
              <br />
              <span className="text-gradient-copper">em Harmonia</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                A <strong className="text-foreground">Santos & Carlos</strong> nasceu da paixão pelo trabalho artesanal 
                e da visão de criar os melhores cortantes para a indústria do calçado. 
                Há mais de três décadas, combinamos técnicas tradicionais com tecnologia 
                de ponta para oferecer produtos de excelência.
              </p>
              <p>
                A nossa equipa de mestres artesãos trabalha diariamente com materiais de 
                primeira qualidade, garantindo a precisão milimétrica que as grandes 
                marcas mundiais exigem. Do metal bruto ao cortante perfeito, cada peça 
                que sai da nossa oficina carrega o selo da qualidade portuguesa.
              </p>
              <p>
                Somos parceiros de confiança das mais prestigiadas marcas de luxo, 
                contribuindo para a criação de calçado que define tendências em todo o mundo.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-border">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="font-display text-3xl md:text-4xl font-semibold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
