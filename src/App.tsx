import * as React from "react";
import Space from "./Space";
import "./styles.css";

export default function App() {
  const [rotateX, setX] = React.useState(0);
  const [rotateY, setY] = React.useState(0);
  const [rotateZ, setZ] = React.useState(0);
  console.log("App");
  return (
    <div className="App">
      <div className="control">
        <label>Rotate X: {rotateX} degree</label>
        <button value={rotateX} onClick={() => setX((rotateX + 10) % 360)}>
          Rotate X
        </button>
        <br />
        <label>Rotate Y: {rotateY} degree</label>
        <button value={rotateY} onClick={() => setY((rotateY + 10) % 360)}>
          Rotate Y
        </button>
        <br />
        <label>Rotate Z: {rotateZ} degree</label>
        <button value={rotateZ} onClick={() => setZ((rotateZ + 10) % 360)}>
          Rotate Z
        </button>
      </div>
      <Space count={3} rotateX={rotateX} rotateY={rotateY} rotateZ={rotateZ} />
    </div>
  );
}
