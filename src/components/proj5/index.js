import * as React from "react";
import { useState } from "react";
import { render } from "react-dom";
import { Example } from "./Example";

import "./styles.css";

const index = () => {
    return (
    <>
      {/* <Refresh onClick={() => setCount(count + 1)} /> */}
      <div className="example-container">
        <Example />
      </div>
    </>
  );
}
export default index