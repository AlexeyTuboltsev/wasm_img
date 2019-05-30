import * as React from "react";

import { CropZone } from "./CropZone";

import * as styles from "./ImageZone.module.scss";

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
        {file && console.log(wasm.get_length(file))}
        {file && <CropZone />}
        {file &&
        <img src={file} alt="" />}
      </div>
    )
  }
}

export {ImageZone}