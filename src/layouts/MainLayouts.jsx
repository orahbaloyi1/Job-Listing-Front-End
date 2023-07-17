import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const MainLayouts = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayouts;
