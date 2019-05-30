import React from 'react';

import * as styles from "./App.module.scss"

function App() {
  return (
    <div className={styles.app}>
      <input type="file" id="real-input" />
        <button className={styles.button}>
          Browse Files
        </button>
        <span className={styles.fileInfo}>Upload a file</span>
    </div>
  );
}

export default App;
