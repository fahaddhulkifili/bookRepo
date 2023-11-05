import Container from "../UI/Container";
import SearchBar from "../SearchBar/SearchBar";
import Category from "./Category/Category";

const BookInfo = () => {
  return (
    <Container>
      <SearchBar />
      <Category />
    </Container>
  );
};

export default BookInfo;
