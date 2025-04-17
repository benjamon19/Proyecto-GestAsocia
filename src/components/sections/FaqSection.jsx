import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "¿Cómo se valida si una persona es socio?",
      answer:
        "El sistema permite la validación mediante RUT, escaneo de código de barras o huella digital. Esta verificación es inmediata y reduce errores humanos en la atención.",
    },
    {
      question: "¿Qué diferencia tiene la versión desktop con la móvil?",
      answer:
        "La versión de escritorio incluye soporte para lectores biométricos y escáneres de código de barras. La versión móvil ofrecerá las mismas funcionalidades, excepto estos métodos físicos.",
    },
    {
      question: "¿Los datos están seguros?",
      answer:
        "Sí. Toda la información se almacena en una base de datos en Google Cloud con acceso cifrado y respaldos automáticos.",
    },
    {
      question: "¿Se necesita internet para utilizar el sistema?",
      answer:
        "Se requiere una conexión a internet constante para acceder a todas las funcionalidades de la aplicación.",
    },
    {
      question: "¿Qué hardware necesita el sistema para funcionar?",
      answer:
        "Funciona en equipos estándar con Windows 10 o superior. Para autenticación biométrica se requiere un lector de huella compatible o escáner de códigos de barra.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Detalles Importantes del Funcionamiento
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              index={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItems.includes(index)}
              toggle={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AccordionItem({ question, answer, isOpen, toggle }) {
  const contentRef = useRef(null);

  return (
    <div className="border-b border-gray-200 pb-2">
      <button
        onClick={toggle}
        className="flex justify-between items-center w-full text-left py-4 focus:outline-none cursor-pointer"
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <ChevronDown
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          } text-blue-700`}
          size={20}
        />
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <p className="pt-2 pb-4 text-gray-600">{answer}</p>
      </div>
    </div>
  );
}
