import * as React from "react";
import { Component } from "react";
import { render } from "react-dom";

import styles from "./index.scss";

class Button extends Component {
  render() {
    return <h1 className={styles.root}>hello 2</h1>;
  }
}

render(<Button />, window.document.getElementById("app"));
