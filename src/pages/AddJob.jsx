import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayouts";

const AddJob = () => {
  const [slug, setSlug] = useState("");
  const [jobtitle, setJobtitle] = useState("");
  const [company, setCompany] = useState("");
  const [about, setAbout] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [jobtype, setJobtype] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");
  const [salary, setSalary] = useState("");

  const [jobs, setJobs] = useState([]);
  const [editId, setEditId] = useState(null);

  const addJobForm = (e) => {
    e.preventDefault();
    if (editId) {
      const newJob = jobs.map((t) =>
        t.id === editId
          ? {
              id: editId,
              slug,
              jobtitle,
              company,
              about,
              description,
              requirements,
              jobtype,
              location,
              industry,
              salary,
            }
          : t
      );
      setJobs(newJob);
      setEditId(null);
    } else {
      setJobs([
        ...jobs,
        {
          id: Date.now(),
          slug,
          jobtitle,
          company,
          about,
          description,
          requirements,
          jobtype,
          location,
          industry,
          salary,
        },
      ]);
    }
    setSlug("");
    setJobtitle("");
    setCompany("");
    setAbout("");
    setDescription("");
    setRequirements("");
    setJobtype("");
    setLocation("");
    setIndustry("");
    setSalary("");

    const form = e.target;
    const formData = new FormData(form);

    fetch(`${import.meta.env.VITE_API_URL}/submit_job`, {
      method: "POST",
      body: formData,
    })
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleEdit = (t) => {
    setEditId(t.id);
    setSlug(t.slug);
    setJobtitle(t.jobtitle);
    setCompany(t.company);
    setAbout(t.about);
    setDescription(t.description);
    setRequirements(t.requirements);
    setJobtype(t.type);
    setLocation(t.location);
    setIndustry(t.industry);
    setSalary(t.salary);
  };

  const handleDelete = (id) => {
    setJobs(jobs.filter((t) => t.id !== id));
  };

  return (
    <MainLayout>
      <section className="py-20 ">
        <div className="container mx-auto">
          <form className="border rounded-xl py-4 px-3" onSubmit={addJobForm}>
            <h1 className="font-bold text-5xl text-center mt-6 mb-6 text-m-purple">
              Job Details
            </h1>
            <div className="text-2xl mt-10 px-6">
              <label htmlFor="slug" className="font-bold mr-4">
                Full Name
              </label>
              <input
                type="text"
                name="slug"
                value={slug}
                id="slug"
                onChange={(e) => setSlug(e.target.value)}
                className="border-100 rounded-xl p-2 bg-gray-100 block w-full "
              />
            </div>
            <div className="text-2xl mt-10 px-6">
              <label htmlFor="jobtitle" className="font-bold mr-4">
                Job Title
              </label>
              <input
                type="text"
                name="jobtitle"
                value={jobtitle}
                id="jobtitle"
                onChange={(e) => setJobtitle(e.target.value)}
                className="border-100 rounded-xl p-2 bg-gray-100 block w-full "
              />
            </div>

            <div className="text-2xl mt-10 px-6">
              <label htmlFor="company" className="font-bold">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={company}
                id="company"
                onChange={(e) => setCompany(e.target.value)}
                className="border-100 rounded-xl p-2 bg-gray-100 block w-full "
              />
            </div>
            <div className="text-2xl mt-10 px-6">
              <label htmlFor="about" className="font-bold">
                About Company
              </label>
              <input
                type="text"
                name="about"
                value={about}
                id="about"
                onChange={(e) => setAbout(e.target.value)}
                className="border-100 rounded-xl bg-gray-100 block w-full h-40 "
              />
            </div>
            <div className="text-2xl mt-10 px-6">
              <label htmlFor="description" className="font-bold">
                Job description
              </label>
              <input
                type="text"
                name="description"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border-100 rounded-xl bg-gray-100 block w-full h-40"
              />
            </div>
            <div className="text-2xl mt-10 px-6">
              <label htmlFor="requirements" className="font-bold">
                Requirements
              </label>
              <input
                type="text"
                name="requirements"
                value={requirements}
                id="requirements"
                onChange={(e) => setRequirements(e.target.value)}
                className="border-100 rounded-xl bg-gray-100 block w-full h-40"
              />
            </div>
            <div className="text-2xl mt-10 px-6">
              <label className="font-bold mr-6">Job Type:</label>
              <input
                type="radio"
                name="jobtype"
                value="permenant"
                id="permanant"
                onChange={(e) => setJobtype(e.target.value)}
                className=""
              />
              Permanent
              <input
                type="radio"
                name="jobtype"
                value="Part Time"
                id="partTime"
                onChange={(e) => setJobtype(e.target.value)}
                className="ml-6"
              />
              Part Time
              <input
                type="radio"
                name="jobtype"
                value="Fixed"
                id="fixed"
                onChange={(e) => setJobtype(e.target.value)}
                className="ml-6"
              />
              Fixed
            </div>
            <div className="text-2xl mt-10 px-6 ">
              <label htmlFor="location" className="font-bold">
                Location
              </label>
              <select
                value={location}
                name="location"
                id="location"
                onChange={(e) => setLocation(e.target.value)}
                className="border-100 rounded-xl px-8 py-2 bg-gray-100 block w-full"
              >
                <option value="Select Location">Select Location</option>
                <option value="Gauteng">Gauteng</option>
                <option value="North West">North West</option>
                <option value="Free State">Free State</option>
                <option value="Western Cape">Western Cape</option>
                <option value="Northen Cape">Northen Cape</option>
                <option value="Eastern Cape">Eastern Cape</option>
                <option value="Kwazulu-Natal">Kwazulu-Natal</option>
                <option value="Limpopo">Limpopo</option>
                <option value="Mpumalanga">Mpumalanga</option>
              </select>
            </div>
            <div className="text-2xl mt-10 px-6 ">
              <label htmlFor="industry" className="font-bold">
                Industry
              </label>
              <select
                value={industry}
                name="industry"
                id="industry"
                onChange={(e) => setIndustry(e.target.value)}
                className="border-100 rounded-xl px-8 py-2 bg-gray-100 block w-full"
              >
                <option value="Select Location">Select Industry</option>
                <option value="Education">Education</option>
                <option value="IT & Tech">IT & Tech</option>
                <option value="Minning">Mining</option>
                <option value="Sales & Marketing">Sales & Marketing</option>
                <option value="Designs & Art">Designs & Art</option>
                <option value="Accounting $ Finance">
                  Accounting $ Finance
                </option>
                <option value="Human Resources">Human Resource</option>
                <option value="Engineering">Engineering</option>
                <option value="Health Care">Health Care</option>
              </select>
            </div>
            <div className="text-2xl mt-10 px-6 ">
              <label htmlFor="salary" className="font-bold">
                Salary
              </label>
              <input
                type="number"
                name="salary"
                value={salary}
                id="salary"
                onChange={(e) => setSalary(e.target.value)}
                className="border-100 rounded-xl px-8 py-2 bg-gray-100 block w-full "
              />
            </div>

            <div className="flex justify-center m-12">
              <button
                type="submit"
                className="text-white font-bold text-2xl rounded-2xl py-3 px-12 bg-fav-purple hover:opacity-80 drop-shadow-md "
              >
                Save
              </button>
            </div>
          </form>
          <div className="mt-20">
            <div className="">
              <table className="w-full text-left">
                <thead className="">
                  <tr className="">
                    <th className="text-base bg-light-purple py-5 px-3"></th>
                    <th className="text-base bg-light-purple py-5 px-3">
                      Jobtitle
                    </th>
                    <th className="text-base bg-light-purple py-5 px-3">
                      company
                    </th>
                    <th className="text-base bg-light-purple py-5 px-3">
                      Type
                    </th>
                    <th className="text-base bg-light-purple py-5 px-3">
                      Industry
                    </th>
                    <th className="text-base bg-light-purple py-5 px-3">
                      Salary
                    </th>
                    <th className="text-base bg-light-purple py-5 px-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((t) => (
                    <tr key={t.id} className="bg-white dark:border-gray py-5">
                      <td className="py-5 px-3">
                        <img
                          src={t.icon}
                          alt="Company Icon"
                          className="w-10 h-10"
                        />
                      </td>
                      <td className="py-5 px-3">{t.jobtitle}</td>
                      <td className="py-5 px-3 ">{t.company}</td>
                      <td className="py-5 px-3 ">{t.jobtype}</td>
                      <td className="py-5 px-3 ">{t.industry}</td>
                      <td className="py-5 px-3 ">{t.salary}</td>
                      <td className="py-5 px-3 ">
                        <button
                          className="border bg-light-purple px-2"
                          onClick={(e) => handleEdit(t)}
                          type="button"
                        >
                          Edit
                        </button>
                        <button
                          className="border bg-light-purple px-2"
                          onClick={(e) => handleDelete(t.id)}
                          type="button"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AddJob;
