import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tema: "",
    mensaje: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
    alert("Mensaje enviado exitosamente");
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      tema: "",
      mensaje: "",
    });
  };

  return (
    <>
      <Header />

      {/* Contact Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-dark">
        <div className="container text-center">
          <h1 className="text-5xl font-playfair font-light mb-6 text-white">
            Contáctanos
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Estamos aquí para ayudarte a encontrar tu próximo auto ideal
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Tarjeta del Asesor Principal con toda la información */}
            <div className="bg-gray-800 border border-gray-700 overflow-hidden">
              <div className="flex flex-col">
                {/* Foto del Asesor - Ocupa toda la parte superior */}
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src="/Eliseo-Viloria.png"
                    alt="Eliseo Viloria - Asesor Principal"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Contenido de la tarjeta */}
                <div className="p-8 text-center">
                  {/* Información del Asesor */}
                  <div className="w-full max-w-2xl">
                    <h3 className="text-3xl font-medium text-white mb-3">
                      Eliseo Viloria
                    </h3>
                    <p className="text-primary font-medium mb-6 text-xl">
                      Asesor Principal & Especialista en Ventas
                    </p>

                    {/* Información de contacto del asesor */}
                    <div className="space-y-4 text-gray-300 mb-8">
                      <div className="flex items-center justify-center gap-3">
                        <i className="fas fa-phone text-primary text-lg"></i>
                        <div>
                          <p className="font-medium text-white">Teléfono</p>
                          <p>+57 (1) 123-4567</p>
                          <p>+57 300-123-4567 (WhatsApp disponible)</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-center gap-3">
                        <i className="fas fa-envelope text-primary text-lg"></i>
                        <div>
                          <p className="font-medium text-white">Email</p>
                          <p>info@autogroup.com</p>
                          <p>ventas@autogroup.com</p>
                          <p>eliseo.viloria@autogroup.com</p>
                        </div>
                      </div>
                    </div>

                    {/* Tags de especialización */}
                    <div className="flex flex-wrap justify-center gap-2">
                      <span className="px-3 py-1 bg-primary/20 text-primary text-sm border border-primary/30">
                        Subaru
                      </span>
                      <span className="px-3 py-1 bg-primary/20 text-primary text-sm border border-primary/30">
                        Suzuki
                      </span>
                      <span className="px-3 py-1 bg-primary/20 text-primary text-sm border border-primary/30">
                        Financiamiento
                      </span>
                      <span className="px-3 py-1 bg-primary/20 text-primary text-sm border border-primary/30">
                        Test Drive
                      </span>
                      <span className="px-3 py-1 bg-primary/20 text-primary text-sm border border-primary/30">
                        Servicio Técnico
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 p-8">
              <h3 className="text-2xl font-playfair font-light text-white mb-6">
                Envíanos un mensaje
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre completo"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="Teléfono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>

                <div>
                  <select
                    name="tema"
                    value={formData.tema}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  >
                    <option value="">Selecciona un tema</option>
                    <option value="consulta">Consulta general</option>
                    <option value="test-drive">Agendar test drive</option>
                    <option value="cotizacion">Solicitar cotización</option>
                    <option value="servicio">Servicio técnico</option>
                    <option value="financiamiento">Financiamiento</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <textarea
                    name="mensaje"
                    placeholder="Tu mensaje"
                    rows="5"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn btn-primary">
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-900">
        <div className="container">
          <h2 className="text-4xl font-playfair font-light text-center mb-16">
            Encuéntranos
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-800 border border-gray-700 p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-playfair font-light text-white mb-4">
                    Nuestra Ubicación
                  </h3>
                  <div className="space-y-4 text-gray-300">
                    <div className="flex items-start gap-3">
                      <i className="fas fa-map-marker-alt text-primary text-xl mt-1"></i>
                      <div>
                        <p className="font-medium text-white">Dirección</p>
                        <p>Cl. 77 #66 - 20, La Concepción</p>
                        <p>Barranquilla, Atlántico, Colombia</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <i className="fas fa-clock text-primary text-xl mt-1"></i>
                      <div>
                        <p className="font-medium text-white">
                          Horarios de Atención
                        </p>
                        <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                        <p>Sábados: 9:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <i className="fas fa-phone text-primary text-xl mt-1"></i>
                      <div>
                        <p className="font-medium text-white">Contacto</p>
                        <p>+57 (1) 123-4567</p>
                        <p>+57 300-123-4567</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-80 lg:h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8!2d-74.7947!3d10.9685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e56b6b3b3b3b3b%3A0x0!2zMTDCsDU4JzA2LjYiTiA3NMKwNDcnNDAuOSJX!5e0!3m2!1ses!2sco!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de AutoGroup en Google Maps"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;
