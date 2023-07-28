import { Link } from "react-router-dom";
import LOGO from "../assets/netflix-logo.svg";
import HERO from "../assets/hero-image.jpg";

const SignIn = () => {
  return (
    <>
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage: `url(${HERO})`,
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        {/* NAVBAR */}
        <div className="absolute top-0 left-3 md:left-10 ">
          <Link to="/" className=" cursor-pointer">
            <img src={LOGO} alt="Netflix logo" className="h-24 md:h-28" />
          </Link>
        </div>
        {/* SIGN IN FORM*/}
        <div className="card w-11/12 max-w-md px-5 md:px-9 py-4 md:py-7 shadow-2xl bg-black bg-opacity-70">
          <div className="card-body">
            <h2 className="text-xl md:text-3xl text-white font-semibold mb-5">
              Sign In
            </h2>
            <div className="form-control mb-5">
              <input
                type="text"
                placeholder="Email or Phone no."
                className="input rounded-sm bg-[rgb(60,60,60)]"
              />
            </div>
            <div className="form-control mb-5">
              <input
                type="text"
                placeholder="Password"
                className="input rounded-sm bg-[rgb(60,60,60)]"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-red-500 capitalize hover:bg-red-600 text-white text-lg rounded-sm">
                Sign In
              </button>
            </div>
            <div className="text-sm flex items-center justify-between mb-3">
              <div className="flex gap-1 items-center">
                <input type="checkbox" />
                <label>Remember me</label>
              </div>
              <p className=" flex-grow-0 hover:underline cursor-pointer">
                Need help?
              </p>
            </div>
            <p className="text-base mb-3">
              New to Netflix?{" "}
              <Link
                to="/"
                className="text-white hover:underline inline-block ml-1 cursor-pointer"
              >
                Sign up now
              </Link>
            </p>
            <p className="text-xs">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              <span className="text-blue-600 hover:underline cursor-pointer">
                Learn More
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
