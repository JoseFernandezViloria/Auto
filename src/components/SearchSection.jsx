import React, { useState } from "react";

const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const vehicleModels = [
    "Subaru WRX",
    "Subaru Outback",
    "Suzuki Swift",
    "Suzuki Grand Vitara",
    "Subaru Impreza",
    "Subaru Forester",
  ];

  const performSearch = (term) => {
    if (!term.trim()) return;

    const results = vehicleModels.filter((item) =>
      item.toLowerCase().includes(term.toLowerCase())
    );

    if (results.length > 0) {
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
    setShowModal(true);
  };

  const handleSearch = () => {
    performSearch(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      performSearch(searchTerm);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSearchResults(null);
  };

  return (
    <>
      <section className="py-16 bg-gray-900">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 border border-gray-700 p-8 shadow-2xl">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1">
                  <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl"></i>
                  <input
                    type="text"
                    placeholder="Busca tu modelo ideal... (ej. Subaru WRX, Suzuki Swift)"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="w-full pl-12 pr-4 py-4 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>
                <button
                  onClick={handleSearch}
                  className="px-8 py-4 bg-primary text-dark font-medium hover:bg-yellow-400 transition-colors duration-300 transform hover:scale-105"
                >
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de resultados de búsqueda */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-5"
          onClick={closeModal}
        >
          <div
            className="bg-gray-800 border border-gray-700 p-8 max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-playfair font-light text-white">
                {searchResults && searchResults.length > 0
                  ? "Resultados de búsqueda"
                  : "No se encontraron resultados"}
              </h3>
              <button
                onClick={closeModal}
                className="text-white hover:text-primary text-2xl transition-colors duration-300"
              >
                &times;
              </button>
            </div>

            <div className="space-y-4">
              {searchResults && searchResults.length > 0 ? (
                searchResults.map((result) => (
                  <div
                    key={result}
                    className="p-4 bg-gray-700 border border-gray-600 hover:border-primary transition-colors duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <i className="fas fa-car text-primary"></i>
                      <span className="text-white font-medium">{result}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <i className="fas fa-search text-4xl text-gray-500 mb-4"></i>
                  <p className="text-gray-300 mb-2">
                    No se encontraron vehículos que coincidan con tu búsqueda.
                  </p>
                  <p className="text-gray-400">
                    Intenta con otros términos o contacta con nuestro equipo de
                    ventas.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchSection;
