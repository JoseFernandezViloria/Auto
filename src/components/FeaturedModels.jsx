import React from "react";

const FeaturedModels = () => {
  const models = [
    {
      name: "Subaru Outback",
      image:
        "/20200627-SUBARU-OUTBACK-2021-COLOMBIA-PRECIO-CARACTERISTICAS-01.webp",
      description: "El SUV perfecto para cualquier terreno y aventura.",
      price: "Desde $189,900,000",
    },
    {
      name: "Suzuki Grand Vitara",
      image:
        "/20230502-SUZUKI-GRAND-VITARA-HIBRIDA-2023-PRECIO-FICHA-TECNICA-01.webp",
      description: "Aventura y estilo audaz en un solo vehículo.",
      price: "Desde $145,000,000",
    },
    {
      name: "Subaru Impreza",
      image: "/20221117-SUBARU-IMPREZA-2024-PORTADA.webp",
      description: "Elegancia, rendimiento y seguridad en cada viaje.",
      price: "Desde $125,000,000",
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="w-full px-5">
        <h2 className="text-4xl font-playfair font-light text-center mb-16 text-white">
          Modelos Destacados
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {models.map((model, index) => (
            <div
              key={model.name}
              className="group relative bg-gray-800 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-700 cursor-pointer"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                animation: `fadeInUp 0.6s ease ${index * 0.2}s forwards`,
              }}
            >
              {/* Imagen principal */}
              <div className="relative overflow-hidden h-80">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay simplificado en hover */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center">
                  {/* Solo el botón */}
                  <button className="px-6 py-3 bg-primary text-dark font-bold hover:bg-yellow-400 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    Saber más
                  </button>
                </div>
              </div>

              {/* Solo el nombre visible sin hover */}
              <div className="absolute bottom-0 left-0 right-0 bg-gray-800/95 backdrop-blur-sm p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-playfair font-light text-white text-center">
                  {model.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturedModels;
