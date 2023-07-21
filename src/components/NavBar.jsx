import { Link } from "react-router-dom";
import logo from "../assets/logo-image.png";

const NavBar = () => {
  return (
    <div className="py-5 bg-m-purple">
      <div className="container mx-auto flex justify-between items-center ">
        <div>
          <Link to="/">
            <div className="flex justify-between gap-2 items-center">
              <img className="w-10" src={logo} alt="Job Search logo" />
              <h1 className="font-bold text-4xl text-white">JobSEARCH</h1>
            </div>
          </Link>
        </div>
        <nav className="flex gap-6">
          <ul className="flex gap-x-8 font-bold text-white items-center">
            <li>
              <Link to="/AllJobs" className="hover:underline cursor-pointer">
                Jobs
              </Link>
            </li>
          </ul>
          <Link to="/Addjob">
            <button className="text-black font-bold rounded-2xl py-2 px-6 bg-yellow-400 hover:opacity-80 drop-shadow-2xl ">
              Add Job
            </button>
          </Link>
        </nav>
      </div>
    </div>
  );
};
export default NavBar;
