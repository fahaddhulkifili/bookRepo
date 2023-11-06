import React from "react";
import BookIcon from "../../assets/Icons/BookIcon";
import FavouriteIcon from "../../assets/Icons/FavouriteIcon";
import StarIcon from "../../assets/Icons/StarIcon";
import StarFilledIcon from "../../assets/Icons/StarFilledIcon";
import styles from "./InfoListItem.module.scss";
import { Button, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Props {
  otherInfo: boolean;
}

const InfoListItem = (props: Props) => {
  const [value, setValue] = React.useState<number | null>(2);
  const navigate = useNavigate();
  return (
    <div className={styles.listItmeWrapper}>
      <div className={styles.listItemDetails}>
        <div className={styles.listItemIcon}>
          <BookIcon />
        </div>
        <div className={styles.listItemAuthor}>
          <span>I ALONE CAN FIX IT </span>
          <span>by Carol Leonnig and Philip Ruckerller</span>
        </div>
      </div>
      {!props.otherInfo ? (
        <div className={styles.listItemData}>
          <div className={styles.listItemRating}>
            <Rating
              name="simple-controlled"
              value={value}
              icon={<StarFilledIcon />}
              emptyIcon={<StarIcon />}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
          <div className={styles.listItemAmount}>
            <span>16 GBP</span>
          </div>
          <Button className={styles.listItemReaction}>
            <FavouriteIcon />
          </Button>
        </div>
      ) : (
        <div className={styles.listItemData}>
          <div className={styles.listItemAmount}>
            <span>16 GBP</span>
          </div>
          <div className={styles.listItemRating}>
            <Rating
              name="simple-controlled"
              value={value}
              icon={<StarFilledIcon />}
              emptyIcon={<StarIcon />}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
          <Button
            className={styles.actionButton}
            onClick={() => {
              navigate("/favouritesEdit");
            }}
          >
            <span>Edit</span>
          </Button>
          <Button className={styles.actionButton}>
            <span>Delete</span>
          </Button>
          <Button className={styles.listItemReaction}>
            <FavouriteIcon />
          </Button>
        </div>
      )}
    </div>
  );
};

export default InfoListItem;
