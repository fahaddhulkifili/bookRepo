import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import BookInfo from "../../components/BookInfo/BookInfo";

interface Props {}

const LandingPage = (props: Props) => {
  return (
    <>
      <Header />
      {/* <Sidebar /> */}
      <BookInfo />

      <div>
        <p>Details page</p>
      </div>
    </>
  );
};

export default LandingPage;
