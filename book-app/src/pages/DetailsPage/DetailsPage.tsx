import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

interface Props {}

const DetailsPage = (props: Props) => {
  return (
    <>
      <Header />
      <Sidebar />
      <div>
        <p>Details page</p>
      </div>
    </>
  );
};

export default DetailsPage;
