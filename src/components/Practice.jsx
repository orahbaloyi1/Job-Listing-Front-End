import React, { useState } from "react";

const Practice = () => {
  const [firstName, setFirstName] = useState("");

  // const handleChange = (e) => {
  // setFirstName(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFirstName(e.target.firstName.value);
    e.target.firstName.value = "";
  };
  const handleDelete = () => {
    setFirstName("");
  };

  const handleEdit = () => {
    setFirstName("");
  };

  return (
    <section className="py-14 ">
      <div className="container mx-auto justify-center flex">
        <div>
          <form className="w-8" onSubmit={handleSubmit}>
            <p className="mb-4 mt-4 text-lg">
              <label className="font-bold mr-4">Job Title</label>
              <input
                type="text"
                //value={firstName}
                name="firstName"
                placeholder="Enter Name"
                // onChange={(e) => setFirstName(e.target.value)}
                className="border rounded-xl p-40 py-2"
              />
            </p>
            <button type="submit" className="border">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="mt-20">
        <table className="mx-auto flex-col w-1/2 text-left">
          <thead className="">
            <tr className="">
              <th className="text-base text-white bg-sky-700 py-5 px-3">
                Description
              </th>
              <th className="text-base text-white bg-sky-700 py-5 px-3">
                Amount
              </th>
              <th className="text-base text-white bg-sky-700 py-5 px-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white dark:border-gray py-5">
              <td className="py-5 px-3">{firstName}</td>
              <td className="py-5 px-3 ">{firstName}</td>
              <td className="py-5 px-3 ">
                <button
                  className="border bg-light-purple px-2"
                  onClick={handleDelete}
                  type="button"
                >
                  Delete
                </button>
                <button
                  className="border bg-light-purple px-2"
                  onClick={handleEdit}
                  type="button"
                >
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
export default Practice;
