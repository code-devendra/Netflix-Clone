import Navbar from "./Navbar";
import HERO from "../assets/hero-image.jpg";
const Hero = () => {
  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage: `url(${HERO})`,
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-70"></div>
      <Navbar />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md md:max-w-4xl">
          <h1 className="mb-5 text-white text-4xl md:text-5xl font-bold">
            Unlimited movies, TV shows and more
          </h1>
          <p className="text-lg md:text-xl text-white mb-5">
            Watch anywhere. Cancel anytime.
          </p>
          <p className="text-lg md:text-xl text-white mb-4">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-2">
            <input
              type="text"
              className="inline-block min-w-[280px] w-80 p-3 bg-black bg-opacity-50 border border-slate-500 rounded-md"
              placeholder="Email Address"
            />
            <button className="btn bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-md font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
