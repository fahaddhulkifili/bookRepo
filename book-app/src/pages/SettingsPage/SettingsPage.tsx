import ProgressIcon from "../../assets/Icons/ProgressIcon";
import styles from "./SettingsPage.module.scss";

type Props = {};

const SettingsPage = (props: Props) => {
  return (
    <>
      <div className={styles.componentContainer}>
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
