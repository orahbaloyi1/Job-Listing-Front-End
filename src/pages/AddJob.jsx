import PracticeMore from "../components/practiceMore";
import Practice from "../components/practice";
import AddJobs from "../components/Addjobs";
import JobAdded from "../components/JobAdded";
import MainLayout from "../layouts/MainLayouts";
import JobsTable from "../components/JobsTable";

const AddJob = () => {
  return (
    <MainLayout>
      <AddJobs />
      <JobsTable />
    </MainLayout>
  );
};
export default AddJob;
