import aboutImage from "@/assets/gallery/work-7.jpg";
import { useTranslation } from "@/i18n";

const About = () => {
  const { t } = useTranslation();

  const stats = [
    { value: "30+", label: t("about.stats.0.label") },
    { value: "500+", label: t("about.stats.1.label") },
    { value: "50k+", label: t("about.stats.2.label") },
    { value: "100%", label: t("about.stats.3.label") },
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
                alt={t("about.kicker")}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary/30 -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              {t("about.kicker")}
            </p>
            
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-8 leading-tight">
              {t("about.h1.line1")}
              <br />
              <span className="text-gradient-copper">{t("about.h1.line2")}</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                {t("about.p.1")} 
              </p>
              <p>
                {t("about.p.2")} 
              </p>
              <p>
                {t("about.p.3")}
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
