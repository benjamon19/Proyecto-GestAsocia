function BenefitPoint({ text, icon: Icon }) {
    return (
      <div className="flex items-start space-x-3">
        <Icon className="flex-shrink-0 text-blue-300" />
        <p className="text-lg">{text}</p>
      </div>
    );
  }
export default BenefitPoint;