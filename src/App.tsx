import * as React from 'react';

import * as styles from "./App.module.scss"
import { ImageZoneLoader } from "./ImageZoneLoader";

export class App extends React.Component {

  initFileReader = () => {
    const reader = new FileReader();
    reader.onloadstart = () => this.setState({ loading: true })
    reader.onload = (readEvent: any) => this.setState({ loading: false, file: readEvent.target.result })
    return reader
  }

  state = {
    loading: false,
    file: undefined,
  }

  fileReader = this.initFileReader()

  loadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      this.fileReader.readAsDataURL(e.target.files[0])
    }
  }

  render() {
    return (
      <div className={styles.app}>
        <input type="file" id="real-input" onChange={(e) => this.loadFile(e)} />
        {this.state.loading.toString()}
        <span className={styles.fileInfo}>Upload a file</span>
        <React.Suspense fallback={<>loading component...</>}>
          <ImageZoneLoader file={this.state.file} loading={this.state.loading} />
        </React.Suspense>
      </div>
    )
  }
}