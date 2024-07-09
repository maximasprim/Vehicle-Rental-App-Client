// import { SonyLogo, VerizonLogo, AmazonLogo, MicrosoftLogo, NetflixLogo } from "../utils/svg"
import companiesPhoto from "../assets/5ac485c65a6e340c3088ae868081db9f.jpg";

export default function Companies() {
  return (
    <div className="flex flex-col place-items-center max-w-full">
      <h1 className="text-3xl font-bold">
        Available <span className="text-green-800">Companies</span>
      </h1>
      <div className="flex flex-col place-items-center min-w-lg bg-base-200 ">
        <img
          src={companiesPhoto}
          alt="companies"
          className="w-11/12	width: 91.666667% h-full object-cover"
        />
      </div>
    </div>
  );
}
