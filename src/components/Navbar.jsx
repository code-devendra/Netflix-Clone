import { Link } from "react-router-dom";
import LOGO from "../assets/netflix-logo.svg";
const Navbar = () => {
  return (
    <div className="navbar absolute top-0 left-0 md:px-20 pt-0">
      <div className="flex-1">
        <img
          className=" w-36 h-24 md:w-48 md:h-32"
          src={LOGO}
          alt="netflix logo"
        />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="mr-3">
            <details className=" border border-slate-100">
              <summary>English</summary>
              <ul className=" bg-slate-900 rounded-sm bg-opacity-70">
                <li>
                  <button className="cursor-pointer">English</button>
                </li>
              </ul>
            </details>
          </li>
        </ul>
        <div className="navbar-end">
          <Link
            to="/login"
            className="btn px-4 text-sm min-h-[2.5rem] h-[2.5rem] bg-red-500 capitalize text-white hover:bg-red-600"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
