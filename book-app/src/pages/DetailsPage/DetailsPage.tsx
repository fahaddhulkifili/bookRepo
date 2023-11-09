import { Fragment, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import InfoListItem from "../../components/InfoListItem/InfoListItem";
import SearchBar from "../../components/SearchBar/SearchBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Container from "../../components/UI/Container";
import styles from "./DetailsPage.module.scss";
import { useParams } from "react-router-dom";
import React from "react";

interface SavedDataType {}
const DetailsPage = (props: any) => {
  const params = useParams();
  const [savedData, setSavedData] = useState<any>([]);
  const [error, setError] = React.useState<boolean | null>(false);
  const [data, setData] = useState([] as any[]);
  const [active, setActive] = useState<boolean | null>(false);
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

  const handleClickFavourite = (dataToSave: SavedDataType) => {
    setSavedData([...savedData, dataToSave]);
    setActive(!active);
    localStorage.setItem("savedData", JSON.stringify(dataToSave));
  };
  // const handleClickFavourite = (dataToSave: any) => {
  //   const pos = savedData.findIndex(
  //     (item: { title: any }) => item?.title === dataToSave?.title
  //   );
  //   console.log("item position", pos);
  //   let temp_save = [];
  //   let temp_active = [];
  //   if (pos === -1) {
  //     temp_save = [...savedData, dataToSave];
  //     temp_active = [...active, dataToSave?.title];
  //   } else {
  //     temp_save = [...savedData.slice(0, pos), ...savedData.slice(pos + 1)];
  //     temp_active = [...active.slice(0, pos), ...active.slice(pos + 1)];
  //   }
  //   setActive(temp_active);
  // };

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
                    <InfoListItem
                      otherInfo={false}
                      data={item}
                      onAction={handleClickFavourite}
                    />
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
