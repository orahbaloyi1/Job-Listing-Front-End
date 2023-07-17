import HeroSec from "../components/HeroSec";
import FeaturedJobs from "../components/FeaturedJobs";
import MainLayout from "../layouts/MainLayouts";

const Home = () => {
  return (
    <MainLayout>
      <HeroSec />
      <FeaturedJobs />
    </MainLayout>
  );
};
export default Home;
