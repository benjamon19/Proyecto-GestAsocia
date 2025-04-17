import { ArrowRight } from "lucide-react";

export default function HeroBanner() {
  return (
    <section id="inicio" className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Texto */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Plataforma de Gestión Odontológica
            </h1>
            <p className="text-lg mb-6">
              Proyecto en desarrollo conjunto con el Centro Odontológico del Sindicato N°1 de Trabajadores de Codelco. Este sistema busca resolver necesidades reales de verificación de socios dentro del centro odontológico.
            </p>
            <p className="text-sm text-blue-200 mb-8">
              Actualmente en fase de planificación. La aplicación aún no se encuentra disponible para su uso.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-white text-blue-900 px-6 py-3 rounded-md font-semibold text-lg opacity-60 cursor-not-allowed"
                disabled
              >
                Demo (no disponible aún)
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("modulos");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="border border-white text-white px-6 py-3 rounded-md font-medium text-lg hover:bg-blue-800 transition-colors duration-200 cursor-pointer"
              >
                Conocer más
              </button>
            </div>
          </div>

          {/* Imagen editable */}
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white rounded-lg shadow-xl p-2 transform rotate-1 w-full max-w-3xl mx-auto">
              <img
                src="/public/prototipo.jpg"
                alt="Espacio para vista previa del sistema"
                className="rounded-md w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
