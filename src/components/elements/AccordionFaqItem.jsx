import { ChevronDown } from "lucide-react";
function AccordionFaqItem({ index, question, answer, isOpen, toggle }) {
  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        onClick={toggle}
        className="flex justify-between items-center w-full text-left py-4 focus:outline-none"
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <ChevronDown
          className={`transform transition-transform ${isOpen ? 'rotate-180' : ''} text-blue-700`}
          size={20}
        />
      </button>
      {isOpen && (
        <div className="pb-4 pt-2 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
export default AccordionFaqItem;