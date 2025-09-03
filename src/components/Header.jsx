import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const location = useLocation();

  const vehicleModels = [
    "Subaru WRX",
    "Subaru Outback",
    "Suzuki Swift",
    "Suzuki Grand Vitara",
    "Subaru Impreza",
    "Subaru Forester",
  ];

  // Efecto de Scroll

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Resaltar Path

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const performSearch = (term) => {
    if (!term.trim()) return;

    // Busqueda

    const results = vehicleModels.filter((item) =>
      item.toLowerCase().includes(term.toLowerCase())
    );

    if (results.length > 0) {
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
    setShowModal(true);
    setIsSearchExpanded(false);
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

  const toggleSearch = () => {
    setIsSearchExpanded(!isSearchExpanded);
    if (isSearchExpanded) {
      setSearchTerm("");
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-gray-800/95 backdrop-blur-md" : "bg-gray-800"
        } shadow-lg`}
      >
        <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-3 text-2xl font-light text-primary font-playfair hover:text-yellow-400 transition-colors duration-300"
          >
            <div className="text-3xl text-primary">◆</div>
            <span>AutoGroup</span>
          </Link>

          <nav className="hidden md:flex gap-8">
            <Link
              to="/"
              className={`transition-colors duration-300 font-light tracking-wide ${
                isActive("/") ? "text-primary" : "text-white hover:text-primary"
              }`}
            >
              Inicio
            </Link>
            <Link
              to="/subaru"
              className={`transition-colors duration-300 font-light tracking-wide ${
                isActive("/subaru")
                  ? "text-primary"
                  : "text-white hover:text-primary"
              }`}
            >
              Subaru
            </Link>
            <a
              href="#suzuki"
              className="text-white hover:text-primary transition-colors duration-300 font-light tracking-wide"
            >
              Suzuki
            </a>
            <a
              href="#ofertas"
              className="text-white hover:text-primary transition-colors duration-300 font-light tracking-wide"
            >
              Ofertas
            </a>
            <a
              href="#financiamiento"
              className="text-white hover:text-primary transition-colors duration-300 font-light tracking-wide"
            >
              Financiamiento
            </a>
            <Link
              to="/contacto"
              className={`transition-colors duration-300 font-light tracking-wide ${
                isActive("/contacto")
                  ? "text-primary"
                  : "text-white hover:text-primary"
              }`}
            >
              Contacto
            </Link>
          </nav>

          <div className="flex gap-4 items-center">
            {/* Barra de búsqueda expandible */}
            <div className="relative">
              {isSearchExpanded && (
                <div className="absolute right-0 top-12 w-80 bg-gray-800 border border-gray-700 shadow-2xl p-4">
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
                      <input
                        type="text"
                        placeholder="Busca tu modelo ideal..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-sm"
                        autoFocus
                      />
                    </div>
                    <button
                      onClick={handleSearch}
                      className="px-4 py-2 bg-primary text-dark font-medium hover:bg-yellow-400 transition-colors duration-300 text-sm"
                    >
                      Buscar
                    </button>
                  </div>
                </div>
              )}
              <button
                onClick={toggleSearch}
                className="text-white hover:bg-gray-700 transition-colors duration-300 p-2"
              >
                <i className="fas fa-search text-xl"></i>
              </button>
            </div>

            <button className="text-white hover:bg-gray-700 transition-colors duration-300 p-2">
              <i className="fas fa-user text-xl"></i>
            </button>
          </div>
        </div>
      </header>

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

export default Header;
