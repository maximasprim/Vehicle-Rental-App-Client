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
          <h1 className="text-5xl font-bold text-white	color: rgb(255 255 255);">Effortless Veh<span className='text-gray-600	color: rgb(75 85 99);'>icle Rentals</span></h1>
          <p className="py-6 text-base	line-height: 1.5rem text-slate-200	color: rgb(203 213 225);">
          Welcome to Maximas CarBook, the ultimate solution for hassle-free vehicle rentals. Whether you're planning a weekend getaway or managing a fleet of vehicles, our intuitive platform offers you a seamless experience. With features like real-time booking, secure payments, and comprehensive vehicle management, we ensure that your journey is smooth from start to finish. Join us today and explore a new era of vehicle rentals with unmatched convenience and reliability.
          </p>
          <button className="btn btn-outline btn-info">Easy Steps For Renting a Car<CircleArrowRight /></button>
          
        </div>
        

      </div>
    </div>
  );
}
