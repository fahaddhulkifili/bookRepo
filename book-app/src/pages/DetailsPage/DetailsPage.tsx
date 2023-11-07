import { Fragment, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import InfoListItem from "../../components/InfoListItem/InfoListItem";
import SearchBar from "../../components/SearchBar/SearchBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Container from "../../components/UI/Container";
import styles from "./DetailsPage.module.scss";
import { useParams } from "react-router-dom";
import React from "react";

const DetailsPage = (props: any) => {
  const params = useParams();

  const [error, setError] = React.useState<boolean | null>(false);
  const [data, setData] = useState([] as any[]);
  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/books/v3/lists/${params.category}/history.json?api-key=qDuQDSnngqN8GQSGHWP0CYCMXghEFz3V`
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result.results);
      })
      .catch((err) => {
        console.log(err.message);
      });

    if (data.length === 0) {
      setError(true);
    } else {
      setError(false);
    }
  }, []);

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
            {error ? (
              data?.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <InfoListItem otherInfo={false} data={item} />
                  </React.Fragment>
                );
              })
            ) : (
              <div className={styles.userMessage}>
                <p>Something went wrong! Please wait or try again later</p>
              </div>
            )}
          </Container>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
