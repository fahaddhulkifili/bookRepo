import { useState, useEffect } from "react";
import styles from "./Category.module.scss";
import { Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Category = () => {
  const [data, setData] = useState([] as any[]);
  // useEffect(() => {
  //   fetch(
  //     "https://api.nytimes.com/svc/books/v3/lists.json?list=hardcover-fiction&api-key=qDuQDSnngqN8GQSGHWP0CYCMXghEFz3V"
  //   )
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log(result);
  //       console.log(typeof result);
  //       setData(result);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);

  let userTestStatus: { id: number; img: string }[] = [
    { id: 0, img: require("../../../assets/temp/image1.png") },
    { id: 1, img: require("../../../assets/temp/image2.png") },
    { id: 2, img: require("../../../assets/temp/image3.png") },
  ];

  const navigate = useNavigate();

  return (
    <>
      <section className={styles.categorySection}>
        <Link to="/details" className={styles.linkHover}>
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
        <Link to="/favourites" className={styles.linkHover}>
          <span className={styles.categoryHead}>Favourites</span>
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
    </>
  );
};

export default Category;
