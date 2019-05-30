import * as React from 'react';

import * as styles from "./App.module.scss"
import { ImageZone } from "./ImageZone";

export class App extends React.Component {

  initReader = () => {
    const reader = new FileReader();
    reader.onloadstart = () => this.setState({ loading: true })
    reader.onload = (readEvent: any) => this.setState({ loading: false, file: readEvent.target.result })
    return reader
  }

  state = {
    loading: false,
    file: undefined,
  }

  reader = this.initReader()

  loadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files && e.target.files[0])
    if (e.target.files && e.target.files[0]) {
      this.reader.readAsDataURL(e.target.files[0])
    }
  }

  render() {
    return (
      <div className={styles.app}>
        <input type="file" id="real-input" onChange={(e) => this.loadFile(e)} />
        {this.state.loading.toString()}
        <span className={styles.fileInfo}>Upload a file</span>
        <ImageZone file={this.state.file} loading={this.state.loading}/>
      </div>
    )
  }
}