import styles from "./Category.module.scss";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Category = () => {
  //Temporary array of images to display the content in home page
  let userTestStatus: { id: number; img: string }[] = [
    { id: 0, img: require("../../../assets/temp/image1.png") },
    { id: 1, img: require("../../../assets/temp/image2.png") },
    { id: 2, img: require("../../../assets/temp/image3.png") },
    { id: 0, img: require("../../../assets/temp/image4.png") },
    { id: 1, img: require("../../../assets/temp/image5.png") },
    { id: 2, img: require("../../../assets/temp/image6.png") },
  ];

  return (
    <>
      <section className={styles.categorySection}>
        <Link to="/details/best-sellers" className={styles.linkHover}>
          <span className={styles.categoryHead}>
            New York Times Best seller
          </span>
        </Link>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={4}>
            <div className={styles.imgWrapper}>
              <img
                className={styles.gridImage}
                src={userTestStatus[0].img}
                alt="best seller book"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <div className={styles.imgWrapper}>
              <img
                className={styles.gridImage}
                src={userTestStatus[1].img}
                alt="best seller book"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <div className={styles.imgWrapper}>
              <img
                className={styles.gridImage}
                src={userTestStatus[2].img}
                alt="best seller book"
              />
            </div>
          </Grid>
        </Grid>
      </section>
      <section className={styles.categorySection}>
        <Link to="/details/favourites" className={styles.linkHover}>
          <span className={styles.categoryHead}>Favourites</span>
        </Link>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={4}>
            <div className={styles.imgWrapper}>
              <img
                className={styles.gridImage}
                src={userTestStatus[3].img}
                alt="best seller book"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <div className={styles.imgWrapper}>
              <img
                className={styles.gridImage}
                src={userTestStatus[4].img}
                alt="best seller book"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <div className={styles.imgWrapper}>
              <img
                className={styles.gridImage}
                src={userTestStatus[5].img}
                alt="best seller book"
              />
            </div>
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default Category;
