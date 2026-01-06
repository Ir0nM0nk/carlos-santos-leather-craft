import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem Enviada",
      description: "Entraremos em contacto consigo brevemente.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Morada",
      content: "Rua da Gandara, Nº 1061 3720-701 São Roque",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "+351 256 872 989",
    },
    {
      icon: Mail,
      title: "Email",
      content: "santosecarlos@sapo.pt",
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Segunda a Sexta\n08:00 - 18:00",
    },
  ];

  return (
    <section id="contacto" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Entre em Contacto
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
            Vamos <span className="text-gradient-copper">Trabalhar</span> Juntos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interessado nos nossos serviços? Entre em contacto connosco para 
            discutir o seu projeto ou solicitar um orçamento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-card border border-border p-8 md:p-10">
            <h3 className="font-display text-2xl font-semibold mb-8">
              Envie-nos uma Mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-muted-foreground"
                  >
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="O seu nome"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2 text-muted-foreground"
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="+351 000 000 000"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-muted-foreground"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="email@exemplo.pt"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-muted-foreground"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Descreva o seu projeto ou pedido..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary text-primary-foreground font-medium tracking-wider uppercase text-sm hover:bg-copper-light transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "A Enviar..." : "Enviar Mensagem"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 p-6 border border-border bg-card/50 hover:border-primary/50 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground whitespace-pre-line text-sm">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
