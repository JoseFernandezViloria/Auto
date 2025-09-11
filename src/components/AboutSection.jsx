import React from "react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contenido de texto */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-playfair font-light text-white mb-6">
                  Sobre AutoGroup
                </h2>
                <div className="w-20 h-1 bg-primary mb-8"></div>
              </div>

              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  <strong className="text-white">AutoGroup</strong> es una
                  empresa con sede en{" "}
                  <strong className="text-primary">
                    Barranquilla, Colombia
                  </strong>
                  , dedicada a la comercialización de vehículos de las marcas
                  más prestigiosas del mercado automotriz.
                </p>

                <p>
                  Con años de experiencia en el sector, nos especializamos en
                  ofrecer
                  <strong className="text-white">
                    {" "}
                    Subaru, Suzuki y Great Wall Motors (GWM)
                  </strong>
                  , marcas reconocidas por su innovación, calidad y
                  confiabilidad.
                </p>

                <p>
                  Nuestro compromiso es brindar a nuestros clientes una
                  experiencia excepcional, desde la selección del vehículo ideal
                  hasta el financiamiento y servicio post-venta.
                </p>
              </div>

              {/* Estadísticas */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <div className="text-sm text-gray-400">Marcas Premium</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    12+
                  </div>
                  <div className="text-sm text-gray-400">
                    Modelos Disponibles
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    100%
                  </div>
                  <div className="text-sm text-gray-400">Satisfacción</div>
                </div>
              </div>
            </div>

            {/* Imagen o elementos visuales */}
            <div className="relative">
              <div className="bg-gray-700 p-8 space-y-6">
                <div className="text-center">
                  <i className="fas fa-map-marker-alt text-4xl text-primary mb-4"></i>
                  <h3 className="text-xl font-medium text-white mb-2">
                    Ubicación
                  </h3>
                  <p className="text-gray-300">Barranquilla, Colombia</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800 p-4 text-center">
                    <i className="fas fa-car text-2xl text-primary mb-2"></i>
                    <p className="text-sm text-gray-300">Vehículos Nuevos</p>
                  </div>
                  <div className="bg-gray-800 p-4 text-center">
                    <i className="fas fa-tools text-2xl text-primary mb-2"></i>
                    <p className="text-sm text-gray-300">Servicio Técnico</p>
                  </div>
                  <div className="bg-gray-800 p-4 text-center">
                    <i className="fas fa-credit-card text-2xl text-primary mb-2"></i>
                    <p className="text-sm text-gray-300">Financiamiento</p>
                  </div>
                  <div className="bg-gray-800 p-4 text-center">
                    <i className="fas fa-shield-alt text-2xl text-primary mb-2"></i>
                    <p className="text-sm text-gray-300">Garantía</p>
                  </div>
                </div>
              </div>

              {/* Elemento decorativo */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
