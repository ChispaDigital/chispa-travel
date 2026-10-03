import React, { useState } from 'react';
import { ChevronDown, ArrowRight, Instagram, MessageCircle, CheckCircle } from 'lucide-react';

// Tipado para los planes disponibles
type PlanName = "" | "Bronce" | "Oro" | "Diamante";

// Componente Logo (puedes reemplazarlo por tu propio SVG o imagen de Chispa Digital)
const Logo = ({ light = false }: { light?: boolean }) => (
  <div className={`font-bold text-2xl ${light ? 'text-white' : 'text-gray-900'}`}>
    CHISPA<span className="text-yellow-500">DIGITAL</span>
  </div>
);

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanName>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar los datos (ej: a tu webhook de Make.com o HubSpot)
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header / Navbar */}
      <header className="flex justify-between items-center p-6 bg-white shadow-sm sticky top-0 z-50">
        <Logo />
        <nav className="hidden md:flex gap-6 font-medium">
          <a href="#metodo" className="hover:text-yellow-500 transition-colors">El método</a>
          <a href="#servicios" className="hover:text-yellow-500 transition-colors">Servicios y LLC</a>
          <a href="#planes" className="hover:text-yellow-500 transition-colors">Planes y mentoría</a>
        </nav>
        <a href="#diagnostico" className="bg-yellow-500 text-gray-900 px-5 py-2 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
          Agendar sesión
        </a>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold tracking-tight mb-6">
          Escala tu Agencia de Viajes
        </h1>
        <p className="text-xl text-gray-600 mb-10">
          Transformando agentes de viajes en agencias rentables a nivel global. De Argentina al mundo. 
          Te ayudamos a estructurar tu negocio, abrir tu LLC y multiplicar tus ventas.
        </p>
        <a href="#diagnostico" className="inline-flex items-center gap-2 bg-yellow-500 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl">
          Quiero transformar mi agencia <ArrowRight size={20} />
        </a>
      </section>

      {/* Planes Section */}
      <section id="planes" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Planes diseñados para tu crecimiento</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Bronce */}
            <div className="border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Chispa Academy</h3>
              <p className="text-yellow-600 font-semibold mb-6">Plan Bronce</p>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li>✓ Acceso a la academia base</li>
                <li>✓ Comunidad de agentes</li>
                <li>✓ Soporte por ticket</li>
              </ul>
              <button 
                onClick={() => { setSelectedPlan("Bronce"); window.location.href = "#diagnostico"; }}
                className="w-full py-3 border-2 border-yellow-500 text-yellow-600 font-bold rounded-lg hover:bg-yellow-50 transition-colors"
              >
                Elegir Bronce
              </button>
            </div>

            {/* Oro */}
            <div className="border-2 border-yellow-500 rounded-2xl p-8 shadow-lg relative transform md:-translate-y-4 bg-white">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-gray-900 px-4 py-1 rounded-full font-bold text-sm">
                MÁS ELEGIDO
              </div>
              <h3 className="text-2xl font-bold mb-2">Chispa Pro</h3>
              <p className="text-yellow-600 font-semibold mb-6">Plan Oro</p>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li>✓ Todo lo de Bronce</li>
                <li>✓ Formación de LLC en USA</li>
                <li>✓ Sesiones grupales quincenales</li>
              </ul>
              <button 
                onClick={() => { setSelectedPlan("Oro"); window.location.href = "#diagnostico"; }}
                className="w-full py-3 bg-yellow-500 text-gray-900 font-bold rounded-lg hover:bg-yellow-400 transition-colors shadow-md"
              >
                Elegir Oro
              </button>
            </div>

            {/* Diamante */}
            <div className="border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow bg-gray-900 text-white">
              <h3 className="text-2xl font-bold mb-2">VIP Mentorship</h3>
              <p className="text-yellow-400 font-semibold mb-6">Plan Diamante</p>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li>✓ Todo lo de Oro</li>
                <li>✓ 1-a-1 Estratégico</li>
                <li>✓ Optimización fiscal avanzada</li>
              </ul>
              <button 
                onClick={() => { setSelectedPlan("Diamante"); window.location.href = "#diagnostico"; }}
                className="w-full py-3 border-2 border-yellow-500 text-yellow-400 font-bold rounded-lg hover:bg-gray-800 transition-colors"
              >
                Elegir Diamante
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario Section */}
      <section id="diagnostico" className="py-20 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-8">Postula a tu sesión de diagnóstico</h2>
          
          <form onSubmit={handleSubmit}>
            {submitted ? (
              <div className="text-center py-10 animate-fade-in">
                <CheckCircle size={64} className="mx-auto text-green-500 mb-6" />
                <h3 className="text-2xl font-bold mb-2">¡Solicitud enviada con éxito!</h3>
                <p className="text-gray-600 mb-8">Nos pondremos en contacto contigo a la brevedad para coordinar tu sesión.</p>
                <button
                  type="button"
                  className="bg-gray-100 text-gray-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                  onClick={() => setSubmitted(false)}
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nombre completo</label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email corporativo</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="tu@agencia.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="plan" className="block text-sm font-medium text-gray-700 mb-2">Plan de interés</label>
                  <div className="relative">
                    <select
                      id="plan"
                      value={selectedPlan}
                      onChange={(e) => setSelectedPlan(e.target.value as PlanName)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none appearance-none transition-all bg-white"
                    >
                      <option value="">No estoy seguro, busco orientación</option>
                      <option value="Bronce">Chispa Academy (Bronce)</option>
                      <option value="Oro">Chispa Pro (Oro)</option>
                      <option value="Diamante">VIP Mentorship (Diamante)</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-3.5 text-gray-400 pointer-events-none" size={20} />
                  </div>
                </div>

                <button type="submit" className="w-full bg-yellow-500 text-gray-900 font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-yellow-400 transition-colors shadow-md mt-4">
                  Agendar mi sesión <ArrowRight size={20} />
                </button>
                <p className="text-xs text-center text-gray-500 mt-4">
                  Tus datos están seguros. Al enviar este formulario aceptas nuestra política de privacidad.
                </p>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Footer corporativo */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 border-b border-gray-800 pb-8 mb-8">
          <div className="col-span-1">
            <Logo light />
            <p className="mt-4 text-sm leading-relaxed">
              Transformando agentes de viajes en agencias rentables a nivel global.
              De Argentina al mundo.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Navegación</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <a href="#metodo" className="hover:text-yellow-400 transition-colors">El método</a>
              <a href="#servicios" className="hover:text-yellow-400 transition-colors">Servicios y LLC</a>
              <a href="#planes" className="hover:text-yellow-400 transition-colors">Planes y mentoría</a>
              <a href="#filosofia" className="hover:text-yellow-400 transition-colors">Filosofía</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Contacto</h4>
            <div className="flex flex-col space-y-3 text-sm">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                <Instagram size={18} /> Instagram
              </a>
              <a href="#diagnostico" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                <MessageCircle size={18} /> Soporte
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Chispa Digital. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
