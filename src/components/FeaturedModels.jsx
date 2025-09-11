import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FeaturedModels = () => {
  const [selectedModel, setSelectedModel] = useState(null);
  const navigate = useNavigate();

  const models = [
    {
      name: "Subaru Outback",
      model: "2024",
      image: "/Subaru Outback.webp",
      price: 189900000,
      category: "SUV",
      engine: "2.5L Boxer 4",
      power: "182 HP",
      transmission: "CVT Lineartronic",
      drivetrain: "Symmetrical AWD",
      fuel: "Gasolina",
      consumption: "7.8 L/100km",
      features: [
        "EyeSight Driver Assist Technology",
        "X-MODE con Control de Descenso",
        "Suspensión Elevada",
        "Asientos Calefactables",
        "Sistema de Audio Harman Kardon",
        "Navegación GPS",
        "Cámara de Reversa",
        "Sensores de Estacionamiento",
        "Techo Solar",
        "Rines de 18 pulgadas",
      ],
      description:
        "El Subaru Outback combina la versatilidad de un SUV con la eficiencia de combustible de un sedán. Con su legendario sistema de tracción integral Symmetrical AWD y su suspensión elevada, está listo para cualquier aventura.",
    },
    {
      name: "Suzuki Grand Vitara",
      model: "2024",
      image:
        "/20230502-SUZUKI-GRAND-VITARA-HIBRIDA-2023-PRECIO-FICHA-TECNICA-01.webp",
      price: 145000000,
      category: "SUV Híbrido",
      engine: "1.5L + Motor Eléctrico",
      power: "115 HP",
      transmission: "CVT",
      drivetrain: "FWD / AWD",
      fuel: "Híbrido",
      consumption: "4.8 L/100km",
      features: [
        "Sistema Híbrido Suzuki",
        "Modo EV para conducción eléctrica",
        "Sistema de Audio Premium",
        "Cámara de Reversa 360°",
        "Sensores de Estacionamiento",
        "Aire Acondicionado Automático",
        "Dirección Asistida",
        "Frenos ABS con EBD",
        "Control de Estabilidad",
        "Airbags Múltiples",
      ],
      description:
        "El Suzuki Grand Vitara Híbrido combina eficiencia energética con versatilidad SUV. Con su sistema híbrido avanzado, ofrece el mejor consumo de combustible en su categoría.",
    },
    {
      name: "GWM Tank 500",
      model: "2024",
      image: "/Autos GWM/GWM Tank 500.webp",
      price: 185000000,
      category: "SUV Premium",
      engine: "3.0L V6 Turbo",
      power: "360 HP",
      transmission: "Automática 9 velocidades",
      drivetrain: "4WD",
      fuel: "Gasolina",
      consumption: "11.5 L/100km",
      features: [
        "Sistema de Audio Premium",
        "Pantalla Táctil 12.3 pulgadas",
        "Cámara de Reversa 360°",
        "Sensores de Estacionamiento",
        "Aire Acondicionado Automático",
        "Asientos Eléctricos con Memoria",
        "Sistema de Navegación GPS",
        "Bluetooth y USB",
        "Rines de 20 pulgadas",
        "Sistema de Sonido Premium",
      ],
      description:
        "El GWM Tank 500 representa la cúspide del lujo y la tecnología en vehículos SUV. Con su potente motor V6 turbo y equipamiento premium, ofrece una experiencia de conducción excepcional.",
    },
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const showModelDetails = (model) => {
    setSelectedModel(model);
  };

  const closeModal = () => {
    setSelectedModel(null);
  };

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
                  <button
                    onClick={() => showModelDetails(model)}
                    className="px-6 py-3 bg-primary text-dark font-bold hover:bg-yellow-400 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                  >
                    Ver Detalles
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

      {/* Modal de detalles del vehículo */}
      {selectedModel && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-5"
          onClick={closeModal}
        >
          <div
            className="bg-gray-800 border border-gray-700 p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-playfair font-light text-primary">
                {selectedModel.name} {selectedModel.model}
              </h2>
              <button
                onClick={closeModal}
                className="text-white hover:text-primary text-2xl transition-colors duration-300"
              >
                &times;
              </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Imagen y precio */}
              <div>
                <div className="relative mb-6">
                  <img
                    src={selectedModel.image}
                    alt={selectedModel.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-dark px-4 py-2 font-bold text-lg">
                    {selectedModel.category}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {formatPrice(selectedModel.price)}
                  </div>
                  <p className="text-gray-400">Precio en pesos colombianos</p>
                </div>
              </div>

              {/* Características técnicas */}
              <div>
                <h3 className="text-xl font-medium text-white mb-4">
                  Características Técnicas
                </h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span>Motor:</span>
                    <span className="text-white">{selectedModel.engine}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Potencia:</span>
                    <span className="text-white">{selectedModel.power}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Transmisión:</span>
                    <span className="text-white">
                      {selectedModel.transmission}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tracción:</span>
                    <span className="text-white">
                      {selectedModel.drivetrain}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Combustible:</span>
                    <span className="text-white">{selectedModel.fuel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Consumo:</span>
                    <span className="text-white">
                      {selectedModel.consumption}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-medium text-white mb-4 mt-6">
                  Equipamiento
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {selectedModel.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <i className="fas fa-check text-primary text-sm"></i>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-700">
              <h3 className="text-xl font-medium text-white mb-4">
                Descripción
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {selectedModel.description}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => {
                  closeModal();
                  navigate("/financiamiento");
                  window.scrollTo(0, 0);
                }}
                className="px-8 py-3 bg-primary text-dark font-medium hover:bg-yellow-400 transition-colors duration-300"
              >
                Solicitar Cotización
              </button>
              <button
                onClick={() => {
                  closeModal();
                  navigate("/contacto");
                  window.scrollTo(0, 0);
                }}
                className="px-8 py-3 border border-primary text-primary font-medium hover:bg-primary hover:text-dark transition-colors duration-300"
              >
                Agendar Test Drive
              </button>
              <button
                onClick={() => {
                  closeModal();
                  navigate("/contacto");
                  window.scrollTo(0, 0);
                }}
                className="px-8 py-3 border border-gray-600 text-gray-300 font-medium hover:border-primary hover:text-primary transition-colors duration-300"
              >
                Contactar Asesor
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedModels;
