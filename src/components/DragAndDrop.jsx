import React, { useState } from "react";
import Widget from "./Widget";
import DroppedWidget from "./DroppedWidget";

export default function DragAndDrop() {
  // State to keep track of dropped widgets
  const [widgets, setWidgets] = useState([]);

  // Function to handle the drag event and set data for drag-and-drop
  function handleOnDrag(e, widgetType) {
    e.dataTransfer.setData("widgetType", widgetType); // Set the data for the dragged item
  }

  // Function to handle the drop event when a widget is dropped
  function handleOnDrop(e) {
    e.preventDefault(); // Prevent the default behavior of dropping (e.g., opening a file)

    // Retrieve the widgetType data that was set during drag
    const widgetType = e.dataTransfer.getData("widgetType");

    // Add the dropped widget type to the widgets state
    setWidgets([...widgets, widgetType]);
  }

  // Function to handle the drag over event (required for dropping)
  function handleDragOver(e) {
    e.preventDefault(); // Prevent the default behavior of dragging over (e.g., opening a file)
  }

  return (
    <>
      <h1>Widget D&D</h1>
      <h2>Drop elements: </h2>
      {/* Container for draggable widgets */}
      <div className="widgets">
        <Widget draggable onDragStart={(e) => handleOnDrag(e, "Widget A")}>
          Widget A
        </Widget>
        <Widget draggable onDragStart={(e) => handleOnDrag(e, "Widget B")}>
          Widget B
        </Widget>
        <Widget draggable onDragStart={(e) => handleOnDrag(e, "Widget C")}>
          Widget C
        </Widget>
        <Widget draggable onDragStart={(e) => handleOnDrag(e, "Widget D")}>
          Widget D
        </Widget>
      </div>
      {/* Container where widgets can be dropped */}
      <h2>Dragzone:</h2>
      <div className="page" onDrop={handleOnDrop} onDragOver={handleDragOver}>
        {widgets.map((widget, index) => (
          <DroppedWidget>{widget}</DroppedWidget>
        ))}
      </div>
    </>
  );
}
