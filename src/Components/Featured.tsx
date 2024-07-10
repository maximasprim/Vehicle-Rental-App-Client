import car1 from '../assets/car-1.jpg';
import car2 from '../assets/car-2.jpg';
import car3 from '../assets/car-3.jpg';
import car4 from '../assets/car-4.jpg';
import car5 from '../assets/car-5.jpg';
import car6 from '../assets/car-6.jpg';
import car7 from '../assets/car-7.jpg';
// import car8 from '../assets/car-8.jpg';

const products = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      
      imageSrc: car1,
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc: car2,
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: car3,
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: car4,
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc: car5,
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc: car6,
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: car7,
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: car7,
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]
  
  export default function Featured() {
    return (
      <div className="bg-pink-300	background-color: rgb(249 168 212);">
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
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                <div className='flex justify-center'>
                <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-1 px-2 rounded-full justify-center">More Details</button>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className='flex justify-center my-3.5	margin-bottom: 0.875rem;'>
        <button className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full justify-center">View More</button>
        </div>
      </div>
    )
  }
  