import React, { useState } from "react";

const VehicleTypes = () => {
  const [selectedType, setSelectedType] = useState(null);

  const vehicleTypes = [
    {
      name: "SUV",
      image:
        "/20200627-SUBARU-OUTBACK-2021-COLOMBIA-PRECIO-CARACTERISTICAS-01.webp",
      description:
        "Los SUV ofrecen espacio, versatilidad y capacidad para todo tipo de terreno. Perfectos para familias y aventureros.",
    },
    {
      name: "Sedán",
      image: "/Subaru WRX.webp",
      description:
        "Los sedanes combinan elegancia, confort y eficiencia. Ideales para uso diario y viajes largos.",
    },
    {
      name: "Hatchback",
      image: "/20221117-SUBARU-IMPREZA-2024-PORTADA.webp",
      description:
        "Los hatchbacks ofrecen practicidad en un tamaño compacto. Perfectos para la ciudad y estacionamiento fácil.",
    },
    {
      name: "Camioneta",
      image:
        "https://images.unsplash.com/photo-1563720223185-11003d516935?w=300&h=200&fit=crop",
      description:
        "Las camionetas proporcionan máxima capacidad de carga y versatilidad para trabajo y transporte.",
    },
  ];

  const showVehicleTypeInfo = (type) => {
    setSelectedType(type);
  };

  const closeModal = () => {
    setSelectedType(null);
  };

  return (
    <>
      <section className="py-20 bg-gray-900">
        <div className="container">
          <h2 className="text-4xl font-playfair font-light text-center mb-16">
            Explora por Tipo de Vehículo
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicleTypes.map((type) => (
              <div
                key={type.name}
                className="group cursor-pointer overflow-hidden bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700"
                onClick={() => showVehicleTypeInfo(type)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-playfair font-light text-white group-hover:text-primary transition-colors duration-300">
                    {type.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de información del tipo de vehículo */}
      {selectedType && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-5"
          onClick={closeModal}
        >
          <div
            className="bg-gray-800 border border-gray-700 p-8 max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl font-playfair font-light text-primary">
                {selectedType.name}
              </h3>
              <button
                onClick={closeModal}
                className="text-white hover:text-primary text-2xl transition-colors duration-300"
              >
                &times;
              </button>
            </div>
            <div className="mb-6">
              <img
                src={selectedType.image}
                alt={selectedType.name}
                className="w-full h-48 object-cover mb-4 border border-gray-700"
              />
              <p className="text-gray-300 leading-relaxed">
                {selectedType.description}
              </p>
            </div>
            <div className="text-center">
              <button className="px-6 py-3 bg-primary text-dark font-medium hover:bg-yellow-400 transition-colors duration-300">
                Ver vehículos disponibles
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VehicleTypes;
