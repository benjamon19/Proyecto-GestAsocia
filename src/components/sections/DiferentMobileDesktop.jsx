import { Smartphone, Monitor, Lock, Fingerprint, Barcode, Users, Cloud, FileText, Settings } from "lucide-react";

export default function DiferentMobileDesktop() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Acceso desde cualquier dispositivo
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          La aplicación podrá utilizarse tanto desde computadores como desde dispositivos móviles. Cada usuario contará con una cuenta personal para acceder al sistema desde cualquier lugar de forma segura.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Versión de Escritorio */}
          <DeviceCard
            title="Versión de Escritorio"
            icon={<Monitor size={40} className="text-blue-700" />}
            features={[
              "✅ Inicio de sesión con cuenta única (sincronizada con móvil)",
              "✅ Autenticación con RUT, código de barras y huella digital",
              "✅ Gestión completa de asociados y cargas familiares",
              "✅ Visualización y edición de historial clínico",
              "✅ Generación de reportes en formato PDF",
            ]}
          />

          {/* Versión Móvil */}
          <DeviceCard
            title="Versión Móvil"
            icon={<Smartphone size={40} className="text-blue-700" />}
            features={[
              "✅ Inicio de sesión con la misma cuenta que escritorio",
              "✅ Consulta rápida de asociados y cargas",
              "✅ Edición básica de datos personales",
              "⚠️ Sin autenticación por huella ni código de barras",
              "⚠️ Vista simplificada, sin paneles técnicos ni filtros avanzados",
            ]}
          />
        </div>

        <div className="mt-12 text-center">
          <Lock className="inline-block text-blue-700 mb-2" size={28} />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Seguridad primero
          </h3>
          <p className="text-gray-600 max-w-xl mx-auto">
            Todo el acceso está protegido mediante inicio de sesión único por usuario. Cada cuenta tiene su perfil de acceso definido según su rol dentro del sistema.
          </p>
        </div>
      </div>
    </section>
  );
}

function DeviceCard({ title, icon, features }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-3 mb-4">
        {icon}
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <ul className="list-inside space-y-2 text-gray-600">
        {features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}
