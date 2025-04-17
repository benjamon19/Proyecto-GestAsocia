function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-3 mb-6">
              <h3 className="font-bold text-xl">Centro Odontológico</h3>
            </div>
            <p className="text-gray-400 max-w-md">
              Sistema integral para la gestión del Centro Odontológico del Sindicato 1 de Codelco Calama. Diseñado para optimizar procesos y mejorar la experiencia de atención.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold mb-4 text-lg">Enlaces rápidos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Inicio</a></li>
                <li><a href="#" className="hover:text-white">Características</a></li>
                <li><a href="#" className="hover:text-white">Capturas</a></li>
                <li><a href="#" className="hover:text-white">Demo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="mailto:contacto@centrodental.cl" className="hover:text-white">contacto@ejemplodental.cl</a></li>
                <li><a href="tel:+56552345678" className="hover:text-white">+569 ejemplo</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© 2025 Centro Odontológico - Sindicato 1 Codelco Calama. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
export default SiteFooter;