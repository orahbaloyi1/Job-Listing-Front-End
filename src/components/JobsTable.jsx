import React from "react";

const JobsTable = ({ jobs, handleDelete, handleEdit }) => {
  return (
    <div className="mt-20">
      <table className="mx-auto flex-col w-1/2 text-left">
        <thead className="">
          <tr className="">
            <th className="text-base text-white bg-sky-700 py-5 px-3"></th>
            <th className="text-base text-white bg-sky-700 py-5 px-3">
              Position
            </th>
            <th className="text-base text-white bg-sky-700 py-5 px-3">
              company
            </th>
            <th className="text-base text-white bg-sky-700 py-5 px-3">
              Location
            </th>
            <th className="text-base text-white bg-sky-700 py-5 px-3">
              About Company
            </th>
            <th className="text-base text-white bg-sky-700 py-5 px-3">
              Description
            </th>
            <th className="text-base text-white bg-sky-700 py-5 px-3">
              Requirements
            </th>
            <th className="text-base text-white bg-sky-700 py-5 px-3">Type</th>
            <th className="text-base text-white bg-sky-700 py-5 px-3">
              Industry
            </th>
            <th className="text-base text-white bg-sky-700 py-5 px-3">
              Salary
            </th>
            <th className="text-base text-white bg-sky-700 py-5 px-3">Date</th>
            <th className="text-base text-white bg-sky-700 py-5 px-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {jobs &&
            jobs.map((t) => (
              <tr key={t.id} className="bg-white dark:border-gray py-5">
                <td className="py-5 px-3">
                  <img src={t.icon} alt="Company Icon" className="w-10 h-10" />
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
  );
};
export default JobsTable;
