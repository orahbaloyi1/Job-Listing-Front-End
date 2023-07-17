import { Link } from "react-router-dom";

const Jobs = () => {
  return (
    <section className="py-14">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8">All jobs</h1>
        <div className=" rounded-2xl bg-light-purple py-4 px-6 mb-3 drop-shadow-md">
          <h2 className="text-left font-bold text-base">
            Juniour Software Engineer
          </h2>
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
            <button className=" border-2 rounded-2xl py-3 px-6 border-m-purple hover:bg-h-purple text-base  ">
              More details
            </button>
          </div>
        </div>
        <div className="rounded-2xl bg-light-purple py-4 px-6 mb-3 drop-shadow-md">
          <h1 className="text-left font-bold text-base">
            Senior Software Developer
          </h1>
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
            <button className=" border-2 rounded-2xl py-3 px-6 border-m-purple hover:bg-h-purple text-base">
              More details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Jobs;
