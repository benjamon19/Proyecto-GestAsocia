import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavigationBar({ activeTab, setActiveTab }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    if (id === "inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMenuOpen(false); // Cierra el menú en mobile
  };

  return (
    <nav className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo + Título */}
        <div className="flex items-center space-x-3">
          <div className="bg-white rounded-full p-2">
            <div className="w-10 h-10">
              <img
                src="/public/logo.png"
                alt="Logo GestAsocia"
                className="object-contain w-full h-full rounded-full"
              />
            </div>
          </div>
          <h1 className="font-bold text-xl">Proyecto GestAsocia</h1>
        </div>

        {/* Botón menú en mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none transition-transform duration-300"
          >
            <div className={`transition-transform duration-300 ${menuOpen ? "rotate-90" : ""}`}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>

        {/* Navegación en desktop */}
        <div className="hidden md:flex space-x-6 items-center">
          <button onClick={() => scrollTo("inicio")} className="hover:underline cursor-pointer">Inicio</button>
          <button onClick={() => scrollTo("modulos")} className="hover:underline cursor-pointer">Módulos</button>
          <button onClick={() => scrollTo("dispositivos")} className="hover:underline cursor-pointer">Dispositivos</button>
          <button onClick={() => scrollTo("info")} className="hover:underline cursor-pointer">Info</button>
          <button onClick={() => scrollTo("contacto")} className="hover:underline cursor-pointer">Contacto</button>
          <span className="bg-white text-blue-900 px-4 py-2 rounded-md font-medium text-sm opacity-70 cursor-not-allowed whitespace-nowrap">
            Próximamente disponible
          </span>
        </div>
      </div>

      {/* Menú desplegable móvil */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out shadow-md ${
          menuOpen ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
        } bg-white text-blue-900`}
      >
        <div className="px-4 pb-4 pt-2 space-y-2">
          <button onClick={() => scrollTo("inicio")} className="block w-full text-left py-2 hover:text-blue-700">Inicio</button>
          <button onClick={() => scrollTo("modulos")} className="block w-full text-left py-2 hover:text-blue-700">Módulos</button>
          <button onClick={() => scrollTo("dispositivos")} className="block w-full text-left py-2 hover:text-blue-700">Dispositivos</button>
          <button onClick={() => scrollTo("info")} className="block w-full text-left py-2 hover:text-blue-700">Info</button>
          <button onClick={() => scrollTo("contacto")} className="block w-full text-left py-2 hover:text-blue-700">Contacto</button>
          <span className="block text-center bg-white text-blue-900 border border-blue-900 px-4 py-2 rounded-md text-sm mt-3 opacity-70 cursor-not-allowed">
            Próximamente disponible
          </span>
        </div>
      </div>
    </nav>
  );
}
