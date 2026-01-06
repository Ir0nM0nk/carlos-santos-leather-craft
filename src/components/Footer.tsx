import { useTranslation } from "@/i18n";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const quickLinks = [
    { href: "#sobre", label: t("nav.sobre") },
    { href: "#parceiros", label: t("nav.parceiros") },
    { href: "#galeria", label: t("nav.galeria") },
    { href: "#contacto", label: t("nav.contacto") },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container-narrow py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-semibold mb-4">
              Santos <span className="text-primary">&</span> Carlos
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {t("footer.brand.desc")}
            </p>
            <p className="text-xs text-muted-foreground">
              Rua da Gandara, Nº 1061
              <br />
              3720-701 São Roque, Oliveira de Azeméis
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium uppercase tracking-wider text-sm mb-6">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium uppercase tracking-wider text-sm mb-6">
              {t("footer.contactos")}
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="tel:+351256872989" className="hover:text-primary transition-colors">
                  256 872 989
                </a>
              </li>
              <li>
                <a href="mailto:santosecarlos@sapo.pt" className="hover:text-primary transition-colors">
                  santosecarlos@sapo.pt
                </a>
              </li>
              <li>
                Segunda a Sexta: 08:00 - 18:00
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-narrow py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            {t("footer.copyright").replace("{year}", String(currentYear))}
          </p>
          <p className="text-xs text-muted-foreground">
            {t("footer.madeIn")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
