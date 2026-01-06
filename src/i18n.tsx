import React, { createContext, useContext, useState, ReactNode, useMemo } from "react";

export type Lang = "pt" | "en" | "fr" | "de" | "es";

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
  fr: {
    // Header / Nav
    "nav.sobre": "À propos",
    "nav.parceiros": "Partenaires",
    "nav.galeria": "Galerie",
    "nav.contacto": "Contact",

    // Hero
    "hero.since": "Depuis 1994",
    "hero.title.line1": "Précision",
    "hero.title.line2": "À chaque coupe",
    "hero.subtitle": "Maîtres artisans produisant des matrices pour les marques de chaussures les plus prestigieuses au monde. Tradition, innovation et excellence depuis plus de 30 ans.",
    "hero.cta.quote": "Demander un devis",
    "hero.cta.portfolio": "Voir le portfolio",

    // About
    "about.kicker": "À propos",
    "about.h1.line1": "Tradition et Innovation",
    "about.h1.line2": "en Harmonie",
    "about.p.1": "Santos & Carlos est né d'une passion pour l'artisanat et de la vision de créer les meilleures matrices pour l'industrie de la chaussure. Depuis plus de trois décennies, nous combinons techniques traditionnelles et technologie de pointe pour offrir des produits d'excellence.",
    "about.p.2": "Notre équipe de maîtres artisans travaille quotidiennement avec des matériaux de première qualité, garantissant la précision millimétrique exigée par les grandes marques mondiales. Du métal brut à la matrice parfaite, chaque pièce porte la marque de la qualité portugaise.",
    "about.p.3": "Nous sommes des partenaires de confiance des marques de luxe les plus prestigieuses, contribuant à la création de chaussures qui lancent les tendances dans le monde entier.",
    "about.stats.0.label": "Années d'expérience",
    "about.stats.1.label": "Clients satisfaits",
    "about.stats.2.label": "Matrices produites",
    "about.stats.3.label": "Engagement",

    // Contact
    "contact.kicker": "Nous contacter",
    "contact.h1.line1": "Travaillons",
    "contact.h1.line2": "Ensemble",
    "contact.subtitle": "Intéressé par nos services ? Contactez-nous pour discuter de votre projet ou demander un devis.",
    "contact.form.title": "Envoyez-nous un message",
    "contact.label.name": "Nom complet",
    "contact.label.phone": "Téléphone",
    "contact.label.email": "Email",
    "contact.label.message": "Message",
    "contact.placeholder.name": "Votre nom",
    "contact.placeholder.phone": "+351 000 000 000",
    "contact.placeholder.email": "email@example.com",
    "contact.placeholder.message": "Décrivez votre projet ou demande...",
    "contact.button.sending": "Envoi...",
    "contact.button.send": "Envoyer le message",
    "contact.toast.title": "Message envoyé",
    "contact.toast.description": "Nous vous contacterons bientôt.",

    // Footer
    "footer.quickLinks": "Liens rapides",
    "footer.contactos": "Contacts",
    "footer.brand.desc": "Spécialistes des matrices pour l'industrie de la chaussure depuis plus de 30 ans. Qualité, précision et excellence dans chaque pièce.",
    "footer.madeIn": "Fait avec soin au Portugal",
    "footer.copyright": "© {year} Santos & Carlos. Tous droits réservés.",

    // Partners & Gallery
    "partners.kicker": "Partenaires d'Excellence",
    "partners.h1": "Marques qui nous font confiance",
    "partners.sub": "Et de nombreuses autres marques prestigieuses font confiance à notre qualité et professionnalisme.",

    // Gallery
    "gallery.kicker": "Notre travail",
    "gallery.h1": "Galerie de production",
    "gallery.subtitle": "Chaque matrice est une œuvre de précision. Explorez notre processus de fabrication et le soin apporté à chaque pièce.",
    "gallery.lightbox.close": "Fermer",
  },
  de: {
    // Header / Nav
    "nav.sobre": "Über",
    "nav.parceiros": "Partner",
    "nav.galeria": "Galerie",
    "nav.contacto": "Kontakt",

    // Hero
    "hero.since": "Seit 1994",
    "hero.title.line1": "Präzision",
    "hero.title.line2": "Bei jedem Schnitt",
    "hero.subtitle": "Meisterhandwerker, die Stanzformen für die renommiertesten Schuhmarken der Welt herstellen. Tradition, Innovation und Exzellenz seit über 30 Jahren.",
    "hero.cta.quote": "Angebot anfordern",
    "hero.cta.portfolio": "Portfolio ansehen",

    // About
    "about.kicker": "Über uns",
    "about.h1.line1": "Tradition und Innovation",
    "about.h1.line2": "in Harmonie",
    "about.p.1": "Santos & Carlos wurde aus einer Leidenschaft für Handwerk und der Vision geboren, die besten Stanzformen für die Schuhindustrie zu schaffen. Seit über drei Jahrzehnten kombinieren wir traditionelle Techniken mit moderner Technologie, um Produkte von höchster Qualität zu liefern.",
    "about.p.2": "Unser Team von Meisterhandwerkern arbeitet täglich mit hochwertigen Materialien und gewährleistet die millimetergenaue Präzision, die große Marken verlangen. Vom Rohmetall bis zur perfekten Form — jedes Stück trägt das Siegel portugiesischer Qualität.",
    "about.p.3": "Wir sind vertrauenswürdige Partner der renommiertesten Luxusmarken und tragen zur Herstellung von Schuhen bei, die weltweit Trends setzen.",
    "about.stats.0.label": "Jahre Erfahrung",
    "about.stats.1.label": "Zufriedene Kunden",
    "about.stats.2.label": "Produzierte Formen",
    "about.stats.3.label": "Engagement",

    // Contact
    "contact.kicker": "Kontakt",
    "contact.h1.line1": "Lass uns",
    "contact.h1.line2": "Zusammenarbeiten",
    "contact.subtitle": "Interessiert an unseren Dienstleistungen? Kontaktieren Sie uns, um Ihr Projekt zu besprechen oder ein Angebot anzufordern.",
    "contact.form.title": "Senden Sie uns eine Nachricht",
    "contact.label.name": "Vollständiger Name",
    "contact.label.phone": "Telefon",
    "contact.label.email": "Email",
    "contact.label.message": "Nachricht",
    "contact.placeholder.name": "Ihr Name",
    "contact.placeholder.phone": "+351 000 000 000",
    "contact.placeholder.email": "email@example.com",
    "contact.placeholder.message": "Beschreiben Sie Ihr Projekt oder Ihre Anfrage...",
    "contact.button.sending": "Senden...",
    "contact.button.send": "Nachricht senden",
    "contact.toast.title": "Nachricht gesendet",
    "contact.toast.description": "Wir werden Sie in Kürze kontaktieren.",

    // Footer
    "footer.quickLinks": "Schnellzugriff",
    "footer.contactos": "Kontakte",
    "footer.brand.desc": "Spezialisten für Stanzformen für die Schuhindustrie seit über 30 Jahren. Qualität, Präzision und Exzellenz in jedem Stück.",
    "footer.madeIn": "Mit Sorgfalt in Portugal hergestellt",
    "footer.copyright": "© {year} Santos & Carlos. Alle Rechte vorbehalten.",

    // Partners & Gallery
    "partners.kicker": "Exzellente Partner",
    "partners.h1": "Marken, die uns vertrauen",
    "partners.sub": "Und viele weitere renommierte Marken vertrauen auf unsere Qualität und Professionalität.",

    // Gallery
    "gallery.kicker": "Unsere Arbeit",
    "gallery.h1": "Produktionsgalerie",
    "gallery.subtitle": "Jede Form ist ein Stück Präzision. Entdecken Sie unseren Herstellungsprozess und die Sorgfalt, die wir in jedes Stück stecken.",
    "gallery.lightbox.close": "Schließen",
  },
  es: {
    // Header / Nav
    "nav.sobre": "Acerca de",
    "nav.parceiros": "Socios",
    "nav.galeria": "Galería",
    "nav.contacto": "Contacto",

    // Hero
    "hero.since": "Desde 1994",
    "hero.title.line1": "Precisión en",
    "hero.title.line2": "Cada Corte",
    "hero.subtitle": "Maestros artesanos que producen troqueles para las marcas de calzado más prestigiosas del mundo. Tradición, innovación y excelencia durante más de 30 años.",
    "hero.cta.quote": "Solicitar presupuesto",
    "hero.cta.portfolio": "Ver portafolio",

    // About
    "about.kicker": "Sobre nosotros",
    "about.h1.line1": "Tradición e Innovación",
    "about.h1.line2": "en Armonía",
    "about.p.1": "Santos & Carlos nació de la pasión por el trabajo artesanal y la visión de crear los mejores troqueles para la industria del calzado. Durante más de tres décadas hemos combinado técnicas tradicionales con tecnología de vanguardia para ofrecer productos de excelencia.",
    "about.p.2": "Nuestro equipo de maestros artesanos trabaja diariamente con materiales de primera calidad, garantizando la precisión milimétrica que exigen las grandes marcas mundiales. Del metal en bruto al troquel perfecto, cada pieza que sale de nuestro taller lleva el sello de la calidad portuguesa.",
    "about.p.3": "Somos socios de confianza de las marcas de lujo más prestigiosas, contribuyendo a la creación de calzado que marca tendencias en todo el mundo.",
    "about.stats.0.label": "Años de experiencia",
    "about.stats.1.label": "Clientes satisfechos",
    "about.stats.2.label": "Troqueles producidos",
    "about.stats.3.label": "Compromiso",

    // Contact
    "contact.kicker": "Póngase en contacto",
    "contact.h1.line1": "Trabajemos",
    "contact.h1.line2": "Juntos",
    "contact.subtitle": "¿Interesado en nuestros servicios? Contáctenos para discutir su proyecto o solicitar un presupuesto.",
    "contact.form.title": "Envíenos un mensaje",
    "contact.label.name": "Nombre completo",
    "contact.label.phone": "Teléfono",
    "contact.label.email": "Correo electrónico",
    "contact.label.message": "Mensaje",
    "contact.placeholder.name": "Su nombre",
    "contact.placeholder.phone": "+351 000 000 000",
    "contact.placeholder.email": "email@example.com",
    "contact.placeholder.message": "Describa su proyecto o solicitud...",
    "contact.button.sending": "Enviando...",
    "contact.button.send": "Enviar mensaje",
    "contact.toast.title": "Mensaje enviado",
    "contact.toast.description": "Nos pondremos en contacto con usted en breve.",

    // Footer
    "footer.quickLinks": "Enlaces rápidos",
    "footer.contactos": "Contactos",
    "footer.brand.desc": "Especialistas en troqueles para la industria del calzado durante más de 30 años. Calidad, precisión y excelencia en cada pieza.",
    "footer.madeIn": "Hecho con dedicación en Portugal",
    "footer.copyright": "© {year} Santos & Carlos. Todos los derechos reservados.",

    // Partners & Gallery
    "partners.kicker": "Socios de excelencia",
    "partners.h1": "Marcas que confían en nosotros",
    "partners.sub": "Y muchas otras marcas prestigiosas confían en nuestra calidad y profesionalismo.",

    // Gallery
    "gallery.kicker": "Nuestro trabajo",
    "gallery.h1": "Galería de producción",
    "gallery.subtitle": "Cada troquel es una obra de precisión. Explore nuestro proceso de fabricación y la dedicación que ponemos en cada pieza.",
    "gallery.lightbox.close": "Cerrar",
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
