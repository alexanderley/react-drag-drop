import React from "react";
import Widget from "./Widget";

export default function DroppedWidget(props) {
  return (
    <div className="dropped-widget" key={props.index}>
      {/* {<div className="widget">{props.children}</div>} */}
      <Widget draggable={false}>{props.children}</Widget>
    </div>
  );
}
