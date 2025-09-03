import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          <img
            src="/20200627-SUBARU-OUTBACK-2021-COLOMBIA-PRECIO-CARACTERISTICAS-01.webp"
            alt="Auto destacado"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-5">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-playfair font-light mb-6 text-white">
            Encuentra Tu Próximo Auto
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 font-light leading-relaxed">
            Explora nuestra exclusiva selección de vehículos Subaru y Suzuki
            diseñados para cada aventura y estilo de vida.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <div className="flex items-center gap-3 text-white">
            <i className="fas fa-shield-alt text-2xl text-primary"></i>
            <span className="font-medium">Seguridad Garantizada</span>
          </div>
          <div className="flex items-center gap-3 text-white">
            <i className="fas fa-tools text-2xl text-primary"></i>
            <span className="font-medium">Servicio Técnico</span>
          </div>
          <div className="flex items-center gap-3 text-white">
            <i className="fas fa-handshake text-2xl text-primary"></i>
            <span className="font-medium">Financiamiento</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
