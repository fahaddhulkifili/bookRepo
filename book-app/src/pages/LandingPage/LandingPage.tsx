import React from "react";
import styles from "./LandingPage.module.scss";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import BookInfo from "../../components/BookInfo/BookInfo";

interface Props {}

const LandingPage = (props: Props) => {
  return (
    <>
      <Header />
      <div className={styles.componentContainer}>
        <Sidebar />
        <BookInfo />
      </div>
    </>
  );
};

export default LandingPage;
