import BookInfo from "../../components/BookInfo/BookInfo";
import styles from "./LandingPage.module.scss";

interface Props {}

const LandingPage = (props: Props) => {
  return (
    <>
      <div className={styles.componentContainer}>
        <BookInfo />
      </div>
    </>
  );
};

export default LandingPage;
