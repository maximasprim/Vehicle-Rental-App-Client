

const FAQComponent = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Frequently Asked Questions</h2>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {/* FAQ Item 1 */}
        <div className="border-b border-gray-200">
          <button
            type="button"
            className="flex justify-between items-center w-full px-6 py-4 focus:outline-none hover:bg-gray-100 transition-colors duration-200"
          >
            <span className="text-lg font-semibold">What vehicles do you offer?</span>
            <svg
              className="w-4 h-4 text-gray-600 transform transition-transform duration-200"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              />
            </svg>
          </button>
          <div className="px-6 py-4">
            <p className="text-gray-800">
              We offer a wide range of vehicles including sedans, SUVs, trucks, and luxury vehicles.
            </p>
          </div>
        </div>

        {/* FAQ Item 2 */}
        <div className="border-b border-gray-200">
          <button
            type="button"
            className="flex justify-between items-center w-full px-6 py-4 focus:outline-none hover:bg-gray-100 transition-colors duration-200"
          >
            <span className="text-lg font-semibold">How can I make a reservation?</span>
            <svg
              className="w-4 h-4 text-gray-600 transform transition-transform duration-200"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              />
            </svg>
          </button>
          <div className="px-6 py-4">
            <p className="text-gray-800">
              Reservations can be made through our website or by contacting our customer support team.
            </p>
          </div>
        </div>

        {/* Add more FAQ items as needed */}

      </div>
    </div>
  );
};

export default FAQComponent;
