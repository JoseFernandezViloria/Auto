import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const FinancingPage = () => {
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [vehiclePrice, setVehiclePrice] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [interestRate, setInterestRate] = useState(12);
  const [loanTerm, setLoanTerm] = useState(36);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  // Lista de todos los vehículos con sus precios
  const allVehicles = [
    // Subaru
    { name: "Subaru Outback 2024", price: 189900000, brand: "Subaru" },
    { name: "Subaru WRX 2024", price: 165000000, brand: "Subaru" },
    { name: "Subaru Impreza 2024", price: 125000000, brand: "Subaru" },
    { name: "Subaru Forester 2024", price: 175000000, brand: "Subaru" },

    // Suzuki
    { name: "Suzuki Fronx 2024", price: 89900000, brand: "Suzuki" },
    { name: "Suzuki Jimny 2024", price: 125000000, brand: "Suzuki" },
    { name: "Suzuki Swift 2024", price: 65900000, brand: "Suzuki" },
    { name: "Suzuki Grand Vitara 2024", price: 145000000, brand: "Suzuki" },

    // GWM
    { name: "GWM Tank 500 2024", price: 185000000, brand: "GWM" },
    { name: "GWM Jolion Híbrido 2024", price: 125000000, brand: "GWM" },
    { name: "GWM Poer 2024", price: 95000000, brand: "GWM" },
    { name: "GWM Ora 03 GT 2024", price: 135000000, brand: "GWM" },
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const calculatePayment = () => {
    if (vehiclePrice <= 0 || downPayment >= vehiclePrice) {
      setMonthlyPayment(0);
      setTotalInterest(0);
      setTotalAmount(0);
      return;
    }

    const principal = vehiclePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm;

    if (monthlyRate === 0) {
      // Si no hay interés
      const payment = principal / numberOfPayments;
      setMonthlyPayment(payment);
      setTotalInterest(0);
      setTotalAmount(principal);
    } else {
      // Cálculo con interés
      const payment =
        (principal *
          monthlyRate *
          Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

      setMonthlyPayment(payment);
      setTotalInterest(payment * numberOfPayments - principal);
      setTotalAmount(payment * numberOfPayments);
    }
  };

  useEffect(() => {
    calculatePayment();
  }, [vehiclePrice, downPayment, interestRate, loanTerm]);

  const handleVehicleChange = (e) => {
    const selectedName = e.target.value;
    const vehicle = allVehicles.find((v) => v.name === selectedName);
    if (vehicle) {
      setSelectedVehicle(selectedName);
      setVehiclePrice(vehicle.price);
      setDownPayment(0);
    }
  };

  const handleDownPaymentChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setDownPayment(value);
  };

  const handleInterestRateChange = (e) => {
    setInterestRate(parseFloat(e.target.value));
  };

  const handleLoanTermChange = (e) => {
    setLoanTerm(parseInt(e.target.value));
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container text-center">
          <h1 className="text-5xl font-playfair font-light mb-6 text-white">
            Calculadora de Financiamiento
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Calcula las cuotas de tu vehículo ideal con nuestra herramienta de
            financiamiento. Encuentra el plan que mejor se adapte a tu
            presupuesto.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-gray-900">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Calculator Form */}
              <div className="bg-gray-800 border border-gray-700 p-8">
                <h2 className="text-3xl font-playfair font-light text-white mb-8">
                  Calcula tu Cuota
                </h2>

                <div className="space-y-6">
                  {/* Vehicle Selection */}
                  <div>
                    <label className="block text-white font-medium mb-3">
                      Selecciona tu vehículo
                    </label>
                    <select
                      value={selectedVehicle}
                      onChange={handleVehicleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    >
                      <option value="">Selecciona un vehículo</option>
                      {allVehicles.map((vehicle) => (
                        <option key={vehicle.name} value={vehicle.name}>
                          {vehicle.name} - {formatPrice(vehicle.price)}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Vehicle Price Display */}
                  {vehiclePrice > 0 && (
                    <div className="bg-gray-700 p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">
                          Precio del vehículo:
                        </span>
                        <span className="text-2xl font-bold text-primary">
                          {formatPrice(vehiclePrice)}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Down Payment */}
                  <div>
                    <label className="block text-white font-medium mb-3">
                      Cuota inicial
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        $
                      </span>
                      <input
                        type="number"
                        value={downPayment}
                        onChange={handleDownPaymentChange}
                        placeholder="0"
                        min="0"
                        max={vehiclePrice}
                        className="w-full pl-8 pr-4 py-3 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      />
                    </div>
                    <p className="text-sm text-gray-400 mt-2">
                      Máximo: {formatPrice(vehiclePrice)}
                    </p>
                  </div>

                  {/* Interest Rate */}
                  <div>
                    <label className="block text-white font-medium mb-3">
                      Tasa de interés anual (%)
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={interestRate}
                        onChange={handleInterestRateChange}
                        min="0"
                        max="50"
                        step="0.1"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      />
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        %
                      </span>
                    </div>
                  </div>

                  {/* Loan Term */}
                  <div>
                    <label className="block text-white font-medium mb-3">
                      Plazo del crédito (meses)
                    </label>
                    <select
                      value={loanTerm}
                      onChange={handleLoanTermChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    >
                      <option value={12}>12 meses</option>
                      <option value={24}>24 meses</option>
                      <option value={36}>36 meses</option>
                      <option value={48}>48 meses</option>
                      <option value={60}>60 meses</option>
                      <option value={72}>72 meses</option>
                      <option value={84}>84 meses</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="bg-gray-800 border border-gray-700 p-8">
                <h2 className="text-3xl font-playfair font-light text-white mb-8">
                  Resumen de Financiamiento
                </h2>

                {vehiclePrice > 0 ? (
                  <div className="space-y-6">
                    {/* Monthly Payment */}
                    <div className="bg-primary/10 border border-primary/30 p-6">
                      <div className="text-center">
                        <p className="text-gray-300 mb-2">Cuota mensual</p>
                        <p className="text-4xl font-bold text-primary">
                          {formatPrice(monthlyPayment)}
                        </p>
                      </div>
                    </div>

                    {/* Financial Summary */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-gray-700">
                        <span className="text-gray-300">
                          Precio del vehículo:
                        </span>
                        <span className="text-white font-medium">
                          {formatPrice(vehiclePrice)}
                        </span>
                      </div>

                      <div className="flex justify-between items-center py-3 border-b border-gray-700">
                        <span className="text-gray-300">Cuota inicial:</span>
                        <span className="text-white font-medium">
                          {formatPrice(downPayment)}
                        </span>
                      </div>

                      <div className="flex justify-between items-center py-3 border-b border-gray-700">
                        <span className="text-gray-300">
                          Monto a financiar:
                        </span>
                        <span className="text-white font-medium">
                          {formatPrice(vehiclePrice - downPayment)}
                        </span>
                      </div>

                      <div className="flex justify-between items-center py-3 border-b border-gray-700">
                        <span className="text-gray-300">
                          Total de intereses:
                        </span>
                        <span className="text-white font-medium">
                          {formatPrice(totalInterest)}
                        </span>
                      </div>

                      <div className="flex justify-between items-center py-3">
                        <span className="text-gray-300 font-bold">
                          Total a pagar:
                        </span>
                        <span className="text-primary font-bold text-lg">
                          {formatPrice(totalAmount + downPayment)}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-6 space-y-3">
                      <button className="w-full px-6 py-3 bg-primary text-dark font-medium hover:bg-yellow-400 transition-colors duration-300">
                        Solicitar Financiamiento
                      </button>
                      <button className="w-full px-6 py-3 border border-primary text-primary font-medium hover:bg-primary hover:text-dark transition-colors duration-300">
                        Contactar Asesor
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <i className="fas fa-calculator text-6xl text-gray-600 mb-4"></i>
                    <p className="text-gray-400 text-lg">
                      Selecciona un vehículo para calcular tu financiamiento
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="py-20 bg-gray-800">
        <div className="container">
          <h2 className="text-4xl font-playfair font-light text-center mb-16 text-white">
            Opciones de Financiamiento
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-700 p-8 text-center">
              <i className="fas fa-percentage text-4xl text-primary mb-4"></i>
              <h3 className="text-xl font-medium text-white mb-4">
                Tasa Preferencial
              </h3>
              <p className="text-gray-300 mb-6">
                Aprovecha nuestras tasas especiales para vehículos nuevos con
                financiación directa.
              </p>
              <div className="text-2xl font-bold text-primary">Desde 8.9%</div>
            </div>

            <div className="bg-gray-700 p-8 text-center">
              <i className="fas fa-clock text-4xl text-primary mb-4"></i>
              <h3 className="text-xl font-medium text-white mb-4">
                Aprobación Rápida
              </h3>
              <p className="text-gray-300 mb-6">
                Proceso de aprobación ágil con respuesta en menos de 24 horas.
              </p>
              <div className="text-2xl font-bold text-primary">24 horas</div>
            </div>

            <div className="bg-gray-700 p-8 text-center">
              <i className="fas fa-shield-alt text-4xl text-primary mb-4"></i>
              <h3 className="text-xl font-medium text-white mb-4">
                Seguro Incluido
              </h3>
              <p className="text-gray-300 mb-6">
                Protección completa con seguro vehicular incluido en tu
                financiación.
              </p>
              <div className="text-2xl font-bold text-primary">Incluido</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FinancingPage;
