import React from "react";
import styles from "./EditForm.module.scss";
import StarIcon from "../../assets/Icons/StarIcon";
import StarFilledIcon from "../../assets/Icons/StarFilledIcon";
import { Button, Rating } from "@mui/material";

interface Props {}

const EditForm = (props: Props) => {
  const [value, setValue] = React.useState<number | null>(2);
  return (
    <div className={styles.formWrapper}>
      <div className={styles.formHead}>
        <span>Edit</span>
      </div>
      <form>
        <div className={styles.customField}>
          <div className={styles.fieldLabel}>
            <span>Cost</span>
          </div>
          <div className={styles.fieldItem}>
            <input type="text" />
          </div>
        </div>
        <div className={styles.customField}>
          <div className={styles.fieldLabel}>
            <span>Rating</span>
          </div>
          <div className={styles.fieldItem}>
            <div className={styles.ratingInput}>
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
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
