import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const SuzukiPage = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const navigate = useNavigate();

  const suzukiVehicles = [
    {
      id: 1,
      name: "Suzuki Fronx",
      model: "2024",
      image: "/Autos-Suzuki/Autozen-suzuki-fronx-blue-1080x500.webp",
      price: 89900000,
      category: "SUV Compacto",
      engine: "1.0L Boosterjet Turbo",
      power: "110 HP",
      transmission: "Manual 5 velocidades / CVT",
      drivetrain: "FWD",
      fuel: "Gasolina",
      consumption: "5.8 L/100km",
      features: [
        "Sistema de Audio Suzuki",
        "Cámara de Reversa",
        "Sensores de Estacionamiento",
        "Aire Acondicionado",
        "Dirección Asistida",
        "Frenos ABS con EBD",
        "Control de Estabilidad",
        "Airbags Frontales y Laterales",
        "Rines de 16 pulgadas",
        "Sistema de Navegación",
      ],
      description:
        "El Suzuki Fronx combina eficiencia de combustible con versatilidad urbana. Perfecto para la ciudad con su diseño compacto y tecnología avanzada.",
    },
    {
      id: 2,
      name: "Suzuki Jimny",
      model: "2024",
      image: "/Autos-Suzuki/Autozen-suzuki-jimny-5-puertas-miniatura.webp",
      price: 125000000,
      category: "SUV Off-Road",
      engine: "1.5L K15B",
      power: "102 HP",
      transmission: "Manual 5 velocidades / Automática 4 velocidades",
      drivetrain: "4WD",
      fuel: "Gasolina",
      consumption: "6.8 L/100km",
      features: [
        "Sistema 4WD con Reductor",
        "Suspensión de 3 Enlaces",
        "Diferencial de Deslizamiento Limitado",
        "Sistema de Audio Suzuki",
        "Aire Acondicionado",
        "Dirección Asistida",
        "Frenos ABS con EBD",
        "Control de Estabilidad",
        "Airbags Frontales",
        "Rines de 15 pulgadas",
      ],
      description:
        "El Suzuki Jimny es el SUV off-road más compacto y eficiente del mercado. Con su legendaria capacidad todoterreno y diseño icónico, está listo para cualquier aventura.",
    },
    {
      id: 3,
      name: "Suzuki Swift",
      model: "2024",
      image: "/Autos-Suzuki/RT_V_5a9133e2b93541f3a1299c57612309a4.webp",
      price: 65900000,
      category: "Hatchback",
      engine: "1.2L K12M",
      power: "83 HP",
      transmission: "Manual 5 velocidades / CVT",
      drivetrain: "FWD",
      fuel: "Gasolina",
      consumption: "5.2 L/100km",
      features: [
        "Sistema de Audio Suzuki",
        "Aire Acondicionado",
        "Dirección Asistida",
        "Frenos ABS con EBD",
        "Control de Estabilidad",
        "Airbags Frontales y Laterales",
        "Rines de 15 pulgadas",
        "Sistema de Navegación",
        "Bluetooth",
        "USB y Auxiliar",
      ],
      description:
        "El Suzuki Swift ofrece eficiencia de combustible excepcional y maniobrabilidad urbana superior. Ideal para la conducción diaria en la ciudad.",
    },
    {
      id: 4,
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
            Suzuki Colombia
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre la línea completa de vehículos Suzuki con tecnología
            japonesa de vanguardia. Eficiencia, confiabilidad y versatilidad en
            cada modelo.
          </p>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-20 bg-gray-900">
        <div className="container">
          <h2 className="text-4xl font-playfair font-light text-center mb-16 text-white">
            Nuestros Vehículos Suzuki
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {suzukiVehicles.map((vehicle) => (
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

export default SuzukiPage;
