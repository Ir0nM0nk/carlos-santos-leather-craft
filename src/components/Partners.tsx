import { useTranslation } from "@/i18n";

const Partners = () => {
  const { t } = useTranslation();
  const partners = [
    { name: "BIRKENSTOCK", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Birkenstock-Logo.svg/320px-Birkenstock-Logo.svg.png" },
    { name: "LOUIS VUITTON", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Louis_Vuitton_logo_and_wordmark.svg/320px-Louis_Vuitton_logo_and_wordmark.svg.png" },
    { name: "GUCCI", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Gucci_logo.svg/320px-Gucci_logo.svg.png" },
    { name: "PRADA", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Prada-Logo.svg/320px-Prada-Logo.svg.png" },
    { name: "HERMÈS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Herm%C3%A8s_Paris.svg/320px-Herm%C3%A8s_Paris.svg.png" },
    { name: "CHANEL", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Chanel_logo_interlocking_cs.svg/320px-Chanel_logo_interlocking_cs.svg.png" },
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
              className="flex-shrink-0 flex items-center justify-center h-24 w-48 mx-8 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 max-w-full object-contain"
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
