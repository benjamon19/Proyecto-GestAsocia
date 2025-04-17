export default function CallToActionSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Próximamente: Una solución pensada para el Sindicato N°1 de Codelco
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Este sistema forma parte de un proyecto de titulación desarrollado en colaboración con el Centro Odontológico del Sindicato N°1 de Trabajadores de Codelco Calama. Actualmente en su fase de diseño, la aplicación busca solucionar problemáticas reales de gestión y atención clínica.
        </p>

        <p className="text-sm text-blue-200 mb-12">
          Versión demo en preparación — implementación prevista en entorno real tras fase de pruebas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-900 px-8 py-4 rounded-md font-medium text-lg hover:bg-blue-100 transition-colors duration-200 cursor-pointer">
            Ver funcionalidades
          </button>
          <button className="border border-white text-white px-8 py-4 rounded-md font-medium text-lg hover:bg-blue-800 transition-colors duration-200 cursor-pointer">
            Conocer el proyecto
          </button>
        </div>
      </div>
    </section>
  );
}
