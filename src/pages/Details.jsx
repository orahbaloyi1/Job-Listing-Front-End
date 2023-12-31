import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  let { jobSlug } = useParams();
  let [jobInfo, setJobInfo] = useState();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/get_job/${jobSlug}`)
      .then((resp) => resp.json())
      .then((resp) => {
        setJobInfo(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [jobSlug]);

  return (
    <section className="py-20">
      <div className="container mx-auto h-screen">
        <div className="items-start border border-gray-200 rounded-xl px-12 h-full mb-3">
          <div className="mt-8">
            <h2 className="text-left font-bold text-5xl text-m-purple leading-relaxed">
              {jobInfo?.jobtitle}
            </h2>
            <div className="">
              <p className="font-bold text-3xl">{jobInfo?.company}</p>
            </div>
            <div className="flex gap-1 text-gray-600">
              <span className="material-symbols-outlined text-2xl">
                location_on
              </span>
              <p className="text-2xl">{jobInfo?.location}</p>
            </div>
            <div className="flex gap-1 text-gray-600 ">
              <span className="material-symbols-outlined align-middle text-2xl">
                library_books
              </span>
              <p className="text-2xl">{jobInfo?.jobtype}</p>
            </div>
            <div className="flex gap-1 text-gray-600">
              <span className="material-symbols-outlined text-2xl">paid</span>
              <span className="text-2xl">R</span>
              <p className="text-2xl">{jobInfo?.salary}</p>
            </div>
            <div className="flex gap-1 text-gray-600">
              <span className="material-symbols-outlined text-2xl">
                factory
              </span>
              <p className="text-2xl">{jobInfo?.industry}</p>
            </div>
            <hr className="mt-8" />
            <div className=" mt-10">
              <p className="font-bold text-3xl">About Company</p>
              <p className="text-2xl leading-relaxed">{jobInfo?.about}</p>
            </div>
            <div className="mt-10">
              <p className="font-bold text-3xl">Description</p>
              <p className="text-2xl leading-relaxed">{jobInfo?.description}</p>
            </div>
            <div className="mt-10">
              <p className="font-bold text-3xl">Requirements</p>
              <p className="text-2xl leading-relaxed ">
                {jobInfo?.requirements}
              </p>
            </div>
            <hr className="mt-8" />
          </div>
          <div className="flex justify-center mt-32">
            <button className="rounded-2xl py-3 px-10 bg-fav-purple hover:opacity-80 text-white text-xl">
              Apply
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Details;
