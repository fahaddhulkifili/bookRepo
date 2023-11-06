import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Container from "../../components/UI/Container";
import EditForm from "../../components/EditForm/EditForm";
import styles from "./FavouritesDetailsPage.module.scss";
import sourceImage from "../../assets/temp/image1.png";

type Props = {};

const FavouritesDetailsPage = (props: Props) => {
  return (
    <>
      <Header />
      <div className={styles.componentContainer}>
        <Sidebar />
        <div className={styles.pageWrapper}>
          <Container>
            <div className={styles.overlayImageWrapper}>
              <img src={sourceImage} alt="cover of book" />
              <div className={styles.overlayContent}>
                <div className={styles.autherInfo}>
                  <span>BILLY SUMMERS</span>
                  <span>by Stephen King</span>
                </div>
              </div>
            </div>
            <EditForm />
          </Container>
        </div>
      </div>
    </>
  );
};

export default FavouritesDetailsPage;
