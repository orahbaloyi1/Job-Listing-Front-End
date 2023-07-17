const HeroSec = () => {
  return (
    <section className="bg-hero-sec bg-cover bg-center ">
      <div className=" ">
        <div className="container mx-auto text-center py-28 ">
          <h1 className="font-bold text-5xl text-white leading-tight">
            Land your dream <br /> job now!
          </h1>
          <div className="mt-12">
            <input
              type="text"
              placeholder="Search for job"
              className="border-2 rounded-2xl py-3 px-24 text-xl mr-5 drop"
            ></input>
            <button className="rounded-2xl py-3 px-8 bg-yellow-400 hover:opacity-80 text-xl">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSec;
