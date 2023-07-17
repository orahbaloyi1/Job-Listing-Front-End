import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/get_job`)
      .then((resp) => resp.json())
      .then((resp) => {
        setJobs(resp.jobs);
      });
  });

  return (
    <section className="py-14">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8">Featured Jobs</h1>
        <div className="">
          {jobs &&
            jobs.map((job) => (
              <div
                key={job.id}
                className="flex justify-between items-center rounded-2xl bg-light-purple py-4 px-6 mb-3 drop-shadow-md"
              >
                <div>
                  <h2 className="text-left font-bold text-xl hover:underline text-m-purple">
                    {job.jobtitle}
                  </h2>
                  <p className="font-bold">{job.jobtitle}</p>
                  <div className="flex justify-between gap-5">
                    <p className="font-bold">{job.company}</p>
                    <p className="">Gauteng</p>
                  </div>
                </div>
                <div>
                  <Link to="/Details">
                    <button className=" border-2 rounded-2xl py-3 px-6 border-m-purple hover:bg-h-purple text-base  ">
                      More details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Link to="/AllJobs">
        <div className="flex justify-center gap-1 ">
          <p className="text-center text-m-purple">View all jobs</p>
          <span className="material-symbols-outlined text-xl text-m-purple">
            east
          </span>
        </div>
      </Link>
    </section>
  );
};
export default FeaturedJobs;

/*div className="rounded-2xl bg-light-purple py-4 px-6 mb-3 drop-shadow-md">
          <Link to="Details">
            <h1 className="text-left font-bold text-xl hover:underline text-m-purple ">
              Senior Software Developer
            </h1>
          </Link>
          <div className="flex justify-between items-center ">
            <h3 className="">
              <span className="material-symbols-outlined text-xl align-middle font-bold">
                location_on
              </span>
              Rustenburg
            </h3>
            <h4 className="">
              <span className="material-symbols-outlined text-xl align-middle">
                schedule
              </span>
              Part Time
            </h4>
            <h5>
              <span className="material-symbols-outlined text-xl align-middle">
                payments
              </span>
              R200
            </h5>
            <Link to="/Details">
              <button className=" border-2 rounded-2xl py-3 px-6 border-m-purple hover:bg-h-purple text-base">
                More details
              </button>
            </Link>
          </div>
        </div>
        <div className="rounded-2xl bg-light-purple py-4 px-6 mb-3 drop-shadow-md">
          <Link to="Details">
            <h1 className="text-left font-bold text-xl hover:underline text-m-purple ">
              Senior Software Developer
            </h1>
          </Link>
          <div className="flex justify-between items-center ">
            <h3 className="">
              <span className="material-symbols-outlined text-xl align-middle font-bold">
                location_on
              </span>
              Rustenburg
            </h3>
            <h4 className="">
              <span className="material-symbols-outlined text-xl align-middle">
                schedule
              </span>
              Part Time
            </h4>
            <h5>
              <span className="material-symbols-outlined text-xl align-middle">
                payments
              </span>
              R200
            </h5>
            <Link to="/Details">
              <button className=" border-2 rounded-2xl py-3 px-6 border-m-purple hover:bg-h-purple text-base">
                More details
              </button>
            </Link>
          </div>
        </div>
        <div className="rounded-2xl bg-light-purple py-4 px-6 mb-3 drop-shadow-md">
          <Link to="Details">
            <h1 className="text-left font-bold text-xl hover:underline text-m-purple ">
              Senior Software Developer
            </h1>
          </Link>
          <div className="flex justify-between items-center ">
            <h3 className="">
              <span className="material-symbols-outlined text-xl align-middle font-bold">
                location_on
              </span>
              Rustenburg
            </h3>
            <h4 className="">
              <span className="material-symbols-outlined text-xl align-middle">
                schedule
              </span>
              Part Time
            </h4>
            <h5>
              <span className="material-symbols-outlined text-xl align-middle">
                payments
              </span>
              R200
            </h5>
            <Link to="/Details">
              <button className=" border-2 rounded-2xl py-3 px-6 border-m-purple hover:bg-h-purple text-base">
                More details
              </button>
            </Link>
          </div>
        </div>
        <div className="rounded-2xl bg-light-purple py-4 px-6 mb-3 drop-shadow-md">
          <Link to="Details">
            <h1 className="text-left font-bold text-xl hover:underline text-m-purple ">
              Senior Software Developer
            </h1>
          </Link>
          <div className="flex justify-between items-center ">
            <h3 className="">
              <span className="material-symbols-outlined text-xl align-middle font-bold">
                location_on
              </span>
              Rustenburg
            </h3>
            <h4 className="">
              <span className="material-symbols-outlined text-xl align-middle">
                schedule
              </span>
              Part Time
            </h4>
            <h5>
              <span className="material-symbols-outlined text-xl align-middle">
                payments
              </span>
              R200
            </h5>
            <Link to="/Details">
              <button className=" border-2 rounded-2xl py-3 px-6 border-m-purple hover:bg-h-purple text-base">
                More details
              </button>
            </Link>*/
