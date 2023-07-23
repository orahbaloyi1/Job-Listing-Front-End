import MoreDetails from "../components/MoreDetails";
import FeaturedJobs from "../components/FeaturedJobs";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayouts";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/get_job`)
      .then((resp) => resp.json())
      .then((resp) => {
        setJobs(resp.jobs);
      });
  });
  return (
    <MainLayout>
      <section className="py-14 h-screen">
        <div className="container mx-auto">
          <div className="mt-10 mb-20 text-center">
            <input
              type="text"
              placeholder="Search for job"
              className="border-2 rounded-2xl py-3 px-2 w-6/12 text-xl mr-5 drop"
            ></input>
            <button className="rounded-2xl py-3 px-8 bg-yellow-400 hover:opacity-80 text-xl">
              Search
            </button>
          </div>
          <div className="">
            {jobs &&
              jobs.map((job) => (
                <div
                  key={job.id}
                  className="flex justify-between items-center rounded-2xl border bg-light-purple py-4 px-6 h-30 mb-3 drop-shadow-md"
                >
                  <div>
                    <h2 className="text-left font-bold text-2xl hover:underline text-m-purple">
                      {job.jobtitle}
                    </h2>
                    <p className="font-bold text-lg">{job.company}</p>
                    <div className="flex justify-between gap-10">
                      <div className="flex justify-between gap-1 text-gray-600">
                        <span className="material-symbols-outlined">
                          location_on
                        </span>
                        <p className="text-lg">{job.location}</p>
                      </div>
                      <div className="flex justify-between gap-1">
                        <span className="material-symbols-outlined align-middle text-gray-500">
                          library_books
                        </span>
                        <p className="text-lg text-gray-600 ">{job.jobtype}</p>
                      </div>
                      <div className="flex justify-between gap-1">
                        <span className="material-symbols-outlined align-middle text-gray-500">
                          factory
                        </span>
                        <p className="text-lg text-gray-600 ">{job.industry}</p>
                      </div>
                    </div>
                  </div>
                  <Link to={`/Details/${job.slug}`}>
                    <button className=" border-2 rounded-2xl py-3 px-6 border-m-purple hover:bg-h-purple text-base">
                      More details
                    </button>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
export default AllJobs;
