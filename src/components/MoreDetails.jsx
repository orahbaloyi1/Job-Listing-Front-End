import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayouts";

const MoreDetails = () => {
  let { jobSlug } = useParams();
  let [jobInfo, setJobInfo] = useState();

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/get_job/${jobSlug}`)
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
            <h2 className="text-left font-bold text-3xl text-m-purple leading-relaxed">
              {jobInfo?.jobtitle}
            </h2>
            <div className="">
              <p className="font-bold text-xl">{jobInfo?.company}</p>
            </div>
            <div className="flex gap-1 text-lg text-gray-600">
              <span className="material-symbols-outlined text-md">
                location_on
              </span>
              <p className="text-lg">{jobInfo?.location}</p>
            </div>
            <div className="flex gap-1 text-gray-600 ">
              <span className="material-symbols-outlined align-middle text-xl">
                library_books
              </span>
              <p className="text-lg">{jobInfo?.jobtype}</p>
            </div>
            <div className="flex gap-1 text-gray-600">
              <span className="material-symbols-outlined text-xl">paid</span>
              <span className="text-lg">R</span>
              <p className="text-lg">{jobInfo?.salary}</p>
            </div>
            <div className="flex gap-1 text-gray-600">
              <span className="material-symbols-outlined text-xl">factory</span>
              <p className="text-lg">{jobInfo?.industry}</p>
            </div>
            <hr className="mt-8" />
            <div className=" mt-10">
              <p className="font-bold text-lg">About Company</p>
              <p className="text-lg leading-relaxed">{jobInfo?.about}</p>
            </div>
            <div className="mt-10">
              <p className="font-bold text-lg">Description</p>
              <p className="text-lg leading-relaxed">{jobInfo?.description}</p>
            </div>
            <div className="mt-10">
              <p className="font-bold text-lg">Requirements</p>
              <p className="text-lg leading-relaxed ">
                {jobInfo?.requirements}
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-32">
            <button className="rounded-2xl py-3 px-10 bg-yellow-400 hover:opacity-80 text-xl">
              Apply
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MoreDetails;
/*#${prod_info.prod_slug
<select
  value={locations}
  id="locations"
  onChange={(e) => setLocations(e.target.value)}
  className="border-100 rounded-xl p-2 bg-gray-100 block w-full"
>
  <option value="Select Location">Select Location</option>
  <option value="Gauteng">Gauteng</option>
  <option value="Mpumalanga">Mpumalanga</option>
  <option value="North West">North West</option>
  <option value="Limpopo">Limpopo</option>
  <option value="Western Cape">Western Cape</option>
  <option value="Northern Cape">Northern Cape</option>
  <option value="Free State">Free State</option>
  <option value="Eastern cape">Eastern cape</option>
  <option value="Kwazulu-Natal">Kwazulu-Natal</option>
</select>;*/
