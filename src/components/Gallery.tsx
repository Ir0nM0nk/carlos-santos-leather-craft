import { useState } from "react";
import { X } from "lucide-react";

import work1 from "@/assets/gallery/work-1.jpg";
import work2 from "@/assets/gallery/work-2.jpg";
import work3 from "@/assets/gallery/work-3.jpg";
import work4 from "@/assets/gallery/work-4.jpg";
import work5 from "@/assets/gallery/work-5.jpg";
import work6 from "@/assets/gallery/work-6.jpg";
import work7 from "@/assets/gallery/work-7.jpg";
import work8 from "@/assets/gallery/work-8.jpg";
import work9 from "@/assets/gallery/work-9.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: work1, alt: "Trabalho de precisão em metal" },
    { src: work2, alt: "Cortante de forma complexa" },
    { src: work3, alt: "Soldadura de cortantes" },
    { src: work5, alt: "Artesão a trabalhar" },
    { src: work6, alt: "Conjunto de cortantes coloridos" },
    { src: work8, alt: "Moldes e cortantes de pele" },
    { src: work9, alt: "Cortante com pele cortada" },
    { src: work7, alt: "Operador na máquina de furar" },
  ];

  return (
    <section id="galeria" className="section-padding metal-texture">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            O Nosso Trabalho
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
            Galeria de <span className="text-gradient-copper">Produção</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada cortante é uma obra de precisão. Explore o nosso processo de fabrico 
            e a dedicação que colocamos em cada peça.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden cursor-pointer group ${
                index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className={`${index === 0 || index === 5 ? "aspect-square" : "aspect-[4/3]"}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm text-foreground">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Fechar"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Imagem ampliada"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
