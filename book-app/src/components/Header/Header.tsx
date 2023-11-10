import styles from "./Header.module.scss";
import userImg from "../../assets/avatar.jpg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.headerContainer}>
      <div className={styles.avatarWrapper}>
        <img src={userImg} alt="user info" />
      </div>
      <div className={styles.headerWrapper}>
        <div className={styles.logoWrapper}>
          <p
            onClick={() => {
              navigate("/home");
            }}
          >
            RAD<span>ICAL</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
