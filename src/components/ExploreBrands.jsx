import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ExploreBrands = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const navigate = useNavigate();

  const brands = [
    {
      name: "Subaru",
      logo: "/Subaru Logo.jpg",
      description:
        "Subaru es conocida por su tecnología de tracción integral Symmetrical AWD y sus vehículos de alto rendimiento.",
      models: [
        "Subaru WRX",
        "Subaru Outback",
        "Subaru Forester",
        "Subaru Impreza",
        "Subaru Legacy",
      ],
    },
    {
      name: "Suzuki",
      logo: "/Suzuki LogoC.avif",
      description:
        "Suzuki se destaca por sus vehículos compactos, eficientes en combustible y perfectos para la ciudad.",
      models: [
        "Suzuki Swift",
        "Suzuki Grand Vitara",
        "Suzuki Baleno",
        "Suzuki Ignis",
        "Suzuki S-Cross",
      ],
    },
    {
      name: "Great Wall",
      logo: "/Great-Wall.jpg",
      description:
        "Great Wall es una marca china que ofrece vehículos SUV y pickup trucks con excelente relación calidad-precio y tecnología moderna.",
      models: [
        "Great Wall Haval H6",
        "Great Wall Wingle 5",
        "Great Wall Cannon",
        "Great Wall Poer",
        "Great Wall Tank 300",
      ],
    },
  ];

  const showBrandDetails = (brand) => {
    if (brand.name === "Subaru") {
      navigate("/subaru");
    } else if (brand.name === "Suzuki") {
      navigate("/suzuki");
    } else if (brand.name === "Great Wall") {
      navigate("/gwm");
    } else {
      setSelectedBrand(brand);
    }
  };

  const closeModal = () => {
    setSelectedBrand(null);
  };

  return (
    <>
      <section className="py-12 bg-gray-900">
        <div className="container">
          <h2 className="text-3xl font-playfair font-light text-center mb-10">
            Explora por Marca
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="relative group cursor-pointer overflow-hidden bg-gray-800"
                onClick={() => showBrandDetails(brand)}
              >
                <div className="aspect-square w-full h-full">
                  <img
                    src={brand.logo}
                    alt={`Logo ${brand.name}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <h3 className="text-2xl font-playfair font-light text-white text-center">
                    {brand.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de detalles de marca */}
      {selectedBrand && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-5"
          onClick={closeModal}
        >
          <div
            className="bg-gray-800 border border-gray-700 p-8 max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-playfair font-light text-primary">
                {selectedBrand.name}
              </h2>
              <button
                onClick={closeModal}
                className="text-white hover:text-primary text-2xl transition-colors duration-300"
              >
                &times;
              </button>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {selectedBrand.description}
            </p>
            <div>
              <h3 className="text-xl font-medium text-white mb-4">
                Modelos disponibles:
              </h3>
              <ul className="space-y-2">
                {selectedBrand.models.map((model) => (
                  <li
                    key={model}
                    className="text-gray-300 flex items-center gap-2"
                  >
                    <i className="fas fa-car text-primary text-sm"></i>
                    {model}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExploreBrands;
