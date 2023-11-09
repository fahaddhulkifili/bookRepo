import ProgressIcon from "../../assets/Icons/ProgressIcon";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./SettingsPage.module.scss";

type Props = {};

const SettingsPage = (props: Props) => {
  return (
    <>
      <Header />
      <div className={styles.componentContainer}>
        <Sidebar />
        <div className={styles.pageWrapper}>
          <div className={styles.pageInfoMessage}>
            <ProgressIcon />
            <p>This Page is under progress</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
