import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import { Link } from 'react-router-dom';

const images = [
  { id: 'bugati', route: '/sample1' },
  { id: 'bugati 2', route: '/sample2' },
  { id: 'bugati 3', route: '/sample3' },
  { id: 'teana', route: '/sample4' },
  { id: 'huracan', route: '/sample5' },
  { id: 'cayenne', route: '/sample6' },
  { id: 'crown', route: '/sample7' },
  { id: 'Corolla', route: '/sample8' },
  { id: 'vehicles/Civic', route: '/sample9' },
  { id: 'vehicles/Escape', route: '/sample10' },
  { id: 'Malibu', route: '/sample11' },
  { id: 'Altima', route: '/sample12' },
  { id: 'Elantra', route: '/sample13' },
  { id: 'X5', route: '/sample14' },
  { id: 'Q7', route: '/sample15' },
  { id: 'C-Class', route: '/sample16' },
  { id: 'Model S', route: '/sample17' },
  { id: 'Sorento', route: '/sample19' },
  { id: 'CX-5', route: '/sample20' },
  { id: 'Outback', route: '/sample21' },
  { id: 'XC90', route: '/sample22' },
  { id: 'Wrangler', route: '/sample23' },
  
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
