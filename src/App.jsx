import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import AddJob from "./pages/AddJob";
//import AllJobs from "./pages/AllJobs";
import Details from "./pages/Details";
import UserInfo from "./pages/UserInfo";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/addjob" element={<AddJob />} />

        <Route path="/details" element={<Details />} />
        <Route path="/userinfo" element={<UserInfo />} />
      </Routes>
    </>
  );
}

export default App;

// <Route path="/alljobs" element={<AllJobs />} />;
