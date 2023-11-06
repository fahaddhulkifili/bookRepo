import Header from "../../components/Header/Header";
import InfoListItem from "../../components/InfoListItem/InfoListItem";
import SearchBar from "../../components/SearchBar/SearchBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Container from "../../components/UI/Container";
import styles from "./DetailsPage.module.scss";

interface Props {}

const DetailsPage = (props: Props) => {
  return (
    <>
      <Header />
      <div className={styles.componentContainer}>
        <Sidebar />
        <div className={styles.pageWrapper}>
          <Container>
            <span className={styles.detailHead}>
              New York Times Bestsellers
            </span>
            <SearchBar />
            <InfoListItem otherInfo={false} />
          </Container>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
