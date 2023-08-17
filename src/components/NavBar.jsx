import { Link } from "react-router-dom";
import logo from "../assets/logo-image.png";

const NavBar = () => {
  return (
    <div className="py-5 bg-fav-purple">
      <div className="container mx-auto flex justify-between items-center ">
        <div>
          <Link to="/">
            <div className="flex justify-between gap-2 items-center">
              <img className="w-10" src={logo} alt="Job Search logo" />
              <h1 className="font-bold text-5xl text-white">JobSEARCH</h1>
            </div>
          </Link>
        </div>
        <nav className="flex gap-6">
          <ul className="flex gap-x-8 font-bold text-white items-center">
            <li>
              <Link
                to="/AllJobs"
                className=" text-xl hover:underline cursor-pointer"
              >
                Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/Addjob"
                className="text-xl hover:underline cursor-pointer"
              >
                Add Job
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default NavBar;
