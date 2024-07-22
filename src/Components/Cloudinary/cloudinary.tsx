import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import { Link } from 'react-router-dom';

const images = [
  { id: 'bugati', route: '/admin/vehiclesSpecifications' },
  { id: 'bugati 2', route: '/admin/vehiclesSpecifications' },
  { id: 'bugati 3', route: '/admin/vehiclesSpecifications' },
  { id: 'teana', route: '/admin/vehiclesSpecifications' },
  { id: 'huracan', route: '/admin/vehiclesSpecifications' },
  { id: 'cayenne', route: '/admin/vehiclesSpecifications' },
  { id: 'crown', route: '/admin/vehiclesSpecifications' },
  { id: 'Corolla', route: '/admin/vehiclesSpecifications' },
  { id: 'Civic', route: '/admin/vehiclesSpecifications' },
  { id: 'Escape', route: '/admin/vehiclesSpecifications' },
  { id: 'Malibu', route: '/admin/vehiclesSpecifications' },
  { id: 'Altima', route: '/admin/vehiclesSpecifications' },
  { id: 'Elantra', route: '/admin/vehiclesSpecifications' },
  { id: 'X5', route: '/admin/vehiclesSpecifications' },
  { id: 'Q7', route: '/admin/vehiclesSpecifications' },
  { id: 'C-Class', route: '/admin/vehiclesSpecifications' },
  { id: 'Model S', route: '/admin/vehiclesSpecifications' },
  { id: 'Sorento', route: '/admin/vehiclesSpecifications' },
  { id: 'CX-5', route: '/admin/vehiclesSpecifications' },
  { id: 'Outback', route: '/admin/vehiclesSpecifications' },
  { id: 'XC90', route: '/admin/vehiclesSpecifications' },
  { id: 'Wrangler', route: '/admin/vehiclesSpecifications' },
  { id: 'Jetta', route: '/admin/vehiclesSpecifications' },
  
];

const Cloud = () => {
  const cld = new Cloudinary({ cloud: { cloudName: 'dcwglllgt' } });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => {
        const img = cld
          .image(image.id)
          .format('auto')
          .quality('auto')
          .resize(auto().gravity(autoGravity()).width(500).height(500));

        return (
          <Link to={image.route} key={index}>
            <AdvancedImage cldImg={img} />
          </Link>
        );
      })}
    </div>
  );
};

export { Cloud, images };
