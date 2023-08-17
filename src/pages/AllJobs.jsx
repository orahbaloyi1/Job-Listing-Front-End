import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayouts";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/get_job`)
      .then((resp) => resp.json())
      .then((resp) => {
        setJobs(resp.jobs);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredJobs = jobs.filter((job) =>
    job.jobtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MainLayout>
      <section className="py-14 h-screen">
        <div className="container mx-auto">
          <div className="mt-10 mb-20 text-center">
            <input
              type="text"
              placeholder="Search for job"
              className="border-2 rounded-2xl py-3 px-2 w-6/12 text-xl mr-5 drop"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            ></input>
            <button className="rounded-2xl py-3 px-8 bg-fav-purple hover:opacity-90 text-white text-xl">
              Search
            </button>
          </div>
          <div className="">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="flex justify-between items-center rounded-xl border py-4 px-6 h-40 mb-3"
                >
                  <div className="">
                    <Link to={`/Details/${job.slug}`}>
                      <h2 className="text-left font-bold text-3xl hover:underline text-m-purple">
                        {job.jobtitle}
                      </h2>
                    </Link>
                    <p className="font-bold text-xl">{job.company}</p>
                    <div className="flex justify-between gap-10">
                      <div className="flex justify-between gap-1 text-gray-600">
                        <span className="material-symbols-outlined">
                          location_on
                        </span>
                        <p className="text-xl">{job.location}</p>
                      </div>
                      <div className="flex justify-between gap-1">
                        <span className="material-symbols-outlined align-middle text-gray-500">
                          library_books
                        </span>
                        <p className="text-xl text-gray-600 ">{job.jobtype}</p>
                      </div>
                      <div className="flex justify-between gap-1">
                        <span className="material-symbols-outlined align-middle text-gray-500">
                          factory
                        </span>
                        <p className="text-xl text-gray-600 ">{job.industry}</p>
                      </div>
                    </div>
                  </div>
                  <Link
                    to={`/Details/${job.slug}`}
                    className="
                    hover:text-m-purple
                    text-xl"
                  >
                    More details
                  </Link>
                </div>
              ))
            ) : (
              <p>No jobs found</p>
            )}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
export default AllJobs;
