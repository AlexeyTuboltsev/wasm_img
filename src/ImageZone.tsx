import * as React from "react";

import { CropZone } from "./CropZone";

import * as styles from "./ImageZone.module.scss";

interface IImageZone {
  file: any;
  loading: any;
  wasm:any;
}
 class ImageZone extends React.Component<IImageZone> {

   render() {
     const { file, loading, wasm } = this.props;
     if (loading) {
       return <>loading...</>
     } else {
       return (
         <div className={styles.image}>
           {file && console.log(file)}
           {file && console.log(wasm.load_image(new Uint8Array(file)))}
           {file && <CropZone />}
           {file &&
           <img src={file} alt="" />}
         </div>
       )
     }
   }

 }

export {ImageZone}