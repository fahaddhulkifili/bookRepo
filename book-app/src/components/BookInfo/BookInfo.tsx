import Container from "../UI/Container";
import SearchBar from "../SearchBar/SearchBar";
import Category from "./Category/Category";
import styles from "./BookInfo.module.scss";

const BookInfo = () => {
  return (
    <div className={styles.pageWrapper}>
      <Container>
        <SearchBar />
        <Category />
      </Container>
    </div>
  );
};

export default BookInfo;
