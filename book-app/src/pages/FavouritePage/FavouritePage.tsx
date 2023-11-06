import Header from "../../components/Header/Header";
import InfoListItem from "../../components/InfoListItem/InfoListItem";
import SearchBar from "../../components/SearchBar/SearchBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Container from "../../components/UI/Container";
import styles from "./FavouritePage.module.scss";

type Props = {};

const FavouritePage = (props: Props) => {
  return (
    <>
      <Header />
      <div className={styles.componentContainer}>
        <Sidebar />
        <div className={styles.pageWrapper}>
          <Container>
            <span className={styles.detailHead}>Favourites</span>
            <SearchBar />
            <InfoListItem otherInfo={true} />
          </Container>
        </div>
      </div>
    </>
  );
};

export default FavouritePage;
