import { Fingerprint, BadgeCheck, Users, Cloud, UserPlus, Trash2, Settings } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Módulos de la Aplicación
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          El sistema está construido de forma modular para adaptarse a las necesidades específicas del Centro Odontológico, facilitando el acceso, la administración y la verificación segura de los asociados.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Autenticación */}
          <FeatureItem
            icon={<Fingerprint size={40} className="text-blue-700" />}
            title="Autenticación de Socios"
            description="Verificación mediante RUT, código de barras y huella digital. La solución al problema histórico de validación de socios."
          />

          {/* Gestión de Asociados */}
          <FeatureItem
            icon={<Users size={40} className="text-blue-700" />}
            title="Gestión de Asociados"
            description="Permite buscar, agregar, editar o eliminar socios registrados, incluyendo datos clínicos y administrativos."
          />

          {/* Gestión de Cargas */}
          <FeatureItem
            icon={<UserPlus size={40} className="text-blue-700" />}
            title="Gestión de Cargas"
            description="Administración detallada de cargas familiares asociadas a cada socio. Con historial, relación y control por núcleo."
          />

          {/* Base de Datos Cloud */}
          <FeatureItem
            icon={<Cloud size={40} className="text-blue-700" />}
            title="Base de Datos en la Nube"
            description="Toda la información almacenada de forma segura en Google Cloud para alta disponibilidad y respaldo automático."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon, title, description }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}