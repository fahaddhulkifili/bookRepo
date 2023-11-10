import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowIcon from "../../assets/Icons/ArrowIcon";
import sourceImage from "../../assets/temp/image1.png";
import EditForm from "../../components/EditForm/EditForm";
import Container from "../../components/UI/Container";
import styles from "./FavouritesDetailsPage.module.scss";

type Props = {};

const FavouritesDetailsPage = (props: Props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.componentContainer}>
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
            <Button className={styles.returnBtn} onClick={() => navigate(-1)}>
              <ArrowIcon />
              <span className={styles.btnText}>
                Return to : <span>Favourites</span>
              </span>
            </Button>
          </Container>
        </div>
      </div>
    </>
  );
};

export default FavouritesDetailsPage;
