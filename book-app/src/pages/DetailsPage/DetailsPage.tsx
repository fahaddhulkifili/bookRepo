import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InfoListItem from "../../components/InfoListItem/InfoListItem";
import SearchBar from "../../components/SearchBar/SearchBar";
import Container from "../../components/UI/Container";
import styles from "./DetailsPage.module.scss";
import { Skeleton } from "@mui/material";

const categories: any = {
  "best-sellers": "New York Time Best Sellers",
  favourites: "Favourites",
};
const DetailsPage = (props: any) => {
  const params = useParams();
  const [active, setActive] = useState<any[]>([]);
  const [savedData, setSavedData] = useState<any[]>([]);
  const [error, setError] = useState<boolean | null>(false);
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setIsLoading(true);
    let localData = localStorage.getItem("savedData");
    let favourites = localStorage.getItem("favourites");
    let parsed = localData ? JSON.parse(localData) : [];
    let favourites_parsed = favourites ? JSON.parse(favourites) : [];
    if (params?.category === "favourites") {
      setData(parsed);
      setIsLoading(false);
    } else {
      fetch(
        `https://api.nytimes.com/svc/books/v3/lists/${params.category}/history.json?api-key=qDuQDSnngqN8GQSGHWP0CYCMXghEFz3V`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result.results);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(true);
          console.log(err.message);
          setIsLoading(false);
        });
    }
    setSavedData(parsed);
    setActive(favourites_parsed);
  }, [params?.category]);

  const handleFavourite = (dataToSave: any) => {
    const pos = savedData?.findIndex(
      (item) => item?.title === dataToSave?.title
    );
    if (pos === -1) {
      let temp_save = [...savedData, dataToSave];
      let temp_active = [...active, dataToSave?.title];
      setSavedData(temp_save);
      setActive(temp_active);
      localStorage.setItem("savedData", JSON.stringify(temp_save));
      localStorage.setItem("favourites", JSON.stringify(temp_active));
    }
  };

  const handleUnfavourite = (dataToSave: any) => {
    const pos = data.findIndex((item) => item?.title === dataToSave?.title);
    let temp_save = [];
    let temp_active = [];
    temp_save = [...data.slice(0, pos), ...data.slice(pos + 1)];
    temp_active = [...active.slice(0, pos), ...active.slice(pos + 1)];
    setSavedData(temp_save);
    setActive(temp_active);
    setData(temp_save);
    localStorage.setItem("savedData", JSON.stringify(temp_save));
    localStorage.setItem("favourites", JSON.stringify(temp_active));
  };
  return (
    <>
      <div className={styles.componentContainer}>
        <div className={styles.pageWrapper}>
          <Container>
            <span className={styles.detailHead}>
              {params?.category ? categories[params?.category] : ""}
            </span>
            <SearchBar />
            {isLoading ? (
              <div className={styles.userMessage}>
                <Skeleton
                  variant="rectangular"
                  className={styles.skeletonItem}
                  height={60}
                />
              </div>
            ) : (
              <>
                {data?.length > 0 &&
                  data?.map((item, index) => {
                    return (
                      <React.Fragment key={index}>
                        <InfoListItem
                          otherInfo={params.category === "favourites"}
                          data={item}
                          handleFavourite={handleFavourite}
                          handleUnfavourite={handleUnfavourite}
                          active={active}
                        />
                      </React.Fragment>
                    );
                  })}
                {error && (
                  <div className={styles.userMessage}>
                    <p>Something went wrong! Please wait or try again later</p>
                  </div>
                )}
                {data?.length === 0 && !error && (
                  <div className={styles.userMessage}>
                    <p>No data found!</p>
                  </div>
                )}
              </>
            )}
          </Container>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
