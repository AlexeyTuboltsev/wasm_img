import * as React from "react";

import {ImageZone} from "./ImageZone"

interface IImageZoneLoaded {
  file: any;
  loading: any;
}

const loadWasm = import("../lib/pkg")


export class ImageZoneLoader extends React.Component<IImageZoneLoaded> {

  state = {
    wasm: null
  }

  componentWillMount(): void {
    loadWasm.then(wasm => {
      this.setState({wasm})
    }).catch(e => console.log(e))
  }

  render() {
    return this.state.wasm
      ? <ImageZone file={this.props.file} loading={this.props.loading} wasm={this.state.wasm}/>
      : null
  }
}