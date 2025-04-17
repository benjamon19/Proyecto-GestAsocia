import { CheckCircle } from "lucide-react";

export default function BenefitsGrid() {
  const benefits = [
    {
      text: "Hasta un 80% de reducción en el tiempo de validación de socios.",
    },
    {
      text: "Disminución de más del 90% de errores administrativos y duplicidades.",
    },
    {
      text: "Acceso rápido y seguro a información desde cualquier dispositivo, 24/7.",
    },
    {
      text: "Centralización y respaldo automático de datos en la nube (Google Cloud).",
    },
    {
      text: "Elimina procesos manuales y papelería innecesaria.",
    },
    {
      text: "Sistema diseñado a medida para el Centro Odontológico del Sindicato N°1.",
    },
  ];

  return (
    <section className="py-16 bg-blue-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          ¿Qué beneficios aporta esta solución?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {benefits.map((benefit, index) => (
            <BenefitItem key={index} text={benefit.text} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitItem({ text }) {
  return (
    <div className="flex items-start space-x-3">
      <CheckCircle className="flex-shrink-0 text-blue-300 mt-1" />
      <p className="text-lg">{text}</p>
    </div>
  );
}
