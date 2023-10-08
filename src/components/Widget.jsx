import React from "react";

export default function Widget(props) {
  return (
    <div
      className="widget"
      draggable={props.draggable}
      onDragStart={props.onDragStart}
    >
      {props.children}
    </div>
  );
}
