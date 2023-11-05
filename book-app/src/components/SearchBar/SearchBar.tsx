import { Button, TextField } from "@mui/material";
import SearchIcon from "../../assets/Icons/SearchIcon";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <TextField
      variant="standard"
      required
      fullWidth
      className={styles.inputField}
      placeholder="What books would you like to find?"
      InputProps={{
        startAdornment: <SearchIcon />,
        endAdornment: (
          <Button variant="contained" className={styles.inputButton}>
            GO
          </Button>
        ),
        disableUnderline: true,
      }}
    />
  );
};

export default SearchBar;
