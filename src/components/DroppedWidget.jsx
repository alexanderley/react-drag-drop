import React from "react";
import Widget from "./Widget";

export default function DroppedWidget(props) {
  return (
    <div className="dropped-widget" key={props.index}>
      {/* {<div className="widget">{props.children}</div>} */}
      <Widget>{props.children}</Widget>
    </div>
  );
}
