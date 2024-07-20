import backgroundImage from '../assets/R (5).jpeg';

const Services = () => {
  return (
    <div
      className="max-w-4xl mx-auto px-4 py-8"
      style={{
        backgroundImage: `url(${ backgroundImage })`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h2 className="text-3xl font-semibold text-center mb-6">Our Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Service Item 1: Vehicle Rentals */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <h3 className="text-xl font-semibold mb-2">Vehicle Rentals</h3>
            <p className="text-gray-800">
              We offer a wide selection of vehicles for rent, including sedans, SUVs, trucks,
              and luxury cars. Whether you need a vehicle for daily commute or special occasions,
              we have options to suit your needs.
            </p>
          </div>
        </div>

        {/* Service Item 2: Flexible Booking Options */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <h3 className="text-xl font-semibold mb-2">Flexible Booking Options</h3>
            <p className="text-gray-800">
              Enjoy flexible booking options with hourly, daily, weekly, and monthly rental plans.
              We strive to accommodate your schedule and provide convenient rental durations that
              fit your travel plans.
            </p>
          </div>
        </div>

        {/* Service Item 3: Online Reservations */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <h3 className="text-xl font-semibold mb-2">Online Reservations</h3>
            <p className="text-gray-800">
              Easily book your vehicle online through our user-friendly reservation system.
              Browse available vehicles, select your rental dates, and complete your reservation
              in just a few clicks. It's quick, secure, and convenient.
            </p>
          </div>
        </div>

        {/* Service Item 4: Customer Support */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <h3 className="text-xl font-semibold mb-2">24/7 Customer Support</h3>
            <p className="text-gray-800">
              Our dedicated customer support team is available 24/7 to assist you with any
              questions, concerns, or emergencies during your rental experience. We're here to
              ensure your satisfaction and provide prompt assistance whenever you need it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
