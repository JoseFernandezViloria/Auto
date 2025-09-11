import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const GWMPage = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const navigate = useNavigate();

  const gwmVehicles = [
    {
      id: 1,
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
        "Techo Solar Panorámico",
        "Sistema de Frenos ABS",
        "Control de Estabilidad",
        "Airbags Múltiples",
        "Sistema de Tracción Inteligente",
      ],
      description:
        "El GWM Tank 500 representa la cúspide del lujo y la tecnología en vehículos SUV. Con su potente motor V6 turbo y equipamiento premium, ofrece una experiencia de conducción excepcional.",
    },
    {
      id: 2,
      name: "GWM Jolion Híbrido",
      model: "2024",
      image: "/Autos GWM/GWM Jolion Hibrido.webp",
      price: 125000000,
      category: "SUV Híbrido",
      engine: "1.5L + Motor Eléctrico",
      power: "190 HP",
      transmission: "CVT",
      drivetrain: "FWD",
      fuel: "Híbrido",
      consumption: "4.2 L/100km",
      features: [
        "Sistema Híbrido GWM",
        "Modo EV para conducción eléctrica",
        "Sistema de Audio GWM",
        "Pantalla Táctil 10.25 pulgadas",
        "Cámara de Reversa",
        "Sensores de Estacionamiento",
        "Aire Acondicionado Automático",
        "Sistema de Navegación",
        "Bluetooth y USB",
        "Rines de 18 pulgadas",
        "Sistema de Frenos ABS",
        "Control de Estabilidad",
        "Airbags Múltiples",
        "Sistema de Carga Inteligente",
        "Modo Eco",
      ],
      description:
        "El GWM Jolion Híbrido combina eficiencia energética con versatilidad SUV. Con su sistema híbrido avanzado, ofrece el mejor consumo de combustible en su categoría sin comprometer el rendimiento.",
    },
    {
      id: 3,
      name: "GWM Poer",
      model: "2024",
      image: "/Autos GWM/GWM Poer.webp",
      price: 95000000,
      category: "Pickup",
      engine: "2.0L Turbo Diesel",
      power: "163 HP",
      transmission: "Manual 6 velocidades / Automática 8 velocidades",
      drivetrain: "4WD",
      fuel: "Diesel",
      consumption: "8.5 L/100km",
      features: [
        "Sistema de Audio GWM",
        "Pantalla Táctil 9 pulgadas",
        "Cámara de Reversa",
        "Sensores de Estacionamiento",
        "Aire Acondicionado",
        "Dirección Asistida",
        "Sistema de Navegación",
        "Bluetooth y USB",
        "Rines de 17 pulgadas",
        "Sistema de Frenos ABS",
        "Control de Estabilidad",
        "Airbags Frontales",
        "Caja de Carga Larga",
        "Sistema de Tracción 4WD",
        "Diferencial de Deslizamiento Limitado",
      ],
      description:
        "El GWM Poer es la pickup perfecta para trabajo y aventura. Con su potente motor diesel y capacidad de carga excepcional, está diseñado para enfrentar cualquier desafío.",
    },
    {
      id: 4,
      name: "GWM Ora 03 GT",
      model: "2024",
      image: "/Autos GWM/GW Ora 03 GT.webp",
      price: 135000000,
      category: "Eléctrico Deportivo",
      engine: "Motor Eléctrico",
      power: "204 HP",
      transmission: "Automática de 1 velocidad",
      drivetrain: "FWD",
      fuel: "Eléctrico",
      consumption: "0 L/100km",
      features: [
        "Motor Eléctrico de Alto Rendimiento",
        "Batería de Iones de Litio",
        "Autonomía 500+ km",
        "Carga Rápida DC",
        "Sistema de Audio Premium",
        "Pantalla Táctil 12.3 pulgadas",
        "Cámara de Reversa 360°",
        "Sensores de Estacionamiento",
        "Aire Acondicionado Automático",
        "Sistema de Navegación",
        "Bluetooth y USB",
        "Rines de 19 pulgadas",
        "Sistema de Frenos Regenerativos",
        "Modo Sport",
        "Sistema de Carga Inteligente",
      ],
      description:
        "El GWM Ora 03 GT es el futuro de la movilidad eléctrica. Con su diseño deportivo y tecnología de vanguardia, ofrece una experiencia de conducción completamente eléctrica sin comprometer el rendimiento.",
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
            Great Wall Motors Colombia
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre la innovación y tecnología de vanguardia de Great Wall
            Motors. Vehículos premium con la mejor relación calidad-precio del
            mercado.
          </p>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-20 bg-gray-900">
        <div className="container">
          <h2 className="text-4xl font-playfair font-light text-center mb-16 text-white">
            Nuestros Vehículos GWM
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {gwmVehicles.map((vehicle) => (
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

      <Footer />
    </>
  );
};

export default GWMPage;
