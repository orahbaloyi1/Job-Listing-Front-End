import { Link } from "react-router-dom";

const HeroSec = () => {
  return (
    <section className="bg-hero-sec bg-cover bg-center h-screen ">
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen">
          <div className="">
            <h1 className="font-bold text-8xl text-white leading-tight">
              Land your dream <br /> job now!
            </h1>
            <div className="mt-10">
              <Link to="/Alljobs">
                <button className="rounded-2xl text-white text-xl py-5 mr-4 px-20 bg-fav-purple hover:opacity-80">
                  Find Job
                </button>
              </Link>
              <Link to="/Addjob">
                <button className="rounded-2xl text-white fold-bold text-xl py-5 px-20 bg-fav-purple hover:opacity-80">
                  Add Job
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSec;
