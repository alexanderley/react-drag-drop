// import React, { useState } from "react";

// export default function DragAndDrop() {
//   const [widgets, setWidgets] = useState([]);

//   function handleOnDrag(e) {
//     e.dataTransfer.setData("widgetType", widgetType);
//   }

//   function handleOnDrop(e) {
//     const widgetType = e.dataTransfer.getData("widgetType");
//     console.log("widgetType", widgetType);
//     setWidgets([...widgets, widgetType]);
//   }

//   function handleDragOver(e) {
//     e.preventDefault();
//   }

//   return (
//     <>
//       <h1>Widget Drag</h1>
//       <div className="widgets">
//         <div
//           className="widget"
//           draggable
//           onDragStart={(e) => handleOnDrag(e, "Widget A")}
//         >
//           Widget A
//         </div>
//         <div
//           className="widget"
//           draggable
//           onDragStart={(e) => handleOnDrag(e, "Widget B")}
//         >
//           Widget B
//         </div>
//         <div
//           className="widget"
//           draggable
//           onDragStart={(e) => handleOnDrag(e, "Widget C")}
//         >
//           Widget C
//         </div>
//       </div>
//       <div className="page" onDrop={handleOnDrop} onDragOver={handleDragOver}>
//         {widgets.map((widget, index) => (
//           <div className="dropped-widget" key={index}>
//             {widget}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

import React, { useState } from "react";

export default function DragAndDrop() {
  const [widgets, setWidgets] = useState([]);

  function handleOnDrag(e, widgetType) {
    e.dataTransfer.setData("widgetType", widgetType);
  }

  function handleOnDrop(e) {
    e.preventDefault();
    const widgetType = e.dataTransfer.getData("widgetType");
    setWidgets([...widgets, widgetType]);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  return (
    <>
      <h1>Widget Drag</h1>
      <div className="widgets">
        <div
          className="widget"
          draggable
          onDragStart={(e) => handleOnDrag(e, "Widget A")}
        >
          Widget A
        </div>
        <div
          className="widget"
          draggable
          onDragStart={(e) => handleOnDrag(e, "Widget B")}
        >
          Widget B
        </div>
        <div
          className="widget"
          draggable
          onDragStart={(e) => handleOnDrag(e, "Widget C")}
        >
          Widget C
        </div>
      </div>
      <div className="page" onDrop={handleOnDrop} onDragOver={handleDragOver}>
        {widgets.map((widget, index) => (
          <div className="dropped-widget" key={index}>
            {widget}
          </div>
        ))}
      </div>
    </>
  );
}
