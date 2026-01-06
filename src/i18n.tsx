import React, { createContext, useContext, useState, ReactNode, useMemo } from "react";

type Lang = "pt" | "en";

type I18nContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const translations: Record<Lang, Record<string, string>> = {
  pt: {
    // Header / Nav
    "nav.sobre": "Sobre Nós",
    "nav.parceiros": "Parceiros",
    "nav.galeria": "Galeria",
    "nav.contacto": "Contacto",

    // Hero
    "hero.since": "Desde 1994",
    "hero.title.line1": "Precisão em",
    "hero.title.line2": "Cada Corte",
    "hero.subtitle": "Mestres artesãos na produção de cortantes para as mais prestigiadas marcas mundiais de calçado. Tradição, inovação e excelência há mais de 30 anos.",
    "hero.cta.quote": "Solicitar Orçamento",
    "hero.cta.portfolio": "Ver Portfolio",

    // About
    "about.kicker": "Sobre Nós",
    "about.h1.line1": "Tradição e Inovação",
    "about.h1.line2": "em Harmonia",
    "about.p.1": "A Santos & Carlos nasceu da paixão pelo trabalho artesanal e da visão de criar os melhores cortantes para a indústria do calçado. Há mais de três décadas, combinamos técnicas tradicionais com tecnologia de ponta para oferecer produtos de excelência.",
    "about.p.2": "A nossa equipa de mestres artesãos trabalha diariamente com materiais de primeira qualidade, garantindo a precisão milimétrica que as grandes marcas mundiais exigem. Do metal bruto ao cortante perfeito, cada peça que sai da nossa oficina carrega o selo da qualidade portuguesa.",
    "about.p.3": "Somos parceiros de confiança das mais prestigiadas marcas de luxo, contribuindo para a criação de calçado que define tendências em todo o mundo.",
    "about.stats.0.label": "Anos de Experiência",
    "about.stats.1.label": "Clientes Satisfeitos",
    "about.stats.2.label": "Cortantes Produzidos",
    "about.stats.3.label": "Compromisso",

    // Contact
    "contact.kicker": "Entre em Contacto",
    "contact.h1.line1": "Vamos",
    "contact.h1.line2": "Trabalhar Juntos",
    "contact.subtitle": "Interessado nos nossos serviços? Entre em contacto connosco para discutir o seu projeto ou solicitar um orçamento.",
    "contact.form.title": "Envie-nos uma Mensagem",
    "contact.label.name": "Nome Completo",
    "contact.label.phone": "Telefone",
    "contact.label.email": "Email",
    "contact.label.message": "Mensagem",
    "contact.placeholder.name": "O seu nome",
    "contact.placeholder.phone": "+351 000 000 000",
    "contact.placeholder.email": "email@exemplo.pt",
    "contact.placeholder.message": "Descreva o seu projeto ou pedido...",
    "contact.button.sending": "A Enviar...",
    "contact.button.send": "Enviar Mensagem",
    "contact.toast.title": "Mensagem Enviada",
    "contact.toast.description": "Entraremos em contacto consigo brevemente.",

    // Partners & Gallery
    "partners.kicker": "Parceiros de Excelência",
    "partners.h1": "Marcas que Confiam em Nós",
    "partners.sub": "E muitas outras marcas de prestígio que confiam na nossa qualidade e profissionalismo.",

    // Gallery
    "gallery.kicker": "O Nosso Trabalho",
    "gallery.h1": "Galeria de Produção",
    "gallery.subtitle": "Cada cortante é uma obra de precisão. Explore o nosso processo de fabrico e a dedicação que colocamos em cada peça.",
    "gallery.lightbox.close": "Fechar",

    // Footer
    "footer.quickLinks": "Links Rápidos",
    "footer.contactos": "Contactos",
    "footer.brand.desc": "Especialistas em cortantes para a indústria do calçado há mais de 30 anos. Qualidade, precisão e excelência em cada peça.",
    "footer.madeIn": "Feito com dedicação em Portugal",
    "footer.copyright": "© {year} Santos & Carlos. Todos os direitos reservados.",
  },
  en: {
    // Header / Nav
    "nav.sobre": "About",
    "nav.parceiros": "Partners",
    "nav.galeria": "Gallery",
    "nav.contacto": "Contact",

    // Hero
    "hero.since": "Since 1994",
    "hero.title.line1": "Precision in",
    "hero.title.line2": "Every Cut",
    "hero.subtitle": "Master craftsmen producing dies for the world’s most prestigious footwear brands. Tradition, innovation and excellence for over 30 years.",
    "hero.cta.quote": "Request a Quote",
    "hero.cta.portfolio": "View Portfolio",

    // About
    "about.kicker": "About",
    "about.h1.line1": "Tradition and Innovation",
    "about.h1.line2": "in Harmony",
    "about.p.1": "Santos & Carlos was born from a passion for craftsmanship and the vision of creating the best dies for the footwear industry. For over three decades we have combined traditional techniques with cutting-edge technology to deliver products of excellence.",
    "about.p.2": "Our team of master craftsmen works daily with top-quality materials, ensuring the millimetre precision that major global brands demand. From raw metal to the perfect die, every piece leaving our workshop bears the mark of Portuguese quality.",
    "about.p.3": "We are trusted partners of the most prestigious luxury brands, contributing to footwear that sets trends worldwide.",
    "about.stats.0.label": "Years of Experience",
    "about.stats.1.label": "Happy Clients",
    "about.stats.2.label": "Dies Produced",
    "about.stats.3.label": "Commitment",

    // Contact
    "contact.kicker": "Get in Touch",
    "contact.h1.line1": "Let's",
    "contact.h1.line2": "Work Together",
    "contact.subtitle": "Interested in our services? Contact us to discuss your project or request a quote.",
    "contact.form.title": "Send Us a Message",
    "contact.label.name": "Full Name",
    "contact.label.phone": "Phone",
    "contact.label.email": "Email",
    "contact.label.message": "Message",
    "contact.placeholder.name": "Your name",
    "contact.placeholder.phone": "+351 000 000 000",
    "contact.placeholder.email": "email@example.com",
    "contact.placeholder.message": "Describe your project or request...",
    "contact.button.sending": "Sending...",
    "contact.button.send": "Send Message",
    "contact.toast.title": "Message Sent",
    "contact.toast.description": "We will contact you shortly.",

    // Partners & Gallery
    "partners.kicker": "Partners of Excellence",
    "partners.h1": "Brands that Trust Us",
    "partners.sub": "And many other prestigious brands trust our quality and professionalism.",

    // Gallery
    "gallery.kicker": "Our Work",
    "gallery.h1": "Production Gallery",
    "gallery.subtitle": "Every die is a piece of precision. Explore our manufacturing process and the care we put into each piece.",
    "gallery.lightbox.close": "Close",

    // Footer
    "footer.quickLinks": "Quick Links",
    "footer.contactos": "Contacts",
    "footer.brand.desc": "Specialists in dies for the footwear industry for over 30 years. Quality, precision and excellence in every piece.",
    "footer.madeIn": "Made with care in Portugal",
    "footer.copyright": "© {year} Santos & Carlos. All rights reserved.",
  },
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const ls = localStorage.getItem("lang");
      return (ls as Lang) || "pt";
    } catch {
      return "pt";
    }
  });

  const setLangAndSave = (l: Lang) => {
    try {
      localStorage.setItem("lang", l);
    } catch {}
    setLang(l);
  };

  const t = (key: string) => {
    const dict = translations[lang] || {};
    return dict[key] ?? key;
  };

  const value = useMemo(() => ({ lang, setLang: setLangAndSave, t }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useTranslation = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useTranslation must be used within I18nProvider");
  return ctx;
};

export default I18nContext;
