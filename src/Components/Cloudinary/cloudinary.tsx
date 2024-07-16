// import React from 'react'
// import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import { Link } from 'react-router-dom'; // or 'next/link' if using Next.js

const Cloud = () => {
  const cld = new Cloudinary({ cloud: { cloudName: 'dcwglllgt' } });

  // Array of images with their respective routes
  const images = [
    { id: 'bugati', route: '/sample1' },
    { id: 'bugati 2', route: '/sample2' },
    { id: 'bugati 3', route: '/sample3' },
    // Add more images and routes as needed
  ];

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

export default Cloud;
