import heroImg from '../assets/bg_1.jpg';
import { CircleArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div 
      className="hero h-screen bg-cover bg-center mb-20" 
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      <div className="hero-content grid md:grid-cols-2 sm:gap-5 h-full items-center justify-center	justify-content: center content-center	align-content: center;">
        <div>
          <h1 className="text-5xl font-bold text-white	color: rgb(255 255 255);">Fast & Easy Way To Rent A Car</h1>
          <p className="py-6 text-slate-300	color: rgb(203 213 225);">
            Discover a world of knowledge with our extensive collection of PDFs. Whether you're looking for educational material, fiction, or technical documents, we've got you covered. Enjoy seamless access, intuitive navigation, and personalized reading experiences all in one place.
          </p>
          <button className="btn btn-outline btn-info">Easy Steps For Renting a Car<CircleArrowRight /></button>
          
        </div>
        

      </div>
    </div>
  );
}
