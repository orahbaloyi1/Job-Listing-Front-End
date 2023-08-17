import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-8 bg-fav-purple">
      <div className="container mx-auto">
        <h3 className="text-center text-white text-3xl font-bold">
          Get a weekly email with the latest jobs.
        </h3>
        <div className="mt-12 flex justify-center">
          <input
            type="text"
            placeholder="Enter you email"
            className="border-2 rounded-2xl py-3 px-24 text-xl mr-5 "
          />
          <button className="rounded-2xl py-3 px-8 bg-yellow-400 hover:opacity-80 text-xl">
            Join Newsletter
          </button>
        </div>
        <div className="mt-10">
          <ul className="gap-x-8 text-white">
            <li>
              <Link to="/AllJobs" className="hover:underline cursor-pointer">
                Jobs
              </Link>
            </li>
            <li>
              <a className="hover:underline cursor-pointer">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
