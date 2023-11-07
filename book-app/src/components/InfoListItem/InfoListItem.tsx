import React, { useEffect, useState } from "react";
import BookIcon from "../../assets/Icons/BookIcon";
import FavouriteIcon from "../../assets/Icons/FavouriteIcon";
import StarIcon from "../../assets/Icons/StarIcon";
import StarFilledIcon from "../../assets/Icons/StarFilledIcon";
import styles from "./InfoListItem.module.scss";
import { Button, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Props {
  otherInfo: boolean;
  data?: any;
}

interface SavedDataType {}

const InfoListItem: React.FC<Props> = ({ otherInfo, data }: Props) => {
  const [value, setValue] = useState<number | null>(2);
  const [active, setActive] = useState<boolean | null>(false);
  const [savedData, setSavedData] = useState<SavedDataType[]>([]);
  const navigate = useNavigate();

  const handleClickFavourite = (dataToSave: SavedDataType) => {
    setSavedData([...savedData, dataToSave]);
    setActive(!active);

    localStorage.setItem("savedData", JSON.stringify(dataToSave));
    console.log("---", dataToSave);
  };

  return (
    <div className={styles.listItmeWrapper}>
      <div className={styles.listItemDetails}>
        <div className={styles.listItemIcon}>
          <BookIcon />
        </div>
        <div className={styles.listItemAuthor}>
          <span>{data?.title} </span>
          <span>by {data?.author}</span>
        </div>
      </div>
      {!otherInfo ? (
        <div className={styles.listItemData}>
          <div className={styles.listItemRating}>
            <Rating
              name="simple-controlled"
              readOnly
              value={value}
              icon={<StarFilledIcon />}
              emptyIcon={<StarIcon />}
              onChange={(event, newValue) => {
                if (newValue !== null) {
                  setValue(newValue);
                }
              }}
            />
          </div>
          <div className={styles.listItemAmount}>
            <span>{data?.price} GBP</span>
          </div>
          <Button
            className={
              !active
                ? styles.listItemReaction
                : `${styles.listItemReaction} ${styles.listItemReactionActive}`
            }
            onClick={() => handleClickFavourite(data)}
          >
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
                if (newValue !== null) {
                  setValue(newValue);
                }
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
          <Button
            className={
              !active
                ? styles.listItemReaction
                : `${styles.listItemReaction} ${styles.listItemReactionActive}`
            }
          >
            <FavouriteIcon />
          </Button>
        </div>
      )}
    </div>
  );
};

export default InfoListItem;
