import * as styles from "./App.module.scss";
import * as React from "react";

interface IImageZone {
  file: any;
  loading: any;
  wasm:any;
}
 const ImageZone = ({ file, loading, wasm }: IImageZone) => {
  if (loading) {
    return <>loading...</>
  } else {
    return (
      <div className={styles.image}>
        {wasm.greet()}
        {file &&
        <img src={file} alt="" />}
      </div>
    )
  }
}

export {ImageZone}