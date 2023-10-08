import React from "react";

export default function Widget(props) {
  return (
    <div className="widget" draggable onDragStart={props.onDragStart}>
      {props.children}
    </div>
  );
}
