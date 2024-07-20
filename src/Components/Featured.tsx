import car1 from '../assets/car-1.jpg';
import car2 from '../assets/car-2.jpg';
import car3 from '../assets/car-3.jpg';
import car4 from '../assets/car-4.jpg';
import car5 from '../assets/car-5.jpg';
import car6 from '../assets/car-6.jpg';
import car7 from '../assets/car-8.jpg';
import car8 from '../assets/car-10.jpg';
// import car8 from '../assets/car-8.jpg';

const products = [
    {
      id: 1,
      name: 'Mercedes Convertible',
      href: '/vehicleslist',
      price: 'Fee:  $48',
      
      imageSrc: car1,
      imageAlt: 'Mercedes',
    },
    {
      id: 2,
      name: 'Range Rover',
      href: '/vehicleslist',
      price: 'Fee:  $35',
      imageSrc: car2,
      imageAlt: 'Range Rover',
    },
    {
      id: 3,
      name: 'Maclaren',
      href: '/vehicleslist',
      price: 'Fee:  $89',
      imageSrc: car3,
      imageAlt: 'MacLaren',
    },
    {
      id: 4,
      name: 'Ford Mustang',
      href: '/vehicleslist',
      price: 'Fee:  $35',
      imageSrc: car4,
      imageAlt: 'Ford Mustang',
    },
    {
      id: 1,
      name: 'BMW M4',
      href: '/vehicleslist',
      price: 'Fee:  $48',
      imageSrc: car5,
      imageAlt: 'BMW',
    },
    {
      id: 2,
      name: 'Aston Martin',
      href: '/vehicleslist',
      price: 'Fee:  $35',
      imageSrc: car6,
      imageAlt: 'Aston martin',
    },
    {
      id: 3,
      name: 'Jeep Wrangler',
      href: '/vehicleslist',
      price: 'Fee:  $89',
      imageSrc: car7,
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Mercedes gt86',
      href: '/vehicleslist',
      price: 'Fee:  $35',
      imageSrc: car8,
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    
  ]
  
  export default function Featured() {
    return (
      <div className="bg-gradient-to-r from-blue-400 to-black-500;">
        <h2 className="text-black	color: rgb(0 0 0) text-center	text-align: center text-5xl	font-size: 3rem font-bold font-weight: 700;">Featured Vehicles</h2>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-40 w-full object-cover object-center group-hover:opacity-50"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-300">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                <div className='flex justify-center'>
                <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full justify-center">More Details</button>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className='flex justify-center my-3.5	margin-bottom: 0.875rem;'>
        <a href="/vehicleslist" className="block bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full text-sm text-center">
  View More
</a>
        </div>
      </div>
    )
  }
  