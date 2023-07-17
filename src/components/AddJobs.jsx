import { useEffect, useState } from "react";

const AddJob = () => {
  const [jobtitle, setJobtitle] = useState("");
  const [company, setCompany] = useState("");
  const [about, setAbout] = useState("");
  const [locations, setLocations] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [typ, setTyp] = useState("");
  const [salary, setSalary] = useState("");
  const [industry, setIndustry] = useState("");
  const [dat, setDat] = useState("");
  const [icon, setIcon] = useState("");

  const [jobs, setJobs] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const newJob = JSON.parse(localStorage.getItem("jobs")) || [];
    setJobs(newJob);
  }, []);

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const addJobForm = (e) => {
    e.preventDefault();
    if (editId) {
      const newJob = jobs.map((t) =>
        t.id === editId
          ? {
              id: editId,
              jobtitle,
              company,
              locations,
              about,
              description,
              requirements,
              typ,
              industry,
              salary,
              dat,
              icon,
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
          jobtitle,
          company,
          locations,
          about,
          description,
          requirements,
          typ,
          industry,
          salary,
          dat,
          icon,
        },
      ]);
    }
    setJobtitle("");
    setCompany("");
    setLocations("");
    setAbout("");
    setDescription("");
    setRequirements("");
    setTyp("");
    setIndustry("");
    setSalary("");
    setDat("");
    setIcon("");

    const form = e.target;
    const formData = new FormData(form);

    fetch(`http://127.0.0.1:5000/submit_job`, {
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
    setJobtitle(t.jobtitle);
    setCompany(t.company);
    setLocations(t.locations);
    setAbout(t.about);
    setDescription(t.description);
    setRequirements(t.requirements);
    setTyp(t.type);
    setIndustry(t.industry);
    setSalary(t.salary);
    setDat(t.date);
    setIcon(t.icon);
  };

  const handleDelete = (id) => {
    setJobs(jobs.filter((t) => t.id !== id));
  };

  return (
    <section className="py-20 ">
      <div className="container mx-auto">
        <form
          className="border  border-m-purple rounded-xl py-4 px-3 drop-shadow-md "
          onSubmit={addJobForm}
        >
          <h1 className="font-bold text-3xl text-center mt-6 mb-6 text-m-purple">
            Job Details
          </h1>
          <div className="text-lg mt-10 px-6">
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
          <div className="text-lg mt-10 px-6">
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
          <div className="text-lg mt-10 px-6">
            <label htmlFor="locations" className="font-bold ">
              location
            </label>
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
            </select>
          </div>
          <div className="text-lg mt-10 px-6">
            <label htmlFor="about" className="mr-4">
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
          <div className="text-lg mt-10 px-6">
            <label htmlFor="description" className="">
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
          <div className="text-lg mt-10 px-6">
            <label htmlFor="requirements" className="">
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
          <div className="text-lg mt-10 px-6">
            <label className="font-bold mr-6">Type:</label>
            <input
              type="radio"
              name="typ"
              value="permenant"
              id="permanant"
              onChange={(e) => setTyp(e.target.value)}
              className=""
            />
            Permanent
            <input
              type="radio"
              name="typ"
              value="Part Time"
              id="partTime"
              onChange={(e) => setTyp(e.target.value)}
              className="ml-6"
            />
            Part Time
            <input
              type="radio"
              name="typ"
              value="Fixed"
              id="fixed"
              onChange={(e) => setTyp(e.target.value)}
              className="ml-6"
            />
            Fixed
          </div>
          <div className="text-lg mt-10 px-6 ">
            <label htmlFor="industry" className="font-bold">
              Industry
            </label>
            <select
              value={industry}
              id="industry"
              onChange={(e) => setIndustry(e.target.value)}
              className="border-100 rounded-xl px-8 py-2 bg-gray-100 block w-full"
            >
              <option value="Select Location">Select Industry</option>
              <option value="Gauteng">Education</option>
              <option value="Gauteng">IT & Tech</option>
              <option value="Gauteng">Mining</option>
              <option value="Gauteng">Sales $ Marketing</option>
              <option value="Gauteng">Designs & Art</option>
              <option value="Gauteng">Accounting $ Finance</option>
              <option value="Gauteng">Human Resource</option>
              <option value="Gauteng">Engineering</option>
              <option value="Gauteng">Health Care</option>
            </select>
          </div>
          <div className="text-lg mt-10 px-6 ">
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
          <div className="text-lg mt-10 px-6">
            <label htmlFor="dat" className="font-bold">
              Closing Date
            </label>
            <input
              type="date"
              name="dat"
              value={dat}
              id="dat"
              onChange={(e) => setDat(e.target.value)}
              className="border-100 rounded-xl px-6 py-2 bg-gray-100 block w-full "
            />
          </div>
          <div className="flex justify-center m-12">
            <button
              type="submit"
              className="text-black font-bold text-lg rounded-2xl py-3 px-12  bg-yellow-400 hover:opacity-80 drop-shadow-md "
            >
              Save
            </button>
          </div>
        </form>
      </div>
      <div className="mt-20">
        <div className="">
          <table className="w-full text-left">
            <thead className="">
              <tr className="">
                <th className="text-base bg-light-purple py-5 px-3"></th>
                <th className="text-base bg-light-purple py-5 px-3">
                  Position
                </th>
                <th className="text-base bg-light-purple py-5 px-3">company</th>
                <th className="text-base bg-light-purple py-5 px-3">
                  Location
                </th>
                <th className="text-base bg-light-purple py-5 px-3">
                  About Company
                </th>
                <th className="text-base bg-light-purple py-5 px-3">
                  Description
                </th>
                <th className="text-base bg-light-purple py-5 px-3">
                  Requirements
                </th>
                <th className="text-base bg-light-purple py-5 px-3">Type</th>
                <th className="text-base bg-light-purple py-5 px-3">
                  Industry
                </th>
                <th className="text-base bg-light-purple py-5 px-3">Salary</th>
                <th className="text-base bg-light-purple  py-5 px-3">Date</th>
                <th className="text-base bg-light-purple py-5 px-3">Action</th>
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
                  <td className="py-5 px-3 ">{t.location}</td>
                  <td className="py-5 px-3 ">{t.about}</td>
                  <td className="py-5 px-3 ">{t.description}</td>
                  <td className="py-5 px-3 ">{t.requirements}</td>
                  <td className="py-5 px-3 ">{t.type}</td>
                  <td className="py-5 px-3 ">{t.salary}</td>
                  <td className="py-5 px-3 ">{t.date}</td>
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
    </section>
  );
};
export default AddJob;
