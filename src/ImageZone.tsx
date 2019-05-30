import * as styles from "./App.module.scss";
import * as React from "react";

interface IImageZone {
  file: any;
  loading: any;
}

export const ImageZone = ({ file, loading }: IImageZone) => {
  if (loading) {
    return <>loading...</>
  } else {
    return (
      <div className={styles.image}>
        {file &&
        <img src={file} alt="" />}
      </div>
    )
  }
}