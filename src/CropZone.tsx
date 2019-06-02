import * as React from "react";

import * as styles from './CropZone.module.scss'

interface ICropZoneProps {
  // p1: number[];
  // p2: number[];
}

interface ICropZoneState {
  p1: number[];
  p2: number[];
}

export class CropZone extends React.Component<ICropZoneProps, ICropZoneState> {
  cropBoxRef:React.RefObject<HTMLDivElement> = React.createRef();

  state = {
    p1: [5, 5],
    p2: [5, 5]
  }

  // setCursor = (e:any) => {
  //   if(this.cropBoxRef.current){
      // const bounds = this.cropBoxRef.current.getBoundingClientRect()              // todo debounce
      // const cursorCoordinates = [e.clientX - bounds.left, e.clientY - bounds.top] //todo cap values
      // console.log(bounds, cursorCoordinates)
  //   }
  // }

  render() {
    return (<div
        ref={this.cropBoxRef}
        // onMouseMove={(e: any) => this.setCursor(e)}

        style={{
          left: `${this.state.p1[0]}%`,
          top: `${this.state.p1[1]}%`,
          right: `${this.state.p2[0]}%`,
          bottom: `${this.state.p2[0]}%`,
          cursor: `move`
        }}
        className={styles.crop}
      />
    )
  }
}


