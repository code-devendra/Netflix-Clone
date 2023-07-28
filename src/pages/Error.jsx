import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center text-white">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Oops! 404</h1>
          <p className="py-6">The page you are looking is not exist..</p>
          <Link to="/" className="btn text-white bg-red-500 hover:bg-red-600">
            Go to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
