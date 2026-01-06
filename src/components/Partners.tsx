import { useTranslation } from "@/i18n";

const Partners = () => {
  const { t } = useTranslation();
  const partners = [
    { name: "Birkenstock", logo: "src/assets/birkenstock.png" },
    { name: "Louis Vuitton", logo: "src/assets/LV.png" },
    { name: "Coindu ", logo: "src/assets/coindu.png" },
    { name: "S&CC Portugal", logo: "src/assets/scc.png" },
    { name: "Ecco", logo: "src/assets/ecco.png" },
    { name: "Ellen Truijen", logo: "src/assets/ellen.png" },
    { name: "Belcinto", logo: "src/assets/belcinto.png" },
  ];

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section id="parceiros" className="section-padding bg-secondary/30 overflow-hidden">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            {t("partners.kicker")}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">
            {t("partners.h1")} <span className="text-gradient-copper"></span>
          </h2>
        </div>
      </div>

      <div className="relative">
        <div className="flex animate-marquee">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center h-48 w-64 mx-2 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-32 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container-narrow">
        <p className="text-center text-muted-foreground mt-12 text-sm">
          {t("partners.sub")}
        </p>
      </div>
    </section>
  );
};

export default Partners;
