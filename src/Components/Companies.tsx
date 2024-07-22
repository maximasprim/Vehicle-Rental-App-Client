import companiesPhoto from "../assets/5ac485c65a6e340c3088ae868081db9f.jpg";
import luxuryVehicleImg from "../assets/car-2.jpg";
import suvImg from "../assets/car-2.jpg";
import offRoadVehicleImg from "../assets/car-7.jpg";
import sedanImg from "../assets/car-12.jpg";
import coupeImg from "../assets/car-11.jpg";
import convertibleImg from "../assets/car-1.jpg";
import pickupTruckImg from "../assets/car-8.jpg";
import electricVehicleImg from "../assets/car-3.jpg";
import VehicleImg from "../assets/image_1.jpg";
import VehicleImg2 from "../assets/image_3.jpg";


export default function Companies() {
  const categories = [
    {
      name: "Luxury Vehicles",
      description:
        "Experience the pinnacle of comfort and elegance with our luxury vehicles. Perfect for making a statement and enjoying a first-class driving experience.",
      image: luxuryVehicleImg,
    },
    {
      name: "SUVs",
      description:
        "Our SUVs offer a perfect blend of space, power, and versatility. Ideal for family trips and off-road adventures.",
      image: suvImg,
    },
    {
      name: "Off-Road Vehicles",
      description:
        "Built for the toughest terrains, our off-road vehicles are perfect for those who love to explore the wild and go beyond the beaten path.",
      image: offRoadVehicleImg,
    },
    {
      name: "Sedans",
      description:
        "Stylish and efficient, our sedans are perfect for daily commutes and long drives. Enjoy the balance of comfort and performance.",
      image: sedanImg,
    },
    {
      name: "Coupes",
      description:
        "With a sleek design and powerful performance, our coupes are perfect for those who enjoy a sporty and dynamic driving experience.",
      image: coupeImg,
    },
    {
      name: "Convertibles",
      description:
        "Feel the wind in your hair and enjoy the open road with our convertibles. Perfect for a fun and exhilarating drive.",
      image: convertibleImg,
    },
    {
      name: "Pickup Trucks",
      description:
        "Our pickup trucks offer unmatched utility and strength. Ideal for transporting goods and handling tough tasks.",
      image: pickupTruckImg,
    },
    {
      name: "Electric Vehicles",
      description:
        "Join the green revolution with our electric vehicles. Enjoy the benefits of sustainable driving without compromising on performance.",
      image: electricVehicleImg,
    },
  ];

  return (
    <div className="flex flex-col place-items-center max-w-full p-8 bg-gradient-to-r from-gray-400 to-black-300">
      <h1 className="text-5xl font-bold mb-8 text-green-800">
        Available Car<span className="text-gray-50	color: rgb(249 250 251);" > Companies</span>
      </h1>
      <div className="flex flex-row place-items-start min-w-lg bg-white shadow-lg p-1 rounded-lg gap-6">
        <div className="flex flex-col w-1/2 h-screen gap-6" >
        <img
          src={companiesPhoto}
          alt="companies"
          className="w-full h-full object-cover rounded-lg"
        />
        <img
          src={VehicleImg}
          alt="companies"
          className="w-full h-full object-cover rounded-lg"
        />
        <img
          src={VehicleImg2}
          alt="companies"
          className="w-full h-full object-cover rounded-lg"
        />
        </div>
        <div className="flex flex-col w-1/2">
          <h1 className="text-4xl font-bold mb-6">Car Categories</h1>
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-row mb-6 p-4 bg-gray-50 shadow-md rounded-lg"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-1/4 h-full object-cover rounded-lg mr-4"
              />
              <div>
                <h2 className="text-2xl font-semibold text-blue-800">
                  {category.name}
                </h2>
                <p className="text-lg text-gray-700">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
