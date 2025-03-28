const TestimonialCard = ({ quote, author, role }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg transition-all duration-300 hover:shadow-lg">
      <p className="text-gray-600 italic">"{quote}"</p>
      <div className="mt-4">
        <h4 className="font-semibold text-gray-900">{author}</h4>
        <p className="text-gray-500">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard; 