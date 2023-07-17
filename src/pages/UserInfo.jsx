import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import MainLayouts from "../layouts/MainLayouts";

const UserInfo = () => {
  const submitInfo = (e) => {
    evt.preventDefault();

    const form = e.target;

    const formData = new FormData(form);

    fetch(`/submit_checkout`, {
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

  return (
    <MainLayouts>
      <section className="py-20 h-screen ">
        <div className="container mx-auto">
          <form
            className="border border-m-purple py-4 px-3 rounded-xl drop-shadow-md "
            onSubmit={submitInfo}
          >
            <h1 className="font-bold text-3xl text-center mt-6 mb-6 text-m-purple">
              Personal Details
            </h1>
            <h2 className="text-xl text-center mt-6 mb-6 text-m-purple">
              Enter personal details to continue
            </h2>

            <div className="text-lg mt-10 px-6">
              <label htmlFor="fullname" className="font-bold">
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Enter Full Name"
                // onChange={(e) => (e.target.value)}
                className="border-100 rounded-xl p-2 bg-gray-100 w-full"
                required
              />
            </div>
            <div className="text-lg mt-10 px-6">
              <label htmlFor="emailaddress" className="font-bold">
                Email Address
              </label>
              <input
                type="text"
                name="emailaddress"
                id="emailaddress"
                placeholder="Enter your email"
                // onChange={(e) => setCompany(e.target.value)}
                className="border-100 rounded-xl p-2 bg-gray-100 w-full"
                required
              />
            </div>

            <div className="flex justify-center m-12">
              <Link to="/AddJob">
                <button
                  type="submit"
                  className="text-black font-bold text-lg rounded-2xl py-2 px-8 bg-yellow-400 hover:opacity-80 drop-shadow-md"
                >
                  Continue
                  <span className="material-symbols-outlined text-xl text-m-purple ml-2 align-middle">
                    east
                  </span>
                </button>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </MainLayouts>
  );
};
export default UserInfo;
