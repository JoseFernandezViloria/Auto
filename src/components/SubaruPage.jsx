import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const SubaruPage = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const subaruVehicles = [
    {
      id: 1,
      name: "Subaru Outback",
      model: "2024",
      image:
        "/20200627-SUBARU-OUTBACK-2021-COLOMBIA-PRECIO-CARACTERISTICAS-01.webp",
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
      id: 2,
      name: "Subaru WRX",
      model: "2024",
      image: "/Subaru WRX.webp",
      price: 165000000,
      category: "Sedán Deportivo",
      engine: "2.4L Turbo Boxer 4",
      power: "271 HP",
      transmission: "Manual de 6 velocidades",
      drivetrain: "Symmetrical AWD",
      fuel: "Gasolina Premium",
      consumption: "9.2 L/100km",
      features: [
        "Motor Turbo Boxer de alto rendimiento",
        "Suspensión Deportiva",
        "Frenos Brembo",
        "Sistema de Escape Deportivo",
        "Rines de 18 pulgadas",
        "Asientos Deportivos",
        "Sistema de Audio Premium",
        "EyeSight Driver Assist",
        "Modo Sport",
        "Diferencial Mecánico",
      ],
      description:
        "El Subaru WRX es la perfecta combinación de rendimiento deportivo y practicidad diaria. Con su motor turbo y tracción integral, ofrece una experiencia de conducción emocionante en cualquier condición.",
    },
    {
      id: 3,
      name: "Subaru Impreza",
      model: "2024",
      image: "/20221117-SUBARU-IMPREZA-2024-PORTADA.webp",
      price: 125000000,
      category: "Sedán Compacto",
      engine: "2.0L Boxer 4",
      power: "152 HP",
      transmission: "CVT Lineartronic",
      drivetrain: "Symmetrical AWD",
      fuel: "Gasolina",
      consumption: "6.9 L/100km",
      features: [
        "EyeSight Driver Assist Technology",
        "Sistema de Audio Starlink",
        "Cámara de Reversa",
        "Sensores de Estacionamiento",
        "Asientos Calefactables",
        "Rines de 17 pulgadas",
        "Suspensión Independiente",
        "Sistema de Frenos ABS",
        "Control de Estabilidad",
        "Airbags Múltiples",
      ],
      description:
        "El Subaru Impreza ofrece seguridad, eficiencia y confiabilidad en un paquete compacto. Con su tracción integral estándar, te mantiene seguro en cualquier condición climática.",
    },
    {
      id: 4,
      name: "Subaru Forester",
      model: "2024",
      image:
        "/20200627-SUBARU-OUTBACK-2021-COLOMBIA-PRECIO-CARACTERISTICAS-01.webp",
      price: 175000000,
      category: "SUV Compacto",
      engine: "2.5L Boxer 4",
      power: "182 HP",
      transmission: "CVT Lineartronic",
      drivetrain: "Symmetrical AWD",
      fuel: "Gasolina",
      consumption: "7.5 L/100km",
      features: [
        "EyeSight Driver Assist Technology",
        "X-MODE con Control de Descenso",
        "Suspensión Elevada",
        "Sistema de Audio Harman Kardon",
        "Navegación GPS",
        "Cámara de Reversa 360°",
        "Sensores de Estacionamiento",
        "Techo Solar",
        "Rines de 18 pulgadas",
        "Sistema de Tracción Inteligente",
      ],
      description:
        "El Subaru Forester combina la versatilidad de un SUV con la maniobrabilidad de un vehículo compacto. Perfecto para familias que buscan seguridad y espacio sin comprometer el rendimiento.",
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

  const showVehicleDetails = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const closeModal = () => {
    setSelectedVehicle(null);
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container text-center">
          <h1 className="text-5xl font-playfair font-light mb-6 text-white">
            Subaru Colombia
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre la línea completa de vehículos Subaru con su legendario
            sistema de tracción integral Symmetrical AWD. Seguridad, rendimiento
            y aventura en cada modelo.
          </p>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-20 bg-gray-900">
        <div className="container">
          <h2 className="text-4xl font-playfair font-light text-center mb-16 text-white">
            Nuestros Vehículos Subaru
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {subaruVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-gray-800 border border-gray-700 overflow-hidden hover:border-primary transition-all duration-300 cursor-pointer group"
                onClick={() => showVehicleDetails(vehicle)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-dark px-3 py-1 font-medium text-sm">
                    {vehicle.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-playfair font-light text-white mb-2">
                    {vehicle.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{vehicle.model}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-primary">
                      {formatPrice(vehicle.price)}
                    </div>
                    <div className="text-sm text-gray-400">
                      {vehicle.engine} • {vehicle.power}
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {vehicle.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      {vehicle.transmission} • {vehicle.drivetrain}
                    </div>
                    <button className="px-4 py-2 bg-primary text-dark font-medium hover:bg-yellow-400 transition-colors duration-300">
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de detalles del vehículo */}
      {selectedVehicle && (
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
                {selectedVehicle.name} {selectedVehicle.model}
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
                    src={selectedVehicle.image}
                    alt={selectedVehicle.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-dark px-4 py-2 font-bold text-lg">
                    {selectedVehicle.category}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {formatPrice(selectedVehicle.price)}
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
                    <span className="text-white">{selectedVehicle.engine}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Potencia:</span>
                    <span className="text-white">{selectedVehicle.power}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Transmisión:</span>
                    <span className="text-white">
                      {selectedVehicle.transmission}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tracción:</span>
                    <span className="text-white">
                      {selectedVehicle.drivetrain}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Combustible:</span>
                    <span className="text-white">{selectedVehicle.fuel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Consumo:</span>
                    <span className="text-white">
                      {selectedVehicle.consumption}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-medium text-white mb-4 mt-6">
                  Equipamiento
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {selectedVehicle.features.map((feature, index) => (
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
                {selectedVehicle.description}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-3 bg-primary text-dark font-medium hover:bg-yellow-400 transition-colors duration-300">
                Solicitar Cotización
              </button>
              <button className="px-8 py-3 border border-primary text-primary font-medium hover:bg-primary hover:text-dark transition-colors duration-300">
                Agendar Test Drive
              </button>
              <button className="px-8 py-3 border border-gray-600 text-gray-300 font-medium hover:border-primary hover:text-primary transition-colors duration-300">
                Contactar Asesor
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default SubaruPage;
